import tweepy

# 先ほど取得した各種キーを代入する
CK="Llfby9Jld65p7dlthDdG4aszb"
CS="gpzONLxY2YHTorSGH4dE2dUv4lcRn1kPtzBAafJhOI5qBxGISW"
AT="1043020041476685824-oic7gCF1AmmRLsJfBoR8RfUjC6Mg26"
AS="6SQWw7pfHufev5FPFIQmeTjLQ6suhqubOMVT3v4TvwmT5"

# Twitterオブジェクトの生成
auth = tweepy.OAuthHandler(CK, CS)
auth.set_access_token(AT, AS)

api = tweepy.API(auth)

# ツイート
api.update_status("test \"かえりたい\"")