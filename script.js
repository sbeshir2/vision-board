// Remove title overlay after animation
setTimeout(() => {
    const titleOverlay = document.getElementById('titleOverlay');
    if (titleOverlay) {
        titleOverlay.remove();
    }
}, 3500);

// Filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const gridItems = document.querySelectorAll('.grid-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const category = btn.dataset.category;

        // Filter items with animation
        gridItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeIn 0.5s ease';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Modal functionality
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.getElementById('closeBtn');

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.caption');
        
        modalImg.src = img.src;
        modalCaption.innerHTML = caption.innerHTML;
        modal.classList.add('active');
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

console.log('✨ Sabrina\'s Vision Board 2026 loaded successfully!');