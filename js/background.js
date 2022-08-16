const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png"
];

// 랜덤이미지를 얻어온 후 
const randomImage = images[Math.floor(Math.random() * images.length)];
const imgUrl = `img/${randomImage}`;

// background 적용(전체 적용)
document.body.style.backgroundImage = `url("${imgUrl}")`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";