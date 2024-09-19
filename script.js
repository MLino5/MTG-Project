
function coletar(){
    let carta = document.querySelector('.input-Cartas').value 
    console.log(carta)
    Dados(carta)
}

async function Dados(carta){
    let dados  = await fetch(`https://api.magicthegathering.io/v1/cards?name=${carta}`).then(res=>res.json())
    console.log(dados)
    ExibirDados(dados.cards)
}

function ExibirDados(cartas) {
    const container = document.getElementById('cards-container');
    container.innerHTML=""

    cartas.forEach(carta => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        carta.imageUrl=carta.imageUrl.slice(0, 4) + 's' + carta.imageUrl.slice(4);

        cardDiv.innerHTML = `
            <img src="${carta.imageUrl}" alt="${carta.name}">
            <h2>${carta.name} (${carta.rarity})</h2>
            <p><strong>Tipo:</strong> ${carta.type}</p>
            <p><strong>Custo de Mana:</strong> ${carta.manaCost}</p>
            <p><strong>Custo de Mana Total (CMC):</strong> ${carta.cmc}</p>
            <p><strong>Poder:</strong> ${carta.power}</p>
            <p><strong>Resistência:</strong> ${carta.toughness}</p>
            <p><strong>Texto de Sabor:</strong> "${carta.flavor}"</p>
            <p><strong>Texto Original:</strong> ${carta.originalText}</p>
            <p><strong>Set:</strong> ${carta.setName} (${carta.set})</p>
        `;

        container.appendChild(cardDiv);
    });
}