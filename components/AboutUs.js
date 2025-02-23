import AboutUsBadge from "./AboutUsBadge.js";

export default function AboutUs() {
    return `
    <div class="about-us">
        ${AboutUsBadge({ name: 'Arijuna', url: "https://www.youtube.com/@arijuna_music" })}
        ${AboutUsBadge({ name: 'Gunter' })}
    </div>
    `;
}
