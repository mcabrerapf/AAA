import { buildClass, getDevice } from "../helpers/index.js";

export default function ArijunaBio() {
    const device = getDevice();
    const className = buildClass(['bio', 'arijuna', device])
    
    return `
    <div 
        class="${className}" 
        id="arijuna-bio"
    >
        <div class="bio__image">
           ${device === 'mobile' ? 
            ` 
            <div class="bio__image__header">
                Arijuna
            </div>
            `
            :
            ''
            }
            <img src="../assets/arijuna.jpg"/>
        </div>
        <div class="bio__description">
            <p>
                Hi, I'm Arijuna! I'm a
                <strong>Musican</strong>
                ,
                <strong>Composer</strong>
                and 
                <strong>Programmer</strong>
                from Neiva, Colombia.
            </p>
            <p>
               I do stuff sometimes
            </p>
        </div>
    </div>
    `;
}
