// Dynamic Theme Manager
function applyTheme() {
    const config = window.VALENTINE_CONFIG;
    if (!config || !config.colors) return;
    
    const root = document.documentElement;

    // Сверяем переменные со styles.css
    root.style.setProperty('--background-color-1', config.colors.backgroundStart || '#ffafbd');
    root.style.setProperty('--background-color-2', config.colors.backgroundEnd || '#ffc3a0');
    root.style.setProperty('--button-color', config.colors.buttonBackground || '#ff6b6b');
    root.style.setProperty('--button-hover', config.colors.buttonHover || '#ff8787');
    root.style.setProperty('--text-color', config.colors.textColor || '#ff4757');

    if (config.animations) {
        root.style.setProperty('--float-duration', config.animations.floatDuration || '15s');
        root.style.setProperty('--float-distance', config.animations.floatDistance || '50px');
        root.style.setProperty('--bounce-speed', config.animations.bounceSpeed || '0.5s');
        root.style.setProperty('--heart-explosion-size', config.animations.heartExplosionSize || '1.5');
    }
}

// Запуск при загрузке документа
window.addEventListener('DOMContentLoaded', applyTheme);
window.addEventListener('load', applyTheme);
