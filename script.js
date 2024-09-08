let sobremesa = "";
let bebidas = "";
let comida = "";
let valorComida = "";
let valorBebidas = "";
let valorSobremesa = "";
let valorTotal = "";
function selectComida(item){
  comida = item.querySelector("h3").innerHTML;
  valorComida = item.querySelector(".valor").innerHTML;
  const selectedCard = document.querySelector(".container-opcoes-comidas .select");

  if (selectedCard !== null) {
    selectedCard.classList.remove('select');
  }

  item.classList.add('select');
  checkIf();
}

function selectBebida(item){
  bebidas = item.querySelector("h3").innerHTML;
  valorBebidas = item.querySelector(".valor").innerHTML;
  const selectedCard = document.querySelector(".container-opcoes-bebidas .select");

  if (selectedCard !== null) {
    selectedCard.classList.remove('select');
  }

  item.classList.add('select');
  checkIf();
}

function selectSobremesa(item){
  sobremesa = item.querySelector("h3").innerHTML;
  valorSobremesa = item.querySelector(".valor").innerHTML;
  const selectedCard = document.querySelector(".container-opcoes-sobremesa .select");

  if (selectedCard !== null) {
    selectedCard.classList.remove('select');
  }

  item.classList.add('select');
  checkIf();
}
 
function checkIf(){
  if (comida != "" && bebidas != "" && sobremesa != "") {
    const button = document.querySelector(".container-button");
    button.innerHTML = "Fechar pedido";
    button.classList.add('active');
  }
}

function total(){
  valorTotal = (Number(valorComida.replace("R$ ", "").replace(",", ".")) 
              + Number(valorBebidas.replace("R$ ", "").replace(",", ".")) 
              + Number(valorSobremesa.replace("R$ ", "").replace(",", "."))).toFixed(2);
}

function finalizarPedido(){

  if (comida !== "" && bebidas !== "" && sobremesa !== "") {
    const modal = document.querySelector(".modal");
    modal.classList.remove("hidden");
  }

  const comidaSelecionada = document.querySelector(".comidaClass");
  comidaSelecionada.innerHTML = `${comida} : R$ ${valorComida}`;

  const bebidasSelecionadas = document.querySelector(".bebidaClass");
  bebidasSelecionadas.innerHTML = `${bebidas} : R$ ${valorBebidas}`;

  const sobremesaSelecionada = document.querySelector(".sobremesaClass");
  sobremesaSelecionada.innerHTML = `${sobremesa} : R$ ${valorSobremesa}`;

  total();

  const totalPedido = document.querySelector(".total");
  totalPedido.innerHTML = `Total: R$ ${valorTotal.replace(".", ",")}`;

}

function fecharModal(){
  const modal = document.querySelector(".modal");
  modal.classList.add("hidden");
}

function mensagem(){
  const mensagem = `Olá, gostaria de fazer o pedido: 
  - Prato: ${comida} 
  - Bebida: ${bebidas} 
  - Sobremesa: ${sobremesa} 
  - Total: R$ ${valorTotal.replace(".", ",")}`;

  const mensagemEncoded = encodeURIComponent(mensagem);

  const whatsappLink = `https://wa.me/?text=${mensagemEncoded}`;

  document.getElementById("whatsappLink").setAttribute("href", whatsappLink);
}
  