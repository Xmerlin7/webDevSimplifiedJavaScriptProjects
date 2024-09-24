document.addEventListener('click', handleCardToggle);

function handleCardToggle(event) {
    // Prevent default action
    event.preventDefault();

    // Ensure the click is on an expand-button
    if (!event.target.matches('.expand-button')) return;

    // Toggle the card content visibility
    toggleCardContent(event.target);
}

function toggleCardContent(button) {
    // Get the associated .card-body element
    const cardBody = button.parentElement.nextElementSibling;

    //! The toggle() method returns true if the class was added /
    //! (meaning the element is now expanded) and false if the class was removed
    //! (meaning the element is now collapsed).
    const isExpanded = cardBody.classList.toggle('show');

    // Update button text based on the state
    button.innerText = isExpanded ? 'Collapse' : 'Expand';
}
