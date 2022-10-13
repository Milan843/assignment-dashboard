import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

import './_header.scss'

function Header() {
  return (
    <div className='header'>
    <div className='header__profile-pic'>
    <FontAwesomeIcon
        icon={faUser}
      />
    </div>
    </div>
  )
}

export default Header