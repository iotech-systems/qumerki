
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
      let email = $("#txtEmail").val(),
         tel = $("#txtTel").val();
      console.log([email, tel]);
      let url = `/api/create-account/${email}/${tel}`;
      $.post(url, {}, (resp)=> {
            console.log(resp);
         });
   }

};


/* init */
document.addEventListener("DOMContentLoaded", app.init);
