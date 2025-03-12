import LogoSmall from "./LogoSmall.js";

export default function Header() {
    return `
        <header class="header">
            ${LogoSmall()}
            <h1>Animal Antics Audio</h1>
            ${LogoSmall()}
        </header>
    `;
}
