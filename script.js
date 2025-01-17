const quizData = [
    {
        "question": "Quelle balise HTML est utilisée pour créer une liste non ordonnée ?",
        "options": ["<ul>", "<ol>", "<li>", "<list>"],
        "answer": 0
    },
    {
        "question": "Quelle propriété CSS est utilisée pour définir la couleur de fond d'un élément ?",
        "options": ["color", "background-color", "font-color", "background"],
        "answer": 1
    },
    {
        "question": "Quel événement JavaScript est déclenché lorsqu'un utilisateur clique sur un élément HTML ?",
        "options": ["onchange", "onsubmit", "onclick", "onmouseover"],
        "answer": 2
    },
    {
        "question": "Quelle balise HTML est utilisée pour inclure du code JavaScript dans un document HTML ?",
        
        "options": ["<js>", "<javascript>", "<code>", "<script>"],
        "answer": 3
        },
        {
        "question": "Quelle unité de mesure CSS est relative à la taille de la police de caractères de l'élément parent ?",
        
        "options": ["em", "px", "%", "rem"],
        "answer": 0
        },
        {
        "question": "Quelle est la fonction JavaScript utilisée pour imprimer du texte dans la console du navigateur ?",
        
        "options": ["print()", "console.log()", "log()", "debug()"],
        "answer": 1
        },
        {
        "question": "Quel attribut HTML est utilisé pour spécifier l'URL d'une image ?",
        "options": ["src", "href", "link", "url"],
        "answer": 0
        },
        {
        "question": "Quelle propriété CSS est utilisée pour définir la taille de la police de caractères ?",
        
        "options": ["text-size", "size", "font", "font-size"],
        "answer": 3
        },
        {
            "question": "Quel opérateur JavaScript est utilisé pour concaténer des chaînes de  caractères ?",
            
            "options": ["+", "*", "/", "-"],
            "answer": 0
            },
            {
            "question": "Quelle balise HTML est utilisée pour créer un lien hypertexte ?",
            "options": ["<link>", "<a>", "<href>", "<url>"],
            "answer": 1
            },
            {
            "question": "Quelle propriété CSS est utilisée pour centrer un élément horizontalement ?",
            
            "options": ["text-align: center;", "align: center;", "center: horizontal;",
            
            "horizontal-align: center;"],
            "answer": 0
            },
            {
            "question": "Quelle méthode JavaScript est utilisée pour ajouter un élément à l fin d'un tableau ?",
            
            "options": ["add()", "append()", "insert()", "push()"],
            "answer": 3
            },
            {
            "question": "Quel attribut HTML est utilisé pour spécifier le texte alternatif d'une image ?",
            
            "options": ["title", "description", "alt", "caption"],
            "answer": 2
            },
            {
            "question": "Quelle propriété CSS est utilisée pour spécifier l'espacement entre les éléments ?",
            
            "options": ["margin", "padding", "space", "spacing"],
            "answer": 0
            },
            {
            "question": "Quelle fonction JavaScript est utilisée pour convertir une chaîne de caractères en entier ?",
                
            "options": ["parseInt()", "convertToInt()", "toInteger()", "stringToNumber()"],
                "answer": 0
             },
                {
            "question": "Quelle balise HTML est utilisée pour créer une ligne horizontale ?",
                "options": ["<line>", "<hr>", "<br>", "<hrz>"],
                "answer": 1
                },
                {
                "question": "Quelle propriété CSS est utilisée pour définir la couleur du texte ?",
                
                "options": ["font-color", "text-color", "font", "color"],
                "answer": 3
                },
                {
                "question": "Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau ?",
                
                "options": ["removeLast()", "pop()", "deleteLast()", "remove()"],
                "answer": 1
                },
                {
                "question": "Quel élément HTML est utilisé pour créer un formulaire ?",
                "options": ["<form>", "<input>", "<field>", "<submit>"],
                "answer": 0
                },
                {
                "question": "Quelle propriété CSS est utilisée pour afficher un élément en ligne avec les autres éléments ?",
                
                "options": ["display: inline;", "position: inline;", "align: inline;", "layout:inline;"],
                
                "answer": 0
                }

    
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
let currentQuestion = 0;
let score = 0;
let userResponses = [];

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedIndex) {
    const currentQuizData = quizData[currentQuestion];
    userResponses.push(selectedIndex);
    if (selectedIndex === currentQuizData.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    let message = "";
    let mistakes = [];
    if (score === quizData.length) {
        message = "You passed! Score: " + score + "/" + quizData.length;
        resultElement.classList.remove('failed');
        resultElement.classList.add('passed');
    } else {
        message = "You have mistakes. Score: " + score + "/" + quizData.length;
        quizData.forEach((question, index) => {
            if (question.answer !== userResponses[index]) {
                mistakes.push("You chose the wrong choice for Question " + (index + 1));
            }
        });
        resultElement.classList.remove('passed');
        resultElement.classList.add('failed');
    }
    
    resultElement.innerText = message;
    
    if (mistakes.length > 0) {
        resultElement.innerHTML += "<br><br>Mistakes:<br>" + mistakes.join("<br>");
    }
    
    nextButton.style.display = 'none';
}

loadQuestion();
