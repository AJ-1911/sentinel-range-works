(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.faq-item').classList.toggle('open'));
  });

  const cfg = window.SRW_CONFIG || {};
  document.querySelectorAll('[data-config="serviceArea"]').forEach(el => el.textContent = cfg.serviceArea || 'Florida');
  document.querySelectorAll('[data-config="contactEmail"]').forEach(el => {
    if (cfg.contactEmail) {
      el.textContent = cfg.contactEmail;
      if (el.tagName === 'A') el.href = `mailto:${cfg.contactEmail}`;
    } else {
      el.textContent = 'Business email to be added before launch';
      if (el.tagName === 'A') el.removeAttribute('href');
    }
  });

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!cfg.contactEmail) {
        status.textContent = 'The site is ready, but the business contact email still needs to be added in assets/js/config.js before this form can send.';
        return;
      }
      const data = new FormData(form);
      const subject = encodeURIComponent(`SRW Training Inquiry: ${data.get('course') || 'General'}`);
      const body = encodeURIComponent([
        `Name: ${data.get('name') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Phone: ${data.get('phone') || ''}`,
        `Interest: ${data.get('course') || ''}`,
        '',
        data.get('message') || ''
      ].join('\n'));
      window.location.href = `mailto:${cfg.contactEmail}?subject=${subject}&body=${body}`;
      status.textContent = 'Your email app should open with the inquiry prepared.';
    });
  }

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
