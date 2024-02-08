class Eleitor{
    constructor(nome, idade, titulo){
        this.nome = nome
        this.idade = idade
        this.titulo = titulo
    }

    verificaVoto(){
        let idade = this.idade

        if(idade<16){
            console.log("Abaixo da idade minima para votar")
            return "Abaixo da idade minima para votar"
        }else if((idade>=16)&&(idade<18)){
            console.log("idade onde o voto é facultativo")
            return "idade onde o voto é facultativo"
        }else if((idade>=18)&&(idade<=70)){
            console.log("idade onde o voto é obrigatorio")
            return "idade onde o voto é obrigatorio"
        }else if(idade > 70){
            console.log("idade onde o voto é facultativo")
            return "idade onde o voto é facultativo"
        }

    }  
}