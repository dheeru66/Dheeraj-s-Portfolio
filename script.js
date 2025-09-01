// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆';
backToTopButton.setAttribute('id', 'backToTop');
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '30px';
backToTopButton.style.right = '30px';
backToTopButton.style.padding = '10px';
backToTopButton.style.backgroundColor = '#1f2833';
backToTopButton.style.color = '#66fcf1';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});

// Scroll Animation for Sections
const animatedSections = document.querySelectorAll('section');

// Enhanced scroll animation for all sections
window.addEventListener('scroll', () => {
  animatedSections.forEach((section, idx) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 120) {
      section.classList.add('visible');
    }
  });
});

// Function to make a div draggable
function makeDraggable(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const titleBar = element.querySelector('.title-bar');

  if (titleBar) {
      titleBar.onmousedown = dragMouseDown;
  } else {
      element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // Get the mouse cursor position at startup
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // Calculate the new cursor position
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // Set the element's new position
      element.style
  }
}

// Hacker code animation for hero section
const hackerLines = [
  'Initializing hack sequence...',
  'Connecting to server 192.168.1.1...',
  'Bypassing firewall...',
  'Access granted.',
  'Downloading data...',
  'Injecting payload...',
  'root@server:~# ls -la',
  'drwxr-xr-x 2 root root 4096 Jul 14 2025 .',
  'drwxr-xr-x 3 root root 4096 Jul 14 2025 ..',
  'Connecting to database...',
  'Data exfiltration in progress...',
  'Process completed.',
  'root@server:~# exit',
];

function animateHackerCode() {
  const hackerCodeDiv = document.getElementById('hackerCode');
  if (!hackerCodeDiv) return;
  let idx = 0;
  hackerCodeDiv.innerHTML = '';
  function addLine() {
    if (idx < hackerLines.length) {
      const line = document.createElement('div');
      line.textContent = hackerLines[idx];
      hackerCodeDiv.appendChild(line);
      idx++;
      setTimeout(addLine, 700);
    } else {
      setTimeout(() => {
        hackerCodeDiv.innerHTML = '';
        idx = 0;
        addLine();
      }, 2000);
    }
  }
  addLine();
}

window.addEventListener('DOMContentLoaded', animateHackerCode);

// Universe background animation for hero section
function startUniverseAnimation() {
  const canvas = document.getElementById('universeCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  // Star properties
  const stars = Array.from({length: 120}, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.5 + 0.5,
    twinkle: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.2 + 0.05
  }));

  // Moon properties
  let moonAngle = 0;
  function drawMoon() {
    const moonX = w * 0.8 + Math.sin(moonAngle) * 40;
    const moonY = h * 0.18 + Math.cos(moonAngle) * 20;
    ctx.save();
    ctx.beginPath();
    ctx.arc(moonX, moonY, 40, 0, Math.PI * 2);
    ctx.fillStyle = '#fffde4';
    ctx.shadowColor = '#fffde4';
    ctx.shadowBlur = 30;
    ctx.fill();
    ctx.restore();
    // Moon craters
    ctx.save();
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.arc(moonX + 12, moonY - 10, 7, 0, Math.PI * 2);
    ctx.arc(moonX - 15, moonY + 8, 5, 0, Math.PI * 2);
    ctx.arc(moonX + 8, moonY + 15, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#bdbdbd';
    ctx.fill();
    ctx.restore();
  }

  function drawStars() {
    stars.forEach(star => {
      star.twinkle += star.speed;
      const alpha = 0.7 + Math.sin(star.twinkle) * 0.3;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.shadowColor = '#fff';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
      // Move stars slowly
      star.x += Math.sin(star.twinkle) * 0.08;
      star.y += Math.cos(star.twinkle) * 0.04;
      // Wrap around
      if (star.x < 0) star.x = w;
      if (star.x > w) star.x = 0;
      if (star.y < 0) star.y = h;
      if (star.y > h) star.y = 0;
    });
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    drawStars();
    drawMoon();
    moonAngle += 0.002;
    requestAnimationFrame(animate);
  }

  animate();
  window.addEventListener('resize', () => {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  });
}
window.addEventListener('DOMContentLoaded', startUniverseAnimation);

// Universe background animation
const canvas = document.getElementById('universeCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  // Star and moon animation
  const stars = Array.from({length: 120}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    dx: Math.random() * 0.2 + 0.05
  }));
  let moonX = canvas.width * 0.8, moonY = canvas.height * 0.15, moonR = 40, moonDX = 0.3;
  function drawUniverse() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw stars
    ctx.save();
    ctx.globalAlpha = 0.8;
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.shadowColor = '#66fcf1';
      ctx.shadowBlur = 8;
      ctx.fill();
      star.x += star.dx;
      if (star.x > canvas.width) star.x = 0;
    });
    ctx.restore();
    // Draw moon
    ctx.save();
    ctx.beginPath();
    ctx.arc(moonX, moonY, moonR, 0, 2 * Math.PI);
    ctx.fillStyle = '#fdf6e3';
    ctx.shadowColor = '#fff';
    ctx.shadowBlur = 30;
    ctx.fill();
    ctx.restore();
    moonX += moonDX;
    if (moonX > canvas.width + moonR) moonX = -moonR;
    requestAnimationFrame(drawUniverse);
  }
  drawUniverse();
}

// Typewriter effect for hero headline
const typewriter = document.querySelector('.typewriter');
if (typewriter) {
  const text = typewriter.textContent;
  typewriter.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  setTimeout(type, 800);
}

// Hacker terminal animation
const hackerCode = document.getElementById('hackerCode');
if (hackerCode) {
  const codeLines = [
    'Initializing system...\n',
    'Connecting to server...\n',
    'Access granted!\n',
    'Running diagnostics...\n',
    'Compiling code...\n',
    'Deploying application...\n',
    'Success!\n',
    'Welcome, Dheeraj!\n'
  ];
  let line = 0;
  function showCode() {
    if (line < codeLines.length) {
      hackerCode.textContent += codeLines[line];
      line++;
      setTimeout(showCode, 700);
    }
  }
  showCode();
}

// Code overlay animation
const codeOverlay = document.getElementById('codeOverlay');
if (codeOverlay) {
  codeOverlay.style.opacity = '0.5';
}

// Scroll reveal for sections
const sections = document.querySelectorAll('section');
function revealSections() {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
document.addEventListener('DOMContentLoaded', revealSections);

// Back to Top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}
