import React from 'react'
import 'normalize.css'
import PropTypes from 'prop-types'
import GlobalStyles from '../../styles/GlobalStyles'
import Navigation from '../Navigation/Navigation'
import Typography from '../../styles/Typography'

const Layout = ({ children }) => {
  console.log('%c [children]', 'color:orange; background:purple', children)
  return (
    <>
      <GlobalStyles />
      <Typography />
      <div>
        <Navigation />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
