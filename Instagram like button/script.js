let con = document.querySelector("#container");
let heart = document.querySelector("i");

con.addEventListener("dblclick",()=>{
    heart.style.transform = "scale(2)";
    heart.style.opacity = 0.7;

    setTimeout(() => {
        heart.style.opacity = 0;
    }, 1000);
    setTimeout(() => {
        heart.style.transform = "scale(0)"
    }, 2000);
})

