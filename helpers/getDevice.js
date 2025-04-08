export default function getDeviceType() {
    const width = window.innerWidth;
    console.log({width});
    if (width <= 900) {
        return "mobile";
    } else if (width <= 1024) {
        return "tablet";
    } else {
        return "desktop";
    }
}