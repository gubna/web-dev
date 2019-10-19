
// npm install --save-dev @iconify/react @iconify/icons-logos
// npm i react-router-dom
import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import githubIcon from '@iconify/icons-logos/github-icon';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Git = () => {
return (

<Link to="https://github.com/gubna">

<Icon icon={githubIcon} />

</Link>

);
};

export default Git;