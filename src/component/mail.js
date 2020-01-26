import React from 'react';
import styled from 'styled-components';

const Form = styled.p`
  font-color: blue;
  `;


function Mail() {
    return (
        <React.Fragment><Form>
        <form action="mailto:steven@stevenagri.com" method="post" encType="text/plain">
          Name:<br />
          <input type="text" name="name" /><br />
          E-mail:<br />
          <input type="text" name="mail" /><br />
          Comment:<br />
          <input type="text" name="comment" size={50} /><br /><br />
          <input type="submit" defaultValue="Send" />
          <input type="reset" defaultValue="Reset" />
        </form></Form>
      </React.Fragment>
    );
  }
; 

export default Mail;
          