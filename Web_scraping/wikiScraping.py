import requests
from bs4 import BeautifulSoup
import codecs



r = requests.get('http://wiki.wargaming.net/en/Ship:Shimakaze')
soup = BeautifulSoup(r.text, 'html.parser')
DetectRanges = soup.select('.t-performance_right')


for DetectRange in DetectRanges:
        print(DetectRange.text.strip().encode('cp932', "ignore"))
