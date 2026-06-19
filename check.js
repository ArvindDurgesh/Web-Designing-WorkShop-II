let button = document.querySelector("button");

button.addEventListener("click", function () {
    let n = Number(document.getElementById("num").value);

    if (n % 2 === 0) {
        document.getElementById("result").innerHTML =
            n + " is an Even Number";
    } else {
        document.getElementById("result").innerHTML =
            n + " is an Odd Number";
    }
});