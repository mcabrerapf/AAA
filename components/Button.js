export default function Button({ id, disabled, text, onClick = "" }) {
    return `
    <button 
        id="${id}"
        class="button"
        ${disabled ? 'disabled':''}
        onclick="${onClick}"
        >
        ${text}
    </button>
    `;
}
