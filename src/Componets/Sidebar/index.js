import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullhorn, faHome,faImage,faUserGroup,faMagnifyingGlass,faFile,faHeadset } from "@fortawesome/free-solid-svg-icons"
import logo from '../../Assets/logo192.png'

import './_sidebar.scss'

function Sidebar() {
  const allTabsData = [{
    icon: faHome,
    name: "Home"
  },
  {
    icon: faBullhorn,
    name: "Campaigns"
  },
  {
    icon: faImage,
    name: "Content"
  }
    ,
  {
    icon: faUserGroup,
    name: "Influencers"
  }
    ,
  {
    icon: faMagnifyingGlass,
    name: "Discovery"
  }
    ,
  {
    icon: faFile,
    name: "Reports"
  }]

  const RenderTab = ({ icon, name }) => {
    return <div className='sidebar__tab'>
      <FontAwesomeIcon
        icon={icon}
      />
      {name}
    </div>
  }

  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <img src={logo} alt='react-logo'/>
        Logo
      </div>
      {allTabsData.map((value, index) => <RenderTab key={`tab-${index}`} icon={value.icon} name={value.name} />)}
      <div className='sidebar__headset'>
      <FontAwesomeIcon
        icon={faHeadset}
      />
      </div>
    </div>
  )
}

export default Sidebar