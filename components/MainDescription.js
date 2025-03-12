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
                titles: ['Musician', 'Composer', 'Producer', 'Sound Designer'],
                onClick: `document.getElementById('gunter-bio').scrollIntoView({ behavior: 'smooth' })`
            })}
            ${AboutUsBadge({
                name: 'Arijuna',
                backgroundUrl: '../assets/arijuna.jpg',
                titles: ['Musician', 'Composer', 'Programmer'],
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
