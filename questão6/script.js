let calcular = function(){
    
    let valor1 =  parseFloat(document.getElementById("Valor1").value)
    valor1 = Number(valor1)
  
    let valor2 =  parseFloat(document.getElementById("Valor2").value)
    valor2 = Number(valor2)
  
    let valor3 =  parseFloat(document.getElementById("Valor3").value)
    valor3 = Number(valor3)
    
  
  let result = Math.max(valor1, valor2, valor3);
  console.log(result)  
  let resultado = Number(result)
  
    

    let saídaResultado = document.getElementById("Resultado")
    saídaResultado.innerHTML = resultado

   }
  
  
    