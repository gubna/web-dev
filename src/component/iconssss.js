// npm install --save-dev @iconify/react @iconify/icons-logos

import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import css3 from '@iconify/icons-logos/css-3';
import html5 from '@iconify/icons-logos/html-5';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import gatsbyIcon from '@iconify/icons-logos/gatsby';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import sassIcon from '@iconify/icons-logos/sass';
import jqueryIcon from '@iconify/icons-logos/jquery';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import npmIcon from '@iconify/icons-logos/npm';
import './FooterBox.css'


function Codesss () {
    return (
        <React.Fragment>
    <div className="title">
    Languages, Libraries, Frameworks, Technologies, and Services I am familiar with.<br></br>
    </div>
    
    <div className="icons">

    <InlineIcon icon={html5}  
    width="1.4em" height="1.4em"/>
    <InlineIcon icon={css3} 
    width="1.4em" height="1.4em"/>
    <Icon icon={javascriptIcon}  
    width="1.4em" height="1.4em"/>
    <InlineIcon icon={reactIcon} 
    width="1.4em" height="1.4em"/>
    <InlineIcon icon={gatsbyIcon} 
    width="1.4em" height="1.4em"/>
    <Icon icon={jqueryIcon} width="1.4em" height="1.4em" />
    <Icon icon={bootstrapIcon} 
    width="1.4em" height="1.4em"/>
    <Icon icon={sassIcon} 
    width="1.4em" height="1.4em"/>
    <Icon icon={nodejsIcon} 
    width="1.4em" height="1.4em"/>
    <Icon icon={npmIcon} 
    width="1.4em" height="1.4em"/>
</div>
</React.Fragment>
);
}
export default Codesss;