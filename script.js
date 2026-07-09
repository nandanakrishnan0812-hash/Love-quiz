const startBtn = document.getElementById("startBtn");
const welcome = document.querySelector(".welcome");
const quiz = document.getElementById("quiz");

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

const quizData = [
{
question: "1. Who is the cutest in this relationship? ❤️",
options: ["Abhishek 😎", "Nandana 😍", "Both 😂", "The camera 📸"]
},
{
question: "2. When did we first meet? 💕",
options: ["First glance 😍", "Like destiny ❤️", "I don't remember 😂", "Secret 🤫"]
},
{
question: "3. Who is the luckiest person in this relationship? 🍀",
options: ["Abhishek ❤️", "Nandana ❤️", "Both 💕", "Destiny ✨"]
},
{
question: "4. How many years have we loved each other? ❤️",
options: ["4 Years 💖", "Forever ♾️", "Just Started 😂", "100 Years 😆"]
}
];

let current = 0;

startBtn.onclick = () => {
welcome.style.display = "none";
quiz.style.display = "block";
showQuestion();
};

function showQuestion(){
question.innerHTML = quizData[current].question;

answers.innerHTML = "";

quizData[current].options.forEach(option=>{
let btn=document.createElement("button");
btn.innerHTML=option;
btn.style.display="block";
btn.style.margin="10px auto";
btn.style.padding="10px";
btn.onclick=()=>alert("😂 Nice Choice ❤️");
answers.appendChild(btn);
});
}

nextBtn.onclick=()=>{
current++;

if(current<quizData.length){
showQuestion();
}else{
alert("❤️ Quiz Completed ❤️");
}
};
