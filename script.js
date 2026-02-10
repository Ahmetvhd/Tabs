let sekmeler = document.querySelectorAll(".content")
let buttonlar = document.querySelectorAll(".container-header button")

buttonlar.forEach((btn, index) => {
    btn .addEventListener("click", () => {
        
        sekmeler.forEach(function(sekme){
            sekme.classList.remove("active");
        })
        buttonlar.forEach(function(btn){
            btn.classList.remove("active");
        })

        btn.classList.add("active");
        sekmeler[index].classList.add("active");
    })
});