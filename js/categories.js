// ========== 分類數據和基本功能 ==========

// 分類數據（包含支出、收入、轉帳）- 已整理，移除重複
const allCategories = [
    // 支出分類
    { name: '飲食', icon: '🍔', type: 'expense' },
    { name: '外食 / 飲料', icon: '🧃', type: 'expense' },
    { name: '日用品', icon: '🧻', type: 'expense' },
    { name: '交通', icon: '🚇', type: 'expense' },
    { name: '住房物業', icon: '🏢', type: 'expense' },
    { name: '水電瓦斯', icon: '💡', type: 'expense' },
    { name: '網路 / 電信', icon: '📶', type: 'expense' },
    { name: '清潔用品', icon: '🧹', type: 'expense' },
    { name: '娛樂', icon: '🎮', type: 'expense' },
    { name: '醫療', icon: '🏥', type: 'expense' },
    { name: '教育', icon: '🎓', type: 'expense' },
    { name: '購物', icon: '🛍️', type: 'expense' },
    { name: '服飾', icon: '👕', type: 'expense' },
    { name: '化妝品', icon: '💄', type: 'expense' },
    { name: '保養品', icon: '🧴', type: 'expense' },
    { name: '運動', icon: '⚽', type: 'expense' },
    { name: '健身', icon: '🏋️', type: 'expense' },
    { name: '電影', icon: '🎬', type: 'expense' },
    { name: '音樂', icon: '🎵', type: 'expense' },
    { name: '書籍', icon: '📚', type: 'expense' },
    { name: '咖啡', icon: '☕', type: 'expense' },
    { name: '零食', icon: '🍫', type: 'expense' },
    { name: '加油', icon: '⛽', type: 'expense' },
    { name: '停車', icon: '🅿️', type: 'expense' },
    { name: '保險', icon: '🛡️', type: 'expense' },
    { name: '卡費', icon: '💳', type: 'expense' },
    { name: '稅金', icon: '💰', type: 'expense' },
    { name: '投資理財', icon: '📈', type: 'expense' },
    { name: '手續費', icon: '🧮', type: 'expense' },
    { name: '禮物', icon: '🎁', type: 'expense' },
    { name: '旅行', icon: '🏖️', type: 'expense' },
    { name: '寵物', icon: '🐾', type: 'expense' },
    { name: '美髮', icon: '💇', type: 'expense' },
    { name: '美甲', icon: '💅', type: 'expense' },
    { name: '借出', icon: '💸', type: 'expense' },
    { name: '其他支出', icon: '📦', type: 'expense' },
    { name: '手機費', icon: '📱', type: 'expense' },
    { name: '電費', icon: '⚡', type: 'expense' },
    { name: '瓦斯費', icon: '🔥', type: 'expense' },
    { name: '管理費', icon: '🏘️', type: 'expense' },
    { name: '維修費', icon: '🔧', type: 'expense' },
    // 收入分類
    { name: '薪資', icon: '💼', type: 'income' },
    { name: '獎金', icon: '🎁', type: 'income' },
    { name: '投資收益', icon: '📈', type: 'income' },
    { name: '股息', icon: '💵', type: 'income' },
    { name: '租金收入', icon: '🏠', type: 'income' },
    { name: '兼職', icon: '💪', type: 'income' },
    { name: '禮金', icon: '🧧', type: 'income' },
    { name: '退款', icon: '↩️', type: 'income' },
    { name: '其他收入', icon: '💰', type: 'income' },
    { name: '紅利', icon: '🎊', type: 'income' },
    { name: '利息收入', icon: '💹', type: 'income' },
    { name: '版權收入', icon: '📝', type: 'income' },
    { name: '顧問費', icon: '👔', type: 'income' },
    { name: '演講費', icon: '🎤', type: 'income' },
    { name: '稿費', icon: '✍️', type: 'income' },
    { name: '補助', icon: '📋', type: 'income' },
    { name: '保險理賠', icon: '🛡️', type: 'income' },
    { name: '中獎', icon: '🎰', type: 'income' },
    { name: '賣出物品', icon: '📦', type: 'income' },
    { name: '借入', icon: '💳', type: 'income' },
    { name: '還款收入', icon: '💵', type: 'income' },
    { name: '補償', icon: '⚖️', type: 'income' },
    { name: '業務收入', icon: '💼', type: 'income' },
    { name: '佣金', icon: '💸', type: 'income' },
    { name: '分潤', icon: '🤝', type: 'income' },
    { name: '授權費', icon: '📄', type: 'income' },
    { name: '教學收入', icon: '👨‍🏫', type: 'income' },
    { name: '設計費', icon: '🎨', type: 'income' },
    { name: '翻譯費', icon: '🌐', type: 'income' },
    { name: '攝影收入', icon: '📷', type: 'income' },
    { name: '直播收入', icon: '📺', type: 'income' },
    { name: '網拍收入', icon: '🛒', type: 'income' },
    { name: '代購收入', icon: '🛍️', type: 'income' },
    { name: '外快', icon: '💴', type: 'income' },
    { name: '小費', icon: '💵', type: 'income' },
    { name: '政府補助', icon: '🏛️', type: 'income' },
    { name: '獎學金', icon: '🎓', type: 'income' },
    { name: '退休金', icon: '👴', type: 'income' },
    { name: '遺產', icon: '📜', type: 'income' },
    { name: '贈與', icon: '🎁', type: 'income' },
    { name: '股票股利', icon: '📊', type: 'income' },
    { name: '債券利息', icon: '💹', type: 'income' },
    { name: '基金分紅', icon: '📈', type: 'income' },
    { name: '外匯收益', icon: '💱', type: 'income' },
    { name: '虛擬貨幣收益', icon: '₿', type: 'income' },
    // 轉帳分類
    { name: '轉帳', icon: '🔄', type: 'transfer' },
    { name: '銀行轉帳', icon: '🏦', type: 'transfer' },
    { name: '跨行轉帳', icon: '💸', type: 'transfer' },
    { name: '帳戶間轉帳', icon: '💳', type: 'transfer' },
    { name: '現金轉帳', icon: '💵', type: 'transfer' },
    { name: '電子支付轉帳', icon: '📱', type: 'transfer' },
    { name: '信用卡轉帳', icon: '💳', type: 'transfer' },
    { name: '投資帳戶轉帳', icon: '📈', type: 'transfer' }
];

