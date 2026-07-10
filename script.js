const startBtn = document.getElementById("startBtn");
const welcome = document.querySelector(".welcome");
const quiz = document.getElementById("quiz");

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

const quizData = [
{
question: "1. Who is the cutest in this relationship? ❤️",
options: ["Abhishek 😎", "Nandana 😍", "option B 😂", "The camera 📸"]
},
{
question: "2. Will you marry me one day ? 🙈💕",
options: ["yes 😍", "option A ❤️", "opposite of No 😂", "option B 🥳"]
},
{
question: "3. Who is the luckiest person in this relationship? 🍀",
options: ["Abhishek ❤️", "Nandana ❤️", "Both 💕"]
},
{
question: "4. How many years have we loved each other? ❤️",
options: ["4 Years 💖", "Forever ♾️", "Just Started 😂", "100 Years 😆"]
},
{
question: "5. Who says 'I love you' more? 😘",
options: ["Abhishek ❤️", "Nandana ❤️", "Both 😍", "Every day 😂"]
},
{
question: "6. Who gets jealous first? 😅",
options: ["Nandana 🤭", "Abhishek 🤭", "Both 😂", "No one 😇"]
},
{
question: "7. Who gets angry first? 😤",
options: ["Abhishek 😅", "Nandana 😅", "Depends 🤣", "option A ❤️"]
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
question: "12. Who fell in love at first sight? ❤️‍🔥",
options: ["Abhishek 🙈", "Nandana 👀", "Both 😜", "No one 🥲"]
},
{
question: "13. who is more caring ? ⚡",
options: ["Nandana 😝", "Abhishek 🥰", "Always abhishek 🥹"]
},
{
question: "14. Who is your forever person? 💍",
options: ["You ❤️", "option A 🥹", "Nandana 😁"]
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
document.body.innerHTML = `
<div style="height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:#ffeff5;text-align:center;padding:20px;">
<h1 style="color:#ff2d75;">🎉 Quiz Completed! 🎉</h1>
<p style="font-size:22px;color:#444;">You unlocked a special surprise... ❤️</p>

<button onclick="showSurprise()"
style="margin-top:30px;padding:15px 30px;font-size:20px;border:none;border-radius:30px;background:#ff2d75;color:white;">
🎁 Open My Surprise
</button>
</div>
`;

}
};
function showSurprise(){

document.body.innerHTML = `
<div style="height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:#000;color:white;text-align:center;padding:20px;">

<h1>❤️ Happy 4th Anniversary ❤️</h1>

<h2>Four years down,<br>forever to go. ♾️❤️</h2>

<p style="font-size:20px;margin-top:20px;">
Every moment with you is my favorite memory. 🥹💕
</p>

</div>
`;

}
