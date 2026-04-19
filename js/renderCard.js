const container = document.querySelector(".container")

fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(book => {
   const card= `<div class="card" onclick="window.location.href='https://hamnews.xyz/e-books/${book.filename}'">
    <img src="${book.image}" alt="${book.title}">
    <p>${book.title}</p>
  </div>`
      container.insertAdjacentHTML("afterbegin", card).innerHTML;
    });
  });
