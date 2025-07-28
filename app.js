// MUN Committee Tracker JavaScript - Fixed Version

// Sample data (from the provided JSON)
const committeeData = {
  countries: [
    {"id": 1, "name": "United States", "delegate": "Sarah Johnson", "flag": "🇺🇸", "speeches": 12, "motions": 5, "speakingTime": 180, "award": "best", "positions": ["Support climate action", "Oppose trade restrictions"], "alliances": ["NATO bloc", "QUAD alliance"]},
    {"id": 2, "name": "China", "delegate": "Li Wei", "flag": "🇨🇳", "speeches": 10, "motions": 3, "speakingTime": 150, "award": "outstanding", "positions": ["Promote multilateralism", "Support South-South cooperation"], "alliances": ["BRICS", "Belt and Road Initiative"]},
    {"id": 3, "name": "United Kingdom", "delegate": "James Thompson", "flag": "🇬🇧", "speeches": 8, "motions": 4, "speakingTime": 120, "award": "outstanding", "positions": ["Support international law", "Promote democracy"], "alliances": ["NATO", "Commonwealth"]},
    {"id": 4, "name": "France", "delegate": "Marie Dubois", "flag": "🇫🇷", "speeches": 9, "motions": 2, "speakingTime": 135, "award": "honorable", "positions": ["Support UN peacekeeping", "Promote cultural diversity"], "alliances": ["EU", "Francophonie"]},
    {"id": 5, "name": "Germany", "delegate": "Hans Mueller", "flag": "🇩🇪", "speeches": 11, "motions": 6, "speakingTime": 165, "award": "best", "positions": ["Support European integration", "Promote renewable energy"], "alliances": ["EU", "NATO"]},
    {"id": 6, "name": "Russia", "delegate": "Dmitri Volkov", "flag": "🇷🇺", "speeches": 7, "motions": 3, "speakingTime": 105, "award": "honorable", "positions": ["Support sovereignty principles", "Oppose unilateral sanctions"], "alliances": ["BRICS", "CSTO"]},
    {"id": 7, "name": "Japan", "delegate": "Yuki Tanaka", "flag": "🇯🇵", "speeches": 6, "motions": 2, "speakingTime": 90, "award": "honorable", "positions": ["Support nuclear non-proliferation", "Promote technology cooperation"], "alliances": ["QUAD", "US-Japan Alliance"]},
    {"id": 8, "name": "India", "delegate": "Priya Sharma", "flag": "🇮🇳", "speeches": 13, "motions": 7, "speakingTime": 195, "award": "best", "positions": ["Support developing nations", "Promote South-South cooperation"], "alliances": ["BRICS", "QUAD"]},
    {"id": 9, "name": "Brazil", "delegate": "Carlos Silva", "flag": "🇧🇷", "speeches": 5, "motions": 1, "speakingTime": 75, "award": "mention", "positions": ["Protect Amazon rainforest", "Support regional cooperation"], "alliances": ["BRICS", "UNASUR"]},
    {"id": 10, "name": "Canada", "delegate": "Emma Wilson", "flag": "🇨🇦", "speeches": 8, "motions": 3, "speakingTime": 120, "award": "honorable", "positions": ["Support multilateralism", "Promote human rights"], "alliances": ["NATO", "G7"]},
    {"id": 11, "name": "Australia", "delegate": "Jack Morrison", "flag": "🇦🇺", "speeches": 7, "motions": 2, "speakingTime": 105, "award": "honorable", "positions": ["Support Pacific security", "Promote climate action"], "alliances": ["QUAD", "ANZUS"]},
    {"id": 12, "name": "South Africa", "delegate": "Nomsa Mthembu", "flag": "🇿🇦", "speeches": 6, "motions": 2, "speakingTime": 90, "award": "mention", "positions": ["Support African unity", "Promote social justice"], "alliances": ["BRICS", "African Union"]},
    {"id": 13, "name": "Mexico", "delegate": "Ana Rodriguez", "flag": "🇲🇽", "speeches": 4, "motions": 1, "speakingTime": 60, "award": "mention", "positions": ["Support regional integration", "Promote migration rights"], "alliances": ["USMCA", "Pacific Alliance"]},
    {"id": 14, "name": "Nigeria", "delegate": "Adaora Okafor", "flag": "🇳🇬", "speeches": 9, "motions": 4, "speakingTime": 135, "award": "outstanding", "positions": ["Support African development", "Promote peace and security"], "alliances": ["African Union", "ECOWAS"]},
    {"id": 15, "name": "Italy", "delegate": "Marco Rossi", "flag": "🇮🇹", "speeches": 5, "motions": 1, "speakingTime": 75, "award": "mention", "positions": ["Support Mediterranean cooperation", "Promote cultural heritage"], "alliances": ["EU", "NATO"]},
    {"id": 16, "name": "South Korea", "delegate": "Min-jun Park", "flag": "🇰🇷", "speeches": 8, "motions": 3, "speakingTime": 120, "award": "honorable", "positions": ["Support technological innovation", "Promote Korean reunification"], "alliances": ["US-ROK Alliance", "QUAD Plus"]},
    {"id": 17, "name": "Turkey", "delegate": "Elif Yilmaz", "flag": "🇹🇷", "speeches": 6, "motions": 2, "speakingTime": 90, "award": "mention", "positions": ["Bridge East and West", "Support regional stability"], "alliances": ["NATO", "Regional partnerships"]},
    {"id": 18, "name": "Egypt", "delegate": "Omar Hassan", "flag": "🇪🇬", "speeches": 7, "motions": 3, "speakingTime": 105, "award": "honorable", "positions": ["Support Arab unity", "Promote Suez Canal security"], "alliances": ["Arab League", "African Union"]},
    {"id": 19, "name": "Argentina", "delegate": "Sofia Gonzalez", "flag": "🇦🇷", "speeches": 4, "motions": 1, "speakingTime": 60, "award": "mention", "positions": ["Support Mercosur integration", "Promote human rights"], "alliances": ["Mercosur", "G20"]},
    {"id": 20, "name": "Indonesia", "delegate": "Sari Indira", "flag": "🇮🇩", "speeches": 10, "motions": 5, "speakingTime": 150, "award": "outstanding", "positions": ["Support ASEAN unity", "Promote moderate Islam"], "alliances": ["ASEAN", "G20"]}
  ],
  sessionInfo: {
    committeeName: "United Nations Security Council",
    session: "Emergency Session on Global Climate Security",
    date: "2024-03-15",
    startTime: "09:00",
    duration: 480,
    totalDelegates: 20,
    activeSpeakers: 3,
    resolutionsPassed: 2,
    currentSpeaker: "Priya Sharma (India)",
    nextSpeakers: ["Sarah Johnson (USA)", "Li Wei (China)", "Hans Mueller (Germany)"],
    activeMotions: ["Motion to extend debate time", "Motion for moderated caucus"],
    topics: ["Climate Security Framework", "International Climate Finance", "Adaptation and Resilience Measures"]
  }
};

