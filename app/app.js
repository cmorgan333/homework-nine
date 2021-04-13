var userVarName = "Variable";
var homeContent = `<section class="home-content">
<h1>What do you want to audition for?</h1>
<div class="thumbnails">
  <div class="thumb-container">
    <div class="thumbnail theatre"></div>
    <div class="thumbnail dance"></div>
  </div>
  <div class="thumb-container">
    <div class="thumbnail sing"></div>
    <div class="thumbnail band"></div>
  </div>
</div>
</section>
<!-- =========FOOTER============== -->
<footer>
<div class="info">
  <div class="logo"></div>
  <div class="address">
    <p>1234 Mass Ave.</p>
    <p>Indianapolis, IN 46402</p>
    <p>Email: audindy@gmail.com</p>
    <p>Phone: 317-555-555</p>
  </div>
</div>
<div class="socials">
  <div class="facebook"></div>
  <div class="twitter"></div>
  <div class="insta"></div>
</div>
</footer>`;
var aboutContent = `<section class="about-content">
<h1>ABOUT</h1>
<div class="profile">
  <div class="headshot one"></div>
  <div class="profile-text">
    <h3>Jean Lee Picard</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
      tenetur aliquam adipisci facere voluptate quod aspernatur cumque.
      Odio veniam ipsum, facere at, iste praesentium, nemo earum sint
      excepturi deserunt natus.
    </p>
  </div>
</div>
<div class="profile">
  <div class="headshot two"></div>
  <div class="profile-text">
    <h3>Lala Coulee</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
      tenetur aliquam adipisci facere voluptate quod aspernatur cumque.
      Odio veniam ipsum, facere at, iste praesentium, nemo earum sint
      excepturi deserunt natus.
    </p>
  </div>
</div>
<div class="profile">
  <div class="headshot three"></div>
  <div class="profile-text">
    <h3>Who we are?</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
      tenetur aliquam adipisci facere voluptate quod aspernatur cumque.
      Odio veniam ipsum, facere at, iste praesentium, nemo earum sint
      excepturi deserunt natus.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
      tenetur aliquam adipisci facere voluptate quod aspernatur cumque.
      Odio veniam ipsum, facere at, iste praesentium, nemo earum sint
      excepturi deserunt natus.
    </p>
  </div>
</div>
</section>
<!-- ===========FOOTER============= -->
<footer>
<div class="info">
  <div class="logo"></div>
  <div class="address">
    <p>1234 Mass Ave.</p>
    <p>Indianapolis, IN 46402</p>
    <p>Email: audindy@gmail.com</p>
    <p>Phone: 317-555-555</p>
  </div>
</div>
<div class="socials">
  <div class="facebook"></div>
  <div class="twitter"></div>
  <div class="insta"></div>
</div>
</footer>`;
var resourcesContent = `<section class="resources-content">
<h1>COMMUNITY</h1>
<div class="hero">
  <div class="textbox">
    <h2>WE SUCCEED WHEN WE WORK TOGETHER!</h2>
    <div class="smallbox">
      <h3>JOIN OUR RESOURCE SHARE PROGRAM!</h3>
    </div>
  </div>
</div>
<!-- =======WHAT YOU GET SECTION===== -->

<div class="membership">
  <h1>When you join Aud Indy you get:</h1>
  <ul>
    <li>Access to hundreds of costumes in our costume shop</li>
    <li>Access to thousands of props</li>
    <li>Discounted rates on stage makeup and prosthetics</li>
    <li>Discounted rates on rehearsal and performance spaces</li>
  </ul>
</div>

<!-- ========CLOTHES COLLAGE========= -->
<div class="clothes-collage"></div>
<!-- ==========WHY JOIN?============ -->
<div class="whyjoin">
  <h1>Why join Aud Indy?</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
    tenetur aliquam adipisci facere voluptate quod aspernatur cumque. Odio
    veniam ipsum, facere at, iste praesentium, nemo earum sint excepturi
    deserunt natus.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
    tenetur aliquam adipisci facere voluptate quod aspernatur cumque. Odio
    veniam ipsum, facere at, iste praesentium, nemo earum sint excepturi
    deserunt natus.
  </p>
</div>
<!-- =========READY TO JOIN============== -->
<div class="readytojoin">
  <div class="overlay">
    <h1>Ready to Join?</h1>
    <div class="button">
      <p>JOIN NOW!</p>
    </div>
  </div>
</div>
</section>
<!-- ============FOOTER=================== -->
<footer>
<div class="info">
  <div class="logo"></div>
  <div class="address">
    <p>1234 Mass Ave.</p>
    <p>Indianapolis, IN 46402</p>
    <p>Email: audindy@gmail.com</p>
    <p>Phone: 317-555-555</p>
  </div>
</div>
<div class="socials">
  <div class="facebook"></div>
  <div class="twitter"></div>
  <div class="insta"></div>
</div>
</footer>`;
var contactContent = `<section class="contact-content">
<h1>CONTACT</h1>
<div class="contact-pic">
  <div class="contact-box">
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Email" />
    <input type="text" placeholder="Phone Number" />
    <input class="message" type="text" placeholder="Message" />
    <div class="submit-button">
      <p>SUBMIT</p>
    </div>
  </div>
</div>
</section>
<!-- =============FOOTER============= -->
<footer>
<div class="info">
  <div class="logo"></div>
  <div class="address">
    <p>1234 Mass Ave.</p>
    <p>Indianapolis, IN 46402</p>
    <p>Email: audindy@gmail.com</p>
    <p>Phone: 317-555-555</p>
  </div>
</div>
<div class="socials">
  <div class="facebook"></div>
  <div class="twitter"></div>
  <div class="insta"></div>
</div>
</footer>`;

// =========Named Function============//

// This is a click listener

function init() {
  $("nav a").click(function (event) {
    let btnId = this.id;
    let contentID = btnId + "Content";

    $("#app").html(eval(contentID));
  });
}

// this checks for all the elements to be ready by the browser

$(document).ready(function () {
  init();
});
