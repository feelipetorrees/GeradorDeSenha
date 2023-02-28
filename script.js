let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#button')
let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')
let containerPassword = document.querySelector('#container-password')

let charSet =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#'
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value

slider.oninput = function () {
  sizePassword.innerHTML = this.value
}

function geradorDeSenha() {
  let pass = ''
  for (let i = 1, n = charSet.length; i < sliderElement.value; i++) {
    pass += charSet.charAt(Math.floor(Math.random() * n))
  }
  containerPassword.classList.remove('hide')
  password.innerHTML = pass
  novaSenha = pass
}
function copiarSenha() {
  alert('Senha copiada com sucesso')
  navigator.clipboard.writeText(novaSenha)
}
