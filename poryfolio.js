document.addEventListener('DOMContentLoaded', () => {
    const sectionIndicator = document.getElementById('section-indicator');
    const worksSection = document.getElementById('WORKS');
    const skilsSection = document.getElementById('SKILS');
    const aboutSection = document.getElementById('ABOUT');
    const otherSection = document.getElementById('OTHER');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const worksOffsetTop = worksSection.offsetTop;
        const skilsOffsetTop = skilsSection.offsetTop;
        const aboutOffsetTop = aboutSection.offsetTop;
        const otherOffsetTop = otherSection.offsetTop;

        if (scrollY >= worksOffsetTop && scrollY < skilsOffsetTop) {
            sectionIndicator.style.display = 'block';
            sectionIndicator.textContent = 'WORKS';
        } else if (scrollY >= skilsOffsetTop && scrollY < aboutOffsetTop) {
            sectionIndicator.style.display = 'block';
            sectionIndicator.textContent = 'SKILS';
        } else if (scrollY >= aboutOffsetTop && scrollY < otherOffsetTop) {
            sectionIndicator.style.display = 'block';
            sectionIndicator.textContent = 'ABOUT';
        } else if (scrollY >= otherOffsetTop) {
            sectionIndicator.style.display = 'block';
            sectionIndicator.textContent = 'OTHER';
        } else {
            sectionIndicator.style.display = 'none';
        }
    };

    window.addEventListener('scroll', handleScroll);
});
