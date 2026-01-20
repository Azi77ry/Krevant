// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Language Switching Functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-lang]');
    const placeholderElements = document.querySelectorAll('[data-lang-placeholder]');

    const changeLanguage = (lang) => {
        // Set active button
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang-switch') === lang) {
                btn.classList.add('active');
            }
        });

        // Translate elements
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (languageStrings[lang] && languageStrings[lang][key]) {
                el.innerHTML = languageStrings[lang][key];
            }
        });

        // Translate placeholders
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-lang-placeholder');
            if (languageStrings[lang] && languageStrings[lang][key]) {
                el.placeholder = languageStrings[lang][key];
            }
        });


        // Store language preference
        localStorage.setItem('preferredLanguage', lang);
    };

    // Set initial language
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(preferredLanguage);

    // Add event listeners
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-switch');
            changeLanguage(lang);
        });
    });

    // Sidebar Toggle Functionality
    initSidebar();
    
    // Load matches grid
    fetch('/api/matches')
        .then(response => response.json())
        .then(matches => {
            const matchesGrid = document.getElementById('matchesGrid');
            matches.forEach((match, index) => {
                const matchCard = document.createElement('div');
                matchCard.className = 'match-card';
                matchCard.style.animationDelay = `${index * 0.1}s`;
                matchCard.innerHTML = `
                    <div class="match-header">
                        <div class="match-date">
                            <i class="fas fa-calendar-alt me-1"></i>${match.date}
                        </div>
                        <div class="match-league">${match.type}</div>
                    </div>

                    <div class="match-teams">
                        <h3>${match.teams.split(' vs ')[0]}</h3>
                        <span class="match-vs">VS</span>
                        <h3>${match.teams.split(' vs ')[1]}</h3>
                    </div>

                    <div class="match-prediction">
                        <div class="prediction-badge">
                            <i class="fas fa-bullseye me-1"></i>${match.prediction}
                        </div>
                    </div>
                `;
                matchesGrid.appendChild(matchCard);
            });
        });


    // Load betting codes
    fetch('/api/codes')
        .then(response => response.json())
        .then(bettingCodes => {
            const bettingCodesContainer = document.getElementById('bettingCodes');
            bettingCodes.forEach(code => {
                const col = document.createElement('div');
                col.className = 'col-lg-4 col-md-6';
                
                let sportClass = 'default';
                if (code.sport === 'Football') {
                    sportClass = 'football';
                } else if (code.sport === 'Basketball') {
                    sportClass = 'basketball';
                }

                col.innerHTML = `
                    <div class="code-card ${code.type}">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="mb-0 code-card-code">${code.code}</h4>
                            <span class="badge code-card-sport-badge ${sportClass}">${code.sport}</span>
                        </div>
                        <p class="mb-3 code-card-odds"><i class="fas fa-chart-line me-2"></i> Odds: <strong>${code.odds}</strong></p>
                        <button class="btn btn-sm w-100 copy-code-btn btn-copy-code" data-code="${code.code}">
                            <i class="fas fa-copy me-2"></i> COPY CODE
                        </button>
                    </div>
                `;
                bettingCodesContainer.appendChild(col);
            });
        });

    // Animate counters
    animateCounters();
    
    // Add copy functionality to all code buttons
    document.querySelectorAll('.copy-code-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            navigator.clipboard.writeText(code).then(() => {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check me-2"></i> COPIED!';
                this.style.background = 'var(--primary-green)';
                this.style.color = 'var(--dark-bg)';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = 'rgba(0, 255, 136, 0.2)';
                    this.style.color = 'var(--primary-green)';
                }, 2000);
            });
        });
    });

    // Initialize AI chat
    initChat();
    
    // Show welcome popup on every visit
    const welcomePopupOverlay = document.getElementById('welcome-popup-overlay');
    const closePopupBtn = document.getElementById('close-popup-btn');
    const welcomeBtn = document.getElementById('welcome-button');

    function showWelcomePopup() {
        welcomePopupOverlay.classList.add('visible');
    }

    function hideWelcomePopup() {
        welcomePopupOverlay.classList.remove('visible');
    }

    if (welcomePopupOverlay && closePopupBtn && welcomeBtn) {
        setTimeout(showWelcomePopup, 1000);

        closePopupBtn.addEventListener('click', hideWelcomePopup);
        welcomeBtn.addEventListener('click', hideWelcomePopup);

        welcomePopupOverlay.addEventListener('click', function(event) {
            if (event.target === welcomePopupOverlay) {
                hideWelcomePopup();
            }
        });
    }

    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Active Menu Item Based on Scroll
    updateActiveMenuItem();
    window.addEventListener('scroll', updateActiveMenuItem);

    // Image Slider
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (slider && slides.length > 0) {
        let currentIndex = 0;
        const slideCount = slides.length;
        const slideWidth = slides[0].clientWidth;

        function goToSlide(index) {
            if (index < 0) {
                currentIndex = slideCount - 1;
            } else if (index >= slideCount) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });

        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });

        // Auto-slide
        setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
    }
});

