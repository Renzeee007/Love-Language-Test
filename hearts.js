function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'flying-heart';
    
    // Random size between 10px and 25px
    const size = Math.random() * 15 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    
    // Random position from left
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Random color variations
    const hue = Math.random() * 20 + 340; // Range of pinks
    const saturation = Math.random() * 20 + 80;
    const lightness = Math.random() * 20 + 60;
    heart.style.background = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    
    // Random animation duration
    heart.style.animationDuration = (Math.random() * 5 + 10) + 's';
    
    // Add to document
    document.body.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 15000);
}

function initHearts() {
    // Create initial batch of hearts
    for(let i = 0; i < 10; i++) {
        setTimeout(() => createHeart(), i * 300);
    }
    
    // Continuously create new hearts
    setInterval(createHeart, 800);
}

// Start creating hearts when the page loads
window.addEventListener('load', initHearts);