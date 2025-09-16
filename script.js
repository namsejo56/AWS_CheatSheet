// AWS CheatSheet JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active state to navigation based on scroll position
    function updateActiveNav() {
        const sections = document.querySelectorAll('.service-section');
        const navLinks = document.querySelectorAll('nav a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', updateActiveNav);

    // Search functionality
    function addSearchFeature() {
        const header = document.querySelector('header .container');
        
        // Create search container
        const searchContainer = document.createElement('div');
        searchContainer.style.cssText = `
            margin-top: 1rem;
            display: flex;
            justify-content: center;
            gap: 10px;
        `;
        
        // Create search input
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search AWS services...';
        searchInput.style.cssText = `
            padding: 10px 15px;
            border: none;
            border-radius: 25px;
            width: 300px;
            max-width: 80vw;
            font-size: 16px;
            outline: none;
        `;
        
        // Create clear button
        const clearButton = document.createElement('button');
        clearButton.textContent = 'Clear';
        clearButton.style.cssText = `
            padding: 10px 20px;
            border: 2px solid white;
            border-radius: 25px;
            background: transparent;
            color: white;
            cursor: pointer;
            font-size: 16px;
        `;
        
        searchContainer.appendChild(searchInput);
        searchContainer.appendChild(clearButton);
        header.appendChild(searchContainer);
        
        // Search functionality
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const serviceCards = document.querySelectorAll('.service-card');
            
            serviceCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                const cardElement = card.parentElement;
                
                if (cardText.includes(searchTerm) || searchTerm === '') {
                    card.style.display = 'block';
                    cardElement.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Hide sections with no visible cards
            const sections = document.querySelectorAll('.service-section');
            sections.forEach(section => {
                const visibleCards = section.querySelectorAll('.service-card[style*="block"], .service-card:not([style*="none"])');
                if (searchTerm !== '' && visibleCards.length === 0) {
                    section.style.display = 'none';
                } else {
                    section.style.display = 'block';
                }
            });
        });
        
        // Clear button functionality
        clearButton.addEventListener('click', function() {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
        });
    }

    // Add search feature
    addSearchFeature();

    // Add animation on scroll
    function animateOnScroll() {
        const cards = document.querySelectorAll('.service-card');
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.animation = 'fadeIn 0.6s ease-out';
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Add back to top button
    function addBackToTopButton() {
        const backToTopButton = document.createElement('button');
        backToTopButton.innerHTML = '↑';
        backToTopButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #ff9900;
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            display: none;
            z-index: 1000;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(backToTopButton);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        // Scroll to top when clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effect
        backToTopButton.addEventListener('mouseenter', function() {
            this.style.background = '#232f3e';
            this.style.transform = 'scale(1.1)';
        });
        
        backToTopButton.addEventListener('mouseleave', function() {
            this.style.background = '#ff9900';
            this.style.transform = 'scale(1)';
        });
    }

    addBackToTopButton();

    // Console log for debugging
    console.log('AWS CheatSheet loaded successfully!');
});