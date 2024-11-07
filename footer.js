class MYFOOTER extends HTMLElement {
    connectedCallback (){
    this.innerHTML=`
  <div class="container-fluid" id="footer">
        <div class="row p-3" >
              <div class="col col-lg-2 col-xl-3 col-md-4 col-sm-4 col-12">
                     <div class="item">
                           <h4>help ful link</h4>
                           <div class="line"></div>
                        <div class="text">
                           <a href="home.html">home</a>
                        </div>

                        <div class="text">
                               <a href="contact.html">contact</a>
                         </div>


                         <div class="text">
                             <a href="course.html">course</a>
                         </div>

                           <div class="text">
                      
                        </div>
                     </div>
              </div>

              <div class="col col-lg-2 col-xl-3 col-md-4 col-sm-4 col-12" >
                <div class="item">
                      <h4>our student</h4>
                      <div class="line"></div>
                   <div class="text">
                      <span>ahmad</span>
                   </div>

                   <div class="text">
                       <span>ali</span>
                    </div>


                    <div class="text">
                       <span>sijjad</span>
                    </div>

                      <div class="text">
                      <span>more</span>
                   </div>
                </div>
         </div>


         <div class="col col-lg-2 col-xl-3 col-md-3 col-sm-4 col-12">

           


            <div class="item">
                  <h4>feedback</h4>
                  <div class="line"></div>
               <div class="text">
                  <span>good </span>
               </div>

               <div class="text">
                   <span>very good</span>
                </div>


                <div class="text">
                   <span>beter </span>
                </div>

                  <div class="text">
                  <span>hahaha</span>
               </div>
            </div>
     </div>




     <div class="col col-xl-3 col-lg-2 col-md-3 col-sm-12 col-12" >

        <h4>follow us</h4>
             <div id="icon" class="mt-2">
        <div class="icon shadow">
             <i class="fa-solid fa-user"></i>
        </div>

        <div class="icon">
            <i class="fa-solid fa-user"></i>
       </div>

       <div class="icon">
        <i class="fa-solid fa-user"></i>
   </div>

   <div class="icon">
    <i class="fa-solid fa-user"></i>
</div>
</div>
     </div>
        </div>
    </div>

       
 

    `
    
    } 
}
customElements.define('my-footer',MYFOOTER);


