/**
 * Abdul Rafay — Executive Portfolio & CV Interactive Engine
 * Designed for 100vh Single-Viewport / Without-Scroll Architecture
 * 
 * 1. Synchronized Executive Nav Tabs & Card Focus Highlighting
 * 2. Frontend Kinetic Click Shockwaves & Radial Ripples
 * 3. Live Backend Telemetry HUD & System Monitor Console
 * 4. 3D Card Mouse Perspective Tilt & Cursor Spotlight
 * 5. Elastic Certificate Lightbox Modal & ESC Dismissal
 */

document.addEventListener('DOMContentLoaded', () => {

  // ═════════════════════════════════════════════════════════════════
  // 1. LIVE BACKEND TELEMETRY HUD & RUNTIME CONSOLE SIMULATOR
  // ═════════════════════════════════════════════════════════════════
  const hudElement = document.getElementById('telemetryHud');
  const hudTerminal = document.getElementById('hudTerminal');
  const hudLatency = document.getElementById('hudLatency');
  let hudIdleTimer = null;

  function pushTelemetryLog(logMessage, isHighlight = false) {
    if (!hudTerminal) return;

    // Flash HUD Active status
    if (hudElement) hudElement.classList.add('is-active');

    // Realistic low latency simulation: 0.9ms - 2.5ms
    const randomLatency = (Math.random() * 1.6 + 0.9).toFixed(1) + 'ms';
    if (hudLatency) hudLatency.textContent = randomLatency;

    const line = document.createElement('div');
    line.className = 'hud-line' + (isHighlight ? ' hud-highlight' : '');
    line.innerHTML = logMessage;
    hudTerminal.appendChild(line);

    // Keep maximum 4 lines to preserve clean executive viewport
    while (hudTerminal.children.length > 4) {
      hudTerminal.removeChild(hudTerminal.firstChild);
    }

    clearTimeout(hudIdleTimer);
    hudIdleTimer = setTimeout(() => {
      if (hudElement) hudElement.classList.remove('is-active');
      if (hudLatency) hudLatency.textContent = 'ONLINE';
    }, 3800);
  }


  // ═════════════════════════════════════════════════════════════════
  // 2. SYNCHRONIZED NAV TABS & CARD FOCUS HIGHLIGHTING
  // ═════════════════════════════════════════════════════════════════
  const navTabs = document.querySelectorAll('.nav-tab');
  const allCards = document.querySelectorAll('.card');
  let highlightTimeout = null;

  const telemetryByTarget = {
    'about': '<strong>[PROFILE-ENGINE]</strong> Candidate identity loaded :: Abdul Rafay (5th Sem BSCS)',
    'skills': '<strong>[STACK-RESOLVER]</strong> Hydrated technical matrix: C, C++, Java, Node.js, MongoDB, React',
    'experience': '<strong>[COMMERCIAL-INDEX]</strong> Shopify operations & C/C++/Java development modules active',
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

      // Clear previous card highlights
      allCards.forEach(c => c.classList.remove('is-highlighted'));

      // Highlight target card
      const targetCard = document.getElementById(targetId);
      if (targetCard) {
        targetCard.classList.add('is-highlighted');

        // Automatically fade highlight after 3.2s
        clearTimeout(highlightTimeout);
        highlightTimeout = setTimeout(() => {
          targetCard.classList.remove('is-highlighted');
        }, 3200);
      }

      // Output synchronized telemetry log
      const logMsg = telemetryByTarget[targetId] || `<strong>[ROUTER]</strong> Switched focus to section: ${targetId}`;
      pushTelemetryLog(logMsg, true);
    });
  });


  // ═════════════════════════════════════════════════════════════════
  // 3. FRONTEND KINETIC MICRO-INTERACTIONS (CLICK SHOCKWAVE RIPPLES)
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

      // Element-specific telemetry logs
      if (el.classList.contains('pill')) {
        pushTelemetryLog(`<strong>[COMPETENCY]</strong> Skill inspect: <code>${el.textContent.trim()}</code>`, false);
      } else if (el.classList.contains('contact-row') || el.classList.contains('quick-link')) {
        pushTelemetryLog('<strong>[DISPATCH]</strong> External communication bridge accessed', true);
      } else if (el.classList.contains('exp-row')) {
        pushTelemetryLog('<strong>[EXPERIENCE-QUERY]</strong> Inspecting operational track record &amp; deliverables', false);
      } else if (el.classList.contains('edu-box')) {
        pushTelemetryLog('<strong>[CREDENTIAL]</strong> Academic milestone verified', false);
      } else if (el.classList.contains('avatar-ring')) {
        pushTelemetryLog('<strong>[IDENTITY-VERIFY]</strong> Abdul Rafay :: Verified CS Candidate :: Lahore, PK', true);
      }
    });
  });


  // ═════════════════════════════════════════════════════════════════
  // 4. 3D CARD MOUSE PERSPECTIVE TILT & DYNAMIC SPOTLIGHT
  // ═════════════════════════════════════════════════════════════════
  allCards.forEach(card => {
    // Add spotlight tracker if missing
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

      // Coordinate tracking for spotlight gradient
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // Gentle 3D perspective tilt (bounded for comfort)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.012, 1.012, 1.012)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });


  // ═════════════════════════════════════════════════════════════════
  // 5. ELASTIC CERTIFICATE LIGHTBOX MODAL (WITH ESC DISMISSAL)
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

    pushTelemetryLog(`<strong>[CERT-VIEWER]</strong> Opened modal for: <em>${title}</em>`, true);
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

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener('click', closeLightbox);
  }

  // Dismiss on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  // Initial welcome telemetry log
  setTimeout(() => {
    pushTelemetryLog('<strong>[READY]</strong> Abdul Rafay Executive CV loaded &bull; 100vh Single Viewport', true);
  }, 350);

});
