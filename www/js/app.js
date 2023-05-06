
const app = {

   init() {
      $("div.btn").on("click", app.btnClick);
   },

   btnClick() {
      switch (this.id) {
         case "btnRegisterForm":
            app.fadeOutIn("iptFrmLogin", "iptFrmRegister");
            break;
         case "btnLoginForm":
            app.fadeOutIn("iptFrmRegister", "iptFrmLogin");
            break;
         default:
      }
   },

   fadeOutIn(outID, inID) {
      /* -- */
      let fadein = function() {
            $(`#${inID}`).fadeIn();
         };
      /* -- */
      $(`#${outID}`).fadeOut(333, fadein);
      console.log(`#${outid} : #${inid}`);
   }

};


/* init */
document.addEventListener("DOMContentLoaded", app.init);
