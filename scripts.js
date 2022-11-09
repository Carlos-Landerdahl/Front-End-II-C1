let sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', function (e) {
    e.preventDefault()

    let nick = document.getElementById('nick');
    let content = document.getElementById('content');
    let img = document.getElementById('img');
    let number = document.getElementById('number');

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
