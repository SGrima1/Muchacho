import { baseApiUrl } from "mapbox-gl";

let basket = [];

export const initCards = () => {
 const cards = document.querySelectorAll("#dish_basket");
 cards.forEach(card => {
   card.addEventListener('click', e => {
     const foundOrder = basket.find (order => order.dishId === e.currentTarget.dataset.dishId );
     if (foundOrder) {
       foundOrder.count++; 
     } else {
       basket.push({
         dishId: e.currentTarget.dataset.dishId,
         dishName: e.currentTarget.dataset.dishName,
         cost: e.currentTarget.dataset.dishCost,
         count: 1,
       });
     }
     updateDisplay();
   })
 })
};

export const initWines = () => {
  console.log("helloooooooooooo")
  const wineBasket = document.querySelectorAll("#wine_basket");
  wineBasket.forEach(wine => {
    wine.addEventListener('click', e => {
      
      const foundOrder = basket.find (order => order.dishId === e.currentTarget.dataset.dishId );
      if (foundOrder) {
        foundOrder.count++; 
      } else {
        basket.push({
          dishId: e.currentTarget.dataset.dishId,
          dishName: e.currentTarget.dataset.dishName,
          cost: e.currentTarget.dataset.dishCost,
          count: 1,
        });
      }
      updateDisplay();
    })
  })
};



function updateDisplay() {
  let total = 0;
  const elBasket = document.querySelector(".basket-info");
  if (elBasket) {
    let elBasketInfo = document.querySelector(".basket-info-list");
    if (elBasketInfo) {
      while (elBasketInfo.firstChild){
        elBasketInfo.removeChild(elBasketInfo.firstChild)
      }    
      basket.forEach((order) => {
        total += parseInt(order.cost, 10);
        elBasketInfo.insertAdjacentHTML("beforeend",`<div class="basket-dishOrder">${order.dishName} - ${parseInt(order.cost, 10) / 100} -(${order.count})  </div>`)
      });
      elBasketInfo.insertAdjacentHTML("beforeend",`<div class="basket-dishOrder">TOTAL: ${total / 100}</div>`)
    }
  }

}
