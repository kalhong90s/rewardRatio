
function calculator() {
  var wallet = document.getElementById('wallet').value.replaceAll(',','');
  var buyPrice = document.getElementById('buyPrice').value.replaceAll(',','');
  var sellPrice = document.getElementById('sellPrice').value.replaceAll(',','');
  var percentPrice = document.getElementById('percentPrice').value.replaceAll(',','');
  var unit = (parseFloat(wallet)-(parseFloat(wallet)*0.25/100)) / parseFloat(buyPrice) ;

  var wallet1 = (unit * parseFloat(sellPrice)) - ((unit * parseFloat(sellPrice))*0.25/100) ;
  var profit1 = wallet1 - parseFloat(wallet);
  var percent = (parseFloat(sellPrice) - parseFloat(buyPrice))/parseFloat(buyPrice)*100;


  var price = parseFloat(buyPrice) + ((parseFloat(buyPrice)*parseFloat(percentPrice))/100);
  var wallet2 = (unit * parseFloat(price)) - ((unit * parseFloat(price))*0.25/100)         
  var profit2 = wallet2 - parseFloat(wallet);;


 

  if (!isNaN(wallet1)) {
      document.getElementById('percent').value = `${new Intl.NumberFormat('en-US',{ maximumSignificantDigits: 3 }).format(percent)} %`;
      document.getElementById('profit1').value = `${new Intl.NumberFormat('en-US',{ maximumSignificantDigits: 3 }).format(wallet1)} : ${new Intl.NumberFormat('en-US',{ maximumSignificantDigits: 3 }).format(profit1)} `;
  }else{
      document.getElementById('percent').value = `%`;
      document.getElementById('profit1').value = `Profit`;

  }
  
  if (!isNaN(wallet2)) {
      document.getElementById('price').value = `${new Intl.NumberFormat('en-US').format(price)}`;
      document.getElementById('profit2').value = `${new Intl.NumberFormat('en-US',{ maximumSignificantDigits: 3 }).format(wallet2)} : ${new Intl.NumberFormat('en-US',{ maximumSignificantDigits: 3 }).format(profit2)} `;
  }else{
      document.getElementById('price').value = `Sell price`;
      document.getElementById('profit2').value = `Profit`;
  }

}
