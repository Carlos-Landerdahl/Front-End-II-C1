let sendButton = document.getElementById('sendButton');
let nick = document.getElementById('nick');
let content = document.getElementById('content');
let img = document.getElementById('img');
let number = document.getElementById('number');

sendButton.addEventListener('click', function (e) {
    if(nick.value=="" || 
    content.value=="" ||
    img.value==""||
    number.value==""){
        sendButton.setAttribute("disabled", true)
    }
    else{
        sendButton.removeAttribute("disabled")
    }
    e.preventDefault()

    console.log(nick.value);

    let containerCards = document.getElementById('container-cards')
    
    let card = document.createElement("div")

    card.innerHTML =  `<img src="${img.value}"></img>
    <div class="card-text">
    <h3>${nick.value}</h3>
    <p>${content.value}</p>
    <span>Número da camiseta:</span>
    <span>${number.value}</span>
    </div>`

    card.classList.add("card") 
    
    containerCards.appendChild(card)
})

let smallNick = document.getElementById("smallNick")

nick.addEventListener("keyup", function(){
    if(nick.value.length < 3){
        smallNick.style.display="block"
    }
    else {
        smallNick.style.display="none"
    }
    
})

