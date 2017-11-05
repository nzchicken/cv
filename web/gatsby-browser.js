import Scroller from './src/utils/scroller'

const scroll = new Scroller();

exports.onRouteUpdate = ({ location }) => {
    const from = window.scrollY;
    window.setTimeout(() => scroll.scrollToHash(from, location), 0)
};
