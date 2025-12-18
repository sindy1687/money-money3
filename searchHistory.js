// Search history management functions
const MAX_HISTORY_ITEMS = 10;

// Save a search query to history
function saveSearchQuery(query, type = 'stock') {
    if (!query.trim()) return;
    
    const key = `searchHistory_${type}`;
    let history = JSON.parse(localStorage.getItem(key) || '[]');
    
    // Remove if already exists
    history = history.filter(item => item !== query);
    
    // Add to beginning
    history.unshift(query);
    
    // Limit history size
    if (history.length > MAX_HISTORY_ITEMS) {
        history = history.slice(0, MAX_HISTORY_ITEMS);
    }
    
    localStorage.setItem(key, JSON.stringify(history));
    updateSearchHistoryUI(type);
}

// Get search history
function getSearchHistory(type = 'stock') {
    const key = `searchHistory_${type}`;
    return JSON.parse(localStorage.getItem(key) || '[]');
}

// Clear search history
function clearSearchHistory(type = 'stock') {
    const key = `searchHistory_${type}`;
    localStorage.removeItem(key);
    updateSearchHistoryUI(type);
}

// Update search history UI
function updateSearchHistoryUI(type = 'stock') {
    const history = getSearchHistory(type);
    const listElement = document.getElementById(`${type}SearchHistoryList`);
    const dropdown = document.getElementById(`${type}SearchHistoryDropdown`);
    
    if (!listElement || !dropdown) return;
    
    listElement.innerHTML = '';
    
    if (history.length === 0) {
        dropdown.style.display = 'none';
        return;
    }
    
    const inputIdByType = {
        stock: 'stockSearchInput',
        ledger: 'searchInput'
    };

    history.forEach(query => {
        const li = document.createElement('li');
        li.textContent = query;
        li.addEventListener('click', () => {
            const inputId = inputIdByType[type] || 'searchInput';
            const input = document.getElementById(inputId);
            if (input) {
                input.value = query;
                input.focus();
                input.dispatchEvent(new Event('input', { bubbles: true }));
            }
            if (dropdown) dropdown.style.display = 'none';
        });
        listElement.appendChild(li);
    });
}

// Initialize search history UI
function initSearchHistoryUI() {
    // Add event listeners to clear buttons
    document.querySelectorAll('.clear-history-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            clearSearchHistory(btn.dataset.type);
        });
    });
    
    const bindInput = (type, inputId, dropdownId) => {
        const input = document.getElementById(inputId);
        const dropdown = document.getElementById(dropdownId);
        if (!input || !dropdown) return;

        // Show dropdown when focused
        input.addEventListener('focus', () => {
            updateSearchHistoryUI(type);
            dropdown.style.display = 'block';
        });

        // Keep dropdown anchored under the input (in case wrapper dimensions change)
        dropdown.style.top = '100%';
        dropdown.style.left = '0';
        dropdown.style.right = '0';

        // Save to history when user confirms (Enter) or leaves field (blur)
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const q = input.value.trim();
                if (q) saveSearchQuery(q, type);
            }
        });
        input.addEventListener('blur', () => {
            const q = input.value.trim();
            if (q) saveSearchQuery(q, type);
        });
    };

    bindInput('stock', 'stockSearchInput', 'stockSearchHistoryDropdown');
    bindInput('ledger', 'searchInput', 'ledgerSearchHistoryDropdown');
    
    // Hide dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-history-dropdown') && 
            !e.target.closest('#stockSearchInput') && 
            !e.target.closest('#searchInput')) {
            document.querySelectorAll('.search-history-dropdown').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
}

export { saveSearchQuery, getSearchHistory, clearSearchHistory, initSearchHistoryUI };
