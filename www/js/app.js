
const app = {

   init() {
      $("div.btn").on("click", app.btnClick);
   },

   btnClick() {
      $("div.btn").removeClass("clicked");
      $(this).addClass("clicked");
      switch (this.id) {
         case "btnRegisterForm":
            app.fadeOutIn("iptFrmLogin", "iptFrmRegister");
            break;
         case "btnLoginForm":
            app.fadeOutIn("iptFrmRegister", "iptFrmLogin");
            break;
         case "btnCreate":
            app.createNewAccount();
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
      console.log(`#${outID} : #${inID}`);
   },

   createNewAccount() {
      let ns = "#iptFrmRegister", 
         email = $(`${ns} #txtEmail`).val(),
         ttel = $(`${ns} #txtTel`).val();
      /* val data */
      let [eml, tel] = app.validateData(email, ttel);
      console.log([eml, tel]);
      let url = `/api/create-account/${email}/${tel}`;
      $.post(url, {}, (resp)=> {
            console.log(resp);
         });
   },

   validateData(eml, tel) {
      tel = tel.replaceAll(" ", "");
      console.log([eml, tel]);
      return [eml, tel];
   }

};


/* init */
document.addEventListener("DOMContentLoaded", app.init);
