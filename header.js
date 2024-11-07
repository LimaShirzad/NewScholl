class MYHEADER extends HTMLElement {
    connectedCallback (){
    this.innerHTML=`
 


           


<header class="header">


    <div class="open-btn">
          <button class="btn" id="open">
              <i class="fa-solid fa-bars"></i>

          </button>
    </div>



    <div class="logo">
            <h3>our</h3>
            <h4>scholl</h4>
    </div>

     <div class="navbar">
      <button class="btn" id="close_btn">
                       <i class="fa-solid fa-x fw-bold"></i>
      </button>
         <nav>
              <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="#">about</a></li>
               
                <li><a href="course.html">courses</a></li>
          
                <li><a href="contact.html">contact us</a></li>
              </ul>
         </nav>
     </div>



</header>

       
 

    `
    
    } 
}
customElements.define('my-header',MYHEADER);


