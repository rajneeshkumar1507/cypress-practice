function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    window.location.href = 'welcome.html';
}