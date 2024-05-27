let btn = document.querySelector("button")
let box = document.querySelector("#pass")
let img = document.querySelector("#img")
let length = 16;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let num = "0123456789"
let char = "!@#$%^&*()_=+}{:?][/.<>"

let allchar = uppercase + lowercase + num + char;

btn.addEventListener("click", ()=>{
    let password = ""
    password  = uppercase[Math.floor(Math.random() * uppercase.length)]
    password  = lowercase[Math.floor(Math.random() * lowercase.length)]
    password  = num[Math.floor(Math.random() * num.length)]
    password  = char[Math.floor(Math.random() * char.length)]
    
    while(length > password.length){
        password  += allchar[Math.floor(Math.random() * allchar.length)]
    }

    box.value = password;

})

img.addEventListener("click", ()=>{
    navigator.clipboard.writeText(box.value);
})