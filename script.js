const container = document.querySelector('.spiral-container');

// Create spiral flowers
for (let i = 0; i < 1000; i++) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.transform = `rotate(${i * 0.5}deg) translateY(${i * 0.5}px)`;
    flower.style.animationDelay = `${i * 0.01}s`;
    container.appendChild(flower);
}

// Create diagonal petals
for (let i = 0; i < 100; i++) {
    const petal = document.createElement('div');
    petal.classList.add('diagonal-petal');
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.top = `${Math.random() * 100}vh`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(petal);
}
