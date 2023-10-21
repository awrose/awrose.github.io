document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('body > div > section');
    console.log(sections);
    let navLinks = document.querySelectorAll('#navbar a');  

    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        let rect = section.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom >= 0) {
            for (let link of navLinks) {
                link.classList.remove('active');
            }
            document.querySelector(`#navbar a[href="#${section.id}"]`).classList.add('active');
        }
    }
});


document.querySelectorAll('.point').forEach(point => {
    point.addEventListener('click', function() {
        document.getElementById('modal-content').innerText = this.getAttribute('data-info');
        document.getElementById('modal').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});
