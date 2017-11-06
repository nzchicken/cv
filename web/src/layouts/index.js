import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import { getTheme, themeList } from '../themes/index'

import Body from '../components/body'
import Header from '../components/header'
import Container from '../components/container'
import Nav from '../components/nav'

class CommonLayout extends React.Component {

    constructor() {
        super()
        this.state = { showMenu: false, themeName: 'default' }
        this.toggleMenu = this.toggleMenu.bind(this)
        this.setTheme = this.setTheme.bind(this)
    }

    toggleMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }

    setTheme(themeName) {
        this.setState({ themeName })
    }

    render() {
        const { children } = this.props
        const { showMenu, themeName } = this.state

        const theme = getTheme(themeName)

        return (
            <ThemeProvider theme={theme}>
                <Body>
                    <Helmet
                        title="Gatsby Default Starter"
                        meta={[
                            { name: 'description', content: 'Sample' },
                            { name: 'keywords', content: 'sample, something' }
                        ]}
                    />
                    <Nav show={showMenu} toggle={this.toggleMenu} themeList={themeList()} setTheme={this.setTheme}/>
                    <Container menuVisible={showMenu}>
                        <Header
                            fullName="Ben Naylor"
                            brief="Salesforce Dev, Consultant, Electronics enthusiast"
                            heading="Curriculum Vitae / Portfolio"
                        />
                        {children()}
                    </Container>
                    <style>{theme.typography.toString()}</style>
                    <style>{theme.customStyles || ''}</style>
                </Body>
            </ThemeProvider>
        )
    }
}

CommonLayout.propTypes = {
    children: PropTypes.func,
}

export default CommonLayout
