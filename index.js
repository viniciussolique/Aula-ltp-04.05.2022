class Pessoa {
  setnome(nome){
    this.nome = nome;
     }
  getnome(){
    return this.nome;
  }

  setendereco(endereco){
    this.endereco = endereco;
  }
   getendereco(){
    return this.endereco;
  }

   settelefone(telefone){
    this.telefone = telefone;
  }
   gettelefone(){
    return this.telefone;
  }
}
class erroDoPicolo extends Error{
  constructor(mensagem,nome){
    super(mensagem);
    this.name = nome;
    }
  mensagem(){
  return this.message;
    }
}
class Fornecedor extends Pessoa {
  constructor(valorCredito, valorDivida,empresa){
    super()
    
    this.valorCredito = valorCredito;
    this.valorDivida = valorDivida;
    this.empresa = empresa;
    } 
    obterSaldo(){
      if(this.valorCredito < 0){
      throw new erroDoPicolo("Valor Negativo: O valor do atributo não pode ser menor que zero.")
        }
      else{
     return this.valorCredito - this.valorDivida;
      }
    }

   retornaSaldo(){
 try{
    return this.obterSaldo();
 }
  catch (error){
    return error.mensagem();
  }
}
}
let  fornecedor = new Fornecedor(-40, 40,"Empresa 0202")
console.log(fornecedor.retornaSaldo());