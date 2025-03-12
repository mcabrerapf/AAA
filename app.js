import Header from './components/Header.js';
import Links from './components/Links.js';
import MainDescription from './components/MainDescription.js';
import ContactForm from './components/ContactForm.js';
import MusicExamples from './components/MusicExamples.js';
import GunterBio from './components/GunterBio.js';
import ArijunaBio from './components/ArijunaBio.js';
import Separator from './components/Separator.js';

function App() {
    document.getElementById("app").innerHTML = `
        ${Header()}
        <main class="main-container">
            ${Links()}
            ${MainDescription()}
            ${Separator()}
            ${MusicExamples()}
            ${Separator()}
            ${GunterBio()}
            ${Separator()}
            ${ArijunaBio()}
            ${Separator()}
            ${ContactForm()}
        </main>
    `;
}

App();