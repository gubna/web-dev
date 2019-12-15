// npm install --save-dev @iconify/react @iconify/icons-logos

import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import visualStudioCode from '@iconify/icons-logos/visual-studio-code';
import fontAwesome from '@iconify/icons-logos/font-awesome';
import materialUi from '@iconify/icons-logos/material-ui';
import googleDevelopersIcon from '@iconify/icons-logos/google-developers-icon';
import jamstackIcon from '@iconify/icons-logos/jamstack';
import webpackIcon from '@iconify/icons-logos/webpack';
import babelIcon from '@iconify/icons-logos/babel';
import eslintIcon from '@iconify/icons-logos/eslint';


function Codes () {
return (
<div className="icons">

<Icon icon={visualStudioCode} 
width="1.4em" height="1.4em"/>
<Icon icon={fontAwesome} 
width="1.4em" height="1.4em"/>
<Icon icon={materialUi} 
width="1.4em" height="1.4em"/>
<Icon icon={googleDevelopersIcon} width="1.4em" height="1.4em" />
<Icon icon={webpackIcon} width="1.4em" height="1.4em" />
<Icon icon={babelIcon} width="1.4em" height="1.4em" />
<Icon icon={eslintIcon} width="1.4em" height="1.4em" />


</div>
);
}
export default Codes;