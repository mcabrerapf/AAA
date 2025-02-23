import Header from './components/Header.js';
// import Button from './components/Button.js';
import MainDescription from './components/MainDescription.js';
import Separator from './components/Separator.js';
import Footer from './components/Footer.js';
import AboutUs from './components/AboutUs.js';
import ContactForm from './components/ContactForm.js';
// ${Button({ text: "Click Me", onClick: "alert('Clicked!')" })}
function App() {
    document.getElementById("app").innerHTML = `
        ${Header()}
        <main class="main-container">
            ${MainDescription()}
            ${Separator()}
            ${ContactForm()}
            ${AboutUs()}
        </main>
        ${Footer()}
    `;
}

App();