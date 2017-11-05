import Typography from 'typography'
import stars from '../img/stars.png'


const typography = new Typography({
    baseFontSize: '22px',
    headerFontFamily: ['Comic Sans MS'],
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
        '*': {
            color: 'white'
        },
        'h1': {
            color: 'hotpink'
        },
        'h2': {
            color: 'orange'
        },
        'h3,h4,h5': {
            color: '#00FF00'
        },
        'a': {
            color: 'blue'
        }
    })
})

const Geocities = {
    typography,
    backgroundImage: stars,
    menuButtonBackground: 'whitesmoke',
    menuBackground: 'whitesmoke',
    menuFont: typography.options.headerFontFamily.join(','),
    menuColor: 'darkgray',
    borderImage: 'linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet, red) 100% 0%'
}


export default Geocities
