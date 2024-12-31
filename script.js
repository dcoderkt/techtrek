document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Tech Trek!');
});

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const tutorialArticles = document.querySelectorAll('.tutorials article');

    searchInput.addEventListener('keyup', () => {
        const searchValue = searchInput.value.toLowerCase();

        tutorialArticles.forEach(article => {
            const title = article.querySelector('h3').textContent.toLowerCase();
            const description = article.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchValue) || description.includes(searchValue)) {
                article.style.display = '';
            } else {
                article.style.display = 'none';
            }
        });
    });
});
