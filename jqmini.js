fetch('https://raw.githubusercontent.com/SiteLinky/key/main/KEY2023.txt')
  .then(response => response.text())
  .then(text => {
    if (!text.includes('ok')) {
      window.location.href = 'http://google.com';
    }
  })
  .catch(error => console.error(error));