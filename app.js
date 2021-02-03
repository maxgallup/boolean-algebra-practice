window.onload = () => {
    const letters = ["A", "B", "C", "D", "E", "F", "G"];
    const booleanValues = ["1", "0"];
    const symbols = ["+", "*", "~"];
    const parentheses = ["(", ")"];
    const laws1 = [
        "Identity Law",
        "Zero and One Law",
        "Inverse Law",
        "Commutative Law"
    ]
    const laws2 = [
        "Associative Law",
        "Distributive Law"
    ];

    const difficulty = document.getElementById("difficulty");
    const nextBtn = document.getElementById("next");
    const submitBtn = document.getElementById("submit");
    const question = document.getElementById("questionText");
    const input = document.getElementById("inputText");
    var difficultyLevel = 1;
    var correctAnswer = "";
    
    difficulty.addEventListener("change", () => {
        difficultyLevel = difficulty.value;
    });
    
    nextBtn.addEventListener("click", () => {
        if(difficultyLevel == 1) {
            question.textContent = createLevel1Problem();
            correctAnswer = getCorrectAnswer(question.textContent);
            console.log(correctAnswer);
        }
    });

    submitBtn.addEventListener("click", () => {
        console.log(input.value);
    });

    question.textContent = createLevel1Problem();
    correctAnswer = getCorrectAnswer(question.textContent);












    function createLevel1Problem(){
        if(Math.floor(Math.random() * 2) < 1) {
            variable1 = letters[0];
            if(Math.floor(Math.random() * 3) >= 2) {
                variable1 = symbols[2] + variable1;
            }
        } else {
            variable1 = booleanValues[Math.floor(Math.random() * (booleanValues.length))];
            if(Math.floor(Math.random() * 3) >= 2) {
                variable1 = symbols[2] + variable1;
            }
        }
        if(Math.floor(Math.random() * 2) < 1) {
            variable2 = letters[0];
            if(Math.floor(Math.random() * 3) >= 2) {
                variable2 = symbols[2] + variable2;
            }
        } else {
            variable2 = booleanValues[Math.floor(Math.random() * (booleanValues.length))];
            if(Math.floor(Math.random() * 3) >= 2) {
                variable2 = symbols[2] + variable2;
            }
        }
        symbol = symbols[Math.floor(Math.random() * (symbols.length - 1))];
        return `${variable1} ${symbol} ${variable2}`;
    }


    function getCorrectAnswer(string) {
        string = string.split(" ");
        var v = [];

        if(string[1] == "+"){ // Logical OR operation
            for(var i = 0; i <= 2; i+=2){
                if(string[i][0] == "~" && !isNaN(string[i][1])){
                    v.push(!parseInt(string[i][1]));
                } else if(isNaN(string[i])){
                    v.push((1 || 0))
                } else if(!isNaN(string[i])){
                    v.push(parseInt(string[i]));
                }
            }
            console.log(v[0], v[1]);
            return v[0] || v[1];
        } else if (string[1] == "*") { // Logical AND operation
            for(var i = 0; i <= 2; i+=2){
                if(string[i][0] == "~" && !isNaN(string[i][1])){
                    v.push(!parseInt(string[i][1]));
                } else if(isNaN(string[i])){
                    v.push((1 || 0))
                } else if(!isNaN(string[i])){
                    v.push(parseInt(string[i]));
                }
            }
            console.log(v[0], v[1]);
            return v[0] && v[1];
        }
    }

    
    

    

    
}


