import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

lincolnTheme.bodyColor = '#323232'
//lincolnTheme.overrideStyles = ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    //a: {
        //color: '#638fb9'
    //},
    //h2: {
        //color: '#638fb9'
    //}
//})

const typography = new Typography(lincolnTheme);
export default typography;

//const Default = {
    //typography,
    //primaryColor: '#638FB9',
    //secondaryColor: '#deebf8',
    //backgroundColor: '#EAF3FC',
    //menuBackground: 'white',
    //menuFont: typography.options.headerFontFamily.join(','),
    //customStyles: `
        //a:hover {
            //color: inherit;
        //}
    //`
//}

////export default Default
