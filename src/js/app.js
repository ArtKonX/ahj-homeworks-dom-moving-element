import GameField from "./classes/GameField";

import ActiveCellEnemy from "./classes/ActiveCellEnemy";

document.addEventListener("DOMContentLoaded", () => {
  const gameField = new GameField(4);
  const activeCellEnemy = new ActiveCellEnemy();

  gameField.createField();
  activeCellEnemy.init();
});
