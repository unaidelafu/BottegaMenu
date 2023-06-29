import React, { Component } from 'react';
import { footer } from 'devcamp-js-footer-unai';

import helper, {createMenu, createSides, arrayDishes, 
  printDishesToSting, fillSelector, commentsArray, 
  WaitressComment, getDishPrice, getDishTotalPrice} from './helper';

//Load waitress comments:
var comments = commentsArray();
//console.log(WaitressComment(comments));

//Load dishes and prices
var menuLoaded = createMenu();

//dishes array
var mainMenu = arrayDishes(menuLoaded, "main");
var sideMenu = arrayDishes(menuLoaded, "side");

// dish to print
var mainMenuShow = printDishesToSting(mainMenu);
var sideMenuShow = printDishesToSting(sideMenu);

// Selector change event
function selectorValueChange(selector, comments){ 

  var price = 0;
  var dishes = null;
  selector.addEventListener("change", (event) => {

    if(event.target.value != ""){
      //Diferent types of menu (main or side)
      dishes = menuLoaded;
      price = getDishPrice(dishes, event.target.value);
      var radomComment = WaitressComment(comments);   
      window.alert(`${event.target.value}, ${radomComment} The price is: ${price}€`);
    }
  });

}

// Confirm button event
function menuSelection(){
  
  var btnAccept = document.getElementById("btnAccept");
  btnAccept.addEventListener("click", (event) => {

    var selectedArray = [];
    var totalPrice = 0;
    var mainSelectorElement = document.getElementById('selectMainMenu').value;
    var side1SelectorElement = document.getElementById('selectSideMenu1').value;
    var side2SelectorElement = document.getElementById('selectSideMenu2').value;

    if(mainSelectorElement != ""){
      selectedArray.push(mainSelectorElement);
    }
    if(side1SelectorElement != ""){
      selectedArray.push(side1SelectorElement);
    }
    if(side2SelectorElement != ""){
      selectedArray.push(side2SelectorElement);
    }
    totalPrice = getDishTotalPrice(menuLoaded, selectedArray);
    window.alert(`The total price is: ${totalPrice}€`);

  });
}

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Bottega Menu</h1>
        <hr></hr>
        <h2>Main Menu</h2>
        <h3>{mainMenuShow}</h3>
        <hr></hr>
        <h4>Please, select your choice: </h4>
        <h4><select id="selectMainMenu"></select></h4>
        <hr></hr>
        <h2>Sides Menu</h2>       
        <h3>{sideMenuShow}</h3>
        <hr></hr>
        <h4>Please, select your choice: </h4>
        <h4><select id='selectSideMenu1'></select></h4>
        <hr></hr>
        <h4>Please, select your second choice: </h4>
        <h4><select id="selectSideMenu2"></select></h4>
        <hr></hr>
        <h3><button id = "btnAccept">Confirm</button></h3>
        <hr></hr>
        { footer('Unai De la Fuente Enterprise') }
      </div>
    );
  }
}


window.onload = setTimeout(waitLoad, 2000);

function waitLoad(){

    //window loaded, you can get element by id:
    const mainSelectorElement = document.getElementById('selectMainMenu');
    const side1SelectorElement = document.getElementById('selectSideMenu1');
    const side2SelectorElement = document.getElementById('selectSideMenu2');


    //Load Selectors values:
    fillSelector(mainSelectorElement, mainMenu);
    fillSelector(side1SelectorElement, sideMenu);
    fillSelector(side2SelectorElement, sideMenu);
 
    // Selector events
    selectorValueChange(mainSelectorElement,comments);
    selectorValueChange(side1SelectorElement,comments);
    selectorValueChange(side2SelectorElement,comments);

    //Confirm Button event
    menuSelection();
    
 };