window.addEventListener( "load", function () {
    function addRow(userText) {
        // Insert a row at the end of the table
        let newRow = table.insertRow(-1);

        // Insert a cell in the row at index 0
        let newCell = newRow.insertCell(0);

        // Append a text node to the cell
        let newText = document.createTextNode(userText);
        newCell.appendChild(newText);
    }

    const form = document.getElementById("row-adder");
    const table = document.getElementById("user-table");

    form.addEventListener( "submit", function ( event ) {
        event.preventDefault();

        addRow(form[0].value);
        form[0].value = "";
    });
});