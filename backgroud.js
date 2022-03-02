const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const chooseImage = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");

bgImages.src = `img/${chooseImage}`

document.body.appendChild(bgImages); //append는 가장 뒤에 prepend는 가장 위에 오게 함.