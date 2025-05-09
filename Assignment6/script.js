let reds = [];
//let oranges = [];
let yellows = [];
//let greens = [];
let blues = [];
let violets = [];
//let whites = [];
let blacks = [];

let naturals = [];
let fugitives = [];

document.addEventListener('DOMContentLoaded', function() {
    fetch("pigments.JSON")
        .then(response => response.json())
        .then(data => {
            
            data.forEach(item => {

                const section = document.createElement('section');
                section.innerHTML = `
                <h3>${item.name}</h3>
                <img src="${item.image}" alt="${item.name}">
                <p> <span class="categoryName">Color Code: </span>${item.code}</p>
                <p> <span class="categoryName">Source: </span>${item.source}</p>
                <p> <span class="categoryName">Other Names </span>${item.otherNames}</p>
                <p>${item.text}</p>
                `;

                if  (item.color === "Red" || item.color === "Orange") {
                    reds.push(item);
                    document.getElementById('reds').appendChild(section);
                }  else if (item.color === "Yellow") {
                    yellows.push(item);
                    document.getElementById('yellows').appendChild(section);
                } else if (item.color === "Green" || item.color === "Blue") {
                    blues.push(item);
                    document.getElementById('blues').appendChild(section);
                }  else if (item.color === "Violet") {
                    violets.push(item);
                    document.getElementById('violets').appendChild(section);
                } else if (item.color === "White" || item.color === "Black") {
                    blacks.push(item);
                    document.getElementById('blacks').appendChild(section);
                }

                if  (item.natural) {
                    naturals.push(item);
                    //document.getElementById('naturals').appendChild(section);
                }
                if  (item.fugitive) {
                    fugitives.push(item);
                }
                
            });
            document.getElementById('test').innerHTML = reds.toString();
        });

});

// function category() {
//     const theDiv = document.getElementById('reds');
//     for(let i = 0; i < ) {
//         const section = document.createElement('section');
//     }

// }