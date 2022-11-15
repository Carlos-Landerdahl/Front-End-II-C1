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
        img.value.length > 10 && img.value !== '' &&
        number.value.length > 0 && number.value !== ''
    ) {
        sendButton.disabled = false;
    } else {
        sendButton.disabled = true;
    }
}

nick.addEventListener("input", function (e) {
    validator()
    if(nick.value.length > 2 && nick.value !== ''){
        smallNick.style.display = "none" 
    }
    else {
        smallNick.style.display = "block"
        
    }
})

content.addEventListener("input", function (e) {
    validator()
    if(content.value.length > 4 && content.value !== ''){
        smallContent.style.display = "none" 
    }
    else {
        smallContent.style.display = "block"
        
    }
})

img.addEventListener("input", function (e) {
    validator()
    if(img.value.length > 10 && img.value !== ''){
        smallImg.style.display = "none" 
    }
    else {
        smallImg.style.display = "block"
        
    }
})

number.addEventListener("input", function (e) {
    validator()
    if(number.value.length > 0 && number.value !== ''){
        smallNumber.style.display = "none" 
    }
    else {
        smallNumber.style.display = "block"
    
    }
})



let smallNick = document.getElementById("smallNick")
let smallContent = document.getElementById("smallContent")
let smallImg = document.getElementById("smallImg")
let smallNumber = document.getElementById("smallNumber")

sendButton.addEventListener('click', function (e) {
    e.preventDefault()

    console.log(nick.value);

    let containerCards = document.getElementById('container-cards')

    let card = document.createElement("div")

    card.innerHTML = `
    <div class="card-content">
    <div class="card-image" id="card-image" style="background-image:url(${img.value})"></div>
    <img class="card-icon" src="https://cdn-icons-png.flaticon.com/512/5974/5974771.png" alt="">
    <div class="card-text">
        <h3>${nick.value}<span>${number.value}</span></h3>
        <p>${content.value}</p>
    </div>
    </div>`

    card.classList.add("card")

    containerCards.appendChild(card)

    if (nick.value.length > 0) {
        document.getElementById("sendButton").disabled = false;
    }
})