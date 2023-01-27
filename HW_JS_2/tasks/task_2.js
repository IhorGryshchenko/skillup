  const calculateEngravingPrice = function ( message, pricePerWord,) {
    const newName = message.split(" ").length;
    const sum = newName * pricePerWord;
     
    return sum;
   } ;

  /* const calculateEngravingPrice = function (message, pricePerWord) {
    const wordsAmount = message.split(" ").length;
    const totalPrice = wordsAmount * pricePerWord;
  
    return totalPrice;
  }; 
  */
 
  console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));

  console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 60)); 

  