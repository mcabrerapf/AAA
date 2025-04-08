import LogoSmall from "./LogoSmall.js";

export default function Header() {
    return `
        <div class="header__main">
            ${LogoSmall()}
            <h1>Animal Antics Audio</h1>
            ${LogoSmall()}
        </div>
    `;
}
