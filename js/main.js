"use strict"
    
// CREO LA FUNZIONE CHE GENERA LA GRIGLIA
    function grid(caselle){
        let container = document.createElement("div")
        container.setAttribute('class', 'container mt-5')
        document.body.appendChild(container);
        let table = document.createElement("table")
        container.appendChild(table)
        let cnt = 1;
        for(let i = 0; i<caselle; i++){
            let row = document.createElement("tr")
            table.appendChild(row)
            for(let j = 0; cnt<=10, j<caselle; j++){
                let column = document.createElement("td")
                row.appendChild(column)
                let columnText = document.createTextNode(`${cnt}`)
                let div = document.createElement("div")
                column.appendChild(div)
                div.appendChild(columnText)
                div.setAttribute('class', 'column ')
                div.addEventListener('click', function(){
                    this.classList.toggle("column")
                    console.log(this)
                })
                cnt++  
            }
        }
    }

// CREO L'EVENTO CHE MI GENERA LA GRIGLIA IN BASE AL LIVELLO DI DIFFICOLTA' 
let button = document.querySelector(".play")
button.addEventListener('click', function(){
   let select = document.querySelector(".form-select").value
   if(select == 3){
    grid(7)
   }
   else if(select == 2){
    grid(9)
   }
   else{
    grid(10)
   }
})

let reset = document.querySelector(".reset")
reset.addEventListener('click', function(){
})