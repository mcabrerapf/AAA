import buildClass from "../helpers/buildClass.js";

export default function TextInput({
    id,
    label,
    value = "",
    onChange
}) {
    const className = buildClass(['text-input', id]);

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
        <input 
            id="${id}"
            type="text"
            value="${value}"
            onchange="${onChange}"
        />
    </div>
    `;
}
