import React from 'react'
import background from '../assets/desktop/bg-pattern-header.svg'
import logo from '../assets/desktop/logo.svg'
import sun from '../assets/desktop/icon-sun.svg'
import moon from '../assets/desktop/icon-moon.svg'

const Header = () => {
  return (
    <header>
      <img class="header-bg" src={background} />
      <div class="container">
        <img src={logo} alt="logo" />
        <div class="themes">
          <img src={sun} alt="sun" />

          <input type="checkbox" id="switch" /><label
            class="switch-label"
            for="switch"
            >Toggle</label>
          

          <img class="moon" src={moon} alt="moon" />
        </div>
      </div>
    </header>
  )
}

export default Header
