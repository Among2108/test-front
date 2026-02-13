const items = document.querySelectorAll("#navMenu .nav-item");

items.forEach((item, index) => {

  item.addEventListener("mouseenter", () => {

    items.forEach((el, i) => {

      el.classList.remove(
        "scale-150",
        "-translate-x-8",
        "translate-x-8",
        "font-bold"
      );

      if (i === index) {
        el.classList.add("scale-150", "font-bold"); // ขยายใหญ่
      } 
      else if (i < index) {
        el.classList.add("-translate-x-8"); // ซ้ายถอยซ้าย
      } 
      else {
        el.classList.add("translate-x-8"); // ขวาถอยขวา
      }

    });

  });

  item.addEventListener("mouseleave", () => {
    items.forEach((el) => {
      el.classList.remove(
        "scale-150",
        "-translate-x-8",
        "translate-x-8",
           "font-bold"
      );
    });
  });

});



function toggleDropdown() {
if (window.innerWidth < 768) {
    document.getElementById("dropdown")
      .classList.toggle("hidden");
  }
}


function toggleMenu() {
    const menu = document.getElementById("menumobile");
    menu.classList.toggle("hidden");
    console.log("mobile menu" )
}

function dropdownEdit() {
    const editlist = document.getElementById("editli");
    editlist.classList.toggle("hidden");
}