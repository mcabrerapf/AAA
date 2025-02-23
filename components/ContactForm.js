import TextInput from "./TextInput.js";
import TextArea from "./TextArea.js";
import Button from "./Button.js";

export default function ContactForm() {
    return `
    <div class="contact-form">
        <div class="contact-form__header">
            <p>Work with us!</p>
            <p class="contact-form__header__required-message">
                *all fields are required
            </p>
        </div>
        <form class="contact-form__form">
            <div class="contact-form__form__name-fields">
            ${TextInput({
                id: "firstName",
                label: 'First Name'
            })}
            ${TextInput({
                id: "lastName",
                label: 'Last Name'
            })}
                    </div>
            ${TextInput({
                id: "email",
                label: 'Email'
            })}
            ${TextInput({
                id: "subject",
                label: 'Subject'
            })}
            ${TextArea({
                id: "message",
                label: 'Message'
            })}
            ${Button({
                text: "Submit"
            })}
        </form>
    </div>
    `;
}
