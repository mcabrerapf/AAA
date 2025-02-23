export default function AboutUsBadge({
    name,
    url
}) {
    return `
    <div
        role="button" 
        class="about-us-badge"
        onclick="if(!${url})return;window.open('${url}')"
    >
        <div class="about-us-badge__name">
            ${name}
        </div>
    </div>
    `;
}
