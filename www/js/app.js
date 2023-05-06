
const app = {

   init() {
      $("div.btn").on("click", app.btnClick);
   },

   btnClick() {
      alert(this.id);
   }
};



/* init */
document.addEventListener("DOMContentLoaded", app.init);
