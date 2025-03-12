import { buildClass, getDevice } from "../helpers/index.js";

export default function MusicVideo({
    header = '',
    videoUrl
} = {}
) {
    if(!videoUrl) return '';
    const device = getDevice();
    const className = buildClass(['music-video', device])

    return `
        <div class="${className}">
            <div class="music-video__header">
                ${header}
            </div>
            <div class="music-video__iframe">
                <iframe 
                    data-src=""
                    src=${videoUrl}
                    allowfullscreen="1"
                    frameborder="no"
                >
                </iframe>
            </div>
        </div>
    `;
}
