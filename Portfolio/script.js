var nav_items = document.querySelectorAll("nav a");
var nav_item;

for (var i = 0; i < nav_items.length; i++) {
  nav_item = nav_items[i];
  var remplace = function () {
    for (let i = 0; i < nav_items.length; i++) {
      nav_items[i].parentNode.classList.remove("active");
    }
    this.parentNode.classList.add("active");
  };
  nav_item.addEventListener("click", remplace);
}

document.querySelector("#home").addEventListener("click", function () {
  for (let i = 0; i < nav_items.length; i++) {
    nav_items[i].parentNode.classList.remove("active");
  }
});
