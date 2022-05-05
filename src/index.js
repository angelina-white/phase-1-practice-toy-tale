let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  fetch('http://localhost:3000/toys')
  .then((resp) => resp.json())
  .then((element) =>
  {
    const toyCollection = document.getElementById("toy-collection")
    element.forEach((e) =>
    {
      const card = document.createElement('div')
      card.classList.add("card");
      toyCollection.append(card)

      const name = document.createElement('h2')
      const image = document.createElement('img')
      const likes = document.createElement('p')

      image.classList.add("toy-avatar")

      name.innerText = e.name
      image.src = e.image
      likes.innerText = e.likes

      card.append(name, image, likes)


    })
  })
});