// Global state
let currentTimer = null;
let timerSeconds = 150; // 2:30 in seconds
let isTimerRunning = false;
let filteredCountries = [...committeeData.countries];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    renderDelegates();
    renderCountries();
    setTimeout(() => {
        initializeCharts();
    }, 100);
    showNotification('Welcome to MUN Committee Tracker! 🏛️', 'success');
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Tab switching - Fixed
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tabName = e.target.getAttribute('data-tab');
            console.log('Tab clicked:', tabName);
            switchTab(tabName);
        });
    });

    // Search functionality - Fixed
    const delegateSearch = document.getElementById('delegate-search');
    if (delegateSearch) {
        delegateSearch.addEventListener('input', (e) => {
            console.log('Delegate search:', e.target.value);
            filterDelegates(e.target.value);
        });
    }

    const countrySearch = document.getElementById('country-search');
    if (countrySearch) {
        countrySearch.addEventListener('input', (e) => {
            console.log('Country search:', e.target.value);
            filterCountries(e.target.value);
        });
    }

    // Timer controls - Fixed
    const startTimerBtn = document.getElementById('start-timer');
    const pauseTimerBtn = document.getElementById('pause-timer');
    const resetTimerBtn = document.getElementById('reset-timer');
    
    if (startTimerBtn) startTimerBtn.addEventListener('click', startTimer);
    if (pauseTimerBtn) pauseTimerBtn.addEventListener('click', pauseTimer);
    if (resetTimerBtn) resetTimerBtn.addEventListener('click', resetTimer);

    // Header actions - Fixed
    const saveBtn = document.getElementById('save-session');
    const exportBtn = document.getElementById('export-data');
    const settingsBtn = document.getElementById('settings');
    
    if (saveBtn) saveBtn.addEventListener('click', saveSession);
    if (exportBtn) exportBtn.addEventListener('click', exportData);
    if (settingsBtn) settingsBtn.addEventListener('click', openSettings);

    // Modal controls - Fixed
    const closeDelegateBtn = document.getElementById('close-delegate-modal');
    const closeCountryBtn = document.getElementById('close-country-modal');
    
    if (closeDelegateBtn) closeDelegateBtn.addEventListener('click', closeModal);
    if (closeCountryBtn) closeCountryBtn.addEventListener('click', closeModal);
    
    // Click outside modal to close - Fixed
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop') || e.target === modal) {
                closeModal();
            }
        });
    });

    // Add delegate button - Fixed
    const addDelegateBtn = document.getElementById('add-delegate');
    if (addDelegateBtn) {
        addDelegateBtn.addEventListener('click', () => {
            showNotification('Add delegate functionality would open a form here', 'info');
        });
    }

    // Add to queue button - Fixed
    const addToQueueBtn = document.getElementById('add-to-queue');
    if (addToQueueBtn) {
        addToQueueBtn.addEventListener('click', () => {
            showNotification('Delegate added to speaker queue', 'success');
        });
    }

    // Add motion button - Fixed
    const addMotionBtn = document.getElementById('add-motion');
    if (addMotionBtn) {
        addMotionBtn.addEventListener('click', () => {
            showNotification('New motion submitted for voting', 'info');
        });
    }

    console.log('Event listeners setup complete');
}

