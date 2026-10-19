(() => {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.type = 'button';
    button.setAttribute('aria-label', '回到页面顶部');
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>';
    document.body.append(button);

    const updateVisibility = () => {
        button.classList.toggle('is-visible', window.scrollY > 300);
    };

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();
})();
