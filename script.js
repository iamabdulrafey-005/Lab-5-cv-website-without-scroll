/**
 * Abdul Rafay — Executive Portfolio & CV Interactive Engine
 * Designed for 100vh Single-Viewport / Without-Scroll Architecture
 * 
 * 1. 10-Second Event Color Overdrive System (Frontend & Backend Synced)
 * 2. Section Live Background Animation Canvas Engine
 * 3. Mouse Drag Chromatic Flow Interaction
 * 4. Synchronized Nav Tabs & Card Focus Highlighting
 * 5. Frontend Kinetic Click Shockwaves & Radial Ripples
 * 6. Live Backend Telemetry HUD & Runtime Simulator
 * 7. 3D Card Mouse Perspective Tilt & Cursor Spotlight
 * 8. Elastic Certificate Lightbox Modal & ESC Dismissal
 */

document.addEventListener('DOMContentLoaded', () => {

  // ═════════════════════════════════════════════════════════════════
  // 1. LIVE BACKEND TELEMETRY HUD & RUNTIME CONSOLE SIMULATOR
  // ═════════════════════════════════════════════════════════════════
  const hudElement = document.getElementById('telemetryHud');
  const hudTerminal = document.getElementById('hudTerminal');
  const hudLatency = document.getElementById('hudLatency');
  const hudCountdown = document.getElementById('hudCountdown');
  let hudIdleTimer = null;

  function pushTelemetryLog(logMessage, isHighlight = false) {
    if (!hudTerminal) return;

    if (hudElement) hudElement.classList.add('is-active');

    // Realistic low latency simulation: 0.9ms - 2.5ms
    const randomLatency = (Math.random() * 1.6 + 0.9).toFixed(1) + 'ms';
    if (hudLatency) hudLatency.textContent = randomLatency;

    const line = document.createElement('div');
    line.className = 'hud-line' + (isHighlight ? ' hud-highlight' : '');
    line.innerHTML = logMessage;
    hudTerminal.appendChild(line);

    while (hudTerminal.children.length > 4) {
      hudTerminal.removeChild(hudTerminal.firstChild);
    }

    clearTimeout(hudIdleTimer);
    hudIdleTimer = setTimeout(() => {
      if (hudElement && !document.body.classList.contains('is-overdrive')) {
        hudElement.classList.remove('is-active');
        if (hudLatency) hudLatency.textContent = 'ONLINE';
      }
    }, 4000);
  }


  // ═════════════════════════════════════════════════════════════════
  // 2. 10-SECOND EVENT COLOR OVERDRIVE SYSTEM (FRONTEND & BACKEND)
  // ═════════════════════════════════════════════════════════════════
  let overdriveTimer = null;
  let countdownInterval = null;
  let remainingSeconds = 10;
  let activeFocusCard = null;
  const watermarkText = document.getElementById('watermarkText');

  function triggerOverdrive(category, element = null) {
    clearTimeout(overdriveTimer);
    clearInterval(countdownInterval);

    // Remove focus glow from any previously focused card
    if (activeFocusCard) {
      activeFocusCard.classList.remove('section-overdrive-focus', 'is-highlighted');
    }

    // Set active overdrive theme
    document.body.setAttribute('data-overdrive', category);
    document.body.classList.add('is-overdrive');

    // Focus target card or closest card
    if (element) {
      const targetCard = element.closest('.card') || element;
      targetCard.classList.add('section-overdrive-focus', 'is-highlighted');
      activeFocusCard = targetCard;
    }

    // Set background animation mode to matched section
    currentSectionMode = category;

    // Watermark burst
    if (watermarkText) {
      watermarkText.classList.remove('is-pulsing');
      void watermarkText.offsetWidth; // force reflow
      watermarkText.classList.add('is-pulsing');
    }

    // Update HUD Countdown badge
    remainingSeconds = 10;
    if (hudCountdown) {
      hudCountdown.textContent = `${remainingSeconds}s OVERDRIVE`;
      hudCountdown.classList.add('is-active');
    }

    pushTelemetryLog(`<strong>[OVERDRIVE: 10s]</strong> ${category.toUpperCase()} ACTIVE :: Shaders &amp; theme synchronized`, true);

    // 1-second interval countdown
    countdownInterval = setInterval(() => {
      remainingSeconds--;
      if (hudCountdown) {
        hudCountdown.textContent = `${remainingSeconds}s OVERDRIVE`;
      }

      if (remainingSeconds <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);

    // Auto-reset after exactly 10 seconds
    overdriveTimer = setTimeout(() => {
      document.body.removeAttribute('data-overdrive');
      document.body.classList.remove('is-overdrive');

      if (activeFocusCard) {
        activeFocusCard.classList.remove('section-overdrive-focus', 'is-highlighted');
        activeFocusCard = null;
      }

      if (hudCountdown) {
        hudCountdown.classList.remove('is-active');
      }

      pushTelemetryLog(`<strong>[OVERDRIVE COMPLETE]</strong> 10s window elapsed :: Returning to standard baseline`, false);
    }, 10000);
  }


  // ═════════════════════════════════════════════════════════════════
  // 3. SECTION LIVE BACKGROUND ANIMATION CANVAS ENGINE
  // ═════════════════════════════════════════════════════════════════
  const canvas = document.getElementById('sectionLiveCanvas');
  let ctx = null;
  let canvasWidth = 0;
  let canvasHeight = 0;
  let particles = [];
  let currentSectionMode = 'about';

  if (canvas) {
    ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      initParticles();
    }

    function initParticles() {
      particles = [];
      const particleCount = Math.floor(Math.min(canvasWidth, 1200) / 24);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.35 + 0.15
        });
      }
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();

    function renderCanvas() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const isOverdrive = document.body.classList.contains('is-overdrive');
      const speedMultiplier = isOverdrive ? 2.3 : 1;

      // Color hues per section
      let baseHue = 45; // Gold default
      if (currentSectionMode === 'skills') baseHue = 195; // Cyan
      else if (currentSectionMode === 'experience') baseHue = 345; // Rose/Crimson
      else if (currentSectionMode === 'certs') baseHue = 155; // Emerald
      else if (currentSectionMode === 'education') baseHue = 220; // Blue
      else if (currentSectionMode === 'contact') baseHue = 315; // Magenta

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (currentSectionMode === 'skills') {
          // Matrix digital data drift upward
          p.y -= (p.radius * 0.75) * speedMultiplier;
          if (p.y < 0) p.y = canvasHeight;
        } else if (currentSectionMode === 'experience') {
          // Horizontal high-speed telemetry pulse
          p.x += (p.radius * 1.3) * speedMultiplier;
          if (p.x > canvasWidth) p.x = 0;
        } else {
          // Organic drift
          p.x += p.vx * speedMultiplier;
          p.y += p.vy * speedMultiplier;
          if (p.x < 0) p.x = canvasWidth;
          if (p.x > canvasWidth) p.x = 0;
          if (p.y < 0) p.y = canvasHeight;
          if (p.y > canvasHeight) p.y = 0;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (isOverdrive ? 1.4 : 1), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${baseHue}, 90%, 65%, ${p.alpha * (isOverdrive ? 1.6 : 1)})`;
        ctx.shadowBlur = isOverdrive ? 14 : 5;
        ctx.shadowColor = `hsla(${baseHue}, 90%, 60%, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connecting constellation threads in about & education modes
        if (currentSectionMode === 'about' || currentSectionMode === 'education') {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 90) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `hsla(${baseHue}, 90%, 65%, ${(1 - dist / 90) * 0.15 * (isOverdrive ? 2 : 1)})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      }

      requestAnimationFrame(renderCanvas);
    }

    requestAnimationFrame(renderCanvas);
  }


  // ═════════════════════════════════════════════════════════════════
  // 4. MOUSE DRAG CHROMATIC INTERACTION (LIQUID PRISMATIC FLOW)
  // ═════════════════════════════════════════════════════════════════
  const dragSpotlight = document.getElementById('mouseDragSpotlight');
  let isDragging = false;
  let dragHue = 45;

  document.addEventListener('mousedown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    isDragging = true;
    document.body.classList.add('is-mouse-dragging');
    updateDragPosition(e);
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateDragPosition(e);
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      document.body.classList.remove('is-mouse-dragging');
    }
  });

  function updateDragPosition(e) {
    if (dragSpotlight) {
      dragSpotlight.style.left = `${e.clientX}px`;
      dragSpotlight.style.top = `${e.clientY}px`;
    }

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
    dragHue = (angle + 360) % 360;

    document.body.style.setProperty('--drag-hue', dragHue.toFixed(1));
    document.body.style.setProperty('--drag-angle', `${angle.toFixed(1)}deg`);
  }


  // ═════════════════════════════════════════════════════════════════
  // 5. SYNCHRONIZED NAV TABS & CARD FOCUS OVERDRIVE
  // ═════════════════════════════════════════════════════════════════
  const navTabs = document.querySelectorAll('.nav-tab');
  const allCards = document.querySelectorAll('.card');

  const telemetryByTarget = {
    'about': '<strong>[PROFILE-ENGINE]</strong> Candidate identity loaded :: Abdul Rafay (5th Sem BSCS)',
    'skills': '<strong>[STACK-RESOLVER]</strong> Hydrated technical matrix: C, C++, Java, Node.js, MongoDB, React',
    'experience': '<strong>[COMMERCIAL-INDEX]</strong> Shopify operations &amp; C/C++/Java development modules active',
    'certs': '<strong>[STORAGE-GATEWAY]</strong> Hydrating Google &amp; Coursera verified credentials :: CDN 200 OK',
    'education': '<strong>[ACADEMIC-INDEX]</strong> Qarshi University BSCS verification status: ENROLLED (2024–2028)',
    'contact': '<strong>[CHANNEL-ROUTER]</strong> Direct communications handshake ready :: Phone, Email, LinkedIn'
  };

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      if (!targetId) return;

      // Update active nav tab
      navTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      // Find target card
      const targetCard = document.getElementById(targetId);

      // Trigger the 10-second Overdrive color & animation shift!
      triggerOverdrive(targetId, targetCard);

      // Output synchronized telemetry log
      const logMsg = telemetryByTarget[targetId] || `<strong>[ROUTER]</strong> Switched focus to section: ${targetId}`;
      pushTelemetryLog(logMsg, true);
    });
  });


  // ═════════════════════════════════════════════════════════════════
  // 6. FRONTEND KINETIC CLICK SHOCKWAVES & OVERDRIVE HOOK
  // ═════════════════════════════════════════════════════════════════
  const rippleElements = document.querySelectorAll(
    '.has-ripple, .nav-tab, .pill, .contact-row, .exp-row, .edu-box, .cert-thumb-box, .quick-link, .achievements-banner, .avatar-ring'
  );

  rippleElements.forEach(el => {
    el.classList.add('has-ripple');

    el.addEventListener('mousedown', (e) => {
      const rect = el.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'click-ripple';

      const diameter = Math.max(rect.width, rect.height) * 2.2;
      ripple.style.width = `${diameter}px`;
      ripple.style.height = `${diameter}px`;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      el.appendChild(ripple);
      setTimeout(() => ripple.remove(), 750);

      // Contextual overdrive mapping
      let cat = 'about';
      if (el.classList.contains('pill') || el.closest('#skills')) {
        cat = 'skills';
        pushTelemetryLog(`<strong>[COMPETENCY]</strong> Skill inspect: <code>${el.textContent.trim()}</code>`, false);
      } else if (el.classList.contains('contact-row') || el.closest('#contact')) {
        cat = 'contact';
        pushTelemetryLog('<strong>[DISPATCH]</strong> External communication bridge accessed', true);
      } else if (el.classList.contains('exp-row') || el.closest('#experience')) {
        cat = 'experience';
        pushTelemetryLog('<strong>[EXPERIENCE-QUERY]</strong> Inspecting operational track record &amp; deliverables', false);
      } else if (el.classList.contains('cert-thumb-box') || el.closest('#certs')) {
        cat = 'certs';
        pushTelemetryLog('<strong>[CREDENTIAL]</strong> Google verified credential examined', true);
      } else if (el.classList.contains('edu-box') || el.closest('#education')) {
        cat = 'education';
        pushTelemetryLog('<strong>[ACADEMIC]</strong> Academic milestone verified', false);
      } else if (el.classList.contains('avatar-ring') || el.closest('#about')) {
        cat = 'about';
        pushTelemetryLog('<strong>[IDENTITY-VERIFY]</strong> Abdul Rafay :: Verified CS Candidate :: Lahore, PK', true);
      }

      // Trigger 10-second overdrive on click!
      triggerOverdrive(cat, el);
    });
  });


  // ═════════════════════════════════════════════════════════════════
  // 7. 3D CARD MOUSE PERSPECTIVE TILT & SPOTLIGHT
  // ═════════════════════════════════════════════════════════════════
  allCards.forEach(card => {
    let spotlight = card.querySelector('.card-spotlight');
    if (!spotlight) {
      spotlight = document.createElement('div');
      spotlight.className = 'card-spotlight';
      card.appendChild(spotlight);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });


  // ═════════════════════════════════════════════════════════════════
  // 8. ELASTIC CERTIFICATE LIGHTBOX MODAL (WITH ESC DISMISSAL)
  // ═════════════════════════════════════════════════════════════════
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxIssuer = document.getElementById('lightboxIssuer');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const certBoxes = document.querySelectorAll('.cert-thumb-box');

  function openLightbox(fullSrc, title, issuer) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = fullSrc;
    lightboxImg.alt = title;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxIssuer) lightboxIssuer.textContent = issuer;

    lightboxModal.classList.add('is-open');
    lightboxModal.setAttribute('aria-hidden', 'false');

    triggerOverdrive('certs');
    pushTelemetryLog(`<strong>[CERT-VIEWER]</strong> Fullscreen modal for: <em>${title}</em>`, true);
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('is-open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    pushTelemetryLog('<strong>[CERT-VIEWER]</strong> Lightbox modal closed', false);
  }

  certBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const fullSrc = box.getAttribute('data-full') || './certs/cert1.png';
      const title = box.getAttribute('data-title') || 'Certificate of Completion';
      const issuer = box.getAttribute('data-issuer') || 'Google &bull; Offered through Coursera';
      openLightbox(fullSrc, title, issuer);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  // Welcome log
  setTimeout(() => {
    pushTelemetryLog('<strong>[READY]</strong> Executive 100vh CV loaded &bull; Multi-mode live animations active', true);
  }, 350);

});
