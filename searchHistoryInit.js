// Initialize search history functionality
import { initSearchHistoryUI } from './searchHistory.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const ensureWrapper = (inputEl) => {
        if (!inputEl || !inputEl.parentElement) return null;
        const wrapper = inputEl.parentElement;
        const computed = window.getComputedStyle(wrapper);
        if (computed.position === 'static') {
            wrapper.style.position = 'relative';
        }
        return wrapper;
    };

    const mountDropdown = (type) => {
        const configByType = {
            stock: {
                inputId: 'stockSearchInput',
                dropdownId: 'stockSearchHistoryDropdown',
                listId: 'stockSearchHistoryList'
            },
            ledger: {
                inputId: 'searchInput',
                dropdownId: 'ledgerSearchHistoryDropdown',
                listId: 'ledgerSearchHistoryList'
            }
        };

        const cfg = configByType[type];
        if (!cfg) return;

        // Avoid double-mount
        if (document.getElementById(cfg.dropdownId)) return;

        const input = document.getElementById(cfg.inputId);
        if (!input) return;

        const wrapper = ensureWrapper(input);
        if (!wrapper) return;

        const dropdown = document.createElement('div');
        dropdown.className = 'search-history-dropdown';
        dropdown.id = cfg.dropdownId;
        dropdown.style.display = 'none';
        dropdown.innerHTML = `
            <div class="search-history-header">
                <span>最近搜尋</span>
                <button class="clear-history-btn" data-type="${type}">清除</button>
            </div>
            <ul class="search-history-list" id="${cfg.listId}"></ul>
        `;

        wrapper.appendChild(dropdown);
    };

    mountDropdown('stock');
    mountDropdown('ledger');

    initSearchHistoryUI();
});
