const images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

document.body.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

if (chosenImage === "2.jpg") {
    document.addEventListener("DOMContentLoaded", () => {
        const greeting = document.querySelector("#greeting");
        const weather = document.querySelector("#weather");
        const quote = document.querySelector("#quote");

        // 회색으로 변경
        if (greeting) greeting.style.color = "black";
        if (weather) {
            weather.querySelectorAll("span").forEach(el => el.style.color = "black");
        }
        if (quote) {
            quote.querySelectorAll("span").forEach(el => el.style.color = "black");
        }
    });
}
