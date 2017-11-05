import React from 'react'
import styled from 'styled-components'

import { animJelly, animSwoosh } from '../utils/animations'
import { MenuIcon } from '../utils/icons'

const MenuButton = styled.button`
	position: fixed;
	top: 0;
	z-index: 1000;
	margin: 2em;
	padding: 0.2em;
	width: 2.5em;
	height: 2.5em;
	border: none;
    border-radius: 1.25em;
    background-color: ${props => props.theme.menuButtonBackground || 'transparent' };

    &:focus {
        outline: 0;
    }
`

const MenuWrap = styled.div`
	position: fixed;
	z-index: 999;
    background-color: ${props => props.theme.menuBackground || 'whitesmoke' };
	transition: width 0.3s, height 0.3s;
    width: ${props => props.show ? '280px' : '0'};
    height: ${props => props.show ? '390px' : '0'};
	font-size: 1.5em;
	top: 30px;
	left: 30px;
	transform-origin: 0% 0%;
    overflow: hidden;
    ${props => props.show ? 'animation: ' + animJelly + ' 0.8s linear forwards;' : '' }
`

const Menu = styled.nav`
	height: 100%;
    opacity: ${props => props.show ? '1' : '0'};
	font-size: 0.65em;
	text-align: left;
`

const LinkList = styled.div`
    padding: 1.0em 0;
    margin: 0em 0.75em;
    border-bottom: 2px solid ${props => props.theme.borderColor || 'black'};
    border-top: 2px solid ${props => props.theme.borderColor || 'black'};
    border-image: ${props => props.theme.borderImage || 'none'};
`

const Link = styled.a`
	display: block;
	margin: 0.25em 0;
	padding: 0.5em 1.5em;
    transform-origin: 100% 0%;
    font-size: 1em;
    overflow: hidden;
    text-decoration: none;
    font-family: ${props => props.theme.menuFont};
    color: ${props => props.theme.menuColor || 'inherit' };
    ${props => props.show ? 'animation: ' + animSwoosh + ' 0.6s linear both;' : '' }
    ${props => props.show ? 'animation-delay: 0.2s;' : '' }
    

    &:hover, &:focus {
        color: #64697d;
    }
`

const IconList = styled.div`
    text-align: right;
    padding: 1.2em 1em;
`

const Icon = styled.a`
	font-size: 1.5em;
	margin-left: 0.25em;
	color: rgba(125,129,148,0.5);
`

const Nav = ({ show, toggle, themeList, setTheme }) => (
    <div>
        <MenuButton show={show} onClick={toggle}><MenuIcon /></MenuButton>
        <MenuWrap show={show}>
            <Menu show={show}>
                <IconList>
                    {themeList.map(theme => {
                        return <Icon key={theme} onClick={()=>setTheme(theme)}>I</Icon> 
                    })}
                </IconList>
                <LinkList>
                    <Link show={show} href="#introduction">Introduction</Link>
                    <Link show={show} href="#experience">Experience</Link>
                    <Link show={show} href="#work">Work</Link>
                    <Link show={show} href="#contact">Contact</Link>
                </LinkList>
            </Menu>
        </MenuWrap>
    </div>
)

export default Nav;
