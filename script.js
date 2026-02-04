// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
  initServiceModals();
  initContactForm();
  updateYear();
});

// ==================== NAVIGATION ====================
function initNavigation() {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const header = document.querySelector('.header');
  
  // Mobile menu toggle
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', 
      menuBtn.classList.contains('active'));
  });
  
  // Close mobile menu when clicking a link
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Hide header on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 200) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
  });
}

// ==================== SCROLL EFFECTS ====================
function initScrollEffects() {
  // Active section highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  
  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -66%',
    threshold: 0
  };
  
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .fact-card, .project-card, .info-item');
    
    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 50);
      }
    });
  };
  
  // Set initial state
  document.querySelectorAll('.service-card, .fact-card, .project-card, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check
}

// ==================== SERVICE MODALS ====================
function initServiceModals() {
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContactBtn = document.getElementById('modalContactBtn');
  
  const serviceContent = {
    transformer: {
      title: 'Electrical Transformer Repairs',
      content: `
        <p>Our expert team specializes in comprehensive electrical transformer repairs and maintenance services. We handle all types of transformers, from distribution transformers to power transformers.</p>
        <p><strong>Our Services Include:</strong></p>
        <ul style="list-style: none; padding-left: 0; margin: 1rem 0;">
          <li style="margin-bottom: 0.5rem;">▸ Transformer diagnostics and testing</li>
          <li style="margin-bottom: 0.5rem;">▸ Oil analysis and replacement</li>
          <li style="margin-bottom: 0.5rem;">▸ Winding repairs and rewinding</li>
          <li style="margin-bottom: 0.5rem;">▸ Cooling system maintenance</li>
          <li style="margin-bottom: 0.5rem;">▸ Bushing replacement and repairs</li>
          <li style="margin-bottom: 0.5rem;">▸ On-site and workshop services</li>
        </ul>
        <p>We ensure your transformers operate at peak efficiency with minimal downtime, using industry-standard procedures and quality materials.</p>
      `
    },
    rewinding: {
      title: 'Electrical Motor Rewinding',
      content: `
        <p>Professional motor rewinding services to restore your electrical motors to optimal performance. Our skilled technicians handle motors of all sizes and types.</p>
        <p><strong>Services We Provide:</strong></p>
        <ul style="list-style: none; padding-left: 0; margin: 1rem 0;">
          <li style="margin-bottom: 0.5rem;">▸ Complete motor rewinding</li>
          <li style="margin-bottom: 0.5rem;">▸ Stator and rotor repairs</li>
          <li style="margin-bottom: 0.5rem;">▸ Bearing replacement</li>
          <li style="margin-bottom: 0.5rem;">▸ Balance testing</li>
          <li style="margin-bottom: 0.5rem;">▸ Performance testing and certification</li>
          <li style="margin-bottom: 0.5rem;">▸ AC and DC motor rewinding</li>
        </ul>
        <p>We use high-quality copper wire and follow strict quality control procedures to ensure long-lasting results.</p>
      `
    },
    electrical: {
      title: 'Electrical Repairs',
      content: `
        <p>Comprehensive electrical repair services for industrial, commercial, and residential applications. Our certified electricians handle all types of electrical issues.</p>
        <p><strong>What We Offer:</strong></p>
        <ul style="list-style: none; padding-left: 0; margin: 1rem 0;">
          <li style="margin-bottom: 0.5rem;">▸ Electrical system troubleshooting</li>
          <li style="margin-bottom: 0.5rem;">▸ Circuit breaker and panel repairs</li>
          <li style="margin-bottom: 0.5rem;">▸ Wiring and rewiring services</li>
          <li style="margin-bottom: 0.5rem;">▸ Lighting system repairs</li>
          <li style="margin-bottom: 0.5rem;">▸ Emergency electrical repairs</li>
          <li style="margin-bottom: 0.5rem;">▸ Compliance and safety inspections</li>
        </ul>
        <p>Safety is our priority. All repairs meet or exceed local electrical codes and standards.</p>
      `
    },
    pump: {
      title: 'Heavy Duty Pump Repairs',
      content: `
        <p>Specialized repair and refurbishment services for heavy-duty industrial pumps. We work with all major pump types and brands.</p>
        <p><strong>Our Expertise:</strong></p>
        <ul style="list-style: none; padding-left: 0; margin: 1rem 0;">
          <li style="margin-bottom: 0.5rem;">▸ Centrifugal pump repairs</li>
          <li style="margin-bottom: 0.5rem;">▸ Submersible pump servicing</li>
          <li style="margin-bottom: 0.5rem;">▸ Seal and bearing replacement</li>
          <li style="margin-bottom: 0.5rem;">▸ Impeller repairs and balancing</li>
          <li style="margin-bottom: 0.5rem;">▸ Performance testing</li>
          <li style="margin-bottom: 0.5rem;">▸ Preventive maintenance programs</li>
        </ul>
        <p>Minimize downtime with our rapid response pump repair services and comprehensive maintenance solutions.</p>
      `
    },
    motor: {
      title: 'Motor Repairs',
      content: `
        <p>Complete motor repair services covering all aspects of electric motor maintenance and restoration. From small motors to large industrial units.</p>
        <p><strong>Services Include:</strong></p>
        <ul style="list-style: none; padding-left: 0; margin: 1rem 0;">
          <li style="margin-bottom: 0.5rem;">▸ Motor diagnostics and fault finding</li>
          <li style="margin-bottom: 0.5rem;">▸ Mechanical repairs and alignment</li>
          <li style="margin-bottom: 0.5rem;">▸ Electrical component replacement</li>
          <li style="margin-bottom: 0.5rem;">▸ Vibration analysis</li>
          <li style="margin-bottom: 0.5rem;">▸ Load testing</li>
          <li style="margin-bottom: 0.5rem;">▸ Energy efficiency upgrades</li>
        </ul>
        <p>Our motor repair services extend equipment life and improve operational efficiency.</p>
      `
    },
    maintenance: {
      title: 'Repairs And Maintenance',
      content: `
        <p>Comprehensive maintenance programs designed to keep your equipment running smoothly and prevent costly breakdowns. Customized solutions for your facility.</p>
        <p><strong>Maintenance Solutions:</strong></p>
        <ul style="list-style: none; padding-left: 0; margin: 1rem 0;">
          <li style="margin-bottom: 0.5rem;">▸ Preventive maintenance scheduling</li>
          <li style="margin-bottom: 0.5rem;">▸ Predictive maintenance programs</li>
          <li style="margin-bottom: 0.5rem;">▸ Emergency breakdown services</li>
          <li style="margin-bottom: 0.5rem;">▸ Equipment inspections</li>
          <li style="margin-bottom: 0.5rem;">▸ Lubrication and cleaning</li>
          <li style="margin-bottom: 0.5rem;">▸ Performance monitoring</li>
        </ul>
        <p>Reduce downtime and maintenance costs with our proactive maintenance approach and expert technical support.</p>
      `
    },
    'general-rewinding': {
      title: 'Rewinding Services',
      content: `
        <p>Specialized rewinding services for a wide range of electrical equipment. Our experienced technicians restore equipment to factory specifications or better.</p>
        <p><strong>Rewinding Capabilities:</strong></p>
        <ul style="list-style: none; padding-left: 0; margin: 1rem 0;">
          <li style="margin-bottom: 0.5rem;">▸ Motor stator rewinding</li>
          <li style="margin-bottom: 0.5rem;">▸ Generator rewinding</li>
          <li style="margin-bottom: 0.5rem;">▸ Alternator rewinding</li>
          <li style="margin-bottom: 0.5rem;">▸ Coil winding and forming</li>
          <li style="margin-bottom: 0.5rem;">▸ Insulation testing</li>
          <li style="margin-bottom: 0.5rem;">▸ Quality assurance testing</li>
        </ul>
        <p>Using premium materials and precise techniques, we deliver rewinding services that meet the highest industry standards.</p>
      `
    }
  };
  
  // Open modal
  document.querySelectorAll('.service-learn-more').forEach(button => {
    button.addEventListener('click', function() {
      const serviceCard = this.closest('.service-card');
      const serviceType = serviceCard.getAttribute('data-service');
      const content = serviceContent[serviceType];
      
      if (content) {
        modalTitle.textContent = content.title;
        modalBody.innerHTML = content.content;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Close modal functions
  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
  // Close modal and scroll to contact when clicking contact button
  modalContactBtn.addEventListener('click', () => {
    closeModal();
  });
}

// ==================== CONTACT FORM ====================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  
  // Form validation
  const validateField = (field) => {
    const errorElement = document.getElementById(`${field.name}Error`);
    let isValid = true;
    let errorMsg = '';
    
    // Check if field is empty
    if (!field.value.trim()) {
      isValid = false;
      errorMsg = 'This field is required';
    } else {
      // Specific validations
      switch (field.name) {
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value)) {
            isValid = false;
            errorMsg = 'Please enter a valid email address';
          }
          break;
          
        case 'phone':
          const phoneRegex = /^[\d\s+()-]+$/;
          if (!phoneRegex.test(field.value) || field.value.replace(/\D/g, '').length < 8) {
            isValid = false;
            errorMsg = 'Please enter a valid phone number';
          }
          break;
          
        case 'name':
          if (field.value.trim().length < 2) {
            isValid = false;
            errorMsg = 'Name must be at least 2 characters';
          }
          break;
          
        case 'message':
          if (field.value.trim().length < 10) {
            isValid = false;
            errorMsg = 'Message must be at least 10 characters';
          }
          break;
      }
    }
    
    if (errorElement) {
      errorElement.textContent = errorMsg;
    }
    
    if (!isValid) {
      field.classList.add('error');
    } else {
      field.classList.remove('error');
    }
    
    return isValid;
  };
  
  // Real-time validation on blur
  const formFields = form.querySelectorAll('input, select, textarea');
  formFields.forEach(field => {
    field.addEventListener('blur', () => {
      if (field.value.trim()) {
        validateField(field);
      }
    });
    
    // Clear error on input
    field.addEventListener('input', () => {
      const errorElement = document.getElementById(`${field.name}Error`);
      if (errorElement) {
        errorElement.textContent = '';
      }
      field.classList.remove('error');
    });
  });
  
  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all fields
    let isFormValid = true;
    formFields.forEach(field => {
      if (!validateField(field)) {
        isFormValid = false;
      }
    });
    
    if (!isFormValid) {
      formMsg.textContent = 'Please correct the errors above';
      formMsg.className = 'form-status error';
      return;
    }
    
    // Collect form data
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      service: form.service.value,
      message: form.message.value.trim(),
      timestamp: new Date().toISOString()
    };
    
    // Log to console (in production, this would be sent to a server)
    console.log('Form Submission:', formData);
    console.log('-----------------------------------');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Phone:', formData.phone);
    console.log('Service:', formData.service);
    console.log('Message:', formData.message);
    console.log('Submitted at:', formData.timestamp);
    console.log('-----------------------------------');
    
    // Show success message
    formMsg.textContent = 'Thank you for your message! We will contact you soon.';
    formMsg.className = 'form-status success';
    
    // Reset form
    form.reset();
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      formMsg.textContent = '';
      formMsg.className = 'form-status';
    }, 5000);
  });
}

// ==================== UPDATE YEAR ====================
function updateYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ==================== UTILITY FUNCTIONS ====================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add performance optimization for scroll events
const optimizedScroll = debounce(() => {
  // Any additional scroll handling can go here
}, 10);

window.addEventListener('scroll', optimizedScroll);

// Log initialization
console.log('Lush Engineering website initialized successfully');
console.log('For support, contact: lushengineering20@gmail.com');
