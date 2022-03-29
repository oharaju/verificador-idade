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

    if (sexo[0].checked) {
      genero = 'Homem'
    } else {
      genero = 'Mulher'
    }
    resul.innerHTML = `Detectamos ${genero} com ${idade} anos`
  }
}