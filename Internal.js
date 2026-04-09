let button = document.querySelector("button");

button.addEventListener("click", function () {
    let n = document.getElementById("table").value;

    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += n + " × " + i + " = " + (n * i) + "<br>";
    }

    document.getElementById("inner").innerHTML = output;
});