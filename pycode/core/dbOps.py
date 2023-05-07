
import psycopg2
import psycopg2.extensions as _ext

class dbOps(object):

   def __init__(self, conn_str: str):
      self.conn: _ext.connection = psycopg2.connect(conn_str)

   def account_exists(self, email: str, tel: str) -> bool:
      if self.conn.closed:
         pass
      qry = "select count(*) from "
      return True
