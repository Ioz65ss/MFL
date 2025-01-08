const container = document.querySelector('.flower-container');

for (let i = 0; i < 50; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.transform = `rotate(${i * 7.2}deg)`;
    container.appendChild(petal);
}
