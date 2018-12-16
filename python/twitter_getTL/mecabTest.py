import MeCab #ライブラリをインポート

mecab = MeCab.Tagger()
text = "今週の進捗がやばいです．"
print(mecab.parse(text))
