// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Дамырак",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Любимая 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Любишь боню?",                                    // First interaction
            yesBtn: "ДА",                                             // Text for "Yes" button
            noBtn: "НЕТ",                                               // Text for "No" button
            secretAnswer: "Мы любим друг друга! ❤️"           // Secret hover message
        },
        second: {
            text: "Насколько ты любишь боню?",                          // For the love meter
            startText: "Сильна сильна!",                                   // Text before the percentage
            nextBtn: "Дальше ❤️"                                         // Text for the next button
        },
        third: {
            text: "Ты стала моей любовью в августе 2025? 🌹", // The big question!
            yesBtn: "Да!",                                             // Text for "Yes" button
            noBtn: "Нет"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "ВАУ ты так любишь меня?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "Бесконечно! 🚀💝",              // Shows when they go past 1000%
        normal: "Нет предела! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "ЯЯЯ самый счастливый в мире! 🎉💝💖💝💓",
        message: "Скоро получишь свой подарок, большие объятия и поцелуй в губки сверху и снизу!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
        // Background Music (Optional)
    music: {
        enabled: true,                     
        autoplay: true,                    
        musicUrl: "music/bg-music.mp3", 
        startText: "🎵",        // Просто эмодзи ноты для компактной круглой кнопки
        stopText: "🔇",         // Эмодзи выключения звука
        volume: 0.5                        
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 