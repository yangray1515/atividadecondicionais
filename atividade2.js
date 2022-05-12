let velocidade = prompt ('Qual velocidade?');
if( velocidade >80){
    let multa = (velocidade - 80)*5;
    alert (`Você está acima do limite. A multa é de ${multa}`);
}else{
    alert(`Você está dentro do limite`)
}