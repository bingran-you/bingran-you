function createContactModal() {
  const modal = document.createElement('div');
  modal.id = 'contact-modal';
  modal.className = 'contact-modal';
  modal.innerHTML = `
    <div class="contact-modal-dialog">
      <button class="contact-modal-close" aria-label="Close">&times;</button>
      <h2 class="contact-modal-title">Get in Touch</h2>
      <p class="contact-modal-subtitle">If you'd like to join the team, partner with us, or have any other general inquiries, please reach us at: <a href="mailto:info@generalistai.com">info@generalistai.com</a></p>
      <p class="contact-modal-subtitle">If you have a particular use case for robots, please include links to videos of the tasks or processes you're interested in automating.</p>
      <form id="contact-form" class="contact-form" novalidate>
        <label class="contact-label">
          <span>Name <span class="contact-required">*</span></span>
          <input type="text" name="name" required autocomplete="name">
        </label>
        <label class="contact-label">
          <span>Email <span class="contact-required">*</span></span>
          <input type="email" name="email" required autocomplete="email">
        </label>
        <label class="contact-label">
          <span>Phone</span>
          <input type="tel" name="phone" autocomplete="tel">
        </label>
        <label class="contact-label">
          <span>Company <span class="contact-required">*</span></span>
          <input type="text" name="company" required autocomplete="organization">
        </label>
        <label class="contact-label">
          <span>Video / links of tasks you want robots to do</span>
          <textarea name="video_url" rows="3" placeholder="https://..."></textarea>
        </label>
        <label class="contact-label">
          <span>Message <span class="contact-required">*</span></span>
          <textarea name="message" rows="4" required></textarea>
        </label>
        <button type="submit" class="contact-submit">Submit</button>
        <p class="contact-status" id="contact-status"></p>
      </form>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.contact-modal-close');
  const form = modal.querySelector('#contact-form');
  const status = modal.querySelector('#contact-status');

  function close() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) close();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.contact-submit');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    status.textContent = '';
    status.className = 'contact-status';

    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        status.textContent = 'Thanks! We\'ll be in touch soon.';
        status.classList.add('success');
        form.reset();
      } else {
        status.textContent = result.error || 'Something went wrong.';
        status.classList.add('error');
      }
    } catch {
      status.textContent = 'Network error. Please try again.';
      status.classList.add('error');
    }

    btn.disabled = false;
    btn.textContent = 'Submit';
  });

  return modal;
}

const contactModal = createContactModal();

window.openContactPanel = function () {
  contactModal.scrollTop = 0;
  contactModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};
