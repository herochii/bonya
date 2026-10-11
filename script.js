// Initialize configuration Safely
const config = window.VALENTINE_CONFIG;

// Validate configuration without breaking code execution
function validateConfig() {
    if (!config) {
        console.error("❌ VALENTINE_CONFIG is missing!");
        return;
    }

    if (!config.valentineName) config.valentineName = "Дамырак";

    // Fixed Regex Pattern (removed incorrect escape slash)
    const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\$/.test(hex);
    
    if (config.colors) {
        Object.entries(config.colors).forEach(([key, value]) => {
            if (!isValidHex(value)) {
                config.colors[key] = getDefaultColor(key);
            }
        });
    }

    if (!config.animations) config.animations = {};
    if (parseFloat(config.animations.floatDuration) < 5) config.animations.floatDuration = "5s";
    if (config.animations.heartExplosionSize < 1 || config.animations.heartExplosionSize > 3) config.animations.heartExplosionSize = 1.5;
}

function getDefaultColor(key) {
    const defaults = {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    };
    return defaults[key] || "#ff6b6b";
}

// Global DOM Content Loaded Handler
window.addEventListener('DOMContentLoaded', () => {
    validateConfig();

    if (config) {
        document.title = config.pageTitle || "Любимая 💝";
        
        // Safe Text Injection
        const elTitle = document.getElementById('valentineTitle');
        if (elTitle) elTitle.textContent = `${config.valentineName}, эжим...`;

        if (document.getElementById('question1Text')) document.getElementById('question1Text').textContent = config.questions.first.text;
        if (document.getElementById('yesBtn1')) document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
        if (document.getElementById('noBtn1')) document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
        if (document.getElementById('secretAnswerBtn')) document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;

        if (document.getElementById('question2Text')) document.getElementById('question2Text').textContent = config.questions.second.text;
        if (document.getElementById('startText')) document.getElementById('startText').textContent = config.questions.second.startText;
        if (document.getElementById('nextBtn')) document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;

        if (document.getElementById('question3Text')) document.getElementById('question3Text').textContent = config.questions.third.text;
        if (document.getElementById('yesBtn3')) document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
        if (document.getElementById('noBtn3')) document.getElementById('noBtn3').textContent = config.questions.third.noBtn;
    }

    createFloatingElements();
    setupMusicPlayer();
    setupEscapingButtons();
});

function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    if (!container || !config || !config.floatingEmojis) return;

    if (config.floatingEmojis.hearts) {
        config.floatingEmojis.hearts.forEach(heart => {
            const div = document.createElement('div');
            div.className = 'heart';
            div.innerHTML = heart;
            setRandomPosition(div);
            container.appendChild(div);
        });
    }

    if (config.floatingEmojis.bears) {
        config.floatingEmojis.bears.forEach(bear => {
            const div = document.createElement('div');
            div.className = 'bear';
            div.innerHTML = bear;
            setRandomPosition(div);
            container.appendChild(div);
        });
    }
}

function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    const duration = (config && config.animations && parseFloat(config.animations.floatDuration)) || 15;
    element.style.animationDuration = (duration / 2) + Math.random() * duration + 's';
}

function showNextQuestion(questionNumber) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const section = document.getElementById(`question${questionNumber}`);
    if (section) section.classList.remove('hidden');
}

function moveButton(button) {
    const padding = 30;
    const maxX = window.innerWidth - button.offsetWidth - padding;
    const maxY = window.innerHeight - button.offsetHeight - padding;
    
    const x = Math.max(padding, Math.random() * maxX);
    const y = Math.max(padding, Math.random() * maxY);
    
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
    button.style.zIndex = '9999';
}

function setupEscapingButtons() {
    const noBtn1 = document.getElementById('noBtn1');
    const noBtn3 = document.getElementById('noBtn3');

    [noBtn1, noBtn3].forEach(btn => {
        if (!btn) return;
        btn.addEventListener('mouseenter', () => moveButton(btn));
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            moveButton(btn);
        });
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            moveButton(btn);
        });
    });
}

// Love Meter Controls
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function setInitialPosition() {
    if (!loveMeter || !loveValue) return;
    loveMeter.value = 100;
    loveValue.textContent = "100";
}

if (loveMeter) {
    loveMeter.addEventListener('input', () => {
        const value = parseInt(loveMeter.value);
        if (loveValue) loveValue.textContent = value;

        if (value > 100) {
            if (extraLove) {
                extraLove.classList.remove('hidden');
                if (value >= 5000) {
                    extraLove.className = 'super-love';
                    extraLove.textContent = config.loveMessages.extreme;
                } else if (value > 1000) {
                    extraLove.className = '';
                    extraLove.textContent = config.loveMessages.high;
                } else {
                    extraLove.className = '';
                    extraLove.textContent = config.loveMessages.normal;
                }
            }
        } else {
            if (extraLove) extraLove.classList.add('hidden');
        }
    });
}

window.addEventListener('DOMContentLoaded', setInitialPosition);

// Final Screen Trigger
function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    if (!celebration || !config) return;

    celebration.classList.remove('hidden');
    if (document.getElementById('celebrationTitle')) document.getElementById('celebrationTitle').textContent = config.celebration.title;
    if (document.getElementById('celebrationMessage')) document.getElementById('celebrationMessage').textContent = config.celebration.message;
    if (document.getElementById('celebrationEmojis')) document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;

    createHeartExplosion();
}

function createHeartExplosion() {
    const container = document.querySelector('.floating-elements') || document.body;
    const list = (config && config.floatingEmojis && config.floatingEmojis.hearts) || ['❤️'];
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = list[Math.floor(Math.random() * list.length)];
        heart.className = 'heart';
        heart.style.position = 'fixed';
        container.appendChild(heart);
        setRandomPosition(heart);

        setTimeout(() => heart.remove(), 4000);
    }
}

// Background Music Stream Setup
function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    if (!musicControls || !bgMusic || !musicSource || !musicToggle || !config || !config.music) return;
    
    if (!config.music.enabled) {
        musicControls.style.display = 'none';
        return;
    }

    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    musicToggle.textContent = config.music.startText || "🎵 Play Music";

    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText || "🔇 Stop Music";
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText || "🎵 Play Music";
        }
    });

    if (config.music.autoplay) {
        const auto = () => {
            bgMusic.play().then(() => {
                musicToggle.textContent = config.music.stopText || "🔇 Stop Music";
                document.body.removeEventListener('click', auto);
            }).catch(() => console.log("User gesture required for audio..."));
        };
        document.body.addEventListener('click', auto);
    }
}
