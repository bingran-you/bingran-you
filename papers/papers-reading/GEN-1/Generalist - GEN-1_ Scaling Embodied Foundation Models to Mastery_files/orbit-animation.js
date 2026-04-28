(function () {
  'use strict';

  var TWO_PI = Math.PI * 2;
  var HALF_PI = Math.PI / 2;
  var DESIGN = 800;
  var ASPECT = 21 / 9;
  var PATTERN_RADIUS = 179.2;
  var TARGET_FILL = 0.85;

  function map(v, lo1, hi1, lo2, hi2) {
    return lo2 + (hi2 - lo2) * ((v - lo1) / (hi1 - lo1));
  }

  function mulberry32(seed) {
    return function () {
      seed |= 0;
      seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function hsvToRgb(h, s, v) {
    h = ((h % 360) + 360) % 360;
    s /= 100;
    v /= 100;
    var c = v * s;
    var x = c * (1 - Math.abs((h / 60) % 2 - 1));
    var m = v - c;
    var r, g, b;
    if (h < 60)       { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else              { r = c; g = 0; b = x; }
    return [
      Math.round((r + m) * 255),
      Math.round((g + m) * 255),
      Math.round((b + m) * 255)
    ];
  }

  function lerpHsv(a, b, t) {
    return [
      a[0] + (b[0] - a[0]) * t,
      a[1] + (b[1] - a[1]) * t,
      a[2] + (b[2] - a[2]) * t
    ];
  }

  function init(canvasId, labelId, subtitleId, heroId) {
    var canvas = document.getElementById(canvasId);
    var label = document.getElementById(labelId);
    var subtitle = document.getElementById(subtitleId);
    var hero = document.getElementById(heroId);
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    // --- Configurable parameters ---
    var orbitAngle     = 2.8274333;
    var numPoints      = 11;
    var numSteps       = 3451;
    var minPlanetSize  = 10.98;
    var maxPlanetSize  = 205.59;

    var sizeAngle      = 3.0787609;
    var animateSizeAngle = true;
    var sizeAngleContinuous = true;
    var sizeAngleContMinSpeed = 0.0007;
    var sizeAngleContMaxSpeed = 0.003;
    var sizeAngleMin     = 0.0;
    var sizeAngleMax     = 2.0;
    var sizeAngleSpeed   = 0.005;

    var oscillateSpeed = 0.20999998;
    var minOrbitDist   = 0.0;
    var maxOrbitDist   = 500.0;
    var orbitSizeAngle = 4.209734;

    var animateOrbitSizeAngle = true;
    var orbitSizeAngleContinuous = true;
    var orbitSizeAngleContMinSpeed = 0.00007;
    var orbitSizeAngleContMaxSpeed = 0.0003;
    var orbitSizeAngleMin     = 3.0;
    var orbitSizeAngleMax     = 5.5;
    var orbitSizeAngleSpeed   = 0.000001;

    var orbitOscSpeed  = 0.055000007;
    var animateOrbitOscSpeed  = false;
    var orbitOscSpeedMin      = 0.03;
    var orbitOscSpeedMax      = 0.12;
    var orbitOscSpeedSpeed    = 0.00001;

    var orbitSpeed     = -0.025000006;
    var rotateSpeed    = 0.195;
    var drawLines      = false;
    var animMinSpeed   = 0.00007;
    var animMaxSpeed   = 0.0003;
    var useColors      = false;
    var strokeW        = 0.75;
    var strokeColor    = 'rgba(253, 220, 1, 0.9)';
    //var bgColor        = 'rgba(48, 45, 63, 1.0)';
    var bgColor       = 'rgb(14, 30, 48)';//'rgba(41, 35, 26, 1.0)';//'rgb(14, 30, 48)'; //'rgba(24, 38, 34, 1.0)'; //'rgba(41, 35, 26, 1.0)';
    var labelText      = 'GEN-1';
    var labelColor     = 'rgba(255, 255, 255, 1.0)';
    var labelFont      = '"FK Grotesk Neue", sans-serif';
    var labelWeight    = 500;
    var labelSize      = 0.48;
    var labelOffsetY   = 0.01;
    var labelKern      = -0.08;
    var labelFeatures  = "'case' 1, 'ss04' 1";
    var subLine1       = '';
    var subLine2       = 'Scaling Embodied Foundation Models to Mastery';
    var subColor       = 'rgba(255, 255, 255, 1.0)';
    var subFont        = '"FK Grotesk Neue", sans-serif';
    var subWeight      = 450;
    var subSize        = 0.05;
    var subLineHeight  = 1.1;
    var subBottom      = 0.05;
    var minHue = 0, maxHue = 360;
    var minSat = 50, maxSat = 100;
    var minBri = 50, maxBri = 80;

    // --- Setup hero and label ---
    var cssW, cssH, dpr;

    if (hero) {
      hero.style.backgroundColor = bgColor;
      hero.style.borderRadius = '4px';
    }

    if (label) {
      var kernIdx = labelText.lastIndexOf('-');
      if (labelKern !== 0 && kernIdx >= 0 && kernIdx < labelText.length - 1) {
        label.innerHTML = labelText.slice(0, kernIdx + 1) +
          '<span style="margin-left:' + labelKern + 'em;font-size:inherit">' +
          labelText.slice(kernIdx + 1) + '</span>';
      } else {
        label.textContent = labelText;
      }
      label.style.fontFamily = labelFont;
      label.style.fontWeight = labelWeight;
      label.style.color = labelColor;
      label.style.fontFeatureSettings = labelFeatures;
    }

    if (subtitle) {
      subtitle.innerHTML = subLine1 + '<br>' + subLine2;
      subtitle.style.fontFamily = subFont;
      subtitle.style.fontWeight = subWeight;
      subtitle.style.color = subColor;
      subtitle.style.lineHeight = subLineHeight;
    }

    function resize() {
      var w = canvas.parentElement.clientWidth;
      var aspect = w <= 767 ? 1 : ASPECT;
      var h = Math.round(w / aspect);
      dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      cssW = w;
      cssH = h;
      var isMobile = w <= 767;
      if (label) {
        label.style.fontSize = Math.round(cssH * (isMobile ? labelSize * 0.55 : labelSize)) + 'px';
        label.style.top = 'calc(50% + ' + (labelOffsetY * 100) + '%)';
      }
      if (subtitle) {
        subtitle.style.fontSize = Math.round(cssH * (isMobile ? subSize * 0.65 : subSize)) + 'px';
        subtitle.style.bottom = (subBottom * 100) + '%';
      }
    }
    resize();
    window.addEventListener('resize', resize);

    var rotateAngle = 0;
    var phase = 0;
    var sizeAnglePhase = 0;
    var orbitSizeAnglePhase = 0;
    var orbitOscSpeedPhase = 0;

    var rng = mulberry32(42);
    function randH() { return rng() * (maxHue - minHue) + minHue; }
    function randS() { return rng() * (maxSat - minSat) + minSat; }
    function randB() { return rng() * (maxBri - minBri) + minBri; }

    var visible = true;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
      }, { threshold: 0 }).observe(canvas);
    }

    function frame() {
      requestAnimationFrame(frame);
      if (!visible) return;

      var t = Math.sin(phase) * 0.6 + Math.sin(phase * 0.618034) * 0.4;
      rotateAngle += map(t, -1, 1, animMinSpeed, animMaxSpeed);
      phase += 0.02;

      if (animateSizeAngle) {
        if (sizeAngleContinuous) {
          var st = Math.sin(sizeAnglePhase) * 0.6 + Math.sin(sizeAnglePhase * 0.618034) * 0.4;
          sizeAngle += map(st, -1, 1, sizeAngleContMinSpeed, sizeAngleContMaxSpeed);
        } else {
          sizeAngle = map(Math.sin(sizeAnglePhase), -1, 1, sizeAngleMin, sizeAngleMax);
        }
        sizeAnglePhase += sizeAngleSpeed;
      }
      if (animateOrbitSizeAngle) {
        if (orbitSizeAngleContinuous) {
          var ot = Math.sin(orbitSizeAnglePhase) * 0.6 + Math.sin(orbitSizeAnglePhase * 0.618034) * 0.4;
          orbitSizeAngle += map(ot, -1, 1, orbitSizeAngleContMinSpeed, orbitSizeAngleContMaxSpeed);
        } else {
          orbitSizeAngle = map(Math.sin(orbitSizeAnglePhase), -1, 1, orbitSizeAngleMin, orbitSizeAngleMax);
        }
        orbitSizeAnglePhase += orbitSizeAngleSpeed;
      }
      if (animateOrbitOscSpeed) {
        orbitOscSpeed = map(Math.sin(orbitOscSpeedPhase), -1, 1, orbitOscSpeedMin, orbitOscSpeedMax);
        orbitOscSpeedPhase += orbitOscSpeedSpeed;
      }

      // Clear canvas (transparent — bg color and label are HTML layers below)
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Scale so the visible pattern fills ~87.5% of the canvas height
      var scale = (cssH * TARGET_FILL) / (PATTERN_RADIUS * 2);
      var tx = (cssW - DESIGN * scale) / 2;
      var ty = (cssH - DESIGN * scale) / 2;
      ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * tx, dpr * ty);

      ctx.lineWidth = strokeW / scale;

      var centerX = DESIGN / 2;
      var centerY = DESIGN / 2;
      var cOrbit = orbitAngle;
      var cRot   = rotateAngle;
      var cSA    = sizeAngle;
      var cOSA   = orbitSizeAngle - HALF_PI;
      var cPS    = 100;
      var cOD    = 150;

      var prev = new Array(numPoints);
      for (var i = 0; i < numPoints; i++) prev[i] = [0, 0];

      var col1, col2, lastCol;
      if (useColors) {
        rng = mulberry32(42);
        col1 = [randH(), randS(), randB()];
        col2 = [randH(), randS(), randB()];
        lastCol = col1.slice();
      } else {
        ctx.fillStyle = strokeColor;
        ctx.strokeStyle = strokeColor;
      }

      for (var step = 0; step < numSteps; step++) {
        cPS = map(Math.sin(cSA), -1, 1, minPlanetSize, maxPlanetSize);

        if (useColors) {
          var la = map(Math.sin(cSA), -1, 1, 0, 1);
          var ic = lerpHsv(col1, col2, la);
          lastCol = ic;
          var rgb = hsvToRgb(ic[0], ic[1], ic[2]);
          var css = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
          ctx.fillStyle = css;
          ctx.strokeStyle = css;
          if (step > 0 && (cSA % TWO_PI) < Math.abs(oscillateSpeed)) {
            col1 = lastCol.slice();
            col2 = [randH(), randS(), randB()];
          }
        }

        cSA += oscillateSpeed;
        cOD = map(Math.sin(cOSA), -1, 1, minOrbitDist, maxOrbitDist);
        cOSA += orbitOscSpeed;

        var px = centerX + Math.cos(cOrbit) * cOD;
        var py = centerY + Math.sin(cOrbit) * cOD;

        for (var j = 0; j < numPoints; j++) {
          var a = TWO_PI * j / numPoints + cRot;
          var x = px + Math.cos(a) * (cPS / 2);
          var y = py + Math.sin(a) * (cPS / 2);

          if (drawLines && step > 0) {
            ctx.beginPath();
            ctx.moveTo(prev[j][0], prev[j][1]);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
          prev[j][0] = x;
          prev[j][1] = y;
          ctx.fillRect(x - strokeW / 2, y - strokeW / 2, strokeW, strokeW);
        }

        cOrbit += orbitSpeed;
        cRot   += rotateSpeed;
      }
    }

    requestAnimationFrame(frame);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init('orbit-canvas', 'orbit-label', 'orbit-subtitle', 'orbit-hero'); });
  } else {
    init('orbit-canvas', 'orbit-label', 'orbit-subtitle', 'orbit-hero');
  }
})();