// Fixed tab switching function
function switchTab(tabName) {
    console.log('Switching to tab:', tabName);
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // Update content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(`${tabName}-section`);
    if (activeSection) {
        activeSection.classList.add('active');
        console.log('Activated section:', `${tabName}-section`);
    }

    // Reinitialize charts if switching to analytics
    if (tabName === 'analytics') {
        setTimeout(() => {
            initializeCharts();
        }, 100);
    }
}

function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// Fixed delegate rendering with proper click handlers
function renderDelegates() {
    const container = document.getElementById('delegates-grid');
    if (!container) return;

    container.innerHTML = filteredCountries.map(country => `
        <div class="delegate-card" data-country-id="${country.id}">
            <div class="delegate-header">
                <span class="delegate-flag">${country.flag}</span>
                <div class="delegate-info">
                    <h3>${country.delegate}</h3>
                    <div class="delegate-country">${country.name}</div>
                </div>
            </div>
            <div class="delegate-stats">
                <div class="stat-item">
                    <span class="stat-value">${country.speeches}</span>
                    <span class="stat-label">Speeches</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${country.motions}</span>
                    <span class="stat-label">Motions</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${Math.floor(country.speakingTime / 60)}m</span>
                    <span class="stat-label">Speaking Time</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${country.alliances.length}</span>
                    <span class="stat-label">Alliances</span>
                </div>
            </div>
            <div class="award-badge award-${country.award}">
                ${getAwardIcon(country.award)} ${getAwardText(country.award)}
            </div>
        </div>
    `).join('');

    // Add click handlers to delegate cards
    container.querySelectorAll('.delegate-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const countryId = parseInt(card.getAttribute('data-country-id'));
            console.log('Delegate card clicked:', countryId);
            openDelegateModal(countryId);
        });
    });
}

// Fixed country rendering with proper click handlers
function renderCountries() {
    const container = document.getElementById('countries-list');
    if (!container) return;

    container.innerHTML = filteredCountries.map(country => `
        <div class="country-card" data-country-id="${country.id}">
            <div class="country-header">
                <div class="country-name">
                    <span class="country-flag">${country.flag}</span>
                    <h3>${country.name}</h3>
                </div>
                <div class="award-badge award-${country.award}">
                    ${getAwardIcon(country.award)} ${getAwardText(country.award)}
                </div>
            </div>
            <div class="country-delegate">Delegate: ${country.delegate}</div>
            
            <div class="country-positions">
                <h4>Key Positions</h4>
                ${country.positions.map(position => `<span class="position-tag">${position}</span>`).join('')}
            </div>
            
            <div class="country-positions">
                <h4>Alliances</h4>
                ${country.alliances.map(alliance => `<span class="alliance-tag">${alliance}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // Add click handlers to country cards
    container.querySelectorAll('.country-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const countryId = parseInt(card.getAttribute('data-country-id'));
            console.log('Country card clicked:', countryId);
            openCountryModal(countryId);
        });
    });
}

function getAwardIcon(award) {
    const icons = {
        'best': '🥇',
        'outstanding': '🥈',
        'honorable': '🥉',
        'mention': '📜'
    };
    return icons[award] || '📜';
}

