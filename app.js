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
    app.innerHTML = `
        ${Header()}
    `;
    const mainContainer = document.createElement("main");
    mainContainer.className = 'main-container'
    mainContainer.innerHTML = `
        ${Links()}
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