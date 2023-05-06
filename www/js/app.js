
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

   fadeOutIn(outid, inid) {
      $.fadeOut(`#${outid}`).fadeIn(`#${inid}`);
      console.log(`#${outid} : #${inid}`);
   }

};


/* init */
document.addEventListener("DOMContentLoaded", app.init);
