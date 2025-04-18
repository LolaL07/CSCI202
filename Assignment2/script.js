
const images = ['bg1.png', 'bg2.png', 'bg3.png', 'bg4.png', 'bg5.png', 'bg6.png', 'bg7.png', 'bg8.png', 'bg9.png', 'bg10.png', 'bg11.png', 'bg12.png', 'bg13.png', 'bg14.png', 'bg15.png', 'bg16.png', 'bg17.png', 'bg18.png', 'bg19.png', 'bg20.png', 'bg21.png', 'bg22.png'];

let imgIndex = 0;

function imgCycle() {
    let imageURL = 'url(' + images[imgIndex];
    document.getElementById("bg").style.backgroundImage = imageURL;
    imgIndex = (imgIndex + 1) % images.length;
    // let currentBG = document.getElementById("bg").style.backgroundImage;

}

function showFlowers() {
    document.getElementById('flowerImg').src = "flowers2.png";
}