let myText = document.getElementById("exp");

let result = document.getElementById("result");

let limit = 250;

result.textContent = 0 + "/" + limit;

myText.addEventListener("input", function() {
    let textLength = myText.value.length;
    result.textContent = textLength + "/" + limit;

    if(textLength > limit) {
        myText.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    }
    else {
        myText.style.borderColor = "#b2b2b2";
        result.style.color = "#fff";
    }
})

document.getElementById("btn").addEventListener("click", redirectFunction);

function redirectFunction() {
    window.location.href = "http://127.0.0.1:5555/Apply_page/sending.html";
}
