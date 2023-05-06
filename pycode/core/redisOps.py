
import redis
from syscore import redisDBs

class redisOps(redis.Redis):

   SECONDS_IN_HOUR: int = 3600
   NEW_ACCOUNT_REQUEST_TIMEOUT: int = SECONDS_IN_HOUR * 2

   def __init__(self, host: str, port: int, pwd: str):
      super().__init__(host=host, port=port, password=pwd, decode_responses=True)

   def test_connection(self) -> bool:
      return self.ping()

   def add_account_request(self, email: str, tel: str):
      self.select(redisDBs.ACCOUNT_REQUESTS)
      _d: {} = {"email": email, "tel": tel}
      self.hset("", mapping=_d)
