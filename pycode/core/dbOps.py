
import postgres

class dbOps(postgres.Postgres):

   def __init__(self):
      super().__init__()

   def account_exists(self, email: str, tel: str) -> bool:
      return False
