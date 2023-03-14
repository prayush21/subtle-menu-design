const menu = document.getElementById("menu");

console.log("menu", document, document.getElementsByClassName("menu-item"));

Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      console.log("index", index);
      menu.dataset.activeIndex = index;
    };
  }
);
