

let aluno1 = {                            //--------------PRIMEIRO ALUNO--------------------//
    nome: "Henry",
    idade: 18,
    peso: 100,
    altura: 1.76,
    imc: ''
}

let aluno2 = {                            //--------------SEGUNDO ALUNO--------------------//
    nome: "Modesto",
    idade: 19,
    peso: 105,
    altura: 1.80,
    imc: ''
}

let aluno3 = {                            //--------------TERCEIRO ALUNO--------------------//
    nome: "Bruno",
    idade: 18,
    peso: 40,
    altura: 1.65,
    imc: ''
}

let aluno4 = {                            //--------------QUARTO ALUNO--------------------//
    nome: "Kauan",
    idade: 18,
    peso: 25,
    altura: 1.30,
    imc: ''
}

let aluno5 = {                            //--------------QUINTO ALUNO--------------------//
    nome: "Rosquinha",
    idade: 16,
    peso: 60,
    altura: 1.66,
    imc: ''
}

let aluno6 = {                            //--------------SEXTO ALUNO--------------------//
    nome: "Mario",
    idade: 20,                               
    peso: 90,
    altura: 1.90,
    imc: ''
}

let aluno7 = {                            //--------------SÉTIMO ALUNO--------------------//
    nome: "Miguel",
    idade: 16,
    peso: 60,
    altura: 1.50,
    imc: ''
}

let aluno8 = {                            //--------------OITAVO ALUNO--------------------//
    nome: "Rosquinha",
    idade: 16,
    peso: 60,
    altura: 1.66,
    imc: ''
}

let aluno9 = {                            //--------------NONO ALUNO--------------------//
    nome: "Maria",
    idade: 21,
    peso: 70,
    altura: 1.76,
    imc: ''
}

let aluno10 = {                           //--------------DÉCIMO ALUNO--------------------//
    nome: "Julia",
    idade: 22,
    peso: 70,
    altura: 1.65,
    imc: ''
}

let aluno11 = {                           //--------------DÉCIMO 1 ALUNO--------------------//
    nome: "Julio",
    idade: 23,
    peso: 80,
    altura: 1.80,
    imc: ''
}

let aluno12 = {                           //--------------DÉCIMO 2 ALUNO--------------------//
    nome: "Fernando",
    idade: 24,
    peso: 80,
    altura: 1.77,
    imc: ''
}

let aluno13 = {                           //--------------DÉCIMO 3 ALUNO--------------------//
    nome: "Fabiana",
    idade: 25,
    peso: 60,
    altura: 1.66,
    imc: ''
}

let aluno14 = {                           //--------------DÉCIMO 4 ALUNO--------------------//
    nome: "Fabiano",
    idade: 19,
    peso: 72,
    altura: 1.80,
    imc: ''
}

let aluno15 = {                           //--------------DÉCIMO 5 ALUNO--------------------//
    nome: "Marcos",
    idade: 25,
    peso: 80,
    altura: 1.85,
    imc: ''
}

let aluno16 = {                           //--------------DÉCIMO 6 ALUNO--------------------//
    nome: "Stilinsk",
    idade: 19,
    peso: 60,
    altura: 1.75,
    imc: ''
}

let aluno17 = {                           //--------------DÉCIMO 7 ALUNO--------------------//
    nome: "Scott",
    idade: 30,
    peso: 100,
    altura: 1.81,
    imc: ''
}

let aluno18 = {                           //--------------DÉCIMO 8 ALUNO--------------------//
    nome: "Alison",
    idade: 20,
    peso: 120,
    altura: 1.71,
    imc: ''
}

let aluno19 = {                           //--------------DÉCIMO 9 ALUNO--------------------//
    nome: "Amanda",
    idade: 19,
    peso: 110,
    altura: 1.72,
    imc: ''
}

let aluno20 = {                           //--------------VIGÉSIMO ALUNO--------------------//
    nome: "Mirely",
    idade: 20,
    peso: 60,
    altura: 1.75,
    imc: ''
}



function calculoImc(objImc) {              //-------------- CALCULO IMC --------------------//

    objImc.imc = (objImc.peso / (objImc.altura * objImc.altura)).toFixed(1)

};


function escreveObj(obj) {              //-------------- DESCONSTRUÇÃO --------------------//
    
    var{nome, imc} = obj
    console.log("Nome: " +nome+ "\n" + "Imc: "+ imc)
};

