const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modalUser = document.getElementById('modalUser');
const modalUserForm = document.getElementById('modalUserForm');
const openModalButton2 = document.getElementById('openModalButton2');

openModalButton.addEventListener('click', () => {
    modalUser.style.display = 'block';
});

openModalButton2.addEventListener('click', () => {
    modalUser.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modalUser.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modalUser) {
        modalUser.style.display = 'none';
    }
});

modalUserForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const jsonData = {
        nameModal: document.getElementById('nameModal').value, 
        phoneModal: document.getElementById('phoneModal').value, 
        emailModal: document.getElementById('emailModal').value,
    };

    fetch('http://192.168.31.120:8080/user', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
        .then(response => {
            if (response.ok) {
                modalUser.style.display = 'none';
                modalUserForm.reset();
                alert('Данные успешно отправлены на сервер!');
            } else {
                throw new Error('Ошибка при отправке данных на сервер');
            }
        })
        .catch(error => {
            console.error('Ошибка при отправке данных на сервер:', error);
            alert('Произошла ошибка при отправке данных на сервер.');
        });
});