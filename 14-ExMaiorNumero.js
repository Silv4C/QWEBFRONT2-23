let n1, n2, n3;
n1 = 180;
n2 = 180;
n3 = 180;

let maiorNumero;

//Solução Alternativa
//console.log((n1>n2?maiorNumero=n1:(n2>n3?maiorNumero=n2:maiorNumero=n3)))

/*
Operadores Lógicos
&& - and (e)
|| - or (ou)
!  - not (não) 
*/

// Verificação condicional se os três números são repetidos
if ( n1 == n2 && n1==n3)
{
    console.log ("Os três números são iguais!");
}


if( n1 >= n2 && n1 >= n3 )
{
    maiorNumero = n1
}
else if ( n2 >= n1 && n2 >= n3 )
{
    maiorNumero = n2
}
else if ( n3 >= n1 && n3 >= n2 )
{
    maiorNumero = n3
}
else
{
    console.log("Números inválidos")
}

console.log(maiorNumero)
// Verificação condicional do maior número
// verificação condicional se o n1 é o maior número
// if (n1 > n2)
// {
//     maiorNumero = n1;
// }

// // verificação condicional se o n2 é o maior número
// if ( n2 > n3) 
// {
//     maiorNumero = n2;
// }
// else
// {
//     maiorNumero = n3;
// }

// console.log(maiorNumero);
