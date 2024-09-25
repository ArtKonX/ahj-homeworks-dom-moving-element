/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/classes/GameField.js
class GameField {
  constructor(boardField) {
    this.boardField = boardField;
  }
  createField() {
    const gameField = document.querySelector(".game-field");
    const fieldList = document.createElement("ul");
    fieldList.classList.add("field-list");
    gameField.appendChild(fieldList);
    for (let i = 0; i < Math.pow(this.boardField, 2); i++) {
      const gameCell = document.createElement("li");
      gameCell.classList.add("game-cell");
      fieldList.appendChild(gameCell);
    }
  }
}
;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/classes/ActiveCellEnemy.js

class ActiveCellEnemy {
  init() {
    setInterval(this.showEnemy, 2000);
  }
  showEnemy() {
    const imgGoblin = document.createElement("img");
    imgGoblin.src = goblin_namespaceObject;
    const fieldListUl = document.querySelector("ul");
    const img = document.querySelector("img");
    const fieldList = fieldListUl.querySelectorAll("li");
    img && img.remove();
    const randomIndex = Math.floor(Math.random() * fieldList.length);
    for (let i = 0; i < fieldList.length; i++) {
      if (i === randomIndex) {
        fieldList[i].classList.add("active");
        fieldList[i].appendChild(imgGoblin);
      } else {
        fieldList[i].classList.remove("active");
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


document.addEventListener("DOMContentLoaded", () => {
  const gameField = new GameField(4);
  const activeCellEnemy = new ActiveCellEnemy();
  gameField.createField();
  activeCellEnemy.init();
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;