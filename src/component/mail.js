import React from 'react';


function Mail() {
    return (
        <React.Fragment>
        <form action="mailto:steven@stevenagri.com" method="post" encType="text/plain">
          Name:<br />
          <input type="text" name="name" /><br />
          E-mail:<br />
          <input type="text" name="mail" /><br />
          Comment:<br />
          <input type="text" name="comment" size={50} /><br /><br />
          <input type="submit" defaultValue="Send" />
          <input type="reset" defaultValue="Reset" />
        </form>
      </React.Fragment>
    );
  }
; 

export default Mail;
          