const box = document.querySelector('.box')
const txt = document.querySelector('#txt')
document.querySelector('#randomBtn').addEventListener('click', () => {
  const fakeUrl = 'https://jsonplaceholder.typicode.com/posts/'
  fetch(fakeUrl)
    .then(response => response.json())
    .then(data => txt.innerText = data[Math.floor(Math.random() * data.length)]?.body)
})