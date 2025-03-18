export default function getDeviceType() {
    // let width;
    const width = window.innerWidth;
    console.log({width});
    if (width <= 1000) {
        return "mobile";
    } else if (width <= 1024) {
        return "tablet";
    } else {
        return "desktop";
    }

    // try {
    //     if (window.top !== window.self) {
    //         width = window.top.innerWidth;
    //     } else {
    //         width = window.innerWidth;
    //     }
    // } catch (e) {
    //     width = window.innerWidth;
    // }

    // if (width < 768) {
    //     return "mobile";
    // } else if (width < 1024) {
    //     return "tablet";
    // } else {
    //     return "desktop";
    // }
}