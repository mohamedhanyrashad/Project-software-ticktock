document.addEventListener('DOMContentLoaded', () => {
    // Simple navigation logic

    // Sign In Page (index.html) Buttons
    const signInBtn = document.querySelector('.btn-signin');
    const registerBtn = document.querySelector('.btn-register');

    if (signInBtn) {
        signInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Simulate login success -> Go to Bag
            window.location.href = 'bag.html';
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Simulate registration success -> Go to Bag
            window.location.href = 'bag.html';
        });
    }

    // Bag Page (bag.html) Buttons
    const buyNowBtns = document.querySelectorAll('.btn-buy-now');
    buyNowBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'checkout.html';
        });
    });

    // Checkout Page (checkout.html) Form/Buttons
    // In checkout.html, the button is outside the form but likely acts as submit or link
    const checkoutButtons = document.querySelectorAll('.btn');
    // We need to target the "BUY NOW" buttons specifically on checkout.html
    // A simple check is to see if we are on checkout.html
    if (window.location.pathname.includes('checkout.html')) {
        checkoutButtons.forEach(btn => {
            if (btn.textContent.includes('BUY NOW')) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Proceed to Billing
                    window.location.href = 'billing.html';
                });
            }
        });
    }

    // Billing Page (billing.html) Form/Buttons
    const paymentForm = document.querySelector('#payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Go to Confirmation
            window.location.href = 'confirmation.html';
        });
    }
});
