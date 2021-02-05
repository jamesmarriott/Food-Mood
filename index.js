//variables

const urlBase = "https://foodish-api.herokuapp.com/images/"
const filterFoodType = document.getElementById("filterFoods");

// county displayed item
const productCounter = document.getElementById("header")
const foodDiv = document.querySelector('.food-container')
let foodType = ""

filterFoodType.addEventListener("change", e=> {
  const value = e.target.value;

  foodDiv.innerHTML = ""

  switch(value) {
    case "dosa":
      foodType = "dosa"
      break 
    case "burger":
      foodType = "burger"
      break 
    case "pizza":
      foodType = "pizza"
      break
    case "idly":
      foodType = "idly" 
      break
    case "biryani":
      foodType = "biryani"
      break 
  }
  getProducts().catch(error => console.log).then(renderHTML)
})

async function getProducts(){
  let maxFood = 77
  let currentID = 1
  let webLinks = []
  do {
  const requestString = `${urlBase}${foodType}/${foodType}${currentID}.jpg`
  webLinks.push(requestString)
  currentID = currentID +1
  } while (currentID < maxFood)
  return webLinks
}

function renderHTML(webLinks) {
    let foodHTML = ""
    let productCount = 0
    webLinks.forEach(item => 
      { productCount ++
        productCounter.innerHTML = `${productCount} ${foodType}'s displayed.`
        foodHTML += `
        <div class='product-wrapper'>
            <img src="${item}" class="product-image" alt="image of product">
        </div>
      `
    })
      foodDiv.innerHTML += foodHTML
}