import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src="https://avatars.githubusercontent.com/u/123856266?v=4" title= 'Hoon Kang'/>
        <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
        <SidebarRow Icon={PeopleIcon} title='Friends' />
        <SidebarRow Icon={ChatIcon} title='Messenger' />
        <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
        <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Marketplace' />
    </div>
  )
}

export default Sidebar
