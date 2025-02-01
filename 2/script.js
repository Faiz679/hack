function showModal() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}
function hideModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('error-message').classList.add('hidden');
}
function saveTemplate() {
    const name = document.getElementById('templateName').value;
    const hardware = document.getElementById('templateHardware').value;
    const connection = document.getElementById('templateConnection').value;
    const description = document.getElementById('templateDescription').value;
    
    if (name.trim() === "") {
        document.getElementById('error-message').classList.remove('hidden');
        return;
    }
    
    const templateList = document.getElementById('templateList');
    const templateItem = document.createElement('div');
    templateItem.classList.add('template-item');
    templateItem.innerHTML = `<strong>${name}</strong> - ${hardware} (${connection})<br><small>${description}</small>`;
    templateList.appendChild(templateItem);
    
    document.getElementById('initialMessage').classList.add('hidden');
    hideModal();
}