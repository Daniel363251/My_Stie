// 管理后台JavaScript功能

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeAdmin();
});

// 初始化管理后台
function initializeAdmin() {
    setupNavigation();
    setupForms();
    loadData();
    setupEventListeners();
}

// 设置导航功能
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
            const targetSection = this.getAttribute('data-section');
            document.getElementById(targetSection).classList.add('active');
            
            // 更新URL hash
            window.location.hash = targetSection;
        });
    });
    
    // 根据URL hash显示对应页面
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        document.querySelector(`[data-section="${hash}"]`).click();
    }
}

// 设置表单功能
function setupForms() {
    // 个人信息表单
    const profileForm = document.querySelector('.profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveProfile();
        });
    }
    
    // 网站设置表单
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveSettings();
        });
    }
    
    // 文章表单
    const articleForm = document.querySelector('#articleModal .modal-form');
    if (articleForm) {
        articleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveArticle();
        });
    }
    
    // 项目表单
    const projectForm = document.querySelector('#projectModal .modal-form');
    if (projectForm) {
        projectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveProject();
        });
    }
}

// 加载数据
function loadData() {
    loadDashboardStats();
    loadProfileData();
    loadSettingsData();
}

// 加载仪表盘统计数据
function loadDashboardStats() {
    // 模拟数据加载
    const stats = {
        articles: 6,
        projects: 3,
        views: 1234,
        lastUpdate: '今天'
    };
    
    document.getElementById('articles-count').textContent = stats.articles;
    document.getElementById('projects-count').textContent = stats.projects;
    document.getElementById('views-count').textContent = stats.views.toLocaleString();
    document.getElementById('last-update').textContent = stats.lastUpdate;
}

// 加载个人资料数据
function loadProfileData() {
    // 从localStorage或API加载数据
    const profileData = getStoredData('profile') || {
        name: 'Ziyan',
        title: 'AI驱动的数字化供应链产品创新',
        bio: '我是一名专注于AI与供应链结合的产品经理，致力于通过智能技术推动供应链数字化转型。拥有丰富的产品管理经验和深厚的技术背景，擅长将复杂的AI算法转化为实用的商业解决方案。',
        email: 'ziyan@example.com',
        linkedin: 'linkedin.com/in/ziyan',
        github: 'github.com/ziyan'
    };
    
    // 填充表单
    document.getElementById('name').value = profileData.name;
    document.getElementById('title').value = profileData.title;
    document.getElementById('bio').value = profileData.bio;
    document.getElementById('email').value = profileData.email;
    document.getElementById('linkedin').value = profileData.linkedin;
    document.getElementById('github').value = profileData.github;
}

// 加载设置数据
function loadSettingsData() {
    const settingsData = getStoredData('settings') || {
        siteTitle: 'Ziyan - AI驱动的数字化供应链产品创新',
        siteDescription: '专注于AI与供应链结合的产品经理，致力于推动供应链数字化转型',
        themeColor: '#2563eb',
        darkMode: true,
        analytics: true
    };
    
    document.getElementById('site-title').value = settingsData.siteTitle;
    document.getElementById('site-description').value = settingsData.siteDescription;
    document.getElementById('theme-color').value = settingsData.themeColor;
    document.getElementById('dark-mode').checked = settingsData.darkMode;
    document.getElementById('analytics').checked = settingsData.analytics;
}

// 保存个人资料
function saveProfile() {
    const profileData = {
        name: document.getElementById('name').value,
        title: document.getElementById('title').value,
        bio: document.getElementById('bio').value,
        email: document.getElementById('email').value,
        linkedin: document.getElementById('linkedin').value,
        github: document.getElementById('github').value
    };
    
    // 保存到localStorage（实际项目中应该发送到服务器）
    storeData('profile', profileData);
    
    // 显示成功消息
    showNotification('个人信息已保存', 'success');
    
    // 更新主网站内容（如果需要）
    updateMainSite(profileData);
}

// 保存网站设置
function saveSettings() {
    const settingsData = {
        siteTitle: document.getElementById('site-title').value,
        siteDescription: document.getElementById('site-description').value,
        themeColor: document.getElementById('theme-color').value,
        darkMode: document.getElementById('dark-mode').checked,
        analytics: document.getElementById('analytics').checked
    };
    
    storeData('settings', settingsData);
    showNotification('网站设置已保存', 'success');
    
    // 应用主题色变化
    applyThemeColor(settingsData.themeColor);
}

// 应用主题色
function applyThemeColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);
}

// 模态框功能
function openArticleModal(articleId = null) {
    const modal = document.getElementById('articleModal');
    const form = modal.querySelector('.modal-form');
    
    if (articleId) {
        // 编辑模式 - 加载文章数据
        const articleData = getArticleData(articleId);
        fillArticleForm(articleData);
        form.setAttribute('data-article-id', articleId);
    } else {
        // 新建模式 - 清空表单
        form.reset();
        form.removeAttribute('data-article-id');
    }
    
    modal.style.display = 'block';
}

