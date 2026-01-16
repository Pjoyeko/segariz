// ============================================
// EMAIL CONFIGURATION - EMAILJS
// ============================================
// IMPORTANT: Replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',     // Replace with your EmailJS Public Key
    SERVICE_ID: 'YOUR_SERVICE_ID_HERE',     // Replace with your EmailJS Service ID
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE'    // Replace with your EmailJS Template ID
};

// Initialize EmailJS
(function() {
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
})();

// ============================================
// PORTFOLIO ACADEMIC DATA
// ============================================
const portfolioAcademicProjects = [
  {
    id: 1,
    title: 'Bee Space',
    category: 'Design',
    description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning.',
    images: [
      'academicprojectbeespace1.png',
      'academicprojectbeespace2.png',
    ],
    location: 'Jakarta, Indonesia',
    year: '2022'
  },
  {
    id: 2,
    title: 'Sunhap',
    category: 'Design Landscape',
    description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning.',
    images: [
      'academicprojectsunhap3.png',
      'academicprojectsunhap4.png',
    ],
    location: 'Jakarta, Indonesia',
    year: '2023'
  },
  {
    id: 3,
    title: 'Sport Hall',
    category: 'Design Construction',
    description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning.',
    images: [
      'academicprojectsporthall5.png',
      'academicprojectsporthall6.png',
    ],
    location: 'Jakarta, Indonesia',
    year: '2023'
  },
  {
    id: 4,
    title: 'Betang Global Academy',
    category: 'Design Vernacular',
    description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning.',
    images: [
      'academicprojectbetangglobalacademy7.png',
      'academicprojectbetangglobalacademy8.png',
    ],
    location: 'Jakarta, Indonesia',
    year: '2023'
  },
  {
    id: 5,
    title: 'Yukata Hotel',
    category: 'Design Sustainable',
    description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning.',
    images: [
      'academicprojectyukatahotel9.png',
      'academicprojectyukatahotel10.png',
      'academicprojectyukatahotel11.png',
      'academicprojectyukatahotel12.png',
    ],
    location: 'Jakarta, Indonesia',
    year: '2024'
  },
  {
    id: 6,
    title: 'Golden Serenity',
    category: 'Design Sustainable',
    description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning.',
    images: [
      'academicprojectgoldenserenity13.png',
      'academicprojectgoldenserenity14.png',
      'academicprojectgoldenserenity15.png',
      'academicprojectgoldenserenity16.png',
    ],
    location: 'Jakarta, Indonesia',
    year: '2025'
  }
];

// ============================================
// PORTFOLIO INDEPENDENT PROJECTS DATA
// ============================================
const portfolioIndependentProjects = [
  {
    id: 1,
    title: 'Project Mandiri',
    category: 'Independent Work',
    description: 'Self-initiated architectural projects demonstrating creative vision and technical excellence.',
    images: [
      'mandiri1.jpg',
      'mandiri2.jpg',
      'mandiri3.jpg',
      'mandiri4.jpg',
      'mandiri5.jpg',
      'mandiri6.jpg',
      'mandiri7.jpg',
      'mandiri8.jpg',
      'mandiri9.jpg',
      'mandiri10.jpg',
      'mandiri11.jpg',
      'mandiri12.jpg',
      'mandiri13.jpg',
      'mandiri14.jpg',
      'mandiri15.jpg'
    ],
    location: 'Bandung, Indonesia',
    year: '2023'
  }
];

// ============================================
// PRELOADER
// ============================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 1500);
});

