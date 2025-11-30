// Birthday Website - JavaScript
// The Rookie themed features

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Birthday website loaded!');
    
    // Initialize animated background
    initializeAnimatedBackground();
    
    // Initialize tabs
    initializeTabs();
    
    // Initialize Birthday Info features
    initializeBirthdayFeatures();
    
    // Initialize theme toggle
    initializeThemeToggle();
    
    // Initialize Rookie features
    initializeRookieFeatures();
});

// ============================================
// Animated Background
// ============================================

function initializeAnimatedBackground() {
    const background = document.getElementById('animatedBackground');
    if (!background) return;
    
    // Detect mobile device for reduced animations
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Reduced element counts for better performance
    const starCount = isMobile ? 15 : 25;
    const heartCount = isMobile ? 6 : 10;
    const sparkleCount = isMobile ? 8 : 12;
    const balloonCount = isMobile ? 3 : 5;
    const confettiCount = isMobile ? 5 : 8;
    
    // Create stars (reduced count)
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 2) + 's';
        background.appendChild(star);
    }
    
    // Create floating hearts (reduced count)
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '💖';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.animationDuration = (8 + Math.random() * 4) + 's';
        heart.style.fontSize = (1 + Math.random() * 0.5) + 'rem';
        background.appendChild(heart);
    }
    
    // Create sparkles (reduced count)
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = '✨';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        sparkle.style.animationDuration = (3 + Math.random() * 2) + 's';
        background.appendChild(sparkle);
    }
    
    // Create floating particles (only on desktop, less frequent)
    if (!isMobile) {
        let particleCount = 0;
        const maxParticles = 5;
        
        function createParticle() {
            if (particleCount >= maxParticles) return;
            
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            background.appendChild(particle);
            particleCount++;
            
            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
                particleCount--;
            }, 20000);
        }
        
        // Create particles less frequently
        setInterval(createParticle, 4000);
        
        // Create initial particles
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createParticle(), i * 800);
        }
    }
    
    // Add floating balloons (reduced count)
    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'floating-balloon';
        balloon.textContent = '🎈';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.top = Math.random() * 100 + '%';
        balloon.style.animationDelay = Math.random() * 6 + 's';
        balloon.style.animationDuration = (12 + Math.random() * 8) + 's';
        balloon.style.fontSize = (1.2 + Math.random() * 0.8) + 'rem';
        background.appendChild(balloon);
    }
    
    // Add confetti elements (reduced count)
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 4 + 's';
        confetti.style.animationDuration = (5 + Math.random() * 5) + 's';
        background.appendChild(confetti);
    }
}

// ============================================
// Tab System
// ============================================

function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');
        });
    });
}

// ============================================
// Birthday Info Features
// ============================================

