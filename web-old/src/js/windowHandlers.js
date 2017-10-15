class WindowHandlers {
    
    constructor() {
        this.nav = null;
        this.navOffset = null;

        this.onResize = this.onResize.bind(this);
    }

    registerHandlers() {
        this.nav = document.getElementsByTagName('nav')[0];
        window.addEventListener('resize', this.onResize.bind(this));
        window.addEventListener('scroll', this.onScroll.bind(this));
        this.onResize();
    }

    onResize() {
        document.body.classList.remove('nav-docked');
        this.navOffset = this.nav.offsetTop; 
        this.onScroll();
    }

    onScroll() {
        document.body.classList.toggle('nav-docked', this.navOffset <= window.pageYOffset);
    }
}

export default WindowHandlers;
