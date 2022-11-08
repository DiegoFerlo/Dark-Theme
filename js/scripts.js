const body = document.body;
const switchThemeElement = document.getElementById('switch-theme')


const cambiarDark = () => {
    body.classList.toggle('dark')
}

switchThemeElement.addEventListener('click', cambiarDark)