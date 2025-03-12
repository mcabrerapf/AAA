import Button from "./Button.js";

export default function Links() {
    const onClick = (buttonId)=> {
        return `document.getElementById('${buttonId}').scrollIntoView({ behavior: 'smooth' })`
    }

    return `
    <div 
        class="links" 
        >
        <ul>
            <li>
                ${Button({text: "Who are we?", onClick:onClick('gunter-bio')})}
            </li>
             <li>
             ${Button({text: "Checkout some of our work", onClick:onClick('videos')})}
            </li>
            <li>
            ${Button({text: "Listen to some of our music", onClick:onClick('playlists')})}
            </li>
        </ul>
    </div>
    `;
}
