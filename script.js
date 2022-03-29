function verificar() {
  const data = new Date()
  const ano = data.getFullYear() //Retorna um número c quatro digitos
  const form = document.querySelector('input.anoNascimento')
  const resul = document.querySelector('div.resultado')

  if (form.value.length == 0 || form.value > ano) { //verifica se o input está vazio e/ou se o ano digitado é maior que o ano atual
    window.alert('Preencha seus dados')
  } else {
    const sexo = document.getElementsByName('sex')
    const idade = ano - Number(form.value) //ano atual menos ano digitado pelo usuario
    const img = document.createElement('img')
    img.setAttribute('id', 'img')

    if (sexo[0].checked) {
      genero = 'Homem'

      if (idade >=0 && idade < 10) { // CRIANCA
        img.setAttribute('src', 'img/foto-bebe-m.png')
      } else if (idade < 21) {   // JOVEM
        img.setAttribute('src', 'img/foto-jovem-m.png')
      } else if (idade < 50) { // ADULTO
        img.setAttribute('src', 'img/foto-adulto-m.png')
      } else { // IDOSO
        img.setAttribute('src', 'img/foto-idoso-m.png')
      }

    } else {
      genero = 'Mulher'
      if (idade <=0 && idade <10) {
        // CRIANCA
      } else if (idade <21) {
        // JOVEM
      } else if (idade < 50) {
        // ADULTO
      } else {
        // IDOSO
      }
    }
    resul.style.textAlign = 'center'
    resul.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
    resul.appendChild(img)
  }
}