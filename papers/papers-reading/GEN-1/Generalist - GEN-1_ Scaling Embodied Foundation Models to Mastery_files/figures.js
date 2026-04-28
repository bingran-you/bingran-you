(function () {
  'use strict';

  var BAR_COLORS = {
    green:  '#7CB342',
    blue:   '#5B8DEF',
    orange: '#F4511E'
  };

  var FONT_FAMILY = "'FK Grotesk Neue', -apple-system, BlinkMacSystemFont, sans-serif";

  Chart.defaults.color = 'rgba(255,255,255,0.55)';
  Chart.defaults.font.family = FONT_FAMILY;
  Chart.register(ChartDataLabels);

  function gridLineColor() {
    return 'rgba(255,255,255,0.7)';
  }

  var showGridOverlay = true;

  var gridOverlay = {
    id: 'gridOverlay',
    afterDatasetsDraw: function (chart) {
      if (!showGridOverlay) return;
      var yScale = chart.scales.y;
      var ctx = chart.ctx;
      var left = chart.chartArea.left;
      var right = chart.chartArea.right;
      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1;
      yScale.ticks.forEach(function (tick) {
        var y = yScale.getPixelForValue(tick.value);
        ctx.beginPath();
        ctx.moveTo(left, y);
        ctx.lineTo(right, y);
        ctx.stroke();
      });
      ctx.restore();
    }
  };

  function makeBarChart(canvasId, cfg) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return;

    var colors = cfg.labels.map(function (l) {
      if (/GEN-1/i.test(l)) return BAR_COLORS.orange;
      if (/GEN-0/i.test(l)) return BAR_COLORS.blue;
      return BAR_COLORS.green;
    });

    var chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: cfg.labels,
        datasets: [{
          data: cfg.values,
          backgroundColor: colors,
          hoverBackgroundColor: colors,
          borderRadius: 0,
          barPercentage: 0.75,
          categoryPercentage: 0.7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.1,
        animation: { duration: 0 },
        layout: {
          padding: { top: 10, bottom: 21, left: 21, right: 21 }
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: true, color: 'rgba(255,255,255,0.15)' },
            ticks: {
              font: { size: 14, weight: '600' },
              color: 'rgba(255,255,255,0.8)'
            }
          },
          y: {
            min: 0,
            max: cfg.yMax,
            grid: { color: gridLineColor, tickColor: 'rgba(255,255,255,0.9)' },
            border: { display: true, color: 'rgba(255,255,255,0.9)' },
            title: cfg.yLabel ? {
              display: true,
              text: cfg.yLabel,
              color: 'rgba(255,255,255,0.7)',
              font: { size: 13, weight: '400' },
              padding: { bottom: 4 }
            } : { display: false },
            ticks: {
              stepSize: cfg.yStep,
              font: { size: 13 },
              color: 'rgba(255,255,255,0.9)',
              callback: function (v) { return v + cfg.ySuffix; }
            }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
          title: {
            display: true,
            text: cfg.title,
            color: 'rgba(255,255,255,0.95)',
            font: { size: 18, weight: '700' },
            padding: { bottom: cfg.subtitle ? 2 : 16 }
          },
          subtitle: cfg.subtitle ? {
            display: true,
            text: cfg.subtitle,
            color: '#E8A838',
            font: { size: 15, weight: '400' },
            padding: { bottom: 16 }
          } : { display: false },
          datalabels: {
            anchor: 'end',
            align: function (context) {
              var v = context.dataset.data[context.dataIndex];
              return v < 10 ? 'end' : 'start';
            },
            offset: cfg.labelOffset != null ? cfg.labelOffset : 6,
            color: 'rgba(255,255,255,0.9)',
            font: { size: 16, weight: '700' },
            formatter: function (v) { return v + cfg.ySuffix; }
          }
        }
      },
      plugins: [ChartDataLabels, gridOverlay]
    });

    return chart;
  }

  function initFigures() {
    var figures = [
      {
        id: 'figure-1',
        labels: ['Scratch', 'GEN-0', 'GEN-1'],
        values: [13, 81, 99],
        yMax: 100,
        yStep: 20,
        ySuffix: '%',
        yLabel: 'Real Robot Average Task Success Score (%)',
        title: 'Success Rates on Folding Boxes'
      },
      {
        id: 'figure-2',
        labels: ['Scratch', 'GEN-0', 'GEN-1'],
        values: [42, 62, 99],
        yMax: 100,
        yStep: 20,
        ySuffix: '%',
        yLabel: 'Real Robot Average Task Success Score (%)',
        title: 'Success Rates on Packing Phones'
      },
      {
        id: 'figure-3-vacuum',
        labels: ['Scratch', 'GEN-0', 'GEN-1'],
        values: [2, 50, 99],
        yMax: 100,
        yStep: 20,
        ySuffix: '%',
        yLabel: 'Real Robot Average Task Success Score (%)',
        title: 'Success Rates on Servicing Robot Vacuums'
      },
      {
        id: 'figure-3',
        labels: ['Prior SOTA', 'GEN-0', 'GEN-1'],
        values: [105.8, 105.8, 300],
        yMax: 400,
        yStep: 100,
        ySuffix: '',
        yLabel: 'Peak Throughput Speed (Boxes Folded Per Hour)',
        title: 'Throughput'
      }
    ];

    figures.forEach(function (cfg) {
      makeBarChart(cfg.id, cfg);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFigures);
  } else {
    initFigures();
  }
})();
