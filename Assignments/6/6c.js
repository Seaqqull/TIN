window.addEventListener( "load", function () {
    function checkForm() {
        let mailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        let age = document.getElementById("age-field"),
            mail = document.getElementById("mail-field");
        let ageValid = (form[0].value >= 18),
            mailValid =  mailRegex.test(form[1].value);

        // Age validation
        if (!ageValid && !age.classList.contains("wrong"))
            age.classList.add("wrong")
        else if (ageValid && age.classList.contains("wrong"))
            age.classList.remove("wrong")
        // Mail validation
        if (!mailValid && !mail.classList.contains("wrong"))
            mail.classList.add("wrong")
        else if (mailValid && mail.classList.contains("wrong"))
            mail.classList.remove("wrong")

        return ageValid && mailValid;
    }
  
    const form = document.getElementById("validation-form");
  
    form.addEventListener( "submit", function ( event ) {
        event.preventDefault();

        let formValid = checkForm();

        window.alert(formValid? 
            "Everything is ok" : 
            "Wrong information passed. Check validity of the fields"
        );
    } );
  } );