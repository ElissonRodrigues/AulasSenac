const prompt = require('prompt-sync')();
const BASE_URL = 'https://is.gd/create.php?format=json&url=';

const url = prompt('Digite a URL que deseja encurtar: ');

function encurtarURL(url) {
  return fetch(`${BASE_URL}${url}`)
    .then(response => response.json())
    .then(data => {
        return data.shorturl;
        
    })
    .catch(error => {
      console.error('Erro ao encurtar a URL:', error);
      throw error;
    });
}

encurtarURL(url).then(shorturl => {
    url_encurtada = shorturl;
    console.log(`A URL encurtada é: ${shorturl}`);
});

console.log(url_encurtada);