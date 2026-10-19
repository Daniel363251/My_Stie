(() => {
    const paths = {
        '↗': '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
        '→': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
        '←': '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
        '↓': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
        '↑': '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>',
        '↘': '<path d="m7 7 10 10"/><path d="M17 10v7h-7"/>',
    };
    const svgFor = (glyph) => `<svg class="icon-inline" viewBox="0 0 24 24" aria-hidden="true">${paths[glyph]}</svg>`;

    document.querySelectorAll('span[aria-hidden="true"], i[aria-hidden="true"]').forEach((element) => {
        const glyph = element.textContent.trim();
        if (!paths[glyph]) return;
        element.outerHTML = svgFor(glyph);
    });
})();
