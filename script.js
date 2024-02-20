document.addEventListener("DOMContentLoaded", function() {
    let currentPage = 0;
    const pages = document.querySelectorAll('.page');
    const totalPages = pages.length;

    function scrollToPage(pageNumber) {
        pages[pageNumber].scrollIntoView({behavior: 'smooth'});
    }

    setInterval(function() {
        currentPage = (currentPage + 1) % totalPages;
        scrollToPage(currentPage);
    }, 5000);
});
