function generateNumbers() {

  
  const min = Math.ceil(document.querySelector(".min").value)
  const max = Math.floor(document.querySelector(".max").value)
  
  if (min >= max) {
    alert("O VALOR MÍNIMO DEVE SER MENOR QUE O VALOR MÁXIMO")
  } else {
    

  const results = Math.floor(Math.random() * (max - min + 1)) + min;

    
  alert(results)
    }
}