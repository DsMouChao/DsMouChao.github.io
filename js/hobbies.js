document.addEventListener('DOMContentLoaded', () => {
    // 音乐播放器功能
    const playButton = document.querySelector('.player-controls .fa-play');
    let isPlaying = false;

    if (playButton) {
        playButton.addEventListener('click', () => {
            if (isPlaying) {
                playButton.classList.remove('fa-pause');
                playButton.classList.add('fa-play');
            } else {
                playButton.classList.remove('fa-play');
                playButton.classList.add('fa-pause');
            }
            isPlaying = !isPlaying;
        });
    }

    // 图片画廊功能
    const galleryImages = document.querySelectorAll('.hobby-gallery img');
    galleryImages.forEach(img => {
        // 图片加载错误处理
        img.addEventListener('error', () => {
            img.src = 'images/fallback-image.jpg';
        });

        // 点击图片放大预览
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;

            document.body.appendChild(modal);

            // 添加模态框样式
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            `;

            modal.querySelector('.modal-content').style.cssText = `
                position: relative;
                max-width: 90%;
                max-height: 90%;
            `;

            modal.querySelector('img').style.cssText = `
                max-width: 100%;
                max-height: 90vh;
                object-fit: contain;
            `;

            modal.querySelector('.close-modal').style.cssText = `
                position: absolute;
                top: -30px;
                right: 0;
                color: white;
                font-size: 30px;
                cursor: pointer;
            `;

            // 关闭模态框
            const closeModal = () => {
                modal.remove();
            };

            modal.querySelector('.close-modal').addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        });
    });

    // 添加卡片悬停效果
    const hobbyCards = document.querySelectorAll('.hobby-card');
    hobbyCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // 模拟地图加载
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.innerHTML = `
            <i class="fas fa-map-marked-alt"></i>
            <p>正在加载地图...</p>
        `;
        
        // 这里可以添加实际的地图加载代码
        // 例如使用 Google Maps API 或其他地图服务
    }
}); 