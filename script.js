// ===== ПЕПЕЛ / ЧАСТИЦЫ =====
(function createAshes() {
    const oldContainer = document.querySelector('.particles-container');
    if (oldContainer) oldContainer.remove();
    
    const container = document.createElement('div');
    container.className = 'particles-container';
    document.body.appendChild(container);
    
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'ash-particle';
        
        const size = Math.floor(Math.random() * 4) + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        const leftPos = Math.random() * 100;
        particle.style.left = leftPos + '%';
        
        const duration = 8 + Math.random() * 17;
        const delay = Math.random() * 15;
        const drift = (Math.random() - 0.5) * 60;
        
        particle.style.animation = `floatUp ${duration}s linear infinite`;
        particle.style.animationDelay = delay + 's';
        particle.style.setProperty('--drift', drift + 'px');
        
        const opacity = 0.2 + Math.random() * 0.5;
        particle.style.opacity = opacity;
        
        container.appendChild(particle);
    }
    
    console.log('🌑 Dark Industries: Система пепла активирована, частиц создано: ' + particleCount);
})();

// ===== ВСЕ СЕКРЕТНЫЕ ЭФФЕКТЫ (ВОССТАНОВЛЕНЫ) =====
document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    
    // ЭФФЕКТ 1: Клавиша D - Вспышка сканера
    if(key === 'd') {
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.top = 0;
        flash.style.left = 0;
        flash.style.width = '100%';
        flash.style.height = '100%';
        flash.style.background = 'radial-gradient(circle, rgba(58,80,107,0.3) 0%, rgba(3,5,7,0) 80%)';
        flash.style.pointerEvents = 'none';
        flash.style.zIndex = '9997';
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 400);
        
        // Дополнительный звуковой эффект в консоли
        console.log('%c🔍 СКАНИРОВАНИЕ ПРОСТРАНСТВА...', 'color: #3A506B; font-size: 12px;');
    }
    
    // ЭФФЕКТ 2: Клавиша R - Радарная волна
    if(key === 'r') {
        const radar = document.createElement('div');
        radar.style.position = 'fixed';
        radar.style.top = '50%';
        radar.style.left = '50%';
        radar.style.width = '0px';
        radar.style.height = '0px';
        radar.style.borderRadius = '50%';
        radar.style.border = '2px solid #3A506B';
        radar.style.transform = 'translate(-50%, -50%)';
        radar.style.pointerEvents = 'none';
        radar.style.zIndex = '9997';
        document.body.appendChild(radar);
        
        let size = 0;
        const interval = setInterval(() => {
            size += 20;
            radar.style.width = `${size}px`;
            radar.style.height = `${size}px`;
            radar.style.opacity = 1 - size / 500;
            if(size > 500) {
                clearInterval(interval);
                radar.remove();
            }
        }, 20);
        
        console.log('%c📡 РАДАР АКТИВИРОВАН', 'color: #8E9DAF; font-size: 12px;');
    }
    
    // ЭФФЕКТ 3: Клавиша F - Эффект "мигание систем"
    if(key === 'f') {
        const systems = document.querySelectorAll('.system-status, .status-battle');
        systems.forEach(el => {
            const originalColor = el.style.color;
            el.style.color = '#C5D3E8';
            setTimeout(() => {
                el.style.color = originalColor;
            }, 200);
        });
        console.log('%c⚡ СИСТЕМЫ ПЕРЕГРУЖЕНЫ', 'color: #9C1D1D; font-size: 12px;');
    }
    
    // ЭФФЕКТ 4: Клавиша H - Эффект "голограмма"
    if(key === 'h') {
        const hologram = document.createElement('div');
        hologram.style.position = 'fixed';
        hologram.style.bottom = '20px';
        hologram.style.right = '20px';
        hologram.style.background = 'rgba(58,80,107,0.2)';
        hologram.style.border = '1px solid #3A506B';
        hologram.style.padding = '10px 20px';
        hologram.style.fontFamily = 'JetBrains Mono, monospace';
        hologram.style.fontSize = '12px';
        hologram.style.color = '#3A506B';
        hologram.style.zIndex = '9997';
        hologram.style.backdropFilter = 'blur(5px)';
        hologram.innerHTML = 'DARK INDUSTRIES // ТЕНЕВОЙ ПРОТОКОЛ // v.2075';
        document.body.appendChild(hologram);
        setTimeout(() => hologram.remove(), 3000);
        console.log('%c🖥 ГОЛОГРАММА АКТИВИРОВАНА', 'color: #C5D3E8; font-size: 12px;');
    }
    
    // ЭФФЕКТ 5: Клавиша C - Очистить консоль с эффектом
    if(key === 'c' && e.ctrlKey) {
        e.preventDefault();
        console.clear();
        console.log('%c⚫ ТЕНЕВОЙ ПРОТОКОЛ: КОНСОЛЬ ОЧИЩЕНА', 'color: #9C1D1D; font-size: 14px;');
        console.log('%cDARK INDUSTRIES | СЛЕДОВ НЕТ', 'color: #3A506B; font-size: 12px;');
    }
    
    // ЭФФЕКТ 6: Клавиша M - Эффект "маскировка"
    if(key === 'm') {
        const cards = document.querySelectorAll('.product-card, .project-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0.3';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 200);
            }, index * 50);
        });
        console.log('%c👻 РЕЖИМ МАСКИРОВКИ АКТИВИРОВАН', 'color: #5C6873; font-size: 12px;');
    }
    
    // ЭФФЕКТ 7: Клавиша T - Терминал (показать статус)
    if(key === 't') {
        const statusMsg = document.createElement('div');
        statusMsg.style.position = 'fixed';
        statusMsg.style.bottom = '80px';
        statusMsg.style.right = '20px';
        statusMsg.style.background = '#030507';
        statusMsg.style.border = '1px solid #3A506B';
        statusMsg.style.padding = '10px 15px';
        statusMsg.style.fontFamily = 'JetBrains Mono, monospace';
        statusMsg.style.fontSize = '11px';
        statusMsg.style.color = '#5C6873';
        statusMsg.style.zIndex = '9997';
        statusMsg.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
        statusMsg.innerHTML = `
            ┌─────────────────────────────────┐
            │  DARK INDUSTRIES v.2075         │
            │  ├─ Нейросеть: ▰▰▰▰▰▰▰▰▰▰ 100%  │
            │  ├─ Вооружение: ▰▰▰▰▰▰▰▰▰▰ 100% │
            │  ├─ Системы ПВО: ▰▰▰▰▰▰▰▰░░ 82% │
            │  └─ Теневой узел: ▰▰▰▰▰▰▰▰▰▰ ON │
            └─────────────────────────────────┘
        `;
        document.body.appendChild(statusMsg);
        setTimeout(() => statusMsg.remove(), 4000);
        console.log('%c📟 ТЕРМИНАЛ АКТИВИРОВАН', 'color: #8E9DAF; font-size: 12px;');
    }
});

