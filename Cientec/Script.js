document.addEventListener('DOMContentLoaded', function() {
    function handleAnswer(answer) {
        const question1 = document.getElementById("question1");
        const question2 = document.getElementById("question2");
        const result = document.getElementById("result");
        const resultImage = document.getElementById("result-image");
        const fixedImage = document.querySelector(".imagem-fixa");
        const title = document.getElementById("title");

        fixedImage.style.display = "none";

        if (answer === "a") {
            question1.style.display = "none";
            question2.style.display = "block";
        } else if (answer === "b") {
            result.textContent = "Descarte na área de orgânicos!";
            question1.style.display = "none";
            result.style.color = "brown";
            resultImage.src = "Orgânicos.png";
            resultImage.style.display = "block";
        } else if (answer === "a2") {
            result.textContent = "Descarte na área amarela para metal!";
            question2.style.display = "none";
            result.style.color = "yellow";
            resultImage.src = "metal.png";
            resultImage.style.display = "block";
        } else if (answer === "b2") {
            result.textContent = "Descarte na área vermelha para plástico!";
            question2.style.display = "none";
            result.style.color = "red";
            resultImage.src = "plástico.png";
            resultImage.style.display = "block";
        } else if (answer === "c2") {
            result.textContent = "Descarte na área azul para papel e papelão!";
            question2.style.display = "none";
            result.style.color = "blue";
            resultImage.src = "papel (1).png";
            resultImage.style.display = "block";
        } else if (answer === "d2") {
            result.textContent = "Descarte na área verde para vidro!";
            question2.style.display = "none";
            result.style.color = "green";
            resultImage.src = "vidro.png";
            resultImage.style.display = "block";
        }
        title.style.display = "none";
    }

    // Atribua a função handleAnswer aos botões novamente
    document.querySelector('.reciclável').onclick = function() { handleAnswer('a'); };
    document.querySelector('.orgânico').onclick = function() { handleAnswer('b'); };
    document.querySelector('.metal').onclick = function() { handleAnswer('a2'); };
    document.querySelector('.plástico').onclick = function() { handleAnswer('b2'); };
    document.querySelector('.papel').onclick = function() { handleAnswer('c2'); };
    document.querySelector('.vidro').onclick = function() { handleAnswer('d2'); };
});
