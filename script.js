// Данные участников (полный список)
const members = [
    {
        role: "creator",
        nick: "шафо",
        user: "@nothevo",
        project: "https://t.me/+xm9o_NoMxjVjNjgy",
        description: "С 2022 года в км. Начинал с лики шафро, под ней были вылиднуты американо, овнер клана монхайз и апостал. Лика шафро была второй, а лика шафо - третьей лики. Все еще при мне.",
        details: "Владелец Фейм Листа. Проекты: https://t.me/+xm9o_NoMxjVjNjgy"
    },
    {
        role: "high",
        nick: "сверк",
        user: "@vsrns",
        project: "https://t.me/+UO-WJgp_j65iYjA6",
        description: "Адаптер - https://t.me/adaptervsnrs | форум - https://t.me/+PlU4yvMwrH1jOTJi | овнер клана #watch и приписки @esrrty | в км с 2022 | анонимности не существует.",
        details: "Имею совместный проект вместе с шафо. Есть в различных кланах, чатах и сильных составах."
    },
    {
        role: "high",
        nick: "тихий шепот",
        user: "@vrnqs_official",
        project: "https://t.me/blogshepot",
        description: "Тихий шепот - медийная личность в КМ.",
        details: "Владелец проекта blogshepot"
    },
    {
        role: "high",
        nick: "zup",
        user: "@zupnetov",
        project: "https://t.me/+5QB0M2tY3XxjMGM6",
        description: "Ник - zup. Ранее был бод ликой Евгений Калашников, были выданы права на время овнера (аккаунт Алексея Калашникова). Была еще лика huxgu убийцев.",
        details: "В КМ с конца 2019 года. Актуален как Листопадов."
    },
    {
        role: "low",
        nick: "апати",
        user: "@apathydll",
        project: "Нет проекта",
        description: "С 2025 года в КМ.",
        details: "Новичок в комьюнити."
    },
    {
        role: "medium",
        nick: "Zwezdochetow",
        user: "@Zwezdochetow",
        project: "https://t.me/+hvM0Ph9KsyVmZmQy",
        description: "С 2022 года в КМ.",
        details: "Участник Фейм Листа с 2022 года."
    },
    {
        role: "medium",
        nick: "верховный младший",
        user: "@r1bog",
        project: "https://t.me/+2eQ3tkjjC_M3ZTJi",
        description: "С 2022 года в КМ.",
        details: "Участник среднего уровня."
    },
    {
        role: "high",
        nick: "akronimow",
        user: "@ipfisher",
        project: "https://t.me/+2eQ3tkjjC_M3ZTJi",
        description: "С 2020 года в комьюнити. Являюсь владельцем проекта SwagaBitches. Данный нейм с 25 года. Сидел в комьюнити с 20 года, на тот момент являлся spartancevv и сидел в дискорд комьюнити.",
        details: "Владелец SwagaBitches."
    },
    {
        role: "high",
        nick: "Химик",
        user: "@ximiath",
        project: "https://t.me/+VFlTx32RHEBmZDVk",
        description: "С 2022 года в КМ.",
        details: "Высокий фейм в комьюнити."
    },
    {
        role: "medium",
        nick: "ksitamin maniac",
        user: "@attackksitami",
        project: "https://t.me/domksitami",
        description: "Участник среднего уровня.",
        details: "Владелец domksitami."
    },
    {
        role: "low",
        nick: "Шафо младший",
        user: "@attakshafo",
        project: "https://t.me/+xm9o_NoMxjVjNjgy",
        description: "С 2024 года в КМ.",
        details: "Младший участник."
    },
    {
        role: "low",
        nick: "просто принц",
        user: "@freakrip",
        project: "Нет проекта",
        description: "С 2022 года в КМ.",
        details: "Низкий фейм."
    },
    {
        role: "medium",
        nick: "мадов",
        user: "@obpeza",
        project: "Нет проекта",
        description: "В КМ с конца 2024 года. Проекты: рувд (в котором щас овнер амфи, стоял на овнере), Мрачные Тучи - 450 сабов (сносенный проект, на адм был hardcrime, актогенов).",
        details: "Участник среднего уровня."
    },
    {
        role: "medium",
        nick: "haetripov | Patrick",
        user: "@haetripov",
        project: "https://t.me/+e6YzF5gT7gRkNmVi",
        description: "Круто деанонер 💀 и создатель проекта кровавый ворон.",
        details: "Создатель кровавый ворон."
    },
    {
        role: "medium",
        nick: "пиратский сеня",
        user: "@swatoan",
        project: "https://t.me/+WKBMyH1IIfxjMTNi",
        description: "Зашел в первый раз в км 2022 году и имею различные положения каналы «пиратский сеня» «киберприсма». Сидел в комьюнити вк, дс, тг.",
        details: "Владелец пиратский сеня и киберприсма."
    },
    {
        role: "medium",
        nick: "партизан",
        user: "@ocyrn",
        project: "https://t.me/+jg_465t9-yJlODE0",
        description: "С 2024 в комьюнити. Являюсь владельцем проекта Социализация, Черный след. Данный нейм с 2025, сижу в комьюнити с 23 года, на тот момент являлся merry и сидел в тг комьюнити.",
        details: "Владелец Социализация и Черный след."
    }
];

