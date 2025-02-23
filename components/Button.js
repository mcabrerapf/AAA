export default function Button(label, onClick) {
    return `<button class="button" onclick="${onClick}">${label}</button>`;
}
