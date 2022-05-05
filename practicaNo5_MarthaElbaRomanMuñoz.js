//---TRABAJO ARREGLOS----------------
let matma = [[1,2,3],[4,5,6],[7,8,9]];

//-------ARREGLO PRINCIPAL-----/

console.log("Arreglo normal");
for(let i=0; i< matma.length; i++)
{
        console.log(matma[i]);
}
//-------ARREGLO SALIDA 1-----/
function Salida1(matma)
{
    console.log("Arreglo salida [1]");
    for (let i=matma.length-1; i>= 0 ; i--)
    {

        renglon=" [ "
        for (let j=matma[0].length-1; j >=0 ; j--)
        {
            renglon += ""+matma[i][j]+ " ";
        }
        renglon+="]"
        console.log(renglon);
    } 
}

//-------ARREGLO SALIDA 2-----/
function Salida2(matma)
{
    console.log("Arreglo salida [2]");
    let renglon = "";
    for (let i=0; i<matma.length; i++)
    {   
       
        console.log(matma[i][0],matma[i][1],matma[i][2]);
       
    }
    
}

 //-------ARREGLO SALIDA 3-----/
function Salida3(matma){
console.log("Arreglo salida [3]");
let renglon= ""
for (let i=matma[0].length-1; i>= 0; i--)
{
        renglon=" [ "
        for (let j=matma.length-1; j>=0 ; j--){
        renglon += ""+matma[j][i]+ " ";
    }
    renglon += "]"
    console.log(renglon);
}          
}
//---Llamar funcion

Salida1(matma);
Salida2(matma);
Salida3(matma);