// Цвета неона
const neonColors = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#ffff00',
    orange: '#ff8800',
    cyan: '#00ffff',
    pink: '#ff00ff',
    purple: '#aa00ff'
};

// Текущий цвет неона
let currentColor = '#ff0000';

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMembers();
    initSnow();
    initModals();
    initSettings();
    initRealTime();
});

// Инициализация навигации
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.dataset.target;
            
            // Убираем активный класс у всех кнопок
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Обработка специальных кнопок
            if (this.classList.contains('login-btn')) {
                openModal('login-modal');
                return;
            }
            
            if (this.classList.contains('settings-btn')) {
                openModal('settings-modal');
                return;
            }
            
            // Переключение секций
            if (target) {
                sections.forEach(section => {
                    section.classList.remove('active-section');
                    if (section.id === target) {
                        section.classList.add('active-section');
                        
                        // Плавная прокрутка к секции
                        setTimeout(() => {
                            section.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'start' 
                            });
                        }, 100);
                    }
                });
            }
        });
    });
}

// Инициализация участников
function initMembers() {
    loadMembers('all');
    
    // Фильтрация по категориям
    document.querySelectorAll('.neon-cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.neon-cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadMembers(this.dataset.category);
        });
    });
    
    // Поиск
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterMembers(searchTerm);
        });
    }
}

