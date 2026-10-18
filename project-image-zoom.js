(() => {
    const images = document.querySelectorAll([
        '.projects-section .md-card-media img',
        '.selected-case-visual img',
        '.agentz-product-visual img',
        '.sg-cover img',
        '.cli-cover img',
        '.proc-cover img',
    ].join(', '));
    if (!images.length || typeof HTMLDialogElement === 'undefined') return;

    const dialog = document.createElement('dialog');
    const enlarged = document.createElement('img');
    const close = document.createElement('button');
    dialog.className = 'project-image-dialog';
    dialog.setAttribute('aria-label', '案例图片大图预览');
    close.type = 'button';
    close.setAttribute('aria-label', '关闭大图');
    close.innerHTML = '<span aria-hidden="true">×</span><span>关闭</span>';
    dialog.append(close, enlarged);
    document.body.append(dialog);

    let trigger = null;
    const openImage = (image) => {
        trigger = image;
        enlarged.src = image.currentSrc || image.src;
        enlarged.alt = image.alt;
        dialog.showModal();
        close.focus();
    };

    images.forEach((image) => {
        image.classList.add('project-zoom-image');
        image.tabIndex = 0;
        image.setAttribute('role', 'button');
        image.setAttribute('aria-haspopup', 'dialog');
        image.setAttribute('aria-label', `${image.alt || '案例图片'}，点击查看大图`);
        image.addEventListener('click', () => openImage(image));
        image.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openImage(image);
            }
        });
    });

    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
        enlarged.removeAttribute('src');
        trigger?.focus();
    });
})();