function classificarIMC(obj) {             //-------------- CLASSIFICAÇÃO DOS ALUNOS --------------------//

    if(obj.imc <= 18.5) {
        baixoPeso.push(obj.nome)
        return obj.nome +' Está abaixo do peso'
   } 
  
   if(obj.imc <= 24.9) {
        normalPeso.push(obj.nome)
        return obj.nome +' Está com o peso Normal'
   }
  
   if(obj.imc <= 29.9) {
        sobrePeso.push(obj.nome)
        return obj.nome +' Está com sobrepeso'
   }
   
   if(obj.imc <= 34.9) {
        obesidadeGraulI.push(obj.nome)
        return obj.nome +' Está com Obesidade grau I'
   }
  
   if(obj.imc <= 39.9) {
        obesidadeGraulII.push(obj.nome)
        return obj.nome +' Está com Obesidade grau II'
   }
  
   if(obj.imc > 40) {
         obesidadeGraulIII.push(obj.nome)
         return obj.nome +' Está com Obesidade grau III'
   }
  }


    let baixoPeso = []
    let normalPeso = []
    let sobrePeso = []                      //-------------- CATEGORIAS --------------------//
    let obesidadeGraulI = [] 
    let obesidadeGraulII = [] 
    let obesidadeGraulIII = []


  function contagem(categoria) {

    if (categoria == baixoPeso) {
      return `Abaixo do peso: ${baixoPeso}\nAluno(s): ${baixoPeso.length} `
    }
  
    if (categoria == normalPeso) {
      return `Peso normal: ${normalPeso}\nAluno(s): ${normalPeso.length}`
    }
  
    if (categoria == sobrePeso) {
      return `Sobrepeso: ${sobrePeso}\nAluno(s): ${sobrePeso.length}`
    }
  
    if (categoria == obesidadeGraulI) {
      return `Obesidade grau I: ${obesidadeGraulI}\nAluno(s): ${obesidadeGraulI.length}`
    }
  
    if (categoria == obesidadeGraulII) {
      return `Obesidade grau II: ${obesidadeGraulII}\nAluno(s): ${obesidadeGraulII.length}`
    }
  
    if (categoria == obesidadeGraulIII) {
      return `Obesidade grau III: ${obesidadeGraulIII}\nAluno(s): ${obesidadeGraulIII.length}`
    }
    
  }


calculoImc(aluno1)
calculoImc(aluno2)
calculoImc(aluno3)
calculoImc(aluno4)
calculoImc(aluno5)
calculoImc(aluno6)
calculoImc(aluno7)
calculoImc(aluno8)
calculoImc(aluno9)
calculoImc(aluno10)                     //-------------- MOSTRANDO CALCULO IMC --------------------//    
calculoImc(aluno11)
calculoImc(aluno12)
calculoImc(aluno13)
calculoImc(aluno14)
calculoImc(aluno15)
calculoImc(aluno16)
calculoImc(aluno17)
calculoImc(aluno18)
calculoImc(aluno19)
calculoImc(aluno20)



escreveObj(aluno1)
escreveObj(aluno2)
escreveObj(aluno3)
escreveObj(aluno4)
escreveObj(aluno5)
escreveObj(aluno6)
escreveObj(aluno7)
escreveObj(aluno8)
escreveObj(aluno9)
escreveObj(aluno10)                     //-------------- MOSTRANDO OBJETOS NOME E IMC --------------------//   
escreveObj(aluno11)
escreveObj(aluno12)
escreveObj(aluno13)
escreveObj(aluno14)
escreveObj(aluno15)
escreveObj(aluno16)
escreveObj(aluno17)
escreveObj(aluno18)
escreveObj(aluno19)
escreveObj(aluno20)


console.log(classificarIMC(aluno1))
console.log(classificarIMC(aluno2))
console.log(classificarIMC(aluno3))
console.log(classificarIMC(aluno4))
console.log(classificarIMC(aluno5))
console.log(classificarIMC(aluno6))
console.log(classificarIMC(aluno7))
console.log(classificarIMC(aluno8))               //-------------- CHAMANDO FUNÇÃO CLASSIFICAÇÃO DOA IMCS --------------------//
console.log(classificarIMC(aluno9))
console.log(classificarIMC(aluno10))
console.log(classificarIMC(aluno11))
console.log(classificarIMC(aluno12))
console.log(classificarIMC(aluno13))
console.log(classificarIMC(aluno14))
console.log(classificarIMC(aluno15))
console.log(classificarIMC(aluno16))
console.log(classificarIMC(aluno17))
console.log(classificarIMC(aluno18))
console.log(classificarIMC(aluno19))
console.log(classificarIMC(aluno20))


console.log(contagem(baixoPeso))
console.log(contagem(normalPeso))
console.log(contagem(sobrePeso))
console.log(contagem(obesidadeGraulI))      //-------------- CHAMANDO FUNÇÃO CONTAGEM--------------------//
console.log(contagem(obesidadeGraulII))
console.log(contagem(obesidadeGraulIII))
