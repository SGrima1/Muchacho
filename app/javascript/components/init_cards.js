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
    // const input = document.querySelector("#order_dish_id")
    // const array = input.value.split(",")
    // array.push(e.currentTarget.dataset.dishId)
    // console.log("toto", array)
    // const name = e.currentTarget.dataset.dishName;
    // const cost = e.currentTarget.dataset.dishCost;
    // document.querySelector(".basket-info").insertAdjacentHTML("beforeend",`<div>${name} - ${cost}</div>`)
    // input.value = array.join(",")
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
        elBasketInfo.insertAdjacentHTML("beforeend",`<div class="basket-dishOrder">${order.dishName} - ${order.cost} -(${order.count})  </div>`)
      });
      elBasketInfo.insertAdjacentHTML("beforeend",`<div class="basket-dishOrder">TOTAL: ${total}</div>`)
    }
  }

}
