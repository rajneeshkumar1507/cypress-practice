const name = localStorage.getItem('userName');
const email = localStorage.getItem('userEmail');
document.getElementById('displayName').innerText = name;
document.getElementById('displayEmail').innerText = email;