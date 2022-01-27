// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation
const btnNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');
btnNav.addEventListener('click', () => {
    header.classList.toggle('nav-open');
});

// Enable smooth scroll for ALL browsers
const allLinks = document.querySelectorAll('a');
allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        
        // scroll back to top
        if(href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        // scroll to other links
        } else if(href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        };

        // close mobile navigation
        if(link.classList.contains('main-nav-link')) {
            header.classList.toggle("nav-open");
        };
    });
});

// make nav sticky on scroll
const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    console.log(entry);

    !entry.isIntersecting ? 
    header.classList.add("sticky") :
    header.classList.remove("sticky");
}, {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
});
observer.observe(sectionHero);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
