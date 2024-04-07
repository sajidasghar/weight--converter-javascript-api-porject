const inputEl = document.getElementById("input");
const resutlEl = document.getElementById("result");

let resultTime;

function updateResults(){
    resutlEl.innerText = (inputEl.value / 2.205).toFixed(2);
    clearTimeout(resultTime)
    resultTime = setTimeout(() => {
        resutlEl.innerText = "";
        inputEl.value = "";
    },10000 );
}



inputEl.addEventListener("change", updateResults)