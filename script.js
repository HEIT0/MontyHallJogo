//Definindo variáveis
var l = document.getElementById('red')
l.style.visibility = 'hidden'
var porta0 = document.getElementById('box0')
var porta1 = document.getElementById('box1')
var porta2 = document.getElementById('box2')
var port1 = document.getElementById('port1')
var port2 = document.getElementById('port2')
var port3 = document.getElementById('port3')
var tp = document.getElementsByName('red')
var p1 = document.getElementById('p1')
var pre = Math.floor(Math.random() * 3);
var premio = pre + 1
var portas = [1, 2, 3]
var botbottom = document.getElementById('botaox')
a = 0
b = 0
var escolha = 0
var w = 0
var outras = [1, 2, 3]
var z = 2

//Funções:
function clicar0() /*Clicar na porta 1*/ {
  if (b == 0) {
    escolha = 1
    a = escolha
    porta0.style.boxShadow = "inset 0 0 1em gold, 0 0 1em white"
    porta1.style.boxShadow = "3px 3px 10px rgb(0, 0, 0)"
    porta2.style.boxShadow = "3px 3px 10px rgb(0, 0, 0)"
  } else {
    alert('Você já escolheu uma porta!')
  }
}
function clicar1() /*Clicar na porta 2*/ {
  if (b == 0) {
    escolha = 2
    a = escolha
    porta0.style.boxShadow = "3px 3px 10px rgb(0, 0, 0)"
    porta1.style.boxShadow = "inset 0 0 1em gold, 0 0 1em white"
    porta2.style.boxShadow = "3px 3px 10px rgb(0, 0, 0)"
  } else {
    alert('Você já escolheu uma Porta!')
  }
}
function clicar2() /*Clicar na porta 3*/ {
  if (b == 0) {
    escolha = 3
    a = escolha
    porta2.style.boxShadow = "inset 0 0 1em gold, 0 0 1em white"
    porta0.style.boxShadow = "3px 3px 10px rgb(0, 0, 0)"
    porta1.style.boxShadow = "3px 3px 10px rgb(0, 0, 0)"
  } else {
    alert('Você já escolheu uma Porta!')
  }
}
function escolher() /*Confirmar a porta escolhida*/ {
  if (w == 0) {
    if (escolha == 0) {
      alert('Você não selecionou nenhuma porta')
    } else {

      p1.innerHTML = `Você escolheu a porta ${a}`
      b = 1
      var index = portas.indexOf(a);
      if (index > -1) {
        portas.splice(index, 1)
      }
      var index2 = portas.indexOf(premio);
      if (index2 > -1) {
        portas.splice(index2, 1)
      }
      var cabra = aleat()
      var gol = cabra[0]
      if (cabra[0] == 1) {
        port1.src = 'cabra.gif'
      } else if (cabra[0] == 2) {
        port2.src = 'cabra.gif'
      } else {
        port3.src = 'cabra.gif'
      }
      outras = [1, 2, 3]
      var index = outras.indexOf(a);
      if (index > -1) {
        outras.splice(index, 1)
      }
      var index2 = outras.indexOf(gol);
      if (index2 > -1) {
        outras.splice(index2, 1)
      }

      p1.innerHTML = `Na porta ${cabra[0]} há cabras, você quer permancer na porta que você escolheu ou trocar para porta ${outras[0]}? `
      l.style.visibility = 'visible'
    }
  } else {
    pre = Math.floor(Math.random() * 3);
    premio = pre + 1
    portas = [1, 2, 3]
    a = 0
    b = 0
    l.style.visibility = 'hidden'
    escolha = 0
    w = 0
    port1.src = 'porta.png'
    port2.src = 'porta.png'
    port3.src = 'porta.png'
    porta1.style.boxShadow = " 0 0 1em black"
    porta2.style.boxShadow = " 0 0 1em black"
    porta0.style.boxShadow = " 0 0 1em black"
    p1.innerHTML = `Escolha uma das portas para ganhar o prêmio!`
    botbottom.value = 'Escolha'
  }
}
function aleat()/*Sortear dentro da Array*/ {
  if (portas.length > 1) {
    let u = portas.length
    let t = Math.floor(Math.random() * u - 1);
    portas.splice(t, 1)
    return portas
  } else {

    return portas
  }
}

