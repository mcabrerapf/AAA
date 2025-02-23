export default function buildClass(classes) {
    if (!classes || !classes.length) return "";
    return classes.filter(Boolean).join(" ");
}