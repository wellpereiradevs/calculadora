//FUNÇÃO INSERIR
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//FUNÇÃO LIMPAR
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

//TAMBÉM UMA FUNÇÃO DE LIMPAR, PERMITE APAGAR 'UM POR UM' 
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

//FUNÇÃO DE CÁLCULO, REALIZANDO O CÁLCULO DAS OPERAÇÕES MATÉMATICAS
function calculate()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else{
        document.getElementById('resultado').innerHTML = "Digite..";
    }
}