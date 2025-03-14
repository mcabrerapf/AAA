import TextInput from "./TextInput.js";
import TextArea from "./TextArea.js";
import Button from "./Button.js";

export default function ContactForm() {
    const formContainer = document.createElement("div");
    formContainer.className = 'contact-form';
    const formHeader = document.createElement('div');
    const form = document.createElement("form");
    formHeader.className = 'contact-form__header';
    formHeader.innerHTML = `
        <p>Work with us!</p>
        <p class="contact-form__header__required-message">
            *all fields are required
        </p>
    `;

    form.id = 'contactForm';
    form.className = 'contact-form__form';
    form.innerHTML = `
        <div class="contact-form__form__name-fields">
            ${TextInput({
                id: "formFirstName",
                label: 'First Name'
            })}
            ${TextInput({
                id: "formLastName",
                label: 'Last Name'
            })}
        </div>
        ${TextInput({
            id: "formEmail",
            label: 'Email'
        })}
        ${TextInput({
            id: "formSubject",
            label: 'Subject'
        })}
        ${TextArea({
            id: "formMessage",
            label: 'Message'
        })}
        ${Button({
            id: 'formSubmitButton',
            disabled: true,
            text: "Submit",
        })}
    `;
    formContainer.appendChild(formHeader);
    formContainer.appendChild(form);

    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("contactForm");
        const fields = {
            firstNameField: document.getElementById("formFirstName"),
            lastNameField: document.getElementById("formLastName"),
            emailField: document.getElementById("formEmail"),
            subjectField: document.getElementById("formSubject"),
            messageField: document.getElementById("formMessage")
        }
        const values = {};
        const fieldKeys = Object.keys(fields);
        fieldKeys.map((fieldKey) => {
            fields[fieldKey].addEventListener("change", (event) => {
                values[fieldKey] = event.target.value;
                const validFields = fieldKeys.map(fKey=> values[fKey]).filter(Boolean);
                if(validFields.length === fieldKeys.length) {
                    document.getElementById("formSubmitButton").disabled = false;
                } else {
                    document.getElementById("formSubmitButton").disabled = true;
                }
            });
        })
        
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            formHeader.style.display = "none";
            form.style.display = "none";
            const successMessage = document.createElement("div");
            successMessage.className = "contact-form__succes-message"
            successMessage.innerHTML = `
                <p>
                    Thanks for getting in touch, we will be with you asap! ✅
                </p>
            `;
            formContainer.appendChild(successMessage);
            
            await fetch("https://afternoon-gorge-77049-a1de8dd15ce4.herokuapp.com/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName: values.firstNameField,
                    lastName: values.lastNameField,
                    email:values.emailField,
                    subject: `[WORK] ${values.subjectField}`,
                    message: values.messageField
                })
                })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err);
                })
        });
    });
    return formContainer;
}