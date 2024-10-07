document.getElementById('search').addEventListener('keyup', function () {
    let filter = this.value.toUpperCase();
    let courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(function (card) {
        let title = card.querySelector('h2').innerText;
        if (title.toUpperCase().indexOf(filter) > -1) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
