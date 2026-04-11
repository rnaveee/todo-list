export function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer-container");

    const footerTitle = document.createElement("div");
    footerTitle.classList.add("footer-title");
    footerTitle.textContent = "More about me!";

    const links = document.createElement("div");
    links.classList.add("footer-links");

    const socialLinks = [
        { label: "GitHub", href: "https://github.com/rnaveee" },
        { label: "Instagram", href: "https://www.instagram.com/rnave9/" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/ryan-nave-36bb62333" }
    ];

    for (const socialLink of socialLinks) {
        const link = document.createElement("a");
        link.classList.add("footer-link");
        link.href = socialLink.href;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = socialLink.label;
        links.appendChild(link);
    }

    footer.append(footerTitle, links);

    return footer;
}
