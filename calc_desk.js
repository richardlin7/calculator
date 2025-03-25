function addFunc() {
    var val1 = parseInt(document.getElementById("val1").value);
    var val2 = parseInt(document.getElementById("val2").value);

    result = val1 + val2;
    document.getElementById("demo").innerHTML = result;
}