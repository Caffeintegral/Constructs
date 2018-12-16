import tweepy

CK="NdLUYwXcg2OHtJD8byFOyKQN0"
CS="ERBr9HJ89skYwjXujlFkKqDfPSAcNqhYPysW4Y59UIrsH8EuVm"
AT="1043020041476685824-ALFMgDTRdjQRClHfYDwpXpiVne0IvL"
AS="McMBAa2gx4w9OHAlf1mPWx4LaL4yOXO1QbB3ANccrCYTk"

auth = tweepy.OAuthHandler(CK, CS)
auth.set_access_token(AT, AS)

api = tweepy.API(auth)

api.update_status("test \"かえりたい\"")