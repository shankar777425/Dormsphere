function showSection(sectionId, element) {

    // 1. Hide all page views (changed from .section to .page)
    let pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = "none";
    });

    // 2. Show the specific selected page by its ID
    const activePage = document.getElementById(sectionId);
    if (activePage) {
        activePage.style.display = "block";
    }

    // 3. Target the correct anchor tag class links in your navbar panel
    let menuItems = document.querySelectorAll(".sidebar-panel .nav-links .link-item");
    menuItems.forEach(item => {
        item.classList.remove("active");
    });

    // 4. Safely apply the active glow style to the clicked item
    if (element) {
        element.classList.add("active");
    }
}