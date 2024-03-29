import '../styles/Contact.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("moqgerbb");
    if (state.succeeded) {
        return <div className='feedback-form'>
            <div className="check" />
            <p className='feedback-text'>Din kontaktförfrågan har skickats!</p>
        </div>

    }

    return (
        <section className='contact' id="contact">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h1 className='contact-heading'>Kontaktförfrågan</h1>
                <hr className='contact-separator' />

                {state.errors ? (
                    <p className='validation-error'>{state?.errors.formErrors[0].message}</p>
                ) : <p className='validation' />}

                <div className="contact-section">
                    <label className="contact-label">
                        Namn
                        <input
                            className="contact-input"
                            id="name"
                            type="text"
                            name="name"
                            required
                        />
                        <ValidationError
                            className='validation-error'
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </label>

                    <label className="contact-label">
                        Email
                        <input
                            className="contact-input"
                            id="email"
                            type="email"
                            name="email"
                            required
                        />
                        <ValidationError
                            className='validation-error'
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </label>
                </div>

                <label className="contact-label">
                    Meddelande
                </label>
                <textarea
                    className="contact-textarea"
                    id="message"
                    name="message"
                    required
                />

                <ValidationError
                    className='validation-error'
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <button
                    className="contact-button"
                    type="submit"
                    disabled={state.submitting}
                >
                    Skicka
                </button>
            </form>
        </section>
    );
}

export default Contact;
