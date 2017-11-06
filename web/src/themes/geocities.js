import Typography from 'typography'
import { keyframes } from 'styled-components'
import stars from '../img/stars.png'
import uc from '../img/ucbanner.gif'
import uc2 from '../img/uc.gif'

const fireAnimation = keyframes`
    0% {
      text-shadow: 0 0 10px #fefcc9,
                   5px -5px 15px #feec85,
                   -10px -10px 20px #ffae34,
                   10px -20px 25px #ec760c,
                   -10px -30px 30px #cd4606,
                   0 -40px 35px #973716,
                   5px -45px 40px #451b0e;
    }
    100% {
      text-shadow: 0 0 10px #fefcc9,
                   5px -5px 15px #fefcc9,
                   -10px -10px 20px #feec85,
                   11px -21px 30px #ffae34,
                   -11px -29px 25px #ec760c,
                   0 -41px 40px #cd4606,
                   5px -45px 40px  #973716;
    }
}`;

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
            color: 'red'
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
    menuBackground: 'lightseagreen',
    menuFont: typography.options.headerFontFamily.join(','),
    menuColor: 'darkslategray',
    borderImage: 'linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet, red) 100% 0%',
    customStyles: `
        h1 { 
            position: relative;
        }
        h1:before {
            content: '';
            background-image: url(${uc2});
            height: 266px;
            width: 266px;
            position: absolute;
            left: 700px;
            top: -30px;
        }
        h1:after {
             content: '';
             background-image: url(${uc});
             height: 125px;
             width: 400px;
             position: absolute;
             left: 300px;
             top: 125px;
        }
        h2 {
            animation: ${fireAnimation} 1s ease-in-out infinite alternate;
        }
    `
}


export default Geocities