function sim()/*Trocar*/ {
  z = 1
}
function nao()/*Permanecer*/ {
  z = 2
}
tp[0].addEventListener('change', sim())
tp[1].addEventListener('change', nao())

function confirm()/*Confirmar escolha de mudança/permanencia */ {
  if (tp[0].checked) {
    z = 1
  } else {
    z = 2
  }
  if (z == 2) /*Se quiser trocar: */ {
    l.style.visibility = 'hidden'
    if (a == premio) /*Ganhar*/ {
      p1.innerHTML = `Parabéns, Você ganhou um DeLorean !`
      if (premio == 1) {
        port1.src = 'carro.jpg'
        port2.src = 'cabra.gif'
        port3.src = 'cabra.gif'
      } else if (premio == 2) {
        port1.src = 'cabra.gif'
        port2.src = 'carro.jpg'
        port3.src = 'cabra.gif'
      } else {
        port1.src = 'cabra.gif'
        port2.src = 'cabra.gif'
        port3.src = 'carro.jpg'
      }
    } else /*Perder*/ {
      p1.innerHTML = `Você permanceu e perdeu a chance de ganhar o DeLorean que estava na porta ${premio}! `
      if (premio == 1) {
        port1.src = 'carro.jpg'
        port2.src = 'cabra.gif'
        port3.src = 'cabra.gif'
      } else if (premio == 2) {
        port1.src = 'cabra.gif'
        port2.src = 'carro.jpg'
        port3.src = 'cabra.gif'
      } else {
        port1.src = 'cabra.gif'
        port2.src = 'cabra.gif'
        port3.src = 'carro.jpg'
      }
    }

  } else if (z == 1) /*Se quiser permanecer*/ {
    l.style.visibility = 'hidden'
    if (outras[0] == 1) {
      porta1.style.boxShadow = "0 0 1em black"
      porta2.style.boxShadow = "0 0 1em black"
      porta0.style.boxShadow = "inset 0 0 1em gold, 0 0 1em white"
    } else if (outras[0] == 2) {

      porta1.style.boxShadow = "inset 0 0 1em gold, 0 0 1em white"
      porta2.style.boxShadow = " 0 0 1em black"
      porta0.style.boxShadow = " 0 0 1em black"
    } else {

      porta1.style.boxShadow = " 0 0 1em black"
      porta2.style.boxShadow = "inset 0 0 1em gold, 0 0 1em white"
      porta0.style.boxShadow = " 0 0 1em black"
    }
    if (a != premio) /*Ganhar*/ {
      p1.innerHTML = `Parabéns, Você trocou e ganhou um DeLorean !`
      if (premio == 1) {
        port1.src = 'carro.jpg'
        port2.src = 'cabra.gif'
        port3.src = 'cabra.gif'
      } else if (premio == 2) {
        port1.src = 'cabra.gif'
        port2.src = 'carro.jpg'
        port3.src = 'cabra.gif'
      } else {
        port1.src = 'cabra.gif'
        port2.src = 'cabra.gif'
        port3.src = 'carro.jpg'
      }
    } else /*Perder*/ {
      p1.innerHTML = `Você Trocou e perdeu a chance de ganhar o DeLorean que estava na porta ${premio}! `
      if (premio == 1) {
        port1.src = 'carro.jpg'
        port2.src = 'cabra.gif'
        port3.src = 'cabra.gif'
      } else if (premio == 2) {
        port1.src = 'cabra.gif'
        port2.src = 'carro.jpg'
        port3.src = 'cabra.gif'
      } else {
        port1.src = 'cabra.gif'
        port2.src = 'cabra.gif'
        port3.src = 'carro.jpg'
      }
    }
  }
  //Reiniciar Sistema
  w = 1
  botbottom.value = 'Reiniciar'
}