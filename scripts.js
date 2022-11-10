let sendButton = document.getElementById('sendButton');
let nick = document.getElementById('nick');
let content = document.getElementById('content');
let img = document.getElementById('img');
let number = document.getElementById('number');

sendButton.disabled = true;
function validator() {
    if (
        nick.value !== null && nick.value !== '' &&
        content.value !== null && content.value !== '' &&
        img.value !== null && img.value !== '' &&
        number.value !== null && number.value !== ''
    ){
        sendButton.disabled = false;
    }else {
        sendButton.disabled = true;
    }
}

nick.addEventListener("input", function(e){
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

nick.addEventListener("keyup", function () {
    if (nick.value.length < 3) {
        smallNick.style.display = "block"
    }
    else {
        smallNick.style.display = "none"
    }

})


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

