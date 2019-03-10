import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

lincolnTheme.bodyColor = '#323232'
lincolnTheme.overrideThemeStyles = () => ({
  'p + ul': {
    'margin-top': '-1rem'
  },
  li: {
    'margin-bottom': '0.5rem'
  }
})

const typography = new Typography(lincolnTheme);
export default typography;
