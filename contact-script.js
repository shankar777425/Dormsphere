/* =====================================================
   DormSphere - Contact Page Script
   Handles: mobile nav toggle, form validation, FAQ accordion
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ================= MOBILE NAV TOGGLE ================= */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        document.addEventListener('click', (event) => {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    /* ================= CONTACT FORM VALIDATION ================= */
    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (form) {
        const fields = {
            fullName: {
                input: document.getElementById('fullName'),
                error: document.getElementById('fullNameError'),
                validate: (value) => value.trim().length >= 2 ? '' : 'Please enter your full name.'
            },
            email: {
                input: document.getElementById('email'),
                error: document.getElementById('emailError'),
                validate: (value) => {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailPattern.test(value.trim()) ? '' : 'Please enter a valid email address.';
                }
            },
            subject: {
                input: document.getElementById('subject'),
                error: document.getElementById('subjectError'),
                validate: (value) => value ? '' : 'Please choose a subject.'
            },
            message: {
                input: document.getElementById('message'),
                error: document.getElementById('messageError'),
                validate: (value) => value.trim().length >= 10 ? '' : 'Message should be at least 10 characters.'
            }
        };

        const validateField = (key) => {
            const field = fields[key];
            const errorText = field.validate(field.input.value);

            field.error.textContent = errorText;
            field.input.classList.toggle('invalid', !!errorText);

            return errorText === '';
        };

        // Validate on blur for immediate feedback
        Object.keys(fields).forEach((key) => {
            fields[key].input.addEventListener('blur', () => validateField(key));
            fields[key].input.addEventListener('input', () => {
                if (fields[key].input.classList.contains('invalid')) {
                    validateField(key);
                }
            });
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let isFormValid = true;
            Object.keys(fields).forEach((key) => {
                const valid = validateField(key);
                if (!valid) isFormValid = false;
            });

            if (!isFormValid) {
                formSuccess.classList.remove('visible');
                return;
            }

            // No backend wired up yet — swap this block for a real fetch()/API call
            // when a server endpoint is available.
            formSuccess.classList.add('visible');
            form.reset();

            Object.keys(fields).forEach((key) => {
                fields[key].input.classList.remove('invalid');
                fields[key].error.textContent = '';
            });

            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

    /* ================= FAQ ACCORDION ================= */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all other items (single-open accordion)
            faqItems.forEach((otherItem) => otherItem.classList.remove('open'));

            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

});
