// 贊助專案管理腳本
class ProjectManager {
    constructor() {
        this.projects = [];
        this.categories = {};
    }

    // 載入專案資料
    async loadProjects() {
        try {
            const response = await fetch('./sponsored-projects.json');
            const data = await response.json();
            
            this.projects = data.projects;
            this.categories = data.categories;
            
            this.renderProjects();
        } catch (error) {
            console.error('載入專案資料失敗:', error);
            this.renderFallbackProjects();
        }
    }

    // 渲染專案卡片
    renderProjects() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        let html = '';

        // 渲染專案卡片
        this.projects.forEach((project, index) => {
            const category = this.categories[project.type];
            const delay = (index + 1) * 100;
            
            html += `
                <div class="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow hover-lift" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="text-center">
                        <div class="w-12 h-12 bg-${category.color}-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            ${this.getIcon(category.icon, category.color)}
                        </div>
                        <h3 class="text-sm font-bold text-gray-900 mb-2 leading-tight">${project.name}</h3>
                        <span class="inline-block bg-${category.color}-100 text-${category.color}-800 text-xs px-2 py-1 rounded-full${project.website ? ' mb-2' : ''}">${category.name}</span>
                        ${project.website ? `
                            <div>
                                <a href="${project.website}" target="_blank" class="text-blue-600 hover:text-blue-800 text-xs underline">
                                    查看網站 →
                                </a>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        });

        // 新增申請卡片
        html += `
            <div class="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors hover-lift" data-aos="fade-up" data-aos-delay="${(this.projects.length + 1) * 100}">
                <div class="text-center">
                    <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </div>
                    <h3 class="text-sm font-bold text-gray-600 mb-2 leading-tight">申請贊助</h3>
                    <a href="https://s.ncse.tw/cp-plan" target="_blank" class="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-700 transition-colors">
                        立即申請
                    </a>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }



    // 獲取圖示 SVG
    getIcon(iconName, color) {
        const icons = {
            'academic-cap': `<svg class="w-6 h-6 text-${color}-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            </svg>`,
            'globe': `<svg class="w-6 h-6 text-${color}-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"></path>
            </svg>`,
            'users': `<svg class="w-6 h-6 text-${color}-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>`
        };

        return icons[iconName] || icons['globe'];
    }

    // 備用專案顯示（當 JSON 載入失敗時）
    renderFallbackProjects() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.innerHTML = `
            <div class="col-span-full text-center py-8">
                <p class="text-gray-500">載入專案資料中...</p>
            </div>
        `;
    }
}

// 初始化專案管理器
const projectManager = new ProjectManager();

// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', () => {
    projectManager.loadProjects();
});