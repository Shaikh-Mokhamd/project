let mainPost = document.getElementById('main-post');
let first = document.getElementById('post-1-tab');
let second = document.getElementById('post-2-tab');
let third = document.getElementById('post-3-tab');
let fourth = document.getElementById('post-4-tab');

first.onclick = activator;
second.onclick = activator;
third.onclick = activator;
fourth.onclick = activator;

first.addEventListener('click', newsToggle);
second.addEventListener('click', newsToggle);
third.addEventListener('click', newsToggle);
fourth.addEventListener('click', newsToggle);

function activator() {
    first.classList.remove('active');
    second.classList.remove('active');
    third.classList.remove('active');
    fourth.classList.remove('active');
    this.classList.add('active');
}

function newsToggle() {
    let src = this.firstElementChild.firstElementChild.firstElementChild.src;
    let title = this.lastElementChild.innerHTML;
   mainPost.firstElementChild.style.backgroundImage = `url(${src})`;
   mainPost.firstElementChild.innerHTML = title;
}