// Sidebar Toggle for Mobile
function initSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const leftSidebar = document.getElementById('leftSidebar');
    
    if (sidebarToggle && leftSidebar) {
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            leftSidebar.classList.toggle('active');
            
            // Change icon
            const icon = sidebarToggle.querySelector('i');
            if (leftSidebar.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                if (!leftSidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                    leftSidebar.classList.remove('active');
                    const icon = sidebarToggle.querySelector('i');
                    icon.className = 'fas fa-bars';
                }
            }
        });

        // Close sidebar when clicking a menu link on mobile
        const menuLinks = document.querySelectorAll('.menu-link');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    leftSidebar.classList.remove('active');
                    const icon = sidebarToggle.querySelector('i');
                    icon.className = 'fas fa-bars';
                }
            });
        });
    }
}

// Update Active Menu Item Based on Scroll Position
function updateActiveMenuItem() {
    const sections = ['home', 'register', 'whatsapp', 'matches', 'codes'];
    const menuLinks = document.querySelectorAll('.menu-link');
    
    let current = 'home';
    
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                current = section;
            }
        }
    });
    
    menuLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Copy promo code function
function copyPromoCode() {
    const promoCode = 'VANT';
    navigator.clipboard.writeText(promoCode).then(() => {
        const button = event.target.closest('button') || event.target;
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check me-2"></i> COPIED!';
        button.style.background = 'var(--primary-green)';
        button.style.color = 'var(--dark-bg)';
        
        // Show notification
        showNotification('Promo code VANT copied to clipboard!');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = 'linear-gradient(90deg, var(--primary-green), var(--primary-blue))';
            button.style.color = 'white';
        }, 2000);
    });
}

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    });
}

// AI Chat functionality
function initChat() {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const quickQuestions = document.querySelectorAll('.quick-question');
    const floatingAiBtn = document.getElementById('floatingAiBtn');
    const aiChatPopup = document.getElementById('aiChatPopup');
    const closeChatBtn = document.getElementById('closeChatBtn');
    
    // Toggle chat popup
    floatingAiBtn.addEventListener('click', () => {
        aiChatPopup.classList.toggle('show');
    });
    
    // Close chat popup
    closeChatBtn.addEventListener('click', () => {
        aiChatPopup.classList.remove('show');
    });
    
    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!aiChatPopup.contains(e.target) && !floatingAiBtn.contains(e.target)) {
            aiChatPopup.classList.remove('show');
        }
    });
    
    // Send message on button click      
    sendBtn.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    // Quick question buttons
    quickQuestions.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.textContent;
            userInput.value = question;
            sendMessage();
        });
    });
    
    function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        userInput.value = '';
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message ai-message typing-indicator';
        typingIndicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate AI thinking
        setTimeout(() => {
            // Remove typing indicator
            typingIndicator.remove();
            
            // Get AI response
            let response = "I am a simple AI assistant. I can't answer questions yet.";
            
            addMessage(response, 'ai');
        }, 1500);
    }
    
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Show notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'position-fixed top-0 start-50 translate-middle-x mt-3 p-3 glass-card';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    notification.style.border = '1px solid var(--primary-green)';
    notification.style.color = 'var(--primary-green)';
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-check-circle me-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});