// 推薦分類（包含支出、收入、轉帳）- 已按邏輯分組
const recommendedCategories = {
    expense: [
        // 飲食相關
        { name: '飲食', icon: '🍔', type: 'expense' },
        { name: '外食 / 飲料', icon: '🧃', type: 'expense' },
        // 生活用品
        { name: '日用品', icon: '🧻', type: 'expense' },
        { name: '清潔用品', icon: '🧹', type: 'expense' },
        // 交通
        { name: '交通', icon: '🚇', type: 'expense' },
        // 住房相關
        { name: '住房物業', icon: '🏢', type: 'expense' },
        { name: '水電瓦斯', icon: '💡', type: 'expense' },
        // 通訊
        { name: '網路 / 電信', icon: '📶', type: 'expense' }
    ],
    income: [
        // 工作收入
        { name: '薪資', icon: '💼', type: 'income' },
        { name: '獎金', icon: '🎁', type: 'income' },
        { name: '兼職', icon: '💪', type: 'income' },
        { name: '業務收入', icon: '💼', type: 'income' },
        { name: '佣金', icon: '💸', type: 'income' },
        // 投資收入
        { name: '投資收益', icon: '📈', type: 'income' },
        { name: '股息', icon: '💵', type: 'income' },
        { name: '利息收入', icon: '💹', type: 'income' },
        { name: '紅利', icon: '🎊', type: 'income' },
        // 其他收入
        { name: '租金收入', icon: '🏠', type: 'income' },
        { name: '禮金', icon: '🧧', type: 'income' },
        { name: '退款', icon: '↩️', type: 'income' },
        { name: '補助', icon: '📋', type: 'income' },
        { name: '中獎', icon: '🎰', type: 'income' },
        { name: '賣出物品', icon: '📦', type: 'income' },
        { name: '其他收入', icon: '💰', type: 'income' }
    ],
    transfer: [
        { name: '轉帳', icon: '🔄', type: 'transfer' },
        { name: '銀行轉帳', icon: '🏦', type: 'transfer' },
        { name: '帳戶間轉帳', icon: '💳', type: 'transfer' },
        { name: '現金轉帳', icon: '💵', type: 'transfer' }
    ]
};

// 為了向後兼容，保留 categories 變數
const categories = allCategories;

// 獲取分類啟用狀態
function getCategoryEnabledState() {
    const savedState = JSON.parse(localStorage.getItem('categoryEnabledState') || '{}');
    const state = {};
    
    // 初始化所有分類的啟用狀態（默認全部啟用）
    allCategories.forEach(category => {
        if (savedState.hasOwnProperty(category.name)) {
            state[category.name] = savedState[category.name];
        } else {
            state[category.name] = true; // 默認啟用
        }
    });
    
    return state;
}

// 保存分類啟用狀態
function saveCategoryEnabledState(state) {
    localStorage.setItem('categoryEnabledState', JSON.stringify(state));
}

// 切換分類啟用狀態
function toggleCategoryEnabled(categoryName) {
    const state = getCategoryEnabledState();
    state[categoryName] = !state[categoryName];
    saveCategoryEnabledState(state);
    return state[categoryName];
}

// 獲取啟用的分類列表
function getEnabledCategories(type = null) {
    const state = getCategoryEnabledState();
    let categories = allCategories.filter(category => state[category.name] === true);
    
    // 如果指定了類型，過濾該類型的分類
    if (type) {
        categories = categories.filter(category => category.type === type);
    }
    
    return categories;
}

// 載入自定義分類
function loadCustomCategories() {
    const savedCategories = JSON.parse(localStorage.getItem('customCategories') || '[]');
    console.log('📥 載入自定義分類:', savedCategories.length, '個');
    
    // 將自定義分類添加到allCategories（如果還不存在）
    let addedCount = 0;
    savedCategories.forEach(savedCat => {
        const exists = allCategories.some(cat => cat.name === savedCat.name && cat.type === savedCat.type);
        if (!exists) {
            console.log('  ➕ 新增:', savedCat.name, `(${savedCat.type})`);
            allCategories.push(savedCat);
            addedCount++;
        }
    });
    
    console.log('✓ 載入完成，新增', addedCount, '個分類');
}

