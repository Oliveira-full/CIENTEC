function handleAnswer(answer) {
    const question1 = document.getElementById("question1");
    const question2 = document.getElementById("question2");
    const result = document.getElementById("result");
    const resultImage = document.getElementById("result-image");
    const fixedImage = document.querySelector(".imagem-fixa");
    const title = document.getElementById("title");
   


   fixedImage.style.display = "none"


    if (answer === "a") {
        question1.style.display = "none";
        question2.style.display = "block";

    } else if (answer === "b") {
        result.textContent = "Descarte na lixeira de orgânicos!";
        question1.style.display = "none";
        result.style.color = "brown"
        resultImage.src = "Orgânicos.png"
        resultImage.style.display = "block"



    } else if (answer === "a2") {
        result.textContent = "Descarte na lixeira amarela para metal!";
        question2.style.display = "none";
        result.style.color = "yellow"
        resultImage.src = "metal.png"
        resultImage.style.display = "block"


    } else if (answer === "b2") {
        result.textContent = "Descarte na lixeira vermelha para plástico!";
        question2.style.display = "none";
        result.style.color = "red"
        resultImage.src = "plástico.png"
        resultImage.style.display = "block"


    } else if (answer === "c2") {
        result.textContent = "Descarte na lixeira azul para papel!";
        question2.style.display = "none";
        result.style.color = "blue"
        resultImage.src = "papel (1).png"
        resultImage.style.display = "block"


    } else if (answer === "d2") {
        result.textContent = "Descarte na lixeira verde para vidro!";
        question2.style.display = "none";
        result.style.color = "green"
        resultImage.src = "vidro.png"
        resultImage.style.display = "block"

    }
    title.style.display = "none"
}





