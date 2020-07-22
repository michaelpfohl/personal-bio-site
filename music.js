"use strict";

const music = [
    {
        image: "album-images/YSHBMF.jpg",
        imageAlt: "You Should Have Bought More Flowers - Secret Stuff",
        albumTitle: "You Should Have Bought More Flowers",
        albumArtist: "Secret Stuff · 2020",
        spotifyLink: "https://open.spotify.com/album/3xDjiwowJJuWoKYepq1qi5?si=jJ3rDKloRAucckj9h547jg",
        appleLink: "https://music.apple.com/us/album/you-should-have-bought-more-flowers/1519358575",
        bandcampLink: "https://secretstuffemo.bandcamp.com/album/you-should-have-bought-more-flowers"
    },
    {
        image: "album-images/2828.jpg",
        imageAlt: "2828 - Secret Stuff",
        albumTitle: "2828 (Feat. Square Peg Round Hole)",
        albumArtist: "Secret Stuff · 2018",
        spotifyLink: "https://open.spotify.com/album/62ATm8cJblfpqZVKdqgNlD?si=Oy77WksKT3ye6asHNPspoA",
        appleLink: "https://music.apple.com/us/album/2828-feat-square-peg-round-hole-single/1372958273",
        bandcampLink: "https://secretstuffemo.bandcamp.com/track/2828-featuring-square-peg-round-hole"
    },
    {
        image: "album-images/sleepwalker.jpg",
        imageAlt: "Sleepwalker - Low Mass",
        albumTitle: "Sleepwalker",
        albumArtist: "Low Mass · 2017",
        spotifyLink: "https://open.spotify.com/album/1sNmsQ9mzTwAAtpaWD3Tyu?si=c1in-8PtT4iVbry_4sH92Q",
        appleLink: "https://music.apple.com/us/album/sleepwalker-ep/1304695382",
        bandcampLink: "https://lowmasstheband.bandcamp.com/album/sleepwalker"
    },
    {
        image: "album-images/split.jpg",
        imageAlt: "Split w/ Sundressed - Secret Stuff",
        albumTitle: "Split w/ Sundressed",
        albumArtist: "Secret Stuff · 2016",
        spotifyLink: "https://open.spotify.com/album/62ATm8cJblfpqZVKdqgNlD?si=g9Mg0himQK6Cf6pIhKK6Mw",
        appleLink: "https://music.apple.com/us/album/split-ep/1469995624",
        bandcampLink: "https://secretstuffemo.bandcamp.com/album/secret-stuff-sundressed-split-ep"
    },
    {
        image: "album-images/thisisfine.jpg",
        imageAlt: "This Is Fine - Secret Stuff",
        albumTitle: "This Is Fine",
        albumArtist: "Secret Stuff · 2016",
        spotifyLink: "https://open.spotify.com/album/5mYla9c4VFPOusxsc0CZaJ?si=hsDdXAmFRruVvfSRxgh6eQ",
        appleLink: "https://music.apple.com/us/album/this-is-fine-ep/1067961449",
        bandcampLink: "https://secretstuffemo.bandcamp.com/album/this-is-fine"
    },
    {
        image: "album-images/learningnottocare.jpg",
        imageAlt: "Learning Not To Care - Secret Stuff",
        albumTitle: "Learning Not To Care",
        albumArtist: "Secret Stuff · 2014",
        spotifyLink: "https://open.spotify.com/album/5Ug0sIZ9HkL1qp3zQaUYq7?si=DYeQzaJRS8G5vVOCIGO2Vw",
        appleLink: "https://music.apple.com/us/album/learning-not-to-care-ep/1038000393",
        bandcampLink: "https://secretstuffemo.bandcamp.com/album/learning-not-to-care"
    },

]

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
}

const buildMusic = () => {
    let domString = "";
    for(let i = 0; i < music.length; i++){
        domString+=`<div class="album--card">` 
        domString+=` <img src=${music[i].image} alt=${music[i].imageAlt} class="album--image"/>`
        domString+=` <h1 class="album--title">${music[i].albumTitle}</h1>`
        domString+=` <h2 class="album--artist">${music[i].albumArtist}</h2>`
        domString+=` <div class="album--links">`
        domString+=`  <a href=${music[i].spotifyLink} target="_blank"><i class="fab fa-spotify"></i></a>`
        domString+=`  <a href=${music[i].appleLink} target="_blank"><i class="fab fa-apple"></i></a>`
        domString+=`  <a href=${music[i].bandcampLink} target="_blank"><i class="fab fa-bandcamp"></i><a>`
        domString+=` </div>` 
        domString+=`</div>`
    }
    printToDom("main--container", domString);
}

buildMusic();