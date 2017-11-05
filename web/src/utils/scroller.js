class Scroller {

    constructor() {
        this.animate = "requestAnimationFrame" in window;
        this.padding = 20;

        this.animationDuration = 200;
        this.animateScrollTick = this.animateScrollTick.bind(this);
    }

    scrollToHash(from, location) {
        const to = document
            .getElementById('anchor-' + location.hash.substring(1))
            .offsetTop + this.padding;

        this.animate
            ? this.animateScroll(from, to)
            : this.directScroll(from, to);
    }

    animateScroll(from, to) {
        const startTime = this.getNow();

        const documentHeight = this.getDocumentHeight();
        const windowHeight = this.getWindowHeight();

        const destinationOffsetToScroll = 
            Math.round(
                to > documentHeight - windowHeight
                ? documentHeight - windowHeight
                : to
            );

        this.animateScrollTick({from, to: destinationOffsetToScroll, startTime});
    }

    animateScrollTick({from, to, startTime}) {
        const { animationDuration } = this;
        
        const now = this.getNow();
        const time = Math.min(1, ((now - startTime) / animationDuration));
        const timeFunction = time * (2 - time);
        window.scroll(0, Math.ceil((timeFunction * (to - from)) + from));

        if (window.pageYOffset === to) return;

        requestAnimationFrame(() => this.animateScrollTick({from, to, startTime}));
    }

    directScroll(from, to) {
        window.scroll(0, to);
    }

    getNow() {
        return 'now' in window.performance
            ? performance.now()
            : new Date().getTime();
    }

    getDocumentHeight() {
        return Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
    }

    getWindowHeight() {
        return window.innerHeight
            || document.documentElement.clientHeight
            || document.getElementsByTagName('body')[0].clientHeight;
    }

}

export default Scroller;
