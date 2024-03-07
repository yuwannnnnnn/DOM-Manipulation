function createCard() {
    // Get input values
    var titleValue = document.getElementById('title-input').value;
    var bodyValue = document.getElementById('body-input').value;

    // Create a card element
    var card = document.createElement('div');
    card.className = 'col-md-4';
    card.innerHTML = `
        <div class="card mt-4">
            <div class="card-header">
                <h2>${titleValue}</h2>
            </div>
            <div class="card-body">
                <p>${bodyValue}</p>
                <button class="btn btn-danger float-end" onclick="deleteCard(this)">Delete</button>
            </div>
        </div>
    `;

    // Append the card to the container
    document.getElementById('cardContainer').appendChild(card);

    // Clear input values
    document.getElementById('title-input').value = '';
    document.getElementById('body-input').value = '';
}

function deleteCard(button) {
    // Remove the parent card when delete button is clicked
    var card = button.parentNode.parentNode;
    card.parentNode.removeChild(card);
}