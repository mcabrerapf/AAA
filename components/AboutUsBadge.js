export default function AboutUsBadge({
    name = "Name",
    backgroundUrl = "",
    titles = [],
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
        <div class="about-us-badge__titles">
            ${titles.map(title=> (
                `<div>
                    ${title}
                </div>
                `
            ))
            .join('')
            }
        </div>
    </div>
    `;
}
