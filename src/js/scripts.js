var nav;
var navOffset;

document.addEventListener('DOMContentLoaded', function() {
    //DOM ready
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);
    nav = document.getElementsByTagName('nav')[0];
    onResize();
});


function onResize() {
    document.body.classList.remove('nav-docked');
    navOffset = nav.offsetTop; 
    onScroll();
}

function onScroll() {
    document.body.classList.toggle('nav-docked', navOffset <= window.pageYOffset);
}
