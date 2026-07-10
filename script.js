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
},
{
question: "5. Who says 'I love you' more? 😘",
options: ["Me ❤️", "You ❤️", "Both 😍", "Every day 😂"]
},
{
question: "6. Who gets jealous first? 😅",
options: ["Me 🤭", "You 🤭", "Both 😂", "No one 😇"]
},
{
question: "7. Who gets angry first? 😤",
options: ["Me 😅", "You 😅", "Depends 🤣", "Nobody ❤️"]
},
{
question: "8. Who apologizes first after a fight? 🤗",
options: ["Me ❤️", "You ❤️", "Both 🥰", "Who remembers? 😂"]
},
{
question: "9. Who misses the other more? 🥺",
options: ["Me ❤️", "You ❤️", "Both 💞", "Every second 😭"]
},
{
question: "10. Who is more romantic? 🌹",
options: ["Me 😍", "You 😍", "Both ❤️", "Secret 🤫"]
},
{
question: "11. Who gives the sweetest hugs? 🤍",
options: ["Me 🤗", "You 🤗", "Both 🥹", "Can't choose ❤️"]
},
{
question: "12. What is the most beautiful part of our love story? ✨",
options: ["Every moment ❤️", "Our memories 💕", "Our trust 🤝", "Everything 🥰"]
},
{
question: "13. How many years have we loved each other? 💖",
options: ["4 Years ❤️", "Forever ♾️", "Just started 😂", "100 Years 🤣"]
},
{
question: "14. Who is my forever person? 💍",
options: ["You ❤️", "Always You 🥹", "Forever ❤️", "My Home 🏡"]
},
{
question: "15. Will you stay with me forever? ♾️❤️",
options: ["Yes, Forever ❤️", "Always 💖", "Every Lifetime 🥰", "Without a Doubt ❤️"]
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
