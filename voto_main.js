let resposta = document.getElementById('resposta')
let cadastrar = document.getElementById('verificar')

cadastrar.addEventListener('click' , ()=>{
    let nome = document.getElementById('nome').value 
    let idade = Number(document.getElementById('idade').value)
    let titulo = Number(document.getElementById('titulo').value)

    
    console.log(nome,idade,titulo)

    const cadadao = new Eleitor()

    cidadao.nome = nome
    cidadao.idade = idade
    cidadao.titulo = titulo

    
})