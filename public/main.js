const castle = document.querySelector('img')

const welcome = evt => {
    alert('Welcome to our castle')
}

castle.addEventListener('click', welcome)