import React from 'react';
import './FooterBox.css';
import styled from 'styled-components'

const Size = styled.p`
  font-size: 1em;
  `;

function Header() {
  return (
    <div className="Head">
      <Size>
      <h1>Steven's Web Development Portfolio</h1>
<p>Examples of some of my projects.</p></Size>
    </div>
  );
}
export default Header;