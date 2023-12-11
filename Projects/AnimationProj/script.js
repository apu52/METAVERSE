function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light');
    body.classList.toggle('dark');
  
    const fox = document.querySelector('.fox');
    fox.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
      fox.style.transform = 'rotateY(0deg)';
    }, 500);
  }
  