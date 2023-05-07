#!/usr/bin/env python3

import flask as _f
import setproctitle


HTTP_PORT = 8084
APP_NAME = "qumerki"
qapp = _f.Flask(APP_NAME, template_folder="www")


# -- api calls --
@qapp.route("/api/create-account/<email>/<tel>", methods=["POST"])
def create_account(email, tel):
   print([email, tel])
   return f"{email} | {tel}"

# POST: reset account
# POST: login
# POST: update account info
# POST: update numerki per account
# POST: create qrcode
# GET: get qrcode
# GET: get account info
# GET: get numerki per account


# -- start here --

def main():
   qapp.run(host="0.0.0.0", port=HTTP_PORT, debug=False)


# -- -- entry point -- --
if __name__ == "__main__":
   setproctitle.setproctitle(APP_NAME)
   main()
