import AboutUsBadge from "./AboutUsBadge.js";

export default function MainDescription() {
    return `
    <div class="main-description">
        <div class="main-description__left">
            <p>
                <b>Animal Antics Audio</b> is a music production cooperative composed of
            </p>
        </div>
        <div class="main-description__badges">
            ${AboutUsBadge({
                name: 'Gunter',
                backgroundUrl: '../assets/gunter.jpg',
                description: 'Musician, Producer, Sound Designer, Composer',
                onClick: `document.getElementById('gunter-bio').scrollIntoView({ behavior: 'smooth' })`
            })}
            ${AboutUsBadge({
                name: 'Arijuna',
                backgroundUrl: '../assets/arijuna.jpg',
                description: 'Musician, Composer, Programmer, the sexy one',
                onClick: `document.getElementById('arijuna-bio').scrollIntoView({ behavior: 'smooth' })`
            })}
        </div>
        <div class="main-description__right">
            <p>
               Otra descrupcion de quienes somos pe
            </p>
        </div>
    </div>
    `;
}
