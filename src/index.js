// write your code here
// write your code here
const ramenMenu = document.querySelector("#ramen-menu");

console.log(getAllRamen());
console.log(formEventListener());

function getAllRamen() {
    fetch("http://localhost:3000")
    .then(response => response.json())
    .then(ramenItems)
}

function ramenItems(ramenArr) {
    ramenArr.forEach(ramen => {
        renderImage(ramen);
    })
}

function renderImage(ramen) {
    const img = document.createElement("img")
    img.src = ramen.img
    img.alt = remen.name
    img.dataset.id = ramen.id
    ramenMenu.append(img)

    img.addEventListener("click", function(e) {
        getAllRamen(e.target.dataset.id);
    })
}

function getRamen(ramenId) {
    fetch(`http://localhost:3000/${ramenId}`)
    .then(response => response.json())
    .then(ramen => {
        renderDetails(ramen)
    })
}

function renderDetails(ramen) {
    const img = document.querySelector(".detail-image");
    const h2 = document.querySelector(".name");
    const h3 = document.querySelector(".resturant");
    const ratingInput = document.querySelector("#rating")
    ratingInput.value = ramen.rating
    const commentInput = document.querySelector("#new-comment")
    commentInput.value = ramen.new-comment
    img.src = ramen.image;
    img.alt = ramen.name;
    h2.textContent = ramen.name
    h3.textContent = ramen.resturant
    const RamenForm = document.querySelector("#ramen-rating")
    ramenForm.dataset.id = ramen.id
}

function formEventListener() {

    const ramenForm = document.querySelector("#ramen-rating")
    ramenForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const newRating = document.querySelector("rating").value
        const newComment = document.querySelector("#new-comment").value
        const updateObj = {
            id:parseInt(ramenForm.dataset.id),
            rating: newRating,
            comment: newComment
        }
        
        updateRamen(updateObj);
        e.target.reset();
    })
}

function updateRamen(updatedObj){

    fetch(`http://localhost:3000/ramens/${updatedObj.id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedObj),
})
.then(response => response.json())
.then(updatedObj => {
    const ratingInput = document.querySelector("#rating")
    const commentInput = document.querySelector("#comment")
    ratingInput.value = updatedObj.rating
    commentInput.value = updatedObj.comment
    
})

}
//Git upload