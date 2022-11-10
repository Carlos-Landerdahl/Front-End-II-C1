let sendButton = document.getElementById('sendButton');
let nick = document.getElementById('nick');
let content = document.getElementById('content');
let img = document.getElementById('img');
let number = document.getElementById('number');

sendButton.disabled = true;
function validator() {
    if (
        nick.value.length > 2 && nick.value !== '' &&
        content.value.length > 4 && content.value !== '' &&
        img.value.length > 4 && img.value !== '' &&
        number.value.length > 0 && number.value !== ''
    ){
        sendButton.disabled = false;
    }else {
        sendButton.disabled = true;
    }
}

nick.addEventListener("input", function(e){
    smallNick.style.display = "block"
    validator()
})

content.addEventListener("input", function(e){
    validator() 
})

img.addEventListener("input", function (e) {
    validator()
})

number.addEventListener("input", function (e) {
    validator()
})

let smallNick = document.getElementById("smallNick")

sendButton.addEventListener('click', function (e) {
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

    if (nick.value.length > 0){
        document.getElementById("sendButton").disabled = false;
    }
})

