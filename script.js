const items = document.querySelectorAll(".nav-item");
const editmenu = document.getElementById("editdropmenu");
const editorialBtn = document.getElementById("editorialBtn");

function openDropdown() {
  editmenu.classList.remove("opacity-0", "pointer-events-none");
}

function closeDropdown() {
  editmenu.classList.add("opacity-0", "pointer-events-none");
}

items.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {

    // reset ก่อนทุกครั้ง
    items.forEach(el =>
      el.classList.remove(
        "scale-150",
        "-translate-x-8",
        "translate-x-8",
        "font-bold"
      )
    );

    // scale ตัวที่ hover
    item.classList.add("scale-150", "font-bold");

    // ขยับซ้ายขวา
    items.forEach((el, i) => {
      if (i < index) el.classList.add("-translate-x-8");
      if (i > index) el.classList.add("translate-x-8");
    });

    // เปิด dropdown ถ้าเป็น editorial
    if (item === editorialBtn) {
      openDropdown();
    } else {
      closeDropdown();
    }
  });
});

/* ปิดทั้งหมดเมื่อออกจาก navbar */
editmenu.addEventListener("mouseleave", () => {
  closeDropdown();

  items.forEach(el =>
    el.classList.remove(
      "scale-150",
      "-translate-x-8",
      "translate-x-8",
      "font-bold"
    )
  );
});



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


