
function calculator() {
  var wallet = document.getElementById('wallet').value.replaceAll(',','');
  console.log(wallet)
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


// Jquery Dependency

$("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    }
});



function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
  
  // don't validate empty input
  if (input_val === "") { return; }
  
  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
    
  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);
    
    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }
    
    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = input_val;
    
    // final formatting
    if (blur === "blur") {
      input_val += ".00";
    }
  }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}


