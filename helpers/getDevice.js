export default function getDeviceType() {
    let width;

    try {
        if (window.top !== window.self) {
            width = window.top.innerWidth;
        } else {
            width = window.innerWidth;
        }
    } catch (e) {
        width = window.innerWidth;
    }

    if (width < 768) {
        return "mobile";
    } else if (width < 1024) {
        return "tablet";
    } else {
        return "desktop";
    }
}