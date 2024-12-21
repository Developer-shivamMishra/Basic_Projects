var istus = document.querySelector("h5");
var add = document.querySelector("#add");
var flag = 0;

add.addEventListener("click", (e) => {
    if (flag == 0) {
        istus.innerHTML = "264";
        istus.style.color = "blue";
        add.innerHTML = "HG sCORE"
        flag = 1;
    }else{
        istus.innerHTML = "Crickter";
        istus.style.color = "red";
         add.innerHTML = "Proffesional"
    }
 
});

