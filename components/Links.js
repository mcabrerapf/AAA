import Button from "./Button.js";
import { getDevice, buildClass } from '../helpers/index.js'

const buttons = [
    ['whoAreWe','gunterBio'],
    ['checkoutVideos', 'videos'],
    ['checkoutPlaylists' ,'playlists'],
    ['contactUs', 'contactForm']    
];

export default function Links() {
    const deviceClass = getDevice();
    const className = buildClass(['links', deviceClass])
    const linksContaier = document.createElement("div");
    linksContaier.className = className

    const linksMenuButton = document.createElement("button");
    linksMenuButton.id = 'linksMenuButton';
    linksMenuButton.className = 'button hamburger';
    linksMenuButton.innerHTML = '☰'
    if(deviceClass !== 'desktop') linksContaier.appendChild(linksMenuButton);

    const linksList = document.createElement("ul");
    if(deviceClass !== 'desktop') linksList.className = 'hide';
    linksList.id = 'linksMenu';
    linksList.innerHTML = `
        <li>
            ${Button({ id: buttons[0][0], text: "Who are we?" })}
        </li>
        <li>
            ${Button({ id:buttons[1][0], text: "Check out some of our work" })}
        </li>
        <li>
            ${Button({ id: buttons[2][0], text: "Listen to some of our music" })}
        </li>
        <li>
            ${Button({ id: buttons[3][0], text: "Work with us!" })}
        </li>
    `

    linksContaier.appendChild(linksList);

    document.addEventListener("DOMContentLoaded", () => {
        const linksMenuButton = document.getElementById("linksMenuButton");
        const linksMenu = document.getElementById("linksMenu");

        buttons.forEach(buttonId=> {
            const buttonById = document.getElementById(buttonId[0]);
            buttonById.addEventListener("click", ()=> {
                document.getElementById(buttonId[1]).scrollIntoView({ behavior: 'smooth' });
                if(deviceClass === 'desktop') return;
                linksMenu.className = 'hide';
                linksMenuButton.className = 'button hamburger';
            });
        });

        linksMenuButton.addEventListener("click", ()=> {
            linksMenu.className = '';
            linksMenuButton.className = 'hide';
        });
    })
    return linksContaier;
}
