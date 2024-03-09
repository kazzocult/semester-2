<html>
<head>
<title>math</title>
<script>

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}


function addNumbers() {
    var num1 = parseInt(document.getElementById('num1').value, 10);
    var num2 = parseInt(document.getElementById('num2').value, 10);
    var sum = num1 + num2;
    document.getElementById('result').innerText = sum;
}
function addNumbers() {
    var num1 = parseInt(document.getElementById('num1').value, 10);
    var num2 = parseInt(document.getElementById('num2').value, 10);
    var minus = num1 - num2;
    document.getElementById('result').innerText = minus;

</script>
</head>
<body>

<label for="num1">Number 1:</label>
<input type="text" id="num1" name="number1">
<br />
<label for="num2">Number 2:</label>
<input type="text" id="num2" name="number2">
<script>
window.onload = function() {
    document.getElementById('num1').value = randomNumber();
    document.getElementById('num2').value = randomNumber();
};
</script>
<br />
<button onclick="addNumbers()">Add Numbers</button>
<button onclick="minusNumbers()">minus Numbers</button>

<div id="result"></div>

</body>
</html>