// ============================================
// NAVIGATION
// ============================================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking nav link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Close mobile menu
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
        
        // Smooth scroll to section
        if (targetSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ============================================
// INTERSECTION OBSERVER - SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
const animateElements = document.querySelectorAll('[data-animate]');
animateElements.forEach(el => observer.observe(el));

// ============================================
// PARALLAX EFFECT
// ============================================
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            
            if (hero && scrolled < window.innerHeight) {
                const shapes = document.querySelectorAll('.shape');
                shapes.forEach((shape, index) => {
                    const speed = 0.5 + (index * 0.2);
                    shape.style.transform = `translateY(${scrolled * speed}px) rotate(${45 + scrolled * 0.05}deg)`;
                });
            }
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// ============================================
// PORTFOLIO GALLERY
// ============================================
let currentPortfolioType = 'academic'; // Track which portfolio is being viewed
let currentProjectIndex = 0;
let currentImageIndex = 0;

// Get category icon
function getCategoryIcon(category) {
    const icons = {
        'Design': '🎨',
        'Design Landscape': '🌿',
        'Design Construction': '🏗️',
        'Design Vernacular': '🏛️',
        'Design Sustainable': '♻️',
        'Independent Work': '🗂️',
        'Educational Design': '🎓',
        'Residential': '🏡',
        'Commercial': '🏢',
        'Hospitality': '🌿',
        'Urban': '🏙️'
    };
    return icons[category] || '🏗️';
}

// Generate portfolio items for a specific grid
function generatePortfolioGrid(projects, gridId, portfolioType) {
    const portfolioGrid = document.getElementById(gridId);
    
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    projects.forEach((project, projectIndex) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-animate', '');
        portfolioItem.setAttribute('data-project-index', projectIndex);
        portfolioItem.setAttribute('data-portfolio-type', portfolioType);
        
        portfolioItem.innerHTML = `
            <div class="portfolio-image">
                <div class="portfolio-overlay">
                    <div class="portfolio-overlay-content">
                        <h3>${project.title}</h3>
                        <p>${project.category}</p>
                        <div class="portfolio-image-count">${project.images.length} Photos</div>
                    </div>
                </div>
                <img src="${project.images[0]}" alt="${project.title}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="portfolio-placeholder" style="display: none;">
                    <div class="placeholder-content">
                        <div class="placeholder-icon">${getCategoryIcon(project.category)}</div>
                        <div class="placeholder-text">${project.category}</div>
                    </div>
                </div>
            </div>
            <div class="portfolio-info">
                <div class="portfolio-category">${project.category}</div>
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-description">${project.description}</p>
                <div class="portfolio-meta">
                    <span>📍 ${project.location}</span>
                    <span>📅 ${project.year}</span>
                    <span>🖼️ ${project.images.length} Images</span>
                </div>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
        
        // Add click event for lightbox
        portfolioItem.addEventListener('click', () => {
            openLightbox(portfolioType, projectIndex, 0);
        });
    });
    
    // Re-observe new elements
    const newAnimateElements = portfolioGrid.querySelectorAll('[data-animate]');
    newAnimateElements.forEach(el => observer.observe(el));
}

// Generate both portfolios
function generatePortfolios() {
    generatePortfolioGrid(portfolioAcademicProjects, 'portfolioAcademicGrid', 'academic');
    generatePortfolioGrid(portfolioIndependentProjects, 'portfolioIndependentGrid', 'independent');
}

// ============================================
// LIGHTBOX FUNCTIONALITY
// ============================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

function openLightbox(portfolioType, projectIndex, imageIndex) {
    currentPortfolioType = portfolioType;
    currentProjectIndex = projectIndex;
    currentImageIndex = imageIndex;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'visible';
}

function getCurrentProjects() {
    return currentPortfolioType === 'academic' ? portfolioAcademicProjects : portfolioIndependentProjects;
}

function updateLightbox() {
    const projects = getCurrentProjects();
    const project = projects[currentProjectIndex];
    const totalImages = project.images.length;
    
    lightboxImage.src = project.images[currentImageIndex];
    lightboxImage.alt = `${project.title} - Image ${currentImageIndex + 1}`;
    lightboxTitle.textContent = project.title;
    lightboxCategory.textContent = `${project.category} - Image ${currentImageIndex + 1} of ${totalImages}`;
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${totalImages}`;
}

function showPrevImage() {
    const projects = getCurrentProjects();
    const project = projects[currentProjectIndex];
    const totalImages = project.images.length;
    
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    updateLightbox();
}

function showNextImage() {
    const projects = getCurrentProjects();
    const project = projects[currentProjectIndex];
    const totalImages = project.images.length;
    
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateLightbox();
}

// Lightbox event listeners
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevImage);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', showNextImage);
}

// Close lightbox when clicking on overlay
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});