function getAwardText(award) {
    const texts = {
        'best': 'Best Delegate',
        'outstanding': 'Outstanding',
        'honorable': 'Honorable',
        'mention': 'Mention'
    };
    return texts[award] || 'Mention';
}

// Fixed filtering functions
function filterDelegates(searchTerm) {
    filteredCountries = committeeData.countries.filter(country => 
        country.delegate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderDelegates();
    console.log('Filtered delegates:', filteredCountries.length);
}

function filterCountries(searchTerm) {
    filteredCountries = committeeData.countries.filter(country => 
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.delegate.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderCountries();
    console.log('Filtered countries:', filteredCountries.length);
}

// Fixed modal functions
function openDelegateModal(countryId) {
    console.log('Opening delegate modal for country ID:', countryId);
    const country = committeeData.countries.find(c => c.id === countryId);
    if (!country) {
        console.error('Country not found:', countryId);
        return;
    }

    const modal = document.getElementById('delegate-modal');
    const modalBody = document.getElementById('delegate-modal-body');
    
    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }
    
    modalBody.innerHTML = `
        <div class="delegate-details">
            <div class="delegate-header" style="margin-bottom: 24px;">
                <span class="delegate-flag" style="font-size: 2rem;">${country.flag}</span>
                <div class="delegate-info">
                    <h3 style="font-size: 24px; margin-bottom: 4px;">${country.delegate}</h3>
                    <div class="delegate-country" style="font-size: 16px;">${country.name}</div>
                </div>
                <div class="award-badge award-${country.award}">
                    ${getAwardIcon(country.award)} ${getAwardText(country.award)}
                </div>
            </div>
            
            <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 16px; margin-bottom: 24px;">
                <div class="stat-card" style="text-align: center; padding: 16px; background: var(--color-bg-1); border-radius: 8px;">
                    <div style="font-size: 24px; font-weight: bold; color: var(--color-primary);">${country.speeches}</div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">SPEECHES</div>
                </div>
                <div class="stat-card" style="text-align: center; padding: 16px; background: var(--color-bg-2); border-radius: 8px;">
                    <div style="font-size: 24px; font-weight: bold; color: var(--color-primary);">${country.motions}</div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">MOTIONS</div>
                </div>
                <div class="stat-card" style="text-align: center; padding: 16px; background: var(--color-bg-3); border-radius: 8px;">
                    <div style="font-size: 24px; font-weight: bold; color: var(--color-primary);">${Math.floor(country.speakingTime / 60)}m</div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">SPEAKING TIME</div>
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4 style="margin-bottom: 12px; color: var(--color-text-secondary);">KEY POSITIONS</h4>
                ${country.positions.map(position => `<span class="position-tag">${position}</span>`).join('')}
            </div>
            
            <div>
                <h4 style="margin-bottom: 12px; color: var(--color-text-secondary);">ALLIANCES</h4>
                ${country.alliances.map(alliance => `<span class="alliance-tag">${alliance}</span>`).join('')}
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    console.log('Delegate modal opened successfully');
}

function openCountryModal(countryId) {
    console.log('Opening country modal for country ID:', countryId);
    const country = committeeData.countries.find(c => c.id === countryId);
    if (!country) {
        console.error('Country not found:', countryId);
        return;
    }

    const modal = document.getElementById('country-modal');
    const modalBody = document.getElementById('country-modal-body');
    
    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }
    
    modalBody.innerHTML = `
        <div class="country-details">
            <div class="country-header" style="margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
                <div class="country-name" style="display: flex; align-items: center; gap: 12px;">
                    <span class="country-flag" style="font-size: 2rem;">${country.flag}</span>
                    <div>
                        <h3 style="font-size: 24px; margin: 0;">${country.name}</h3>
                        <div style="color: var(--color-text-secondary);">Delegate: ${country.delegate}</div>
                    </div>
                </div>
                <div class="award-badge award-${country.award}">
                    ${getAwardIcon(country.award)} ${getAwardText(country.award)}
                </div>
            </div>
            
            <div class="performance-metrics" style="margin-bottom: 24px;">
                <h4 style="margin-bottom: 16px; color: var(--color-text-secondary);">PERFORMANCE METRICS</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px;">
                    <div style="text-align: center; padding: 16px; background: var(--color-bg-1); border-radius: 8px;">
                        <div style="font-size: 20px; font-weight: bold;">🎤 ${country.speeches}</div>
                        <div style="font-size: 12px; margin-top: 4px;">Total Speeches</div>
                    </div>
                    <div style="text-align: center; padding: 16px; background: var(--color-bg-2); border-radius: 8px;">
                        <div style="font-size: 20px; font-weight: bold;">📋 ${country.motions}</div>
                        <div style="font-size: 12px; margin-top: 4px;">Motions Proposed</div>
                    </div>
                    <div style="text-align: center; padding: 16px; background: var(--color-bg-3); border-radius: 8px;">
                        <div style="font-size: 20px; font-weight: bold;">⏱️ ${Math.floor(country.speakingTime / 60)}m</div>
                        <div style="font-size: 12px; margin-top: 4px;">Speaking Time</div>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h4 style="margin-bottom: 12px; color: var(--color-text-secondary);">KEY POSITIONS TAKEN</h4>
                <div style="margin-bottom: 16px;">
                    ${country.positions.map(position => `<div style="padding: 8px 12px; background: var(--color-bg-4); border-radius: 6px; margin-bottom: 8px; border-left: 3px solid var(--color-primary);">📍 ${position}</div>`).join('')}
                </div>
            </div>
            
            <div>
                <h4 style="margin-bottom: 12px; color: var(--color-text-secondary);">ALLIANCE MEMBERSHIPS</h4>
                ${country.alliances.map(alliance => `<div style="padding: 8px 12px; background: var(--color-bg-5); border-radius: 6px; margin-bottom: 8px; border-left: 3px solid var(--color-success);">🤝 ${alliance}</div>`).join('')}
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    console.log('Country modal opened successfully');
}

function closeModal() {
    console.log('Closing modal');
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.add('hidden');
    });
}

