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
      const input = document.querySelector("#order_dish_id")
      const array = input.value.split(",")
      array.push(e.currentTarget.dataset.dishId)
      input.value = array.join(",")
      updateDisplay();
   })
 })
};

export const initWines = () => {
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
      const input = document.querySelector("#order_wine_id")
      const array = input.value.split(",")
      array.push(e.currentTarget.dataset.dishId)
      input.value = array.join(",")
      updateDisplay();
    })
  })
};

export const initTasting = () => {
  const tastingBasket = document.getElementById("tasting-basket");

   if (!tastingBasket) return 
   tastingBasket.addEventListener('click', e => {
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
 
      const input = document.querySelector("#order_dish_id")
      const array = input.value.split(",")
      console.log(array)
      array.push(e.currentTarget.dataset.dishId)
      input.value = array.join(",")
      updateDisplay();
    })};


function updateDisplay() {
  let total = 0;
  const elBasket = document.querySelector(".basket-info");
  if (elBasket) {
    let elBasketInfo = document.querySelector(".basket-info-list-push");
    if (elBasketInfo) {
      while (elBasketInfo.firstChild){
        
        elBasketInfo.removeChild(elBasketInfo.firstChild)
      }    
      basket.forEach((order) => {
        total += parseInt(order.cost * order.count, 10);
        elBasketInfo.insertAdjacentHTML("beforeend",`<div class="basket-dishName">${order.dishName}</div><div class="basket-dishCost">${parseInt(order.cost, 10) / 100}</div><div class="basket-dishCount">${order.count}</div> <div class="basket-dishTotal">${parseInt(order.cost * order.count, 10)/ 100}</div>`)
      });
    }
    let elBasketTotal = document.querySelector(".basket-info-total");
    if (elBasketTotal) {
      while (elBasketTotal.firstChild){
        elBasketTotal.removeChild(elBasketTotal.firstChild);
      }      
        elBasketTotal.insertAdjacentHTML("beforeend",`<div class="basket-dishName">TOTAL</div> <div class="basket-dishTotal">${total / 100}</div>`)
      
    }
  }
}
