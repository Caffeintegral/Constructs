import requests
from bs4 import BeautifulSoup
import codecs
from urllib import parse


names = ['Shimakaze', 'Akizuki']

urls = ['http://wiki.wargaming.net/en/Ship:', names[0]]
url = ''.join(urls)
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
DetectRanges = soup.select('.t-performance_right')

f = open('text.txt', 'w')
list = []
for DetectRange in DetectRanges:
        t = DetectRange.text.strip().encode('cp932', "ignore")
        list.append(t)
        
        
print(names[0])
print("発見距離")
f.write("発見距離")
print(list[-2])
f.write(list[-2].decode('cp932'))
print("航空発見")
f.write("航空発見")
print(list[-1])
f.write(list[-1].decode('cp932'))

f.close()

urls = ['http://wiki.wargaming.net/en/Ship:', names[1]]
url = ''.join(urls)
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
DetectRanges = soup.select('.t-performance_right')

f = open('text.txt', 'w')
list = []
for DetectRange in DetectRanges:
        t = DetectRange.text.strip().encode('cp932', "ignore")
        list.append(t)
        
        
print(names[1])
print("発見距離")
f.write("発見距離")
print(list[-2])
f.write(list[-2].decode('cp932'))
print("航空発見")
f.write("航空発見")
print(list[-1])
f.write(list[-1].decode('cp932'))

f.close()


