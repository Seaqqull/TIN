document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() { 
        let textDiv = document.getElementById("textAdder");
        textDiv.innerText = 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit." + 
            " Proin libero libero, fermentum quis leo vitae, malesuada ultrices eros." + 
            " Curabitur ut maximus nisl. Vivamus vestibulum enim est, sit amet sodales mi hendrerit eget." + 
            " Vivamus vitae molestie purus. Ut tempus dictum arcu, sit amet bibendum erat." + 
            " Sed tempus bibendum nibh et hendrerit. Morbi egestas, nulla in blandit hendrerit," + 
            " ligula massa bibendum urna, eget fringilla nisl lacus id mi. Nullam tempor vestibulum enim," + 
            " id imperdiet erat malesuada eu. Praesent ut sapien in magna dignissim tincidunt eu non sem. " + 
            "Etiam consequat, turpis vel accumsan rutrum, turpis libero lacinia metus, nec dictum dui turpis a dolor." + 
            " Curabitur et ligula leo. Proin vitae nibh pulvinar, scelerisque orci vel, imperdiet nisl. " + 
            "Fusce suscipit commodo iaculis."
    }, 5000);
 }, false);