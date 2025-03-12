export default function AboutUsBadge({
    name = "Name",
    backgroundUrl = "",
    description = "",
    onClick = ""
} = {}
) {
    return `
    <div
        role="button" 
        class="about-us-badge"
    >
        <div class="about-us-badge__name">
            ${name}
        </div>
        <div 
            class="about-us-badge__image"
            role="button"
            onclick="${onClick}"
        >
            <img src=${backgroundUrl} />
        </div>
        <div class="about-us-badge__description">
            ${description}
        </div>
    </div>
    `;
}
