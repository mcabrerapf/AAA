import Header from './components/Header.js';
import Links from './components/Links.js';
import MainDescription from './components/MainDescription.js';
import ContactForm from './components/ContactForm.js';
import MusicExamples from './components/MusicExamples.js';
import GunterBio from './components/GunterBio.js';
import ArijunaBio from './components/ArijunaBio.js';
import Separator from './components/Separator.js';

function App() {
    const app = document.getElementById("app");
    const header = document.createElement("header");
    header.className = 'header'
    header.innerHTML =  `
        ${Header()}
    `;
    header.appendChild(Links());
    app.appendChild(header);

    const mainContainer = document.createElement("main");
    mainContainer.className = 'main-container'
    mainContainer.innerHTML = `
        ${MainDescription()}
        ${Separator()}
        ${MusicExamples()}
        ${Separator()}
        ${GunterBio()}
        ${Separator()}
        ${ArijunaBio()}
        ${Separator()}
    `;
    mainContainer.appendChild(ContactForm());
    app.appendChild(mainContainer);
}

App();