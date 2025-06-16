const parametrosURL = new URLSearchParams(window.location.search)

const mensagemPersonalizada = parametrosURL.get('message')

if (mensagemPersonalizada) {
  const elementoMensagemPrincipal = document.querySelector('#mensagemPrincipal')
  elementoMensagemPrincipal.textContent = decodeURI(mensagemPersonalizada)
}

// o tutorial começa aqui

const botaoAbrir = document.querySelector('#abrir')
const botaoFechar = document.querySelector('#fechar')

botaoFechar.disabled = true

botaoAbrir.addEventListener('click', () => {
  botaoAbrir.disabled = true
  botaoFechar.disabled = false

  const elementoCapa = document.querySelector('.capa')
  elementoCapa.classList.add('capa-aberta')

  setTimeout(() => {
    elementoCapa.style.zIndex = -1

    const elementoPapel = document.querySelector('.papel')
    elementoPapel.classList.remove('papel-fechado')
    elementoPapel.classList.add('papel-aberto')

    // animação do coração
    const elementoCoracao = document.querySelector('.coracao')
    elementoCoracao.style.display = 'block'
  }, 500)
})

botaoFechar.addEventListener('click', () => {
  botaoAbrir.disabled = false
  botaoFechar.disabled = true

  const elementoCapa = document.querySelector('.capa')
  const elementoPapel = document.querySelector('.papel')

  elementoPapel.classList.remove('papel-aberto')
  elementoPapel.classList.add('papel-fechado')

  setTimeout(() => {
    elementoCapa.style.zIndex = 0
    elementoCapa.classList.remove('capa-aberta')

    // animação do coração
    const elementoCoracao = document.querySelector('.coracao')
    elementoCoracao.style.display = 'none'
  }, 500)
})
