// Website Data - All editable here
const websiteData = {
    matches: [
        { date: "Today, 20:00", teams: "Manchester United vs Liverpool", type: "Premier League", prediction: "Over 2.5 Goals" },
        { date: "Today, 21:00", teams: "Barcelona vs Real Madrid", type: "La Liga", prediction: "Both Teams to Score" },
        { date: "Today, 19:30", teams: "Bayern Munich vs Borussia Dortmund", type: "Bundesliga", prediction: "Home Win" },
        { date: "Today, 22:00", teams: "PSG vs Marseille", type: "Ligue 1", prediction: "Over 3.5 Goals" },
        { date: "Tomorrow, 18:00", teams: "Chelsea vs Arsenal", type: "Premier League", prediction: "Draw" },
        { date: "Tomorrow, 20:00", teams: "AC Milan vs Inter Milan", type: "Serie A", prediction: "Away Win" }
    ],
    
    bettingCodes: [
        { code: "904843JS", odds: "2.45", type: "hot", sport: "Football" },
        { code: "31984hf", odds: "1.85", type: "vip", sport: "Football" },
        { code: "93847FRJ", odds: "1.65", type: "normal", sport: "Football" }
    ],
    
    aiResponses: {
        // Registration & Account
        "register": "To register on PariPesa: 1) Visit the official PariPesa website, 2) Click 'Register' and fill in your details, 3) Enter promo code <strong>VANT</strong> during registration, 4) Verify your account via email/SMS. Don't forget to use the promo code VANT for exclusive bonuses!",
        "account": "To create your account: Go to paripesa.com → Click 'Sign Up' → Fill in your name, email, phone → Enter promo code <strong>VANT</strong> → Verify via email/SMS → Start betting with your welcome bonus!",
        "verification": "Account verification is required for security. You'll need to provide: 1) Valid ID (passport, driver's license), 2) Proof of address (utility bill), 3) Selfie with ID. This usually takes 1-24 hours.",
        "login": "To login: Visit paripesa.com → Click 'Login' → Enter your email/phone and password → If you forgot password, click 'Reset Password' → Check your email for reset link.",
        
        // Promo Codes & Bonuses
        "promo": "The exclusive promo code is <strong class='neon-text' style='color: var(--primary-green);'>VANT</strong>. Use this code during registration on PariPesa to unlock special bonuses and free bets. Click the 'COPY CODE' button above to copy it instantly!",
        "bonus": "With promo code VANT you get: 1) 100% Welcome Bonus up to $100, 2) 5 Free Bets on registration, 3) VIP Access to exclusive tips, 4) Daily cashback offers. The bonus is credited within 15 minutes after first deposit.",
        "deposit": "Minimum deposit: $5. Methods: Visa/Mastercard, Skrill, Neteller, Bitcoin, Bank Transfer. Bonus activated with code VANT on first deposit. Withdrawal time: 1-24 hours.",
        "withdrawal": "Withdrawal process: 1) Go to 'My Account' → 'Withdraw', 2) Choose payment method, 3) Enter amount, 4) Submit verification if needed. Minimum withdrawal: $10. Processing: 1-24 hours.",
        
        // WhatsApp & Groups
        "whatsapp": "We have 3 active WhatsApp groups: 1) VIP Winners Group (high-success codes), 2) Football Predictions (daily tips), 3) Multi-Sport Tips (basketball, tennis, etc.). Click any 'JOIN NOW' button in the WhatsApp section to join instantly!",
        "group": "Join our WhatsApp groups for: 1) Daily winning codes, 2) Live match tips, 3) Expert predictions, 4) Community support. Groups are active 24/7 with 70-85% success rate.",
        "vip": "VIP Group benefits: 1) Early access to codes, 2) Premium predictions (85%+ success), 3) Personal assistant, 4) Exclusive bonuses. Join via the 'VIP Winners Group' button.",
        
        // Matches & Predictions
        "matches": "Check 'Today's Hot Matches' section for live games with predictions. We provide: 1) Live scores, 2) Match statistics, 3) Expert predictions, 4) Betting odds. Updated in real-time!",
        "prediction": "Our predictions are based on: 1) Team form, 2) Head-to-head stats, 3) Injury reports, 4) Market analysis. Success rate: 75-85%. Always bet responsibly.",
        "odds": "Odds represent probability. Higher odds = higher risk. Our recommended strategy: 1) Bet on predictions with odds 1.50-2.50, 2) Use multiple bets, 3) Set limits, 4) Follow our VIP codes.",
        
        // Betting Codes
        "codes": "Daily betting codes are posted in: 1) WhatsApp groups (VIP gets earliest), 2) 'Betting Codes' section here, 3) Telegram channel. Use code VANT for registration bonus.",
        "vipcode": "VIP codes have 80-90% success rate. Get them by: 1) Joining VIP WhatsApp group, 2) Using promo code VANT, 3) Being active in community. Updated 3-5 times daily.",
        "freecode": "Free codes are posted daily in our public groups. Success rate: 65-75%. For higher success (85%+), upgrade to VIP using promo code VANT.",
        
        // Sports & Leagues
        "football": "We cover: Premier League, La Liga, Bundesliga, Serie A, Champions League, Europa League. Daily predictions for all major football matches.",
        "basketball": "NBA, EuroLeague predictions available. Join 'Multi-Sport Tips' WhatsApp group for basketball codes and analysis.",
        "tennis": "ATP, WTA tournament predictions. We provide match analysis, player form, and betting tips for all Grand Slams.",
        
        // Support & Help
        "support": "24/7 support available via: 1) WhatsApp: Click the floating green button, 2) Email: support@paripesa.com, 3) Live Chat: On PariPesa website. Response time: 5-15 minutes.",
        "problem": "Common issues: 1) Can't register? Clear browser cache, 2) Bonus not credited? Contact support with transaction ID, 3) Account blocked? Verify your documents.",
        "contact": "Contact us: 1) WhatsApp: +1234567890, 2) Email: help@paripesapromo.com, 3) Telegram: @paripesa2050. We reply within 15 minutes.",
        
        // Legal & Safety
        "legal": "Important: 1) Must be 18+, 2) Gambling can be addictive, 3) Set deposit limits, 4) Bet responsibly. See 'Legal Notice' in footer for details.",
        "responsible": "Bet responsibly: 1) Set time limits, 2) Never chase losses, 3) Don't bet under influence, 4) Take breaks. If you need help: begambleaware.org",
        "age": "You must be 18+ to register and bet. Age verification is required. We comply with all gambling regulations.",
        
        // Success Stories
        "win": "Recent wins by members: 1) John W. won $2,500 with our VIP code, 2) Sarah L. turned $50 into $800, 3) Mike T. won $1,200 on football accumulator. Join to be next!",
        "success": "Our community success: 1) 85% VIP code success rate, 2) Over 10,000 members, 3) $500,000+ won last month, 4) 24/7 active community support.",
        
        // Quick Tips
        "tips": "Winning tips: 1) Start with small bets, 2) Follow our predictions, 3) Use promo code VANT, 4) Join WhatsApp groups, 5) Bet responsibly, 6) Withdraw winnings regularly.",
        "strategy": "Recommended strategy: 1) Bet 1-3% of bankroll per bet, 2) Focus on 2-3 sports, 3) Track your bets, 4) Follow value bets (odds > 2.0), 5) Use our VIP codes.",
        
        // Technical
        "app": "PariPesa has mobile apps for: 1) iOS (App Store), 2) Android (Google Play/APK), 3) Mobile website. All features work on mobile with promo code VANT.",
        "mobile": "Mobile betting features: 1) Live betting, 2) Cash out, 3) Notifications, 4) Quick deposit. Use same login details as website.",
        "website": "Official website: paripesa.com. Always check URL for security. Our promotional site: paripesa2050.com (not for betting).",
        
        // Default & General
        "default": "I'm your PariPesa Assistant! I can help with: Registration, Promo codes, WhatsApp groups, Betting tips, Account issues, Bonuses, Withdrawals, and more! Try asking: 'How do I get bonus?', 'What is VIP?', 'How to withdraw?'",
        "hello": "Hello! Welcome to PariPesa 2050! 🚀 I'm here to help you win big! How can I assist you today? Try asking about registration, promo codes, or WhatsApp groups!",
        "thanks": "You're welcome! 😊 Remember to use promo code <strong>VANT</strong> for exclusive bonuses! Good luck with your bets! Need anything else?",
        "help": "I can help with: 1) Registration & bonuses, 2) Promo codes, 3) WhatsApp groups, 4) Betting tips, 5) Account issues, 6) Withdrawals. What do you need help with?"
    }
};

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
    const matchesGrid = document.getElementById('matchesGrid');
    websiteData.matches.forEach((match, index) => {
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

    // Load betting codes
    const bettingCodesContainer = document.getElementById('bettingCodes');
    websiteData.bettingCodes.forEach(code => {
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
            let response = websiteData.aiResponses.default;
            const lowerMessage = message.toLowerCase();

            // Enhanced keyword matching
            const responseMap = {
                // Registration & Account
                'register|signup|sign up|create account|account': 'register',
                'login|log in|signin|sign in': 'login',
                'verify|verification|kyc|document': 'verification',
                'account|profile|my account': 'account',
                
                // Promo & Bonuses
                'promo|promocode|promo code|code|vant': 'promo',
                'bonus|welcome|free|reward': 'bonus',
                'deposit|add money|fund': 'deposit',
                'withdraw|withdrawal|cash out|payout': 'withdrawal',
                
                // WhatsApp & Groups
                'whatsapp|group|groups|community|join': 'whatsapp',
                'vip|premium|exclusive': 'vip',
                'telegram|channel': 'group',
                
                // Matches & Predictions
                'match|matches|fixture|game': 'matches',
                'predict|prediction|tip|tips': 'prediction',
                'odds|value|probability': 'odds',
                
                // Betting Codes
                'code|codes|betting code|free code': 'codes',
                'vip code|premium code': 'vipcode',
                'free code|daily code': 'freecode',
                
                // Sports
                'football|soccer|premier league|la liga': 'football',
                'basketball|nba|hoops': 'basketball',
                'tennis|wimbledon|us open': 'tennis',
                
                // Support
                'support|help|assistance|contact': 'support',
                'problem|issue|error|not working': 'problem',
                'contact|email|phone|number': 'contact',
                
                // Legal & Safety
                'legal|terms|condition|rule': 'legal',
                'responsible|gamble|addict|problem': 'responsible',
                'age|18+|old enough|underage': 'age',
                
                // Success
                'win|won|winner|success|profit': 'win',
                'success rate|winning|profit': 'success',
                
                // Tips & Strategy
                'tip|advice|how to bet|strategy': 'tips',
                'strategy|method|system|plan': 'strategy',
                
                // Technical
                'app|application|download|mobile app': 'app',
                'mobile|phone|tablet': 'mobile',
                'website|site|url|link': 'website',
                
                // Greetings
                'hello|hi|hey|greetings': 'hello',
                'thanks|thank you|appreciate': 'thanks',
                'help|what can you do|assist': 'help'
            };

            // Find matching response
            let matchedResponse = 'default';
            for (const [pattern, responseKey] of Object.entries(responseMap)) {
                const patterns = pattern.split('|');
                if (patterns.some(p => lowerMessage.includes(p))) {
                    matchedResponse = responseKey;
                    break;
                }
            }

            response = websiteData.aiResponses[matchedResponse] || websiteData.aiResponses.default;

            // Add personal touch for greeting responses
            if (matchedResponse === 'hello') {
                const greetings = [
                    "Hello! Ready to win big with PariPesa? 🚀",
                    "Hi there! Excited to help you with betting success! ⚽",
                    "Hey! Welcome to the future of sports betting! 💎",
                    "Greetings! Let's find you some winning bets today! 🏆"
                ];
                response = greetings[Math.floor(Math.random() * greetings.length)] + " " + response;
            }
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