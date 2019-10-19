// npm install --save-dev @iconify/react @iconify/icons-logos

import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import pythonIcon from '@iconify/icons-logos/python';
import pycharmIcon from '@iconify/icons-logos/pycharm';
import raspberryPi from '@iconify/icons-logos/raspberry-pi';
import linuxTux from '@iconify/icons-logos/linux-tux';
import ubuntuIcon from '@iconify/icons-logos/ubuntu';
import digitalOcean from '@iconify/icons-logos/digital-ocean';
import netlifyIcon from '@iconify/icons-logos/netlify';
import gitIcon from '@iconify/icons-logos/git';


function Codess () {
return (
<div className="icons">


<Icon icon={pythonIcon} 
width="1.4em" height="1.4em"/>
<Icon icon={pycharmIcon} 
width="1.4em" height="1.4em"/>
<Icon icon={raspberryPi}
width="1.4em" height="1.4em" />
<Icon icon={linuxTux} 
width="1.4em" height="1.4em"/>
<Icon icon={ubuntuIcon} 
width="1.4em" height="1.4em"/>
<Icon icon={digitalOcean} 
width="1.4em" height="1.4em"/>
<Icon icon={netlifyIcon} 
width="1.4em" height="1.4em"/>
<Icon icon={gitIcon} 
width="1.4em" height="1.4em"/>

</div>
);
}
export default Codess;