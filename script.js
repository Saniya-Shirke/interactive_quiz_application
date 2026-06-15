let que = document.getElementById("question");
let next = document.getElementById("nextBtn");
let sc = document.getElementById("score");
let btns = document.getElementsByClassName("options");
let btn1 = document.getElementsByClassName("optionBtn-1");
let btn2 = document.getElementsByClassName("optionBtn-2");
let btn3 = document.getElementsByClassName("optionBtn-3");
let btn4 = document.getElementsByClassName("optionBtn-4");
let quizque = [
    {
    question:"Which keyword is used to declare a variable in JavaScript?",
    options:[
        "var",
        "int",
        "string",
        "define"
        ],
    answer: "var"
    },
    {
    question: "Which operator is used for strict equality in JavaScript?",
    options: [
      "=",
      "==",
      "===",
      "!="
    ],
    answer: "==="
    },
     {
    question:"Which function converts JSON into JavaScript object?",
    options:[
            "JSON.parse()",
            "JSON.stringify()",
            "parse.JSON()",
            "convert.JSON()"
        ],
    answer: "JSON.parse()"
    },
     {
    question:"Which company developed JavaScript?",
    options:[
        "Microsoft",
        "Netscape",
        "Google",
        "Apple"
        ],
    answer: "Netscape"
    }
]
let count = 0;
que.textContent = quizque[0].question;
btn1[0].textContent = quizque[0].options[0];
btn2[0].textContent = quizque[0].options[1];
btn3[0].textContent = quizque[0].options[2];
btn4[0].textContent = quizque[0].options[3];

next.addEventListener("click", function(){
    count++;
    quizque[count];
que.textContent = quizque[count].question;
btn1[0].textContent = quizque[count].options[0];
btn2[0].textContent = quizque[count].options[1];
btn3[0].textContent = quizque[count].options[2];
btn4[0].textContent = quizque[count].options[3];
})

let scr = 0;
btn1[0].addEventListener("click", function(){
    if (quizque[count].answer === btn1[0].textContent){
        scr++;
        sc.textContent = `Score: ${scr}`;
    }
    else 
        sc.textContent = `Score: ${scr}`;
})

btn2[0].addEventListener("click", function(){
    if(btn2[0].textContent === quizque[count].answer){
        scr++;
        sc.textContent = `Score: ${scr}`;
    } else {
         sc.textContent = `Score: ${scr}`;
    }
})

btn3[0].addEventListener("click", function(){
    if(btn3[0].textContent === quizque[count].answer){
        scr++;
        sc.textContent = `Score: ${scr}`;
    } else {
        sc.textContent = `Score: ${scr}`;
    }
})

btn4[0].addEventListener("click", function(){
    if(btn4[0].textContent === quizque[count].answer){
        scr++;
        sc.textContent = `Score: ${scr}`;
    } else {
        sc.textContent = `Score: ${scr}`;
    }
})