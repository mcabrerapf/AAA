import { buildClass } from '../helpers/index.js';

export default function TextArea({
    id,
    label,
    value = "",
    onChange = ""
}) {
    const className = buildClass(['text-area', id]);
    return `
    <div
        class="${className}"
    >
        ${!!label &&
            `<label
                for="${id}"
            >
                ${label}
            </label>`
            }
        <textarea 
            id="${id}"
            value="${value}"
            onchange="${onChange}"
        >
        </textarea>
    </div>
    `;
}
