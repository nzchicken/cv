import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '22px',
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
        '.nav-link': {
            fontFamily: options.headerFontFamily.join(',')
        }
    })
})

const Geocities = {
    typography
}


export default Geocities
