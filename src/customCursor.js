let lastSpawnTime = 0;
const spawnInterval = 50; // Adjust this value to control the spawn frequency (in milliseconds)

document.addEventListener('mousemove', (e) => {
  const currentTime = new Date().getTime();
  if (currentTime - lastSpawnTime > spawnInterval) {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    bubble.style.left = (e.pageX + 7) + 'px';
    bubble.style.top = (e.pageY + 7) + 'px';
    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 1000);

    lastSpawnTime = currentTime;
  }
});