function openProjectModal(projectId = null) {
    const modal = document.getElementById('projectModal');
    const form = modal.querySelector('.modal-form');
    
    if (projectId) {
        // 编辑模式
        const projectData = getProjectData(projectId);
        fillProjectForm(projectData);
        form.setAttribute('data-project-id', projectId);
    } else {
        // 新建模式
        form.reset();
        form.removeAttribute('data-project-id');
    }
    
    modal.style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// 保存文章
function saveArticle() {
    const form = document.querySelector('#articleModal .modal-form');
    const articleId = form.getAttribute('data-article-id');
    
    const articleData = {
        title: document.getElementById('article-title').value,
        category: document.getElementById('article-category').value,
        excerpt: document.getElementById('article-excerpt').value,
        content: document.getElementById('article-content').value,
        tags: document.getElementById('article-tags').value.split(',').map(tag => tag.trim()),
        date: new Date().toISOString().split('T')[0],
        status: 'published'
    };
    
    if (articleId) {
        // 更新现有文章
        updateArticle(articleId, articleData);
        showNotification('文章已更新', 'success');
    } else {
        // 创建新文章
        createArticle(articleData);
        showNotification('文章已创建', 'success');
    }
    
    closeModal('articleModal');
    refreshArticlesList();
}

// 保存项目
function saveProject() {
    const form = document.querySelector('#projectModal .modal-form');
    const projectId = form.getAttribute('data-project-id');
    
    const projectData = {
        title: document.getElementById('project-title').value,
        date: document.getElementById('project-date').value,
        description: document.getElementById('project-description').value,
        achievements: document.getElementById('project-achievements').value.split('\n').filter(item => item.trim()),
        tags: document.getElementById('project-tags').value.split(',').map(tag => tag.trim())
    };
    
    if (projectId) {
        updateProject(projectId, projectData);
        showNotification('项目已更新', 'success');
    } else {
        createProject(projectData);
        showNotification('项目已创建', 'success');
    }
    
    closeModal('projectModal');
    refreshProjectsList();
}

// 删除文章
function deleteArticle(articleId) {
    if (confirm('确定要删除这篇文章吗？')) {
        // 实际项目中应该调用API
        showNotification('文章已删除', 'success');
        refreshArticlesList();
    }
}

// 删除项目
function deleteProject(projectId) {
    if (confirm('确定要删除这个项目吗？')) {
        showNotification('项目已删除', 'success');
        refreshProjectsList();
    }
}

// 编辑文章
function editArticle(articleId) {
    openArticleModal(articleId);
}

// 编辑项目
function editProject(projectId) {
    openProjectModal(projectId);
}

// 刷新文章列表
function refreshArticlesList() {
    // 重新加载文章列表
    console.log('刷新文章列表');
}

// 刷新项目列表
function refreshProjectsList() {
    // 重新加载项目列表
    console.log('刷新项目列表');
}

// 数据存储和获取
function storeData(key, data) {
    localStorage.setItem(`admin_${key}`, JSON.stringify(data));
}

function getStoredData(key) {
    const data = localStorage.getItem(`admin_${key}`);
    return data ? JSON.parse(data) : null;
}

// 获取文章数据（模拟）
function getArticleData(articleId) {
    // 模拟数据
    return {
        title: 'AI驱动的智能供应链：未来已来',
        category: 'supply-chain',
        excerpt: '深入分析人工智能在供应链管理中的革命性应用...',
        content: '文章内容...',
        tags: ['AI', '智能供应链', '数字化转型']
    };
}

// 获取项目数据（模拟）
function getProjectData(projectId) {
    return {
        title: '智能供应链管理平台',
        date: '2023 - 至今',
        description: '主导开发AI驱动的智能供应链管理平台...',
        achievements: [
            '库存周转率提升35%，缺货率降低60%',
            '需求预测准确率达到92%',
            '供应商协同效率提升50%'
        ],
        tags: ['智能供应链', '需求预测', '库存优化']
    };
}

// 填充文章表单
function fillArticleForm(data) {
    document.getElementById('article-title').value = data.title;
    document.getElementById('article-category').value = data.category;
    document.getElementById('article-excerpt').value = data.excerpt;
    document.getElementById('article-content').value = data.content;
    document.getElementById('article-tags').value = data.tags.join(', ');
}

// 填充项目表单
function fillProjectForm(data) {
    document.getElementById('project-title').value = data.title;
    document.getElementById('project-date').value = data.date;
    document.getElementById('project-description').value = data.description;
    document.getElementById('project-achievements').value = data.achievements.join('\n');
    document.getElementById('project-tags').value = data.tags.join(', ');
}

// 创建文章（模拟）
function createArticle(data) {
    console.log('创建文章:', data);
}

// 更新文章（模拟）
function updateArticle(id, data) {
    console.log('更新文章:', id, data);
}

// 创建项目（模拟）
function createProject(data) {
    console.log('创建项目:', data);
}

// 更新项目（模拟）
function updateProject(id, data) {
    console.log('更新项目:', id, data);
}

// 更新主网站内容
function updateMainSite(profileData) {
    // 这里可以实现将管理后台的更改同步到主网站
    console.log('更新主网站内容:', profileData);
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    // 添加通知样式（如果还没有）
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
                color: white;
                z-index: 3000;
                animation: slideIn 0.3s ease;
                max-width: 400px;
                box-shadow: var(--shadow-lg);
            }
            .notification-success { background-color: var(--success-color); }
            .notification-error { background-color: var(--danger-color); }
            .notification-warning { background-color: var(--warning-color); }
            .notification-info { background-color: var(--primary-color); }
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.25rem;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// 设置事件监听器
function setupEventListeners() {
    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const openModal = document.querySelector('.modal[style*="block"]');
            if (openModal) {
                openModal.style.display = 'none';
            }
        }
    });
    
    // 主题色实时预览
    const themeColorInput = document.getElementById('theme-color');
    if (themeColorInput) {
        themeColorInput.addEventListener('input', function() {
            applyThemeColor(this.value);
        });
    }
}

// 导出函数供HTML调用
window.openArticleModal = openArticleModal;
window.openProjectModal = openProjectModal;
window.closeModal = closeModal;
window.editArticle = editArticle;
window.editProject = editProject;
window.deleteArticle = deleteArticle;
window.deleteProject = deleteProject;