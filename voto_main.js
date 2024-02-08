let resposta = document.getElementById('resposta')
let cadastrar = document.getElementById('verificar')

cadastrar.addEventListener('click' , ()=>{
    let nome = document.getElementById("nome").value 
    let idade = Number(document.getElementById("idade").value)
    let titulo = Number(document.getElementById("titulo").value)

    
    console.log(nome,idade,titulo)

    const cidadao = new Eleitor()

    cidadao.nome = nome
    cidadao.idade = idade
    cidadao.titulo = titulo

    console.log("intaância do objeto ", cidadao)

    let mensagem = cidadao.verificaVoto

    resposta.innerHTML = ''
    resposta.innerHTML += `O eleitor ${cidadao.nome} <br>`
    resposta.innerHTML += `tem ${cidadao.idade} anos de idade <br>`
    resposta.innerHTML += mensagem + '<br>'
    resposta.style.color = "skyblue"
    resposta.style.fontSize = "1.4ren" 
})