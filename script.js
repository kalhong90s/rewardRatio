
function calculator() {
  var wallet = document.getElementById('wallet').value.replace(/[\D\s\._\-]+/g, "");
  var buyPrice = document.getElementById('buyPrice').value.replace(/[\D\s\._\-]+/g, "");
  var sellPrice = document.getElementById('sellPrice').value.replace(/[\D\s\._\-]+/g, "");
  var percentPrice = document.getElementById('percentPrice').value.replace(/[\D\s\._\-]+/g, "");
  var unit = parseFloat(wallet) / parseFloat(buyPrice) ;

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



(function($, undefined) {

	"use strict";

	// When ready.
	$(function() {
		
		var $form = $( "#form" );
		var $input = $form.find( "input" );

		$input.on( "keyup", function( event ) {
			
			
			// When user select text in the document, also abort.
			var selection = window.getSelection().toString();
			if ( selection !== '' ) {
				return;
			}
			
			// When the arrow keys are pressed, abort.
			if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
				return;
			}
			
			
			var $this = $( this );
			
			// Get the value.
			var input = $this.val();
			
			var input = input.replace(/[\D\s\._\-]+/g, "");
					input = input ? parseInt( input, 10 ) : 0;

					$this.val( function() {
						return ( input === 0 ) ? "" : input.toLocaleString( "en-US" );
					} );
		} );
		
		/**
		 * ==================================
		 * When Form Submitted
		 * ==================================
		 */
		$form.on( "submit", function( event ) {
			
			var $this = $( this );
			var arr = $this.serializeArray();
		
			for (var i = 0; i < arr.length; i++) {
					arr[i].value = arr[i].value.replace(/[($)\s\._\-]+/g, ''); // Sanitize the values.
			};
			
			console.log( arr );
			
			event.preventDefault();
		});
		
	});
})(jQuery);