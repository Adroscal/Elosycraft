const button = document.getElementById('magicbutton');

button.addEventListener('click', function handleClick() {
var sheet = document.createElement('style')
sheet.innerHTML = ".rotate{ animation: anim-button 3s ease ;} @keyframes anim-button{ 0% {transform: rotate(360deg);} 50%{} 100%{}};"
document.body.appendChild(sheet);
parent.removeChild(sheet)
});


