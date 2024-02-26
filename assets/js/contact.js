const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kbx3l7j', 'template_jdoppji', '#contact-form', '23XwaHA7MdPAYH2Sn')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅';
            // Hide message after five seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
            // Clear input fields
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            contactMessage.textContent = 'Message not sent (service error) ❌';
        });
};

contactForm.addEventListener('submit', sendEmail);
