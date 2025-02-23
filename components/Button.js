export default function Button({ text, onClick }) {
    return `
    <button 
        class="button" 
        onclick="${onClick}"
        >
    ${text}
    </button>
    `;
}
