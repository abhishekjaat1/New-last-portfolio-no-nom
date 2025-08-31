// Simple color animation for the text
const text = document.querySelector('.animated-text');
let i = 0;
const colors = ['#00ffcc','#ff0066','#ffcc00','#00ccff'];
setInterval(() => {
    text.style.color = colors[i % colors.length];
    i++;
}, 1000);