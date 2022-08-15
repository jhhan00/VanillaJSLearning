const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
];

// 랜덤이미지를 얻어온 후 
const randomImage = images[Math.floor(Math.random() * images.length)];
// html img 태그를 직접 만들어서 
const bgImg = document.createElement("img");
bgImg.src = `img/${randomImage}`;
// 직접 추가하기
document.body.appendChild(bgImg);