function initializeBirthdayFeatures() {
    // Birthday Paragraph Modal
    const paragraphButton = document.getElementById('paragraphButton');
    const paragraphModal = document.getElementById('paragraphModal');
    const paragraphClose = document.getElementById('paragraphClose');
    
    if (paragraphButton && paragraphModal) {
        paragraphButton.addEventListener('click', function() {
            paragraphModal.style.display = 'flex';
        });
    }
    
    if (paragraphClose && paragraphModal) {
        paragraphClose.addEventListener('click', function() {
            paragraphModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    if (paragraphModal) {
        paragraphModal.addEventListener('click', function(e) {
            if (e.target === paragraphModal) {
                paragraphModal.style.display = 'none';
            }
        });
    }
    
    // Initialize Zodiac Sign
    initializeZodiacSign();
    
    // Initialize Birthday Statistics
    initializeBirthdayStats();
    
    // Initialize new Birthday features
    initializeBirthdayFunFeatures();
}

// Theme toggle
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    let currentTheme = 0; // 0 = default
    const themes = ['theme-1', 'theme-2', 'theme-3', 'theme-4'];
    
    themeToggle.addEventListener('click', function() {
        const root = document.documentElement;
        root.classList.remove(...themes);
        currentTheme = (currentTheme + 1) % (themes.length + 1);
        if (currentTheme > 0) {
            root.classList.add(themes[currentTheme - 1]);
        }
    });
}

// Zodiac Sign (Sagittarius for November 28)
function initializeZodiacSign() {
    const zodiacInfo = document.getElementById('zodiacInfo');
    if (!zodiacInfo) return;
    
    const zodiacData = {
        name: "Sagittarius",
        symbol: "♐",
        dates: "November 22 - December 21",
        description: "You're adventurous, optimistic, and love exploring new ideas and places!",
        traits: "Independent, philosophical, enthusiastic, and always seeking the truth."
    };
    
    zodiacInfo.innerHTML = `
        <div class="zodiac-sign-name">${zodiacData.symbol} ${zodiacData.name}</div>
        <div class="zodiac-dates">${zodiacData.dates}</div>
        <div class="zodiac-description">${zodiacData.description}</div>
        <div class="zodiac-traits">${zodiacData.traits}</div>
    `;
}

// Birthday Statistics
function initializeBirthdayStats() {
    const statsGrid = document.getElementById('statsGrid');
    if (!statsGrid) return;
    
    const birthDate = new Date(2011, 10, 28); // November 28, 2011 (month is 0-indexed)
    const today = new Date();
    
    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    // Calculate days lived
    const daysLived = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
    
    // Calculate weeks lived
    const weeksLived = Math.floor(daysLived / 7);
    
    // Calculate months lived
    const monthsLived = age * 12 + monthDiff;
    if (monthDiff < 0) {
        monthsLived--;
    }
    
    // Calculate minutes lived (approximate)
    const hoursLived = daysLived * 24;
    const minutesLived = hoursLived * 60;
    
    // Calculate heartbeats (average 70 bpm)
    const heartbeats = Math.floor(minutesLived * 70);
    
    const stats = [
        { label: "Years Old", number: age, emoji: "🎂" },
        { label: "Days Lived", number: daysLived.toLocaleString(), emoji: "📅" },
        { label: "Weeks Lived", number: weeksLived.toLocaleString(), emoji: "📆" },
        { label: "Months Lived", number: monthsLived.toLocaleString(), emoji: "🗓️" },
        { label: "Smiles Shared", number: "∞", emoji: "😊" },
        { label: "Happiness Spread", number: "∞", emoji: "✨" }
    ];
    
    statsGrid.innerHTML = stats.map(stat => `
        <div class="stat-item">
            <div class="stat-emoji">${stat.emoji}</div>
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');
}

// ============================================
// The Rookie Features
// ============================================

function initializeRookieFeatures() {
    // Actors born in November - auto-display
    const actorsContainer = document.getElementById('rookieActorsContainer');
    if (actorsContainer) {
        generateRookieActors();
    }
    
    // Character Generator
    const characterButton = document.getElementById('rookieCharacterButton');
    const characterContainer = document.getElementById('rookieCharacterContainer');
    if (characterButton && characterContainer) {
        characterButton.addEventListener('click', generateRookieCharacter);
    }
    
    // Quote Generator
    const quoteButton = document.getElementById('rookieQuoteButton');
    const quoteContainer = document.getElementById('rookieQuoteContainer');
    if (quoteButton && quoteContainer) {
        quoteButton.addEventListener('click', generateRookieQuote);
    }
    
    // Initialize new LAPD features
    initializeLAPDFunFeatures();
}

// Rookie Actors born in November
function generateRookieActors() {
    const container = document.getElementById('rookieActorsContainer');
    if (!container) return;
    
    const actors = [
        { name: "Nathan Fillion", character: "John Nolan", birthday: "March 27, 1971", note: "Not in November, but the star of the show!" },
        { name: "Alyssa Diaz", character: "Angela Lopez", birthday: "September 7, 1985", note: "Born in September" },
        { name: "Richard T. Jones", character: "Wade Grey", birthday: "January 16, 1972", note: "Born in January" },
        { name: "Melissa O'Neil", character: "Lucy Chen", birthday: "July 12, 1988", note: "Born in July" },
        { name: "Eric Winter", character: "Tim Bradford", birthday: "July 17, 1976", note: "Born in July" },
        { name: "Mekia Cox", character: "Nyla Harper", birthday: "November 18, 1981", note: "Born in November! 🎂" },
        { name: "Tru Valentino", character: "Aaron Thorsen", birthday: "October 8, 1995", note: "Born in October" },
        { name: "Lisseth Chavez", character: "Celina Juarez", birthday: "May 25, 1993", note: "Born in May" }
    ];
    
    const novemberActors = actors.filter(actor => actor.birthday.includes("November"));
    
    if (novemberActors.length > 0) {
        container.innerHTML = novemberActors.map(actor => `
            <div class="rookie-actor-card">
                <div class="rookie-actor-name">${actor.name}</div>
                <div class="rookie-actor-character">as ${actor.character}</div>
                <div class="rookie-actor-birthday">${actor.birthday}</div>
                <div class="rookie-actor-note">${actor.note}</div>
            </div>
        `).join('');
    } else {
        container.innerHTML = `
            <div class="rookie-actor-card">
                <div class="rookie-actor-name">Mekia Cox</div>
                <div class="rookie-actor-character">as Nyla Harper</div>
                <div class="rookie-actor-birthday">November 18, 1981</div>
                <div class="rookie-actor-note">Born in November! 🎂</div>
            </div>
        `;
    }
}


// Character Generator
function generateRookieCharacter() {
    const container = document.getElementById('rookieCharacterContainer');
    if (!container) return;
    
    const characters = [
        {
            name: "John Nolan",
            description: "You're the determined rookie who never gives up! Like John, you're always ready to learn and grow.",
            emoji: "👮‍♂️"
        },
        {
            name: "Tim Bradford",
            description: "You're tough but fair, always looking out for others. You have that protective, mentor energy!",
            emoji: "🛡️"
        },
        {
            name: "Lucy Chen",
            description: "You're smart, ambitious, and always ready for a challenge. You've got that go-getter spirit!",
            emoji: "⭐"
        },
        {
            name: "Angela Lopez",
            description: "You're confident, capable, and know how to get things done. You're a natural leader!",
            emoji: "💼"
        },
        {
            name: "Nyla Harper",
            description: "You're strong, resilient, and always there when people need you. You're a true friend!",
            emoji: "💪"
        },
        {
            name: "Aaron Thorsen",
            description: "You're energetic, optimistic, and bring positive vibes wherever you go!",
            emoji: "🌟"
        },
        {
            name: "Celina Juarez",
            description: "You're intuitive, caring, and have a unique perspective on things. You see the world differently!",
            emoji: "🔮"
        },
        {
            name: "Wade Grey",
            description: "You're wise, experienced, and always know the right thing to say. You're a great mentor!",
            emoji: "🎓"
        }
    ];
    
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    
    container.innerHTML = `
        <div class="rookie-character-card">
            <div class="rookie-character-emoji">${randomCharacter.emoji}</div>
            <div class="rookie-character-name-large">${randomCharacter.name}</div>
            <div class="rookie-character-description">${randomCharacter.description}</div>
        </div>
    `;
}

// Quote Generator
function generateRookieQuote() {
    const container = document.getElementById('rookieQuoteContainer');
    if (!container) return;
    
    const quotes = [
        {
            quote: "It's never too late to start something new.",
            character: "John Nolan"
        },
        {
            quote: "You don't get to choose when you're a hero. You just are.",
            character: "Tim Bradford"
        },
        {
            quote: "The only way to get better is to keep pushing yourself.",
            character: "Lucy Chen"
        },
        {
            quote: "Trust your instincts. They're usually right.",
            character: "Angela Lopez"
        },
        {
            quote: "Sometimes the hardest part is just showing up.",
            character: "Nyla Harper"
        },
        {
            quote: "We're all rookies at something. That's what makes life interesting.",
            character: "John Nolan"
        },
        {
            quote: "You can't control everything, but you can control how you respond.",
            character: "Tim Bradford"
        },
        {
            quote: "Every day is a chance to be better than yesterday.",
            character: "Lucy Chen"
        },
        {
            quote: "The best way to learn is by doing.",
            character: "Angela Lopez"
        },
        {
            quote: "You're stronger than you think you are.",
            character: "Nyla Harper"
        }
    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    container.innerHTML = `
        <div class="rookie-quote-card">
            <div class="rookie-quote-text">"${randomQuote.quote}"</div>
            <div class="rookie-quote-author">— ${randomQuote.character}</div>
        </div>
    `;
}

// ============================================
// New Birthday Info Features
// ============================================

function initializeBirthdayFunFeatures() {
    // Fun Facts
    const funFactsContainer = document.getElementById('funFactsContainer');
    if (funFactsContainer) {
        generateFunFact();
    }
    
    // Color Palette
    const colorPaletteContainer = document.getElementById('colorPaletteContainer');
    if (colorPaletteContainer) {
        generateColorPalette();
    }
    
    // Initialize new birthday features
    initializeNewBirthdayFeatures();
}

// Fun Facts Generator
function generateFunFact() {
    const container = document.getElementById('funFactsContainer');
    if (!container) return;
    
    const facts = [
        "November 28th is the 332nd day of the year!",
        "On this day in 2011, you were born - making it the best day ever!",
        "November babies are known for being optimistic and adventurous!",
        "Your birthstone is Topaz or Citrine - both beautiful golden stones!",
        "Sagittarius (your sign) is ruled by Jupiter, the planet of expansion!",
        "November 28th falls during Thanksgiving week in the US!",
        "People born in late November are often creative and independent!",
        "Your lucky numbers might be 2, 8, 11, and 28!",
        "November babies tend to be great friends and loyal companions!",
        "On November 28th, the world gained an amazing person - you!",
        "Sagittarius season brings adventure, travel, and new experiences!",
        "November 28th is close to the holiday season - double celebration!",
        "Your zodiac element is Fire - you're passionate and energetic!",
        "Late November birthdays mean you're a Thanksgiving baby!",
        "People born on the 28th are often natural leaders!"
    ];
    
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    
    container.innerHTML = `
        <div class="fun-fact-card">
            <div class="fun-fact-emoji">🎉</div>
            <div class="fun-fact-text">${randomFact}</div>
        </div>
    `;
}

// Color Palette Generator
function generateColorPalette() {
    const container = document.getElementById('colorPaletteContainer');
    if (!container) return;
    
    const colors = [
        { name: "Sagittarius Gold", hex: "#FFD700", meaning: "Optimism & Adventure" },
        { name: "November Purple", hex: "#9B59B6", meaning: "Creativity & Wisdom" },
        { name: "Autumn Orange", hex: "#FF8C00", meaning: "Warmth & Energy" },
        { name: "Fire Red", hex: "#E74C3C", meaning: "Passion & Strength" },
        { name: "Thanksgiving Brown", hex: "#8B4513", meaning: "Stability & Grounding" },
        { name: "Sunset Pink", hex: "#FF69B4", meaning: "Joy & Celebration" }
    ];
    
    container.innerHTML = `
        <div class="color-palette-grid">
            ${colors.map(color => `
                <div class="color-swatch-item">
                    <div class="color-swatch-circle" style="background-color: ${color.hex}"></div>
                    <div class="color-swatch-name">${color.name}</div>
                    <div class="color-swatch-hex">${color.hex}</div>
                    <div class="color-swatch-meaning">${color.meaning}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// ============================================
// New Birthday Features
// ============================================

// Countdown to Next Birthday
function updateCountdown() {
    const container = document.getElementById('countdownDisplay');
    if (!container) return;
    
    const birthDate = new Date(2011, 10, 28); // November 28, 2011
    const today = new Date();
    const currentYear = today.getFullYear();
    
    // Calculate next birthday
    let nextBirthday = new Date(currentYear, 10, 28);
    if (today > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, 10, 28);
    }
    
    const diff = nextBirthday - today;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    container.innerHTML = `
        <div class="countdown-expanded">
            <div class="countdown-expanded-item">
                <div class="countdown-expanded-value">${days}</div>
                <div class="countdown-expanded-label">Days</div>
            </div>
            <div class="countdown-expanded-item">
                <div class="countdown-expanded-value">${hours}</div>
                <div class="countdown-expanded-label">Hours</div>
            </div>
            <div class="countdown-expanded-item">
                <div class="countdown-expanded-value">${minutes}</div>
                <div class="countdown-expanded-label">Minutes</div>
            </div>
            <div class="countdown-expanded-item">
                <div class="countdown-expanded-value">${seconds}</div>
                <div class="countdown-expanded-label">Seconds</div>
            </div>
        </div>
    `;
}

// Numerology
function generateNumerology() {
    const container = document.getElementById('numerologyInfo');
    if (!container) return;
    
    // November 28, 2011
    // 11 + 28 + 2011 = 2050
    // 2 + 0 + 5 + 0 = 7
    const lifePathNumber = 7;
    
    container.innerHTML = `
        <div class="info-compact-small">
            <div class="info-compact-small-number">${lifePathNumber}</div>
            <div class="info-compact-small-text">The Seeker</div>
        </div>
    `;
}

// Birthstone
function generateBirthstone() {
    const container = document.getElementById('birthstoneInfo');
    if (!container) return;
    
    container.innerHTML = `
        <div class="info-compact-small">
            <div class="info-compact-small-emoji">💎</div>
            <div class="info-compact-small-text">Topaz & Citrine</div>
        </div>
    `;
}

// Birth Flower
function generateBirthflower() {
    const container = document.getElementById('birthflowerInfo');
    if (!container) return;
    
    container.innerHTML = `
        <div class="info-compact-small">
            <div class="info-compact-small-emoji">🌸</div>
            <div class="info-compact-small-text">Chrysanthemum</div>
        </div>
    `;
}

// ============================================
// New Birthday Features
// ============================================

function initializeNewBirthdayFeatures() {
    // Countdown Timer
    const countdownDisplay = document.getElementById('countdownDisplay');
    if (countdownDisplay) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // Numerology
    const numerologyInfo = document.getElementById('numerologyInfo');
    if (numerologyInfo) {
        generateNumerology();
    }
    
    // Birthstone
    const birthstoneInfo = document.getElementById('birthstoneInfo');
    if (birthstoneInfo) {
        generateBirthstone();
    }
    
    // Birth Flower
    const birthflowerInfo = document.getElementById('birthflowerInfo');
    if (birthflowerInfo) {
        generateBirthflower();
    }
    
    // Birthday Wishes
    const wishesContainer = document.getElementById('wishesContainer');
    if (wishesContainer) {
        generateBirthdayWishes();
    }
}

// Birthday Wishes
function generateBirthdayWishes() {
    const container = document.getElementById('wishesContainer');
    if (!container) return;
    
    const wishes = [
        "May all your dreams come true! ✨",
        "Wishing you endless happiness! 💖",
        "May this year be your best one yet! 🌟",
        "Hope all your wishes come true! 🎂",
        "Sending you lots of love and joy! 💝",
        "May you have the most amazing year! 🎉"
    ];
    
    container.innerHTML = `
        <div class="wishes-grid">
            ${wishes.map(wish => `
                <div class="wish-item-small">
                    <div class="wish-text-small">${wish}</div>
                </div>
            `).join('')}
        </div>
    `;
}


// ============================================
// New LAPD Features
// ============================================

function initializeLAPDFunFeatures() {
    // Badge Generator
    const badgeButton = document.getElementById('badgeButton');
    const badgeContainer = document.getElementById('badgeContainer');
    if (badgeButton && badgeContainer) {
        badgeButton.addEventListener('click', generateBadge);
    }
}

// Badge Generator
function generateBadge() {
    const container = document.getElementById('badgeContainer');
    if (!container) return;
    
    const badgeNumbers = ["7234", "7235", "7236", "7237", "7238", "7239", "7240"];
    const ranks = ["Officer", "Senior Officer", "Detective", "Sergeant"];
    const divisions = ["Mid-Wilshire", "Hollywood", "Downtown", "West LA"];
    
    const randomBadgeNumber = badgeNumbers[Math.floor(Math.random() * badgeNumbers.length)];
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
    const randomDivision = divisions[Math.floor(Math.random() * divisions.length)];
    
    container.innerHTML = `
        <div class="badge-card">
            <div class="badge-shield">🛡️</div>
            <div class="badge-title">LAPD OFFICER</div>
            <div class="badge-name">Amena</div>
            <div class="badge-number">Badge #${randomBadgeNumber}</div>
            <div class="badge-rank">${randomRank}</div>
            <div class="badge-division">${randomDivision} Division</div>
        </div>
    `;
}

