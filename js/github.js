document.addEventListener('DOMContentLoaded', () => {
    // 模拟GitHub数据
    const githubData = {
        repos: [
            {
                name: '个人网站',
                description: '使用现代Web技术开发的响应式个人网站',
                stars: 15,
                forks: 5,
                language: 'JavaScript',
                languageColor: '#f1e05a',
                url: '#'
            },
            {
                name: '机器学习项目',
                description: '基于深度学习的图像识别系统',
                stars: 28,
                forks: 12,
                language: 'Python',
                languageColor: '#3572A5',
                url: '#'
            },
            {
                name: '分布式系统',
                description: '高性能分布式计算框架',
                stars: 45,
                forks: 18,
                language: 'Java',
                languageColor: '#b07219',
                url: '#'
            }
        ],
        contributions: generateRandomContributions()
    };

    // 生成仓库卡片
    function generateRepoCards() {
        const reposGrid = document.querySelector('.repos-grid');
        reposGrid.innerHTML = '';

        githubData.repos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'repo-card';
            card.innerHTML = `
                <div class="repo-header">
                    <h3><i class="fas fa-book"></i> ${repo.name}</h3>
                    <div class="repo-stats">
                        <span><i class="fas fa-star"></i> ${repo.stars}</span>
                        <span><i class="fas fa-code-branch"></i> ${repo.forks}</span>
                    </div>
                </div>
                <p class="repo-description">${repo.description}</p>
                <div class="repo-footer">
                    <div class="repo-language">
                        <span class="language-color" style="background-color: ${repo.languageColor}"></span>
                        <span>${repo.language}</span>
                    </div>
                    <a href="${repo.url}" class="repo-link">查看项目 <i class="fas fa-external-link-alt"></i></a>
                </div>
            `;
            reposGrid.appendChild(card);
        });
    }

    // 生成贡献日历
    function generateContributionCalendar() {
        const calendarGrid = document.querySelector('.calendar-grid');
        calendarGrid.innerHTML = '';

        githubData.contributions.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.setAttribute('data-level', day.level);
            dayElement.title = `${day.count} 次贡献`;
            calendarGrid.appendChild(dayElement);
        });
    }

    // 生成随机贡献数据
    function generateRandomContributions() {
        const contributions = [];
        for (let i = 0; i < 364; i++) {
            const count = Math.floor(Math.random() * 10);
            let level = 0;
            if (count > 0) level = 1;
            if (count > 3) level = 2;
            if (count > 6) level = 3;
            if (count > 8) level = 4;
            
            contributions.push({
                count,
                level
            });
        }
        return contributions;
    }

    // 仓库筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            // 这里可以添加实际的筛选逻辑
            generateRepoCards();
        });
    });

    // 初始化页面
    generateRepoCards();
    generateContributionCalendar();

    // 添加动画效果
    const repoCards = document.querySelectorAll('.repo-card');
    repoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 