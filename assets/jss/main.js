const sumDivisibleNumber = (num) => {
    let sumNumbers = 0;

    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumNumbers += i;
        }
    }

    return sumNumbers;
}

const showResult = () => {
    const resultInHtml = document.getElementById('result');

    const num = parseInt(document.getElementById('number').value);

    if (!Number.isInteger(num) || num <= 0) {
        alert("Por favor, forneça um número inteiro positivo.");
        return;
    }

    
    const resultSum = sumDivisibleNumber(num);
    resultInHtml.innerText = `O resultado da soma é: ${resultSum}`;
}