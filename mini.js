fetch('http://exemplo.com/arquivo.txt')
  .then(response => response.text())
  .then(text => {
    if (!text.includes('ok')) {
      window.location.href = 'http://google.com';
    }
  })
  .catch(error => console.error(error));