

function imgReveal(imgId) {
    let fileName = 'images/' + imgId + 'Full.jpeg';
    let textId = imgId + 'caption';
    let buttonId = imgId + 'button';
    document.getElementById(imgId).src = fileName;
    document.getElementById(textId).style.display = "block";
    document.getElementById(buttonId).style.display = "none";

}
