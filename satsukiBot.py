import discord
from discord.ext import commands
from selenium import webdriver
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selene.driver import SeleneDriver
from webdriver_manager.chrome import ChromeDriverManager
import time

description = '''An example bot to showcase the discord.ext.commands extension
module.
There are a number of utility commands being showcased here.'''
bot = commands.Bot(command_prefix='', description=description)

client = discord.Client()

@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')


@client.event
async def player (name):
    # if message.content.startswith('player'):
        options = Options()
        options.add_argument('--headless')

        driver = SeleneDriver.wrap(webdriver.Chrome(executable_path=ChromeDriverManager().install(), chrome_options=options))

        driver.get('https://worldofwarships.asia/ja/community/accounts/')
        input = driver.find_element_by_name('search')
        input.send_keys(b_l_e_n_d_S)
        time.sleep(3)
        input.send_keys(Keys.RETURN)

        cur_url = driver.current_url
        element = driver.find_element_by_xpath('//*[@id="account_page"]/div[3]/div[2]/div/div/div[2]/div/div[2]/table/tbody/tr[3]/td[3]')
        element2 = driver.find_element_by_xpath('//*[@id="account_page"]/div[3]/div[2]/div/div/div[2]/div/div[2]/table/tbody/tr[2]/td[3]')
        print(element2.text)
        print(element.text)
        driver.quit()
        text1 = '戦闘数'+str(element2)+'勝率'+str(element)
        text2 = '勝率'+str(element)
        await client.send_message(text1)


@bot.event
async def on_ready():
    print('Logged in as')
    print(bot.user.name)
    print(bot.user.id)
    print('------')

@bot.command()
async def search1(word):
    driver = webdriver.Chrome("./chromedriver.exe")
    driver.get("http://www.yahoo.co.jp/") #chrome起動してyahooに移動
    searchBox = driver.find_element_by_css_selector("#srchtxt") #検索入力ボックスのhtmlを探す
    searchBox.send_keys( word ) #その検索ボックスで　「世の中 憎い」と打つ
    kensakuBotan = driver.find_element_by_css_selector("#srchbtn") #htmlから検索ボタンを探す
    kensakuBotan.click() #検索ボタンをクリック
    top = driver.find_element_by_css_selector("#WS2m > div:nth-child(1) > div.hd > h3 > a") #htmlから検索ボタンを探す
    top.click() #検索ボタンをクリック
    cur_url = driver.current_url
    await bot.say(cur_url)
    driver.close()

client.run("NDA0NjU5NjU0NzMyMjgzOTE0.DUZEMQ.U0z-t6l89vKOo-ovpxnKDRhr0tI")
