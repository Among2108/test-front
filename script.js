const items = document.querySelectorAll(".nav-item");
const editmenu = document.getElementById("editdropmenu");
const editorialBtn = document.getElementById("editorialBtn");
const holdmenu = document.getElementById("holdmenu");


function openDropdown() {
  editmenu.classList.remove("opacity-0",  "pointer-events-none");
  editmenu.classList.add("opacity-100", );
}

function closeDropdown() {
  editmenu.classList.remove("opacity-100", );
  editmenu.classList.add("opacity-0",  "pointer-events-none");
}

items.forEach((item, index) => {

  item.addEventListener("mouseenter", () => {

    // reset ทุกปุ่มก่อน
    items.forEach(el =>
      el.classList.remove(
        "scale-150",
        "-translate-x-8",
        "translate-x-8",
        "font-bold"
      )
    );

    // ทำ effect ปุ่มที่ hover
    item.classList.add("scale-150", "font-bold");

    items.forEach((el, i) => {
      if (i < index) el.classList.add("-translate-x-8");
      if (i > index) el.classList.add("translate-x-8");
    });

    // ถ้าเป็น editorial
    if (item === editorialBtn) {
      openDropdown();
      editorialBtn.classList.add("opacity-0");
    }
  });

  item.addEventListener("mouseleave", () => {

    // reset เฉพาะตอนออกจากปุ่มนั้น
    items.forEach(el =>
      el.classList.remove(
        "scale-150",
        "-translate-x-8",
        "translate-x-8",
        "font-bold"
      )
    );

    if (item === editorialBtn) {
      closeDropdown();
      editorialBtn.classList.remove("opacity-0");
    }

  });

});



function showEditorial() {
  openDropdown();
  editorialBtn.classList.add("opacity-0");
}

function hideEditorial() {
  closeDropdown();
  editorialBtn.classList.remove("opacity-0");
}

// สำหรับ dropdown ที่อยู่ใน editorial

editorialBtn.addEventListener("mouseenter", showEditorial);
holdmenu.addEventListener("mouseenter", showEditorial);

editorialBtn.addEventListener("mouseleave", hideEditorial);
holdmenu.addEventListener("mouseleave", hideEditorial);




// เปิดเมนู dropdown ในมือถือ
function toggleDropdown() {
  if (window.innerWidth < 768) {
    document.getElementById("dropdown").classList.toggle("hidden");
  }
}
function toggleMenu() {
  const menu = document.getElementById("menumobile");
  menu.classList.toggle("hidden");
  console.log("mobile menu");
}
function dropdownEdit() {
  const editlist = document.getElementById("editli");
  const editbtn = document.getElementById("editbtmb");
   const mainnav = document.getElementById("mainnav");

  const isOpen = !editlist.classList.contains("opacity-0");

  if (isOpen) {
    // ปิด
    editlist.classList.add("translate-x-2", "opacity-0", "pointer-events-none");
    editbtn.classList.remove("font-bold", "scale-150");
  } else {
    // เปิด
    editlist.classList.remove("translate-x-2", "opacity-0", "pointer-events-none");
    editbtn.classList.add("font-bold", "scale-150");
  }

 

mainnav.classList.toggle("translate-y-64");

}


// LOGO

  const logo = document.getElementById("logo");

  document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
      e.preventDefault(); // กันหน้า scroll ลง
      logo.classList.toggle("scale-[0.2]");
      logo.classList.toggle("-translate-y-[60px]");
     
    }
  });


