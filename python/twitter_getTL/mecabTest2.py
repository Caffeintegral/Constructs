import MeCab

mecab = MeCab.Tagger()
text = "今週の進捗がやばいです．" #文章
# print(mecab.parse(text))

node = mecab.parseToNode(text) 
meisi = []
keiyoushi = []
while node:
    if node.feature.startswith("名詞"): #その時のnodeの品詞が名詞から始まるとき　feature = 品詞
        meisi.append(node.surface)  #名詞配列にその時のnodeの文を追加　surface = 文
        # print(node.surface)

    if node.feature.startswith("形容詞"): #その時のnodeの品詞が形容詞から始まるとき
        keiyoushi.append(node.surface)  #形容詞配列にその時のnodeの文を追加　surface = 文
        # print(node.surface)

    node = node.next #nodeに次のnodeを代入
print("名詞は")
print(meisi)
print('----------------------------------------------------')
print("形容詞は")
print(keiyoushi)
print('----------------------------------------------------')

