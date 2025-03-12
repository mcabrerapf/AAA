import { buildClass, getDevice } from "../helpers/index.js";

export default function MusicPlaylist({
    header = '',
    playlistUrl = ''
} = {}
) {
    if(!playlistUrl) return '';
    const device = getDevice();
    const className = buildClass(['music-playlist', device])

    return `
        <div class="${className}">
            <div class="music-playlist__header">
                ${header}
            </div>
            <div class="music-playlist__iframe">
                <iframe
                    width="100%"
                    height="500"
                    scrolling="no"
                    frameborder="no"
                    src=${playlistUrl}
                >
                </iframe>
            </div>
   
        </div>
    `;
}