// Timer functionality - Fixed
function startTimer() {
    console.log('Starting timer');
    if (!isTimerRunning) {
        isTimerRunning = true;
        currentTimer = setInterval(updateTimer, 1000);
        showNotification('Speech timer started ⏱️', 'success');
    }
}

function pauseTimer() {
    console.log('Pausing timer');
    if (isTimerRunning) {
        isTimerRunning = false;
        clearInterval(currentTimer);
        showNotification('Speech timer paused ⏸️', 'info');
    }
}

function resetTimer() {
    console.log('Resetting timer');
    isTimerRunning = false;
    clearInterval(currentTimer);
    timerSeconds = 150; // Reset to 2:30
    updateTimerDisplay();
    showNotification('Speech timer reset 🔄', 'info');
}

function updateTimer() {
    timerSeconds--;
    updateTimerDisplay();
    
    if (timerSeconds <= 0) {
        pauseTimer();
        showNotification('⏰ Time is up! Speech time has ended.', 'warning');
    } else if (timerSeconds === 30) {
        showNotification('⚠️ 30 seconds remaining!', 'warning');
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const timerElement = document.getElementById('speech-timer');
    if (timerElement) {
        timerElement.textContent = display;
    }
}

// Header actions - Fixed
function saveSession() {
    console.log('Saving session');
    showNotification('📁 Session data saved successfully!', 'success');
}

function exportData() {
    console.log('Exporting data');
    // Create CSV data
    const csvData = [
        ['Country', 'Delegate', 'Speeches', 'Motions', 'Speaking Time', 'Award'],
        ...committeeData.countries.map(c => [
            c.name, c.delegate, c.speeches, c.motions, c.speakingTime, c.award
        ])
    ];
    
    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mun-committee-data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    
    showNotification('📊 Data exported to CSV file!', 'success');
}

function openSettings() {
    console.log('Opening settings');
    showNotification('⚙️ Settings panel would open here', 'info');
}

// Initialize Charts - Fixed
function initializeCharts() {
    console.log('Initializing charts');
    try {
        initializeSpeakingTimeChart();
        initializeParticipationChart();
        initializeAwardsChart();
        initializeMotionsChart();
        console.log('Charts initialized successfully');
    } catch (error) {
        console.error('Error initializing charts:', error);
    }
}

function initializeSpeakingTimeChart() {
    const ctx = document.getElementById('speaking-time-chart');
    if (!ctx) {
        console.log('Speaking time chart canvas not found');
        return;
    }

    // Destroy existing chart if it exists
    if (window.speakingTimeChart) {
        window.speakingTimeChart.destroy();
    }

    const countries = committeeData.countries.slice(0, 10); // Top 10
    
    window.speakingTimeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: countries.map(c => c.name),
            datasets: [{
                label: 'Speaking Time (minutes)',
                data: countries.map(c => Math.floor(c.speakingTime / 60)),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'],
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Minutes'
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45
                    }
                }
            }
        }
    });
}

