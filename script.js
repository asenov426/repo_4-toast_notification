const button = document.getElementById('btn');
const toasts = document.getElementById('toasts');

button.addEventListener('click',  function () {
    const notif = document.createElement('p');
    notif.classList.add('toast');
    notif.innerText = "Some information";
    toasts.appendChild(notif); 

    setTimeout( () => notif.remove(), 4000 );
});
