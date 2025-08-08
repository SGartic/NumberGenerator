function generateRandomNumber() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    if (min === undefined || max === undefined) {
        alert("Please enter valid numbers for min and max.");
        return;
    }
    if (min > max) {
        var temp = min;
        min = max;
        max = temp;
    }
    

    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    var result = document.getElementById("result");
    result.innerHTML = "The number is: " + randomNumber;
}