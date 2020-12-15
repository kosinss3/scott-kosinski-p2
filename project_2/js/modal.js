// Application functions
function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    // Hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

window.addEventListener('load', function() {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});