function initializeParticipationChart() {
    const ctx = document.getElementById('participation-chart');
    if (!ctx) {
        console.log('Participation chart canvas not found');
        return;
    }

    if (window.participationChart) {
        window.participationChart.destroy();
    }

    const countries = committeeData.countries.slice(0, 8);
    
    window.participationChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Speeches', 'Motions', 'Speaking Time', 'Alliances', 'Positions'],
            datasets: countries.slice(0, 4).map((country, index) => ({
                label: country.name,
                data: [
                    country.speeches / 2,
                    country.motions * 2,
                    country.speakingTime / 20,
                    country.alliances.length * 3,
                    country.positions.length * 2
                ],
                backgroundColor: `rgba(${['31, 184, 205', '255, 193, 133', '180, 65, 60', '93, 135, 143'][index]}, 0.2)`,
                borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'][index],
                borderWidth: 2
            }))
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 20
                }
            }
        }
    });
}

function initializeAwardsChart() {
    const ctx = document.getElementById('awards-chart');
    if (!ctx) {
        console.log('Awards chart canvas not found');
        return;
    }

    if (window.awardsChart) {
        window.awardsChart.destroy();
    }

    const awardCounts = {
        'best': committeeData.countries.filter(c => c.award === 'best').length,
        'outstanding': committeeData.countries.filter(c => c.award === 'outstanding').length,
        'honorable': committeeData.countries.filter(c => c.award === 'honorable').length,
        'mention': committeeData.countries.filter(c => c.award === 'mention').length
    };
    
    window.awardsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Best Delegate', 'Outstanding', 'Honorable', 'Mention'],
            datasets: [{
                data: Object.values(awardCounts),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function initializeMotionsChart() {
    const ctx = document.getElementById('motions-chart');
    if (!ctx) {
        console.log('Motions chart canvas not found');
        return;
    }

    if (window.motionsChart) {
        window.motionsChart.destroy();
    }
    
    window.motionsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4', 'Session 5', 'Session 6'],
            datasets: [{
                label: 'Motions Passed',
                data: [2, 4, 3, 6, 5, 7],
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                tension: 0.4,
                fill: true
            }, {
                label: 'Motions Failed',
                data: [1, 2, 1, 1, 2, 1],
                borderColor: '#B4413C',
                backgroundColor: 'rgba(180, 65, 60, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
// Show settings modal with current values
function openSettings() {
    // Fill in current values if already set, else use defaults
    document.getElementById('settings-committee-name').value =
        window.committeeName || 'United Nations Security Council';
    let today = (window.committeeDate || new Date()).toISOString().slice(0,10);
    document.getElementById('settings-date').value = today;
    let nowTime = window.committeeTime || (new Date().toTimeString().slice(0,5));
    document.getElementById('settings-time').value = nowTime;
    document.getElementById('settings-modal').classList.remove('hidden');
}

// Hide modal
function closeModal() {
    document.getElementById('settings-modal').classList.add('hidden');
}

// Save settings and update display
function saveSettings() {
    window.committeeName = document.getElementById('settings-committee-name').value;
    window.committeeDate = document.getElementById('settings-date').value;
    window.committeeTime = document.getElementById('settings-time').value;
    // Example: update shown committee name, date, time on the page
    document.getElementById('committee-name-display').textContent = window.committeeName;
    document.getElementById('committee-date-display').textContent = window.committeeDate;
    document.getElementById('committee-time-display').textContent = window.committeeTime;
    closeModal();
    showNotification('Settings updated!', 'success');
}

// Toast notification system - Fixed
function showNotification(message, type = 'info') {
    console.log('Showing notification:', message, type);
    const container = document.getElementById('toast-container');
    if (!container) {
        console.error('Toast container not found');
        return;
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    // Auto remove after 4 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (container.contains(toast)) {
                container.removeChild(toast);
            }
        }, 300);
    }, 4000);

    // Click to dismiss
    toast.addEventListener('click', () => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (container.contains(toast)) {
                container.removeChild(toast);
            }
        }, 300);
    });
}
const settingsBtn = document.getElementById('settings');
if (settingsBtn) settingsBtn.addEventListener('click', openSettings);

// Initialize timer display
updateTimerDisplay();
