let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".experiment");


if (localStorage.getItem("color")) {
    // add color div
    div.style.backgroundColor = localStorage.getItem("color");
    // remove active class
    lis.forEach((li) => {
        li.classList.remove("active");
    })
    // add active class current element
    document.querySelector(`[data-color="${localStorage.getItem("color")}"]`).classList.add("active")
}
lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // console.log(e.target.dataset.color);
        // remove active class
        lis.forEach((li) => {
            li.classList.remove("active");
        })
        // add class active to current element
        e.target.classList.add("active");
        // add current color to localStorage
        localStorage.setItem("color", e.target.dataset.color);
        // change bg div
        div.style.backgroundColor=e.target.dataset.color
    })
})