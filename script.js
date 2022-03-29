function verificar() {
  const data = new Date()
  const ano = data.getFullYear() //Retorna um número c quatro digitos
  const form = document.querySelector('input.anoNascimento')
  const resul = document.querySelector('p.resultado')

  if (form.value.length == 0 || form.value > ano) { //verifica se o input está vazio e/ou se o ano digitado é maior que o ano atual
    window.alert('Preencha seus dados')
  } else {
    const sexo = document.querySelector('input.sex')
    const idade = ano - Number(form.value)
    resul.innerHTML = (`Sua idade é de ${idade}anos`)
  }
}