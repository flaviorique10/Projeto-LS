import { createGamePage } from './gamePage.js';
import runPreLoader from '../animations/pre-loader.js';
import createHeader from '../templates/header.js';


document.body.onload = homePage();

function homePage() {

    document.body.setAttribute('data-theme', 'light');

    

    let app = document.getElementById('app');
    app.innerHTML = '';


    let header = createHeader();
    document.body.insertBefore(header, app);


    let homePage = document.createElement('div');
    homePage.id = 'homePage';
    homePage.classList.add('homePage');
    app.appendChild(homePage);


    let h1 = document.createElement('h1');
    let startButton = document.createElement('button');
    let scoreButton = document.createElement('button');

    h1.textContent = 'Hangman Game';
    startButton.textContent = 'Start Game';
    scoreButton.textContent = 'Score';

    startButton.classList.add('button');
    scoreButton.classList.add('button');

    startButton.id = 'start';
    scoreButton.id = 'score';

    homePage.appendChild(h1);
    homePage.appendChild(startButton);
    homePage.appendChild(scoreButton);


    startButton.addEventListener('click', () => {
        createGamePage();
    });
}


export default homePage;