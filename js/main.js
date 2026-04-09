

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successBanner = document.getElementById('successBanner');
    const radioContainers = document.querySelectorAll('.custom-radio');

    radioContainers.forEach(container => {
        const input = container.querySelector('input');
        
        container.addEventListener('click', () => {
            radioContainers.forEach(c => c.classList.remove('active'));
            container.classList.add('active');
            input.checked = true;
        });
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isFormValid = true;

        resetValidation();
        const textFields = ['firstName', 'lastName', 'message'];
        textFields.forEach(id => {
            const field = document.getElementById(id);
            if (!field.value.trim()) {
                showError(id);
                isFormValid = false;
            }
        });

        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            showError('email');
            isFormValid = false;
        }
        const querySelected = document.querySelector('input[name="queryType"]:checked');
        if (!querySelected) {
            showError('queryTypeError'); 
            isFormValid = false;
        }
        const consent = document.getElementById('consent');
        if (!consent.checked) {
            showError('consent');
            isFormValid = false;
        }

        if (isFormValid) {
            successBanner.style.display = 'block';
            form.reset();
            radioContainers.forEach(c => c.classList.remove('active'));
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                successBanner.style.display = 'none';
            }, 5000);
        }
    });

    function showError(idOrElement) {
        const element = document.getElementById(idOrElement);
        if (element) {

            const container = element.closest('.input-group');
            if (container) {
                container.classList.add('input-error');
            }
        }
    }
    function resetValidation() {
        successBanner.style.display = 'none';
        const allGroups = document.querySelectorAll('.input-group');
        allGroups.forEach(group => {
            group.classList.remove('input-error');
        });
    }
});