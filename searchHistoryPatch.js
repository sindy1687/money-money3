// Patch for initStockSearch to add search history functionality

// First, add import at top of script.js
const importPatch = `
// Search history functions
import { saveSearchQuery } from './searchHistory.js';
`;

// Then modify initStockSearch function
const functionPatch = `
function initStockSearch() {
    const searchInput = document.getElementById('stockSearchInput');
    const searchClearBtn = document.getElementById('stockSearchClearBtn');
    
    if (searchInput) {
        // 輸入時即時搜尋
        searchInput.addEventListener('input', () => {
            if (searchInput.value.trim()) {
                saveSearchQuery(searchInput.value.trim(), 'stock');
            }
            updateStockList();
        });
        
        // 按 Enter 鍵時也觸發搜尋
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (searchInput.value.trim()) {
                    saveSearchQuery(searchInput.value.trim(), 'stock');
                }
                updateStockList();
            }
        });
        
        // 觸摸設備的輸入反饋
        searchInput.addEventListener('touchstart', () => {
            searchInput.style.transform = 'scale(0.98)';
        });
        searchInput.addEventListener('touchend', () => {
            searchInput.style.transform = 'scale(1)';
        });
    }
    
    if (searchClearBtn) {
        // 清除搜尋
        searchClearBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
                updateStockList();
            }
        });
        
        // 觸摸反饋
        searchClearBtn.addEventListener('touchstart', () => {
            searchClearBtn.style.transform = 'scale(0.9)';
        });
        searchClearBtn.addEventListener('touchend', () => {
            searchClearBtn.style.transform = 'scale(1)';
        });
    }
}
`;

const ledgerFunctionPatch = `
function initSearchAndFilters() {
    const searchInput = document.getElementById('searchInput');
    const filterDateFrom = document.getElementById('filterDateFrom');
    const filterDateTo = document.getElementById('filterDateTo');
    const filterCategory = document.getElementById('filterCategory');
    const filterAmountMin = document.getElementById('filterAmountMin');
    const filterAmountMax = document.getElementById('filterAmountMax');
    const filterClearBtn = document.getElementById('filterClearBtn');
    
    // 初始化分類選單
    if (filterCategory) {
        const records = JSON.parse(localStorage.getItem('accountingRecords') || '[]');
        const categories = new Set();
        records.forEach(r => {
            if (r.category) {
                categories.add(r.category);
            }
        });
        const sortedCategories = Array.from(categories).sort();
        sortedCategories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            filterCategory.appendChild(option);
        });
    }
    
    // 綁定篩選事件
    const applyFilters = () => {
        if (searchInput && searchInput.value.trim()) {
            saveSearchQuery(searchInput.value.trim(), 'ledger');
        }
        const records = JSON.parse(localStorage.getItem('accountingRecords') || '[]');
        const currentType = window.ledgerType || 'expense';
        let filteredRecords = filterRecordsByType(records, currentType);
        
        // 應用所有篩選
        filteredRecords = applyAllFilters(filteredRecords);
        
        // 更新顯示
        displayLedgerTransactions(filteredRecords);
    };
    
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyFilters();
            }
        });
    }
}
`;

export { importPatch, functionPatch, ledgerFunctionPatch };
