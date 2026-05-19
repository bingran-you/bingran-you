# sync.ps1 - Run this BEFORE starting a local editing session.
# Triggers the GitHub Action that pulls latest Overleaf changes into GitHub,
# waits for it to finish, then fast-forwards your local clone.
#
# Requires: gh CLI installed and authenticated.

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$workflow = "pull-from-overleaf.yml"

Write-Host "==> Triggering Overleaf -> GitHub pull workflow..." -ForegroundColor Cyan
gh workflow run $workflow --ref master | Out-Null

Write-Host "==> Locating the new run..." -ForegroundColor Cyan
$runId = $null
for ($i = 0; $i -lt 20; $i++) {
    Start-Sleep -Seconds 2
    $runs = gh run list --workflow=$workflow --event=workflow_dispatch --limit 1 --json databaseId,status | ConvertFrom-Json
    if ($runs -and $runs[0].status -ne 'completed') {
        $runId = $runs[0].databaseId
        break
    }
}
if (-not $runId) {
    Write-Host "Couldn't find an in-progress run; checking the latest one." -ForegroundColor Yellow
    $runs = gh run list --workflow=$workflow --limit 1 --json databaseId | ConvertFrom-Json
    $runId = $runs[0].databaseId
}

Write-Host "==> Watching run $runId..." -ForegroundColor Cyan
gh run watch $runId --exit-status
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Workflow failed - likely cause: GitHub and Overleaf have diverged." -ForegroundColor Red
    Write-Host "Inspect:  gh run view $runId --log-failed" -ForegroundColor Yellow
    Write-Host "Resolve locally per the steps printed in the failed log." -ForegroundColor Yellow
    Write-Host "Skipping local pull." -ForegroundColor Red
    exit 1
}

Write-Host "==> Fast-forwarding local clone..." -ForegroundColor Cyan
git fetch github master
git pull github master --ff-only

Write-Host ""
Write-Host "Synced. You're good to start editing." -ForegroundColor Green
