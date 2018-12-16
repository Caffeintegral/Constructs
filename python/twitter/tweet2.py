import tweepy
import json, config
from requests_oauthlib import OAuth1Session

CK="NdLUYwXcg2OHtJD8byFOyKQN0"
CS="ERBr9HJ89skYwjXujlFkKqDfPSAcNqhYPysW4Y59UIrsH8EuVm"
AT="1043020041476685824-ALFMgDTRdjQRClHfYDwpXpiVne0IvL"
AS="McMBAa2gx4w9OHAlf1mPWx4LaL4yOXO1QbB3ANccrCYTk"

auth = tweepy.OAuthHandler(CK, CS)
auth.set_access_token(AT, AS)

# api = tweepy.API(auth)

# api.update_status("test \"かえりたい\"")

twitter = OAuth1Session(CK, CS, AT, AS)


# url = "https://api.twitter.com/1.1/statuses/user_timeline.json"

# params ={'count' : 5}
# req = twitter.get(url, params = params)

# if req.status_code == 200:
#     timeline = json.loads(req.text)
#     for tweet in timeline:
#         print(tweet['user']['name']+'::'+tweet['text'])
#         print(tweet['created_at'])
#         print('----------------------------------------------------')
# else:
#     print("ERROR: %d" % req.status_code)

url = "https://api.twitter.com/1.1/search/tweets.json"

print("何を調べますか?")
keyword = input('>> ')
print('----------------------------------------------------')


params = {'q' : keyword, 'count' : 5}

req = twitter.get(url, params = params)

if req.status_code == 200:
    search_timeline = json.loads(req.text)
    for tweet in search_timeline['statuses']:
        print(tweet['user']['name'] + '::' + tweet['text'])
        print(tweet['created_at'])
        print('----------------------------------------------------')
else:
    print("ERROR: %d" % req.status_code)