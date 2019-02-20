<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="imagetoolbar" content="no" />
<title>Pacific West Tree Company - Contact Us</title>
<link href="styles.css" rel="stylesheet" type="text/css" charset="utf-8" media="screen" />
<script type="text/javascript" src="scripts/menu.js" charset="utf-8"></script>
<script type="text/javascript" src="scripts/jquery.js" charset="utf-8"></script>
<script type="text/javascript" src="scripts/jquery.innerfade.js" charset="utf-8"></script>
<script type="text/javascript" src="scripts/controller.js" charset="utf-8"></script>
<script type="text/javascript" src="js/functionAddEvent.js"></script>
<script type="text/javascript" src="js/contact.js"></script>
<script type="text/javascript" src="js/xmlHttp.js"></script>
</head>
<body>
<div id="wrapper">
  <div class="container">
    <div class="container_fixed">
      <div id="header">
        <ul id="nav">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="trees.html">Trees</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="contact.php">Contact</a></li>
        </ul>
        <div id="logo">
          <h1>Pacific West Tree Company</h1>
        </div>
        <div id="fader_container">
          <ul id="fader">
            <li><img src="images/fader/default.jpg" alt="Pacific West Tree Company is a trusted provider and transporter of specimen trees." width="960" height="243" /></li>
          </ul>
        </div>
      </div>
      <div id="content_wrapper">
        <div id="content_block">
        <h1>Contact Us</h1>
        <p>&nbsp;</p>
<div class="full">
      <p id="loadBar" style="display:none;"> Sending email, Please wait&#8230;<br />
        <img src="images/loading.gif" alt="Loading..." title="Sending Email" /> </p>
      <p id="emailSuccess" style="display:none;">Success! Your email has been sent.</p>
      <div id="contactFormArea">
        <form action="scripts/contact.php" method="post" id="cForm">
          <fieldset>
            <label for="posName">Name:</label>
            <br />
            <input class="text" type="text" size="25" name="posName" id="posName" />
            <br />
            <label for="posEmail">Email:</label>
            <br />
            <input class="text" type="text" size="25" name="posEmail" id="posEmail" />
            <br />
            <label for="posRegard">Subject:</label>
            <br />
            <input class="text" type="text" size="25" name="posRegard" id="posRegard" />
            <br />
            <br />
            <label for="posText">Message:</label>
            <br />
            <textarea cols="50" rows="4" name="posText" id="posText"></textarea>
            <br />
            <br />
            <input type="checkbox" name="selfCC" id="selfCC" value="send" />
            <label for="selfCC">Send CC to self </label>
            <br />
            <br />
            <input class="submit" type="submit" name="sendContactEmail" id="sendContactEmail" value=" Send Email " />
          </fieldset>
        </form>
      </div>
    </div>
          <div class="clear"><!--Clear the float--></div>
          <hr />
          <div class="content_column">
            <p>Give us a call today and we’ll help you find the perfect trees for your project!</p>
          </div>
          <div class="content_column middle">
            <ul>
              <li>Central California<br />
                <span class="contactinfo">(559) 805-5859</span></li>
              <li class="paddingleft">Southern California<br />
              <span class="contactinfo">(760) 212-6800</span></li>
            </ul>
          </div>
          <div class="content_column">
            <p>Email Contact<br />
            <span class="contactinfo"><a href="mailto:steve@pacificwesttree.com">steve@pacificwesttree.com</a></span></p>
          </div>
        </div>
        <div class="clear"><!--Clear the float--></div>
      </div>
    </div>
  </div>
</div>
<div id="footer">
  <div class="container footerbg">
  <div class="container_fixed">
    <div class="footer_column">&copy; 2009 Pacific West Tree Company</div>
    <div class="footer_column">
      <ul>
        <li>Design by <a href="http://www.thedigitalcreative.com">DigitalCreative</a></li>
      </ul>
    </div>
  </div>
  </div>
</div>
</body>
</html>
