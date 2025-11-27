// DM Panel Main Script

// ตรวจสอบ authentication
function checkAuth() {
    const session = sessionStorage.getItem('dm_session');
    const authTime = sessionStorage.getItem('dm_auth_time');

    if (!session || !authTime) {
        window.location.href = 'dm-login.html';
        return false;
    }

    // ตรวจสอบว่า session หมดอายุหรือไม่ (24 ชั่วโมง)
    const timeElapsed = Date.now() - parseInt(authTime);
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (timeElapsed >= twentyFourHours) {
        sessionStorage.removeItem('dm_session');
        sessionStorage.removeItem('dm_auth_time');
        window.location.href = 'dm-login.html';
        return false;
    }

    return true;
}

// Logout function
function logout() {
    if (confirm('ต้องการออกจากระบบหรือไม่?')) {
        sessionStorage.removeItem('dm_session');
        sessionStorage.removeItem('dm_auth_time');
        window.location.href = 'dm-login.html';
    }
}

// Sanitize HTML เพื่อป้องกัน XSS
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Current filters
let currentFilters = {
    search: '',
    category: 'all',
    risk: 'all'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (!checkAuth()) return;

    loadData();
});

// Load and display data
function loadData() {
    displayData(dmDatabase);
    updateStats(dmDatabase.length, dmDatabase.length);
}

// Handle search
function handleSearch() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    currentFilters.search = searchInput;
    filterAndDisplay();
}

// Handle category filter
function handleFilter() {
    currentFilters.category = document.getElementById('category-filter').value;
    currentFilters.risk = document.getElementById('risk-filter').value;
    filterAndDisplay();
}

// Filter and display data
function filterAndDisplay() {
    let filtered = dmDatabase;

    // Filter by search
    if (currentFilters.search) {
        filtered = filtered.filter(item => {
            const searchStr = `${item.name} ${item.description} ${item.type}`.toLowerCase();
            return searchStr.includes(currentFilters.search);
        });
    }

    // Filter by category
    if (currentFilters.category !== 'all') {
        filtered = filtered.filter(item => item.type === currentFilters.category);
    }

    // Filter by risk
    if (currentFilters.risk !== 'all') {
        filtered = filtered.filter(item => item.risk && item.risk.toLowerCase() === currentFilters.risk);
    }

    displayData(filtered);
    updateStats(filtered.length, dmDatabase.length);
}

// Display data
function displayData(data) {
    const container = document.getElementById('dm-content');

    if (data.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                ไม่พบข้อมูลที่ตรงกับการค้นหา
            </div>
        `;
        return;
    }

    container.innerHTML = data.map(item => createCard(item)).join('');
}

// Create card HTML
function createCard(item) {
    const riskClass = item.risk ? `risk-${item.risk.toLowerCase()}` : '';
    const riskBadge = item.risk ? `<div class="dm-card-risk ${riskClass}">${sanitizeHTML(item.risk)}</div>` : '';

    return `
        <div class="dm-card" onclick="toggleCard(this)">
            <div class="dm-card-header">
                <div class="dm-card-title">
                    <h3>${sanitizeHTML(item.name)}</h3>
                    <div class="card-type">${sanitizeHTML(getTypeLabel(item.type))}</div>
                </div>
                ${riskBadge}
                <div class="dm-card-expand">▼</div>
            </div>
            <div class="dm-card-content">
                ${createCardContent(item)}
            </div>
        </div>
    `;
}

// Create card content
function createCardContent(item) {
    let content = '<div class="dm-info-grid">';

    // ข้อมูลพื้นฐาน
    if (item.id) {
        content += `
            <div class="dm-info-item">
                <div class="dm-info-label">ID / Code</div>
                <div class="dm-info-value">${sanitizeHTML(item.id)}</div>
            </div>
        `;
    }

    if (item.origin) {
        content += `
            <div class="dm-info-item">
                <div class="dm-info-label">Origin</div>
                <div class="dm-info-value">${sanitizeHTML(item.origin)}</div>
            </div>
        `;
    }

    if (item.location) {
        content += `
            <div class="dm-info-item">
                <div class="dm-info-label">Location</div>
                <div class="dm-info-value">${sanitizeHTML(item.location)}</div>
            </div>
        `;
    }

    if (item.role) {
        content += `
            <div class="dm-info-item">
                <div class="dm-info-label">Role</div>
                <div class="dm-info-value">${sanitizeHTML(item.role)}</div>
            </div>
        `;
    }

    content += '</div>';

    // Description
    if (item.description) {
        content += `<div class="dm-description">${sanitizeHTML(item.description)}</div>`;
    }

    // Stats (ถ้ามี)
    if (item.stats) {
        content += '<div class="dm-stats">';
        for (const [key, value] of Object.entries(item.stats)) {
            content += `
                <div class="stat-item">
                    <div class="stat-label">${sanitizeHTML(key)}</div>
                    <div class="stat-value">${sanitizeHTML(String(value))}</div>
                </div>
            `;
        }
        content += '</div>';
    }

    // Additional Info
    if (item.abilities && item.abilities.length > 0) {
        content += `
            <div class="dm-info-item" style="margin-top: 15px;">
                <div class="dm-info-label">Abilities</div>
                <div class="dm-info-value">${item.abilities.map(a => sanitizeHTML(a)).join('<br>')}</div>
            </div>
        `;
    }

    if (item.notes) {
        content += `
            <div class="dm-info-item" style="margin-top: 15px;">
                <div class="dm-info-label">DM Notes</div>
                <div class="dm-info-value" style="color: #ff5252;">${sanitizeHTML(item.notes)}</div>
            </div>
        `;
    }

    return content;
}

// Toggle card
function toggleCard(card) {
    card.classList.toggle('active');
}

// Get type label
function getTypeLabel(type) {
    const labels = {
        'ego': 'EGO Weapon',
        'abnormality': 'Abnormality',
        'npc': 'NPC Character',
        'item': 'Item',
        'location': 'Location'
    };
    return labels[type] || type;
}

// Update stats
function updateStats(shown, total) {
    document.getElementById('result-count').textContent = shown;
    document.getElementById('total-count').textContent = total;
}
