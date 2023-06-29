import _ from 'lodash';

export function commentsArray(){
    var comments = ["Excellent decision!", "I love that dish!","It's delicious!", "Very good choice!", "Grate choice!"];
    return comments;
} 

export function WaitressComment(comments){
    var commentsLen = comments.length;
    var comentNumber = _.random(0, commentsLen - 1);
    return comments[comentNumber];
}


export function createMenu(){
    const dishesMenu = [{dish: "Risotto", price: 10, type: "main"},
                    {dish: "Pasta", price: 6, type: "main"},
                    {dish: "Pizza", price: 12, type: "main"},
                    {dish: "Burger", price: 8, type: "main"},
                    {dish: "Soup", price: 2, type: "side"},
                    {dish: "Salad", price: 2, type: "side"},
                    {dish: "Fries", price: 3, type: "side"},
                    {dish: "Croquettes", price: 4, type: "side"}
    ];
    return dishesMenu;
}
// Create array to use the dishes
export function arrayDishes(dishes, type){  
    var retval = [];
    dishes.forEach(showValues => {
        for(var key in showValues){
            if(key == 'dish' && showValues["type"] == type){
                retval.push(showValues[key]);
            }                    
        }
    });
    return retval;
}

export function printDishesToSting(dishes){
    var retval = "";
    for(var i = 0; i<dishes.length; i++) { 
        if(i == 0){
            retval += dishes[i];
        }else{
            retval += " | " + dishes[i];
        }      
    }
    return retval;
}
//get the price for selected dish
export function getDishPrice(dishes, selectedDish){
    var retval = 0;
    dishes.forEach(showValues => {
      for(var key in showValues){
          if(key == 'dish' && showValues[key] == selectedDish){
            retval = showValues["price"];
          }                    
      }
    });
    return retval;
  }

export function getDishTotalPrice(dishesMenu, selectedDishes){
    //Array de dishes
    var totalPrice = 0;
    for (var i = 0; i < selectedDishes.length; i++)
    {
        totalPrice += getDishPrice(dishesMenu,selectedDishes[i]);

    }
    return totalPrice;
}

export function fillSelector(selector, dishes){
    var opt = null;

    //First empty value:
    opt = document.createElement('option');
    selector.appendChild(opt);

    //Add values:
    for(var i = 0; i < dishes.length; i++) { 
  
        opt = document.createElement('option');
        opt.value = dishes[i];
        opt.innerHTML = dishes[i];       
        selector.appendChild(opt);
    }
}

