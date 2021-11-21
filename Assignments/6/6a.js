window.addEventListener( "load", function () {
    function convertTemps(amountCelsius) {
      return (amountCelsius * 1.8) + 32;
    }
  
    const form = document.getElementById("celsius-to-fahrenheit");
  
    form.addEventListener( "submit", function ( event ) {
        event.preventDefault();


        let fahrenheit = convertTemps(form[0].value);

        form[1].value = fahrenheit;
    } );
  } );