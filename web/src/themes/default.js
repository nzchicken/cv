import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '22px',
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
        '*': {
            color: '#323232'
        }
    })
})

console.log(typography);

const Default = {
    typography,
    backgroundColor: 'aliceblue',
    menuBackground: 'white',
    borderColor: '#adceea',
    menuFont: typography.options.headerFontFamily.join(',')
}

export default Default