// Загрузка участников
function loadMembers(category = 'all') {
    const container = document.getElementById('members-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filtered = category === 'all' 
        ? members 
        : members.filter(m => m.role === category);
    
    filtered.forEach(member => {
        const card = createMemberCard(member);
        container.appendChild(card);
    });
}

// Фильтрация участников
function filterMembers(searchTerm) {
    const cards = document.querySelectorAll('.member-card');
    const activeCategory = document.querySelector('.neon-cat-btn.active').dataset.category;
    
    cards.forEach(card => {
        const nick = card.querySelector('.member-nick').textContent.toLowerCase();
        const user = card.querySelector('.member-user').textContent.toLowerCase();
        const desc = card.querySelector('.member-desc').textContent.toLowerCase();
        
        const matchesSearch = nick.includes(searchTerm) || 
                            user.includes(searchTerm) || 
                            desc.includes(searchTerm);
        
        const matchesCategory = activeCategory === 'all' || 
                              card.dataset.role === activeCategory;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Создание карточки участника
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.dataset.role = member.role;
    
    const roleName = getRoleName(member.role);
    const projectLink = member.project !== 'Нет проекта' 
        ? `<a href="${member.project}" target="_blank"><i class="fas fa-link"></i> Проект</a>`
        : '<span class="no-project">Нет проекта</span>';
    
    card.innerHTML = `
        <div class="member-role">${roleName}</div>
        <h3 class="member-nick">${member.nick}</h3>
        <div class="member-user">${member.user}</div>
        <div class="member-project">${projectLink}</div>
        <p class="member-desc">${member.description}</p>
        <button class="details-btn" onclick="showDetails('${member.nick}')">
            <i class="fas fa-info-circle"></i> Подробнее
        </button>
    `;
    
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
    
    return card;
}

// Показать детали участника
function showDetails(nick) {
    const member = members.find(m => m.nick === nick);
    if (!member) return;
    
    const detailsContent = document.getElementById('details-content');
    const roleName = getRoleName(member.role);
    
    detailsContent.innerHTML = `
        <h3>${member.nick}</h3>
        <div class="detail-item">
            <strong>Роль:</strong> ${roleName}
        </div>
        <div class="detail-item">
            <strong>Юзернейм:</strong> ${member.user}
        </div>
        <div class="detail-item">
            <strong>Проект:</strong> 
            ${member.project !== 'Нет проекта' 
                ? `<a href="${member.project}" target="_blank">${member.project}</a>` 
                : 'Нет проекта'}
        </div>
        <div class="detail-item">
            <strong>Описание:</strong>
            <p>${member.details}</p>
        </div>
        <div class="detail-item">
            <strong>В КМ с:</strong> ${getYearsInKM(member.description)}
        </div>
    `;
    
    openModal('details-modal');
}

// Получить название роли
function getRoleName(role) {
    const roles = {
        creator: 'Создатель',
        high: 'Высокий фейм',
        medium: 'Средний фейм',
        low: 'Малый фейм'
    };
    return roles[role] || role;
}

// Получить годы в КМ из описания
function getYearsInKM(desc) {
    const yearMatch = desc.match(/(20\d{2})/);
    return yearMatch ? yearMatch[1] : 'Не указано';
}

// Инициализация снега
function initSnow() {
    const snowContainer = document.querySelector('.snow-container');
    if (!snowContainer) return;
    
    createSnowflakes();
    
    // Включение/выключение снега
    const snowToggle = document.getElementById('snow-toggle');
    if (snowToggle) {
        snowToggle.addEventListener('change', function() {
            if (this.checked) {
                snowContainer.style.display = 'block';
                createSnowflakes();
            } else {
                snowContainer.style.display = 'none';
                snowContainer.innerHTML = '';
            }
        });
    }
}

// Создание снежинок
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow-container');
    if (!snowContainer) return;
    
    snowContainer.innerHTML = '';
    
    // Создаем 50 снежинок
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Случайные параметры
        const size = Math.random() * 5 + 3;
        const startX = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.7 + 0.3;
        
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startX}vw`;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.opacity = opacity;
        snowflake.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        
        snowContainer.appendChild(snowflake);
    }
}

// Инициализация модальных окон
function initModals() {
    // Открытие модальных окон
    document.querySelectorAll('[data-modal]').forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.dataset.modal;
            openModal(modalId);
        });
    });
    
    // Закрытие модальных окон
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            closeModal(this.closest('.modal'));
        });
    });
    
    // Закрытие по клику вне окна
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });
    
    // Форма входа
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username && password) {
                // Сохраняем в localStorage (демо)
                localStorage.setItem('fame_username', username);
                localStorage.setItem('fame_logged_in', 'true');
                
                alert(`Добро пожаловать, ${username}! Аккаунт создан.`);
                closeModal(document.getElementById('login-modal'));
                loginForm.reset();
            }
        });
    }
}

// Открытие модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Закрытие модального окна
function closeModal(modal) {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Инициализация настроек
function initSettings() {
    // Выбор цвета
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.color-option').forEach(opt => {
                opt.classList.remove('active');
            });
            
            this.classList.add('active');
            const color = this.dataset.color;
            const colorName = this.dataset.name;
            
            setNeonColor(color, colorName);
        });
    });
    
    // Интенсивность неона
    const intensitySlider = document.getElementById('neon-intensity');
    const intensityValue = document.getElementById('intensity-value');
    
    if (intensitySlider && intensityValue) {
        intensitySlider.addEventListener('input', function() {
            const value = this.value;
            intensityValue.textContent = value;
            updateNeonIntensity(value);
        });
    }
    
    // Восстановление настроек из localStorage
    loadSettings();
}

// Установка цвета неона
function setNeonColor(color, colorName) {
    currentColor = color;
    
    // Обновляем CSS переменные
    document.documentElement.style.setProperty('--neon-color', color);
    
    // Обновляем все неоновые элементы
    updateAllNeonElements(color);
    
    // Сохраняем в localStorage
    saveSettings();
}

// Обновление интенсивности неона
function updateNeonIntensity(intensity) {
    const elements = document.querySelectorAll('.neon-nav, .neon-btn, .member-card, .neon-input, .modal-content');
    
    elements.forEach(el => {
        el.style.boxShadow = `0 0 ${intensity * 3}px var(--neon-color)`;
    });
    
    const textElements = document.querySelectorAll('.neon-title, .logo, .member-nick');
    textElements.forEach(el => {
        el.style.textShadow = `0 0 ${intensity * 2}px var(--neon-color)`;
    });
    
    // Сохраняем в localStorage
    saveSettings();
}

// Обновление всех неоновых элементов
function updateAllNeonElements(color) {
    // Границы и тени
    const borderElements = document.querySelectorAll('.neon-nav, .neon-btn, .nav-btn, .member-card, .neon-input, .modal-content, .neon-cat-btn, .title-box, .search-filter, .setting-card');
    
    borderElements.forEach(el => {
        el.style.borderColor = color;
        el.style.boxShadow = el.style.boxShadow.replace(/#[a-fA-F0-9]{6}/g, color);
    });
    
    // Текстовые тени
    const textElements = document.querySelectorAll('.neon-title, .logo, .member-nick, .setting-title, .member-role');
    
    textElements.forEach(el => {
        el.style.textShadow = el.style.textShadow.replace(/#[a-fA-F0-9]{6}/g, color);
    });
    
    // Фоновые градиенты
    document.body.style.backgroundImage = 
        `linear-gradient(${color}0f 1px, transparent 1px),
         linear-gradient(90deg, ${color}0f 1px, transparent 1px)`;
}

// Сохранение настроек
function saveSettings() {
    const settings = {
        color: currentColor,
        snow: document.getElementById('snow-toggle').checked,
        intensity: document.getElementById('neon-intensity').value
    };
    
    localStorage.setItem('fame_settings', JSON.stringify(settings));
}

// Загрузка настроек
function loadSettings() {
    const saved = localStorage.getItem('fame_settings');
    if (saved) {
        const settings = JSON.parse(saved);
        
        // Цвет
        if (settings.color) {
            const colorOption = document.querySelector(`.color-option[data-color="${settings.color}"]`);
            if (colorOption) {
                colorOption.click();
            }
        }
        
        // Снег
        if (document.getElementById('snow-toggle')) {
            document.getElementById('snow-toggle').checked = settings.snow !== false;
            document.getElementById('snow-toggle').dispatchEvent(new Event('change'));
        }
        
        // Интенсивность
        if (settings.intensity && document.getElementById('neon-intensity')) {
            document.getElementById('neon-intensity').value = settings.intensity;
            document.getElementById('neon-intensity').dispatchEvent(new Event('input'));
        }
    }
}

// Реальное время МСК
function initRealTime() {
    function updateTime() {
        const now = new Date();
        const moscowTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Moscow"}));
        
        const hours = moscowTime.getHours().toString().padStart(2, '0');
        const minutes = moscowTime.getMinutes().toString().padStart(2, '0');
        const seconds = moscowTime.getSeconds().toString().padStart(2, '0');
        
        const timeElement = document.getElementById('current-time');
        if (timeElement) {
            timeElement.textContent = `${hours}${minutes}.${seconds}`;
        }
    }
    
    updateTime();
    setInterval(updateTime, 1000);
}

// Добавляем глобальные функции
window.showDetails = showDetails;
window.openModal = openModal;
window.closeModal = closeModal;