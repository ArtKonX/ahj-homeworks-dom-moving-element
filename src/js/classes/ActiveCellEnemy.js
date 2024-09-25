import image from "../../img/goblin.png";

export default class ActiveCellEnemy {
  init() {
    setInterval(this.showEnemy, 2000);
  }

  showEnemy() {
    const imgGoblin = document.createElement("img");
    imgGoblin.src = image;

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
