// pi-auth.js
(function () {
  // Finds the button and message area (if present)
  function $(sel) { return document.querySelector(sel); }
  const btn = $('#pi-signin') || document.querySelector('[data-pi-signin]');
  const msg = $('#pi-msg');

  function say(t) { if (msg) msg.textContent = t; }

  function isPiBrowser() {
    return /PiBrowser/i.test(navigator.userAgent || '');
  }

  async function initAndAuth() {
    if (!isPiBrowser()) {
      say('Open this site in Pi Browser to sign in.');
      alert('Open this site in Pi Browser to sign in.');
      return;
    }
    if (!window.Pi) {
      // Pi SDK script not loaded yet
      say('Pi SDK not loaded. Check that the <script src="https://sdk.minepi.com/pi-sdk.js"> tag is in your HTML.');
      return;
    }
    try {
      // Initialize SDK
      Pi.init({ version: "2.0" });
      // Request minimal scopes (add more later if needed: 'payments','wallet_address')
      const scopes = ['username'];
      const authResult = await Pi.authenticate(scopes, function onIncompletePaymentFound(payment) {
        console.log('Incomplete payment found:', payment);
      });
      console.log('Pi auth success:', authResult);
      say('Signed in as @' + (authResult?.user?.username || 'unknown'));
      alert('Signed in as @' + (authResult?.user?.username || 'unknown'));
    } catch (err) {
      console.error('Pi auth failed:', err);
      say('Sign-in cancelled or failed.');
      alert('Sign-in cancelled or failed.');
    }
  }

  if (btn) {
    btn.addEventListener('click', initAndAuth);
  } else {
    console.warn('pi-auth.js: No #pi-signin button found. Add id="pi-signin" to your sign-in button.');
  }
})();
