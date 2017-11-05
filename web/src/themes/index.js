import Default from './default' 
import Geocities from './geocities'

export const themeList = () => [ 'default', 'geocities' ]

export const getTheme = themeName => {
    switch (themeName) {
        case 'default':
            return Default
        case 'geocities':
            return Geocities
        default:
            return Default
    }
}
