const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')

login.addEventListener('click', () => {
    if (id.value == '1234') {
        if (password.value == '1234') {
            alert('Login success!')
        }
        else {
            alert('check your PW!')
        }
    }
    else {
        alert('No user')
    }
})
