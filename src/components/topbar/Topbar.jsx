import React from 'react';
// css
import './topbar.css';
// icons
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">
                    DashBoard
                </span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon/>
                </div>
                <img src="https://i.pinimg.com/736x/37/10/f6/3710f65b9d70500fcd892a255814a9e2.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
