const radioButtons = document.querySelector('button');




const idealGewichtsRechner = () => {
    const körperGröße = document.body.querySelector("#körperGrößeId").value;
    const alter = document.body.querySelector("#alterId").value;
    const körperBau = document.body.querySelector("#breiteId").value;

    if (körperBau === "Breite") {
        const breit = ([(körperGröße - 100) + (alter / 10)] *0.9 * 1.1).toFixed(2);
        console.log(breit);
        document.getElementById("ergebnisId").textContent = "Dein Idealgewicht ist " + breit +" Kilogramm";
    } else {
        const schmal = ([(körperGröße - 100 )+ (alter / 10)] *0.9* 0.9).toFixed(2);
        document.getElementById("ergebnisId").textContent = "Dein Idealgewicht ist " + schmal+ " Kilogramm";
    }
}

radioButtons.addEventListener('click', idealGewichtsRechner);

