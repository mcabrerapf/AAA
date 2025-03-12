import { buildClass, getDevice } from "../helpers/index.js";

export default function GunterBio() {
    const device = getDevice();
    const className = buildClass(['bio', 'gunter', device])
    
    return `
    <div
        id="gunter-bio"
        class="${className}" 
    >
        <div class="bio__image">
           ${device === 'mobile' ? 
            ` 
            <div class="bio__image__header">
                Gunter
            </div>
            `
            :
            ''
            }
            <img src="../assets/gunter-bio.jpg"/>
        </div>
        <div class="bio__description">
            <p>
                Hi, I'm Gunter! I'm a
                <strong>Composer</strong>
                ,
                <strong>Producer</strong>
                and 
                <strong>Sound Designer</strong>
                from Lima, Perú.
            </p>
            <p>
                I like to think of my sound as defined by unexpected moments, pop vocals and synthesizers. During my career I had the privilege to share the stage as an
                <strong> arranger </strong>
                and
                <strong> music director </strong>
                with artists from all over the world including 
                <strong> Latin Grammy </strong>
                award winners such as Susana Baca (Perú), Oscar Stagnaro (Perú) and Totó la Momposina (Colombia). As a musician I performed in legendary venues such as
                <strong> Palau de la Música </strong>
                (Barcelona),
                <strong> Paramount Theatre </strong>
                (Boston), and
                <strong> Estadio de San Marcos </strong>
                (Lima) where I opened for the legendary band
                <strong> The Cure </strong>
                back in 2023.
            </p>
            <p>
                My work as a music producer for media and advertising led me to score more than three hundred projects for major brands such as
                <strong> Coca Cola</strong>
                ,
                <strong> Oreo</strong>
                ,
                <strong> Huawei</strong>
                among several others. I also won the
                <strong> Best Original Music </strong>
                award twice granted by the National Association of Advertisers of Perú for my compositions for Huawei - Proyecto Zeus (2018) and Panamericanos Lima 2019 (2019).
            </p>
        </div>
    </div>
    `;
}
