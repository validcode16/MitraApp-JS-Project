
let bagItems;
onLoad();

function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0){
    bagItemCountElement.innerText = bagItems.length;
    bagItemCountElement.style.visibility = 'visible';
  }else {
    bagItemCountElement.style.visibility = 'hidden';
  }
  

}


function displayItemsOnHomePage(){
 
    let itemsContainerElement = document.querySelector(".items-container");
    if(!itemsContainerElement) {
      return;
    }
    let innerHTML = '';
    items.forEach(item => {

      innerHTML += `
      <div class="item-container">
      <img claass="item-image" src="${item.image}" alt="Item Image">
      <div class="rating">
      ${item.rating.stars} ★ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
        <span class="current-price">${item.current_price}</span>
        <span class="original-price">${item.original_price}</span>
        <span class="discount">${item.discount_percentage}</span>
      </div>
      <button class="btn-addbag" onclick="addToBag(${item.id})">Add o Bag</button>
      </div>

    `
    });

    itemsContainerElement.innerHTML = innerHTML;
 
}
