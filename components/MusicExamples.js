import MusicPlaylist from './MusicPlaylist.js';
import MusicVideo from './MusicVideo.js';
import { buildClass, getDevice } from '../helpers/index.js';

export default function MusicExamples() {
    const device = getDevice();
    const className = buildClass(['music-examples', device])
    
    return `
    <div class="${className}">
        <div class="music-examples__header">
            Listen to some of our work!
        </div>
        <div class="music-examples__videos" id="videos">
            ${MusicVideo({
                header: "Video Game Music Reel: AAA",
                videoUrl: "https://www.youtube-nocookie.com/embed/1rsDsb2tWLk?autoplay=0&rel=0&loop=0&controls=1&cc_load_policy=0"
            })}
            ${MusicVideo({
                header: "Video Game Music Reel: Indie",
                videoUrl: "https://www.youtube-nocookie.com/embed/N6T3gRy5R-w?autoplay=0&amp;rel=0&amp;loop=0&amp;controls=1&amp;cc_load_policy=0"
            })}
            ${MusicVideo({
                header: "Monster Sound Design",
                videoUrl: "https://www.youtube-nocookie.com/embed/CzirbMvYnoo?autoplay=0&amp;rel=0&amp;loop=0&amp;controls=1&amp;cc_load_policy=0"
            })}
            ${MusicVideo({
                header: "World Building Through Sound",
                videoUrl: "https://www.youtube-nocookie.com/embed/Z9YWjR1wSuY?autoplay=0&amp;rel=0&amp;loop=0&amp;controls=1&amp;cc_load_policy=0"
            })}
            ${MusicVideo({
                header: "Sound Design and Implementation",
                videoUrl: "https://www.youtube-nocookie.com/embed/9y7ibVoiQm8?autoplay=0&amp;rel=0&amp;loop=0&amp;controls=1&amp;cc_load_policy=0"
            })}
        </div>
        <div class="music-examples__header">
            and some more music
        </div>
        <div class="music-examples__playlists" id="playlists">
            ${MusicPlaylist({
                header: 'Orchestral, Hybrid & Cinematic',
                playlistUrl:"https://play.reelcrafter.com/embed/f7d42cf8-7be1-4bfc-8a14-176e770b4f11"
            })}
            ${MusicPlaylist({
                header: 'Jazz, Funk & Groove',
                playlistUrl:"https://play.reelcrafter.com/embed/3d607bd9-0cc3-4d9a-8f0e-3e8076a7f72e"
            })}
            ${MusicPlaylist({
                header: 'Electronic, Synth & Beats',
                playlistUrl:"https://play.reelcrafter.com/embed/19fc6262-8f97-41af-802b-e2cdd93b49aa"
            })}
            ${MusicPlaylist({
                header: 'Rock & Indie',
                playlistUrl:"https://play.reelcrafter.com/embed/7ba5606c-20e3-41f2-856b-44adf394a876"
            })}
            ${MusicPlaylist({
                header: '8Bit, Chiptune & Retro',
                playlistUrl:"https://play.reelcrafter.com/embed/125691d7-b4a6-4cb5-abb8-b87ad2095cd6"
            })}
            ${MusicPlaylist({
                header: 'World',
                playlistUrl:"https://play.reelcrafter.com/embed/86548e33-2aa7-4073-b617-69a6c35c1464"
            })}
        </div>
    </div>
    `;
}
