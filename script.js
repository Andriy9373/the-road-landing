const container = document.querySelector('.container');

document.querySelector('.open-navbar-icon').addEventListener('click', () => {
    container.classList.add('change');
});

document.querySelector('.close-navbar-icon').addEventListener('click', () => {
    container.classList.remove('change');
});

document.querySelector('.nav-list').addEventListener('click', () => {
    container.classList.remove('change');
});

const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];

document.querySelectorAll('.nav-link').forEach((link, idx) => {
    link.style.backgroundColor = `${colors[idx]}`;
})

document.querySelectorAll('.navigation-button').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.classList.toggle('change');
    })
})