import requests
from bs4 import BeautifulSoup
import codecs
from urllib import parse
import time

# names = ['Umikaze', 'Wakatake','Isokaze','Minekaze','Mutsuki','Fubuki','Hatsuharu','Akatsuki','Shiratsuyu','Kagero','Akizuki','Yūgumo','Shimakaze','Tachibana','Kamikaze','Shinonome','Asashio','HSF_Harekaze']
# names = ["Hashidate","Chikuma","Tenryu","Kuma","Furutaka","Aoba","Myoko","Mogami","Ibuki","Zao","Katori","Iwaki_Alpha","Yubari","Atago"]
# names = ["Kawachi","Myogi","Kongo","Fuso","Nagato","Amagi","Izumo","Yamato","Mikasa","Ishizuchi","Mutsu","Ashitaka","Kii","Musashi"]
# names = ["Sampson","Wickes","Clemson","Nicholas","Farragut","Mahan","Benson","Fletcher","Gearing","Smith","Sims","Kidd","Black"]
# names = ["Erie","Chester","St._Louis","Phoenix","Omaha","Pensacola","Dallas","New_Orleans","Helena","Baltimore","Cleveland","Buffalo","Seattle","Des_Moines","Worcester","Albany","Marblehead","Atlanta","Indianapolis","Flint","Boise","Salem"]
# names = ["South_Carolina","Wyoming","New_York","New_Mexico","Colorado","North_Carolina","Iowa","Montana","Arkansas_Beta","Texas","Arizona","Alabama"]
# names = ["V-25", "G-101", "V-170", "T-22", "Ernst_Gaede", "Leberecht_Maass", "Z-23", "Z-46", "Z-52", "Z-39"]
# names = ["Hermelin", "Dresden", "Kolberg", "Karlsruhe", "Königsberg", "Nürnberg", "Yorck", "Admiral_Hipper", "Roon", "Hindenburg", "Emden", "Admiral_Graf_Spee", "Prinz_Eugen"]
# names = ["Nassau", "Kaiser", "König", "Bayern", "Gneisenau", "Bismarck", "Friedrich_der_Große", "Großer_Kurfürst", "König_Albert", "Scharnhorst", "Tirpitz"]
# names = ["Storozhevoi", "Derzki", "Izyaslav", "Podvoisky", "Gnevny", "Minsk", "Kiev", "Ognevoi", "Tashkent", "Udaloi", "Khabarovsk", "Grozovoi", "Gremyashchy", "Okhotnik", "Leningrad"]
# names = ["Orlan", "Novik", "Bogatyr", "Svietlana", "Kirov", "Budyonny", "Shchors", "Chapayev", "Dmitri_Donskoi", "Moskva", "Diana", "Aurora", "Oleg","Varyag", "Murmansk", "Krasny_Krym", "Molotov", "Admiral_Makarov", "Mikhail_Kutuzov","Kronshtadt","Stalingrad"]
# names = ["Imperator_Nikolai_I", "Oktyabrskaya_Revolutsiya"]
# names = ["Campbeltown", "Gallant"]
# names = ["Black_Swan", "Weymouth", "Caledon", "Danae", "Emerald", "Leander", "Fiji", "Edinburgh", "Neptune", "Minotaur", "Belfast"]
# names = ["Bellerophon", "Orion", "Iron_Duke", "Queen_Elizabeth", "King_George_V", "Monarch", "Lion", "Conqueror", "Warspite", "Hood", "Duke_of_York", "Nelson"]
names = ["Aigle"]

f = open('frdd.txt', 'w')
for name in names:
        name2 = name.encode('cp932', "ignore")
        urls = ['http://wiki.wargaming.net/en/Ship:', name]
        url = ''.join(urls)
        r = requests.get(url)
        soup = BeautifulSoup(r.text, 'html.parser')
        DetectRanges = soup.select('.t-performance_right')
        list = []
        for DetectRange in DetectRanges:
                t = DetectRange.text.strip().encode('cp932', "ignore")
                list.append(t)
        
        print(name2.decode('cp932'))
        f.write(name2.decode('cp932'))
        print("発見距離")
        f.write("発見距離")
        print(list[-2]),
        f.write(list[-2].decode('cp932'))
        print("航空発見")
        f.write("航空発見")
        print(list[-1])
        f.write(list[-1].decode('cp932'))
        f.write("\n")
        time.sleep(2)

f.close()

