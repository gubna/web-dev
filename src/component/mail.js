import React from 'react';


function Mail() {
    return (
        <React.Fragment>
            
          <h2> Give Feedback On My Website.</h2>
          
          <form action="mailto:steven@stevenagri.com" method="get" encType="text/plain">
            <p>Name: <input type="text" name="name" /></p>
            <p>Email: <input type="text" name="email" /></p>
            <p>Comments:
              <br />
              <textarea name="comments" rows={12} cols={35} value={"Send your comments to the website."} />
              <br />
            </p>
            <p><input type="submit" name="submit" value="Send" />
              <input type="reset" name="reset" value="Clear Form" />
            </p>
            
          </form>
       
          </React.Fragment>
      );
    }
  ;

  export default Mail;