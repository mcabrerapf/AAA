import {
    Button,
    Header
} from "./components";

function App() {
    document.getElementById("app").innerHTML = `
        ${Header()}
        <main>
            <p>Welcome to my Vanilla JS site!</p>
            ${Button("Click Me", "alert('Clicked!')")}
        </main>
    `;
}

App();