// ===== АНИМАЦИЯ ПРИ СКРОЛЛЕ =====
const fadeElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

fadeElements.forEach(el => observer.observe(el));

// ===== АКТИВНАЯ ССЫЛКА В НАВИГАЦИИ =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if(href === currentPage) {
        link.classList.add('active');
    }
});

// ===== МЕРЦАНИЕ СТАТУСОВ =====
setInterval(() => {
    document.querySelectorAll('.status-battle, .system-status').forEach(el => {
        if(Math.random() > 0.8) {
            el.style.opacity = '0.5';
            setTimeout(() => el.style.opacity = '1', 150);
        }
    });
}, 2500);

// ===== СЕТКА СЛЕДУЕТ ЗА МЫШЬЮ =====
document.addEventListener('mousemove', (e) => {
    const grid = document.querySelector('.grid-overlay');
    if(grid) {
        const x = (e.clientX / window.innerWidth - 0.5) * 15;
        const y = (e.clientY / window.innerHeight - 0.5) * 15;
        grid.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// ===== ЭФФЕКТ ПРИ ЗАГРУЗКЕ =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 50);
    
    // Приветствие в консоли
    console.log('%c═══════════════════════════════════════════════════', 'color: #3A506B');
    console.log('%c     DARK INDUSTRIES  //  ТЕНЕВОЙ ПРОТОКОЛ 2075', 'color: #8E9DAF; font-size: 16px; font-weight: bold');
    console.log('%c═══════════════════════════════════════════════════', 'color: #3A506B');
    console.log('%c🎮 СЕКРЕТНЫЕ ЭФФЕКТЫ (нажмите клавиши):', 'color: #5C6873; font-size: 12px');
    console.log('%c   [D] - Вспышка сканера', 'color: #3A506B');
    console.log('%c   [R] - Радарная волна', 'color: #3A506B');
    console.log('%c   [F] - Мигание систем', 'color: #3A506B');
    console.log('%c   [H] - Голограмма', 'color: #3A506B');
    console.log('%c   [M] - Маскировка карточек', 'color: #3A506B');
    console.log('%c   [T] - Терминал статуса', 'color: #3A506B');
    console.log('%c   [Ctrl+C] - Очистка с эффектом', 'color: #3A506B');
    console.log('%c═══════════════════════════════════════════════════', 'color: #3A506B');
});

// ===== ДОПОЛНИТЕЛЬНО: Эффект при клике на карточки =====
document.querySelectorAll('.product-card, .project-card, .btn').forEach(el => {
    el.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '10px';
        ripple.style.height = '10px';
        ripple.style.background = 'rgba(58,80,107,0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.left = e.clientX - el.getBoundingClientRect().left + 'px';
        ripple.style.top = e.clientY - el.getBoundingClientRect().top + 'px';
        ripple.style.zIndex = '100';
        el.style.position = 'relative';
        el.style.overflow = 'hidden';
        el.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 500);
    });
});