// ============================================
// CONTACT FORM - EMAILJS
// ============================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('.btn-primary');
        const originalText = submitButton.innerHTML;
        
        // Disable button and show loading
        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Sending...</span>';
        formStatus.style.display = 'none';
        
        // Check if EmailJS is configured
        if (typeof emailjs === 'undefined' || EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
            console.warn('EmailJS not configured properly');
            formStatus.textContent = '⚠️ Email service is not configured. Please configure EmailJS in script.js or contact us directly.';
            formStatus.className = 'form-status error';
            formStatus.style.display = 'block';
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
            return;
        }
        
        // Send email using EmailJS
        emailjs.sendForm(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            this
        )
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            formStatus.textContent = '✓ Thank you! Your message has been sent successfully. We will get back to you within 24 hours.';
            formStatus.className = 'form-status success';
            formStatus.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
                formStatus.style.display = 'none';
            }, 5000);
            
        }, function(error) {
            console.log('FAILED...', error);
            
            // Show error message
            formStatus.textContent = '✗ Oops! Something went wrong. Please try again or contact us directly via email.';
            formStatus.className = 'form-status error';
            formStatus.style.display = 'block';
            
            // Reset button
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
            
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        });
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// SMOOTH SCROLL FOR ALL INTERNAL LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#' || targetId === '#!') return;
        
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NEWSLETTER FORM
// ============================================
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    const newsletterButton = newsletterForm.querySelector('button');
    const newsletterInput = newsletterForm.querySelector('input');
    
    newsletterButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = newsletterInput.value.trim();
        
        if (email && email.includes('@') && email.includes('.')) {
            newsletterButton.textContent = '✓';
            newsletterButton.style.background = '#4caf50';
            newsletterInput.value = '';
            
            setTimeout(() => {
                newsletterButton.textContent = '→';
                newsletterButton.style.background = '';
            }, 2500);
        } else {
            newsletterButton.textContent = '✗';
            newsletterButton.style.background = '#f44336';
            
            setTimeout(() => {
                newsletterButton.textContent = '→';
                newsletterButton.style.background = '';
            }, 2500);
        }
    });
    
    // Allow Enter key to submit
    newsletterInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            newsletterButton.click();
        }
    });
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Lazy load images when they come into viewport
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================
// Keyboard navigation for menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Focus trap for mobile menu
if (navMenu) {
    const focusableElements = navMenu.querySelectorAll('a, button');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    navMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c SEGARIZ ARCH ', 'background: #d4af37; color: #000; font-size: 20px; padding: 10px; font-weight: bold;');
console.log('%c Crafted with Excellence ', 'background: #1a1a1a; color: #d4af37; font-size: 12px; padding: 5px;');

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Generate portfolios
    generatePortfolios();
    
    console.log('✓ Website initialized successfully');
    console.log('✓ Academic projects loaded:', portfolioAcademicProjects.length);
    console.log('✓ Independent projects loaded:', portfolioIndependentProjects.length);
    
    // Log total images
    const totalAcademicImages = portfolioAcademicProjects.reduce((sum, project) => sum + project.images.length, 0);
    const totalIndependentImages = portfolioIndependentProjects.reduce((sum, project) => sum + project.images.length, 0);
    console.log('✓ Total images:', totalAcademicImages + totalIndependentImages);
    
    // Check EmailJS configuration
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
        console.warn('⚠️ EmailJS is not configured. Please add your credentials in script.js');
    }
});

// ============================================
// WHATSAPP BUTTON CONFIGURATION
// ============================================

/**
 * WhatsApp Configuration
 */
const WHATSAPP_CONFIG = {

    phoneNumber: '6281382377420',
    
    // Pesan default ketika user klik tombol WhatsApp
    defaultMessage: "Hello SEGARIZ ARCH, I'm interested in your architectural services and would like to discuss a project."
};

/**
 * Inisialisasi tombol WhatsApp dengan link dinamis
 */
function initWhatsAppButton() {
    const whatsappButton = document.querySelector('.btn-whatsapp');
    
    if (!whatsappButton) {
        console.warn('WhatsApp button not found');
        return;
    }
    
    // Buat URL WhatsApp
    const message = encodeURIComponent(WHATSAPP_CONFIG.defaultMessage);
    const whatsappURL = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${message}`;
    
    // Update link tombol
    whatsappButton.href = whatsappURL;
    
    // Tracking klik (opsional untuk analytics)
    whatsappButton.addEventListener('click', function(e) {
        console.log('WhatsApp button clicked');
    });
}

// ============================================
// INISIALISASI SAAT HALAMAN SIAP
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initWhatsAppButton();
    console.log('✓ WhatsApp button initialized');
});