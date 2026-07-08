const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    document.querySelector(".loading").style.display = "block";
    document.querySelector(".welcome").style.display = "none";

    setTimeout(() => {
        alert("❤️ Welcome to Our 4 Years of Love ❤️");
        // Quiz next step ivide add cheyyam
    }, 2000);
});
