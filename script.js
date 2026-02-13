


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