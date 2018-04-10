import discord
from discord.ext import commands
import random
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep
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

@bot.event
async def on_ready():
    print('Logged in as')
    print(bot.user.name)
    print(bot.user.id)
    print('------')


@bot.command()
async def pice(word):
    driver = webdriver.Chrome("./chromedriver.exe")
    driver.get("http://moeimg.net/") #chrome起動してyahooに移動
    searchBox = driver.find_element_by_css_selector("#s") #検索入力ボックスのhtmlを探す
    searchBox.send_keys( word ) #その検索ボックスで　「世の中 憎い」と打つ
    kensakuBotan = driver.find_element_by_css_selector("#submit") #htmlから検索ボタンを探す
    kensakuBotan.click() #検索ボタンをクリック
    top = driver.find_element_by_css_selector("#main-2 > div:nth-child(2) > h2 > a") #
    top.click() #検索ボタンをクリック
    top2 = driver.find_element_by_css_selector("#main-2 > div.post > h1") #
    top2.click() #検索ボタンをクリック
    cur_url = driver.current_url
    await bot.say(cur_url)
    driver.close()





@bot.command()
async def picy(word):
    driver = webdriver.Chrome("./chromedriver.exe")
    driver.get("https://search.yahoo.co.jp/#!/image") #chrome起動してyahooに移動
    searchBox = driver.find_element_by_css_selector("#yschsp") #検索入力ボックスのhtmlを探す
    searchBox.send_keys( word ) #その検索ボックスで　「世の中 憎い」と打つ
    kensakuBotan = driver.find_element_by_css_selector("#sbn > fieldset > div.sbox_1.cf > input") #htmlから検索ボタンを探す
    kensakuBotan.click() #検索ボタンをクリック
    top2 = driver.find_element_by_css_selector("#gridlist > div:nth-child(1) > div > p > a > img") #
    top2.click() #検索ボタンをクリック
    sleep(5)
    top3 = driver.find_element_by_css_selector("#imgBoxImg") #
    top3.click() #検索ボタンをクリック
    main_window = driver.current_window_handle
    for window in driver.window_handles:
        driver.switch_to.window(window)
    # sleep(3)
    cur_url = driver.current_url
    await bot.say(cur_url)
    driver.switch_to.window(main_window)
    driver.quit()

@bot.command()
async def picg(word):
    driver = webdriver.Chrome("./chromedriver.exe")
    driver.get("https://www.google.co.jp/imghp?hl=ja&tab=wi") #chrome起動してyahooに移動
    searchBox = driver.find_element_by_css_selector("#lst-ib") #検索入力ボックスのhtmlを探す
    searchBox.send_keys( word ) #その検索ボックスで　「世の中 憎い」と打つ
    kensakuBotan = driver.find_element_by_css_selector("#_fZl > span > svg") #htmlから検索ボタンを探す
    kensakuBotan.click() #検索ボタンをクリック
    top2 = driver.find_element_by_css_selector("#rg_s > div:nth-child(1) > a > img") #
    top2.click() #検索ボタンをクリック
    sleep(3)
    top3 = driver.find_element_by_css_selector("#irc_cc > div:nth-child(2) > div.irc_b.i8152.irc_mmc > div.i30053 > div > table._FKw.irc_but_r > tbody > tr > td:nth-child(2) > a") #
    top3.click() #検索ボタンをクリック
    main_window = driver.current_window_handle
    for window in driver.window_handles:
        driver.switch_to.window(window)
    # sleep(3)
    cur_url = driver.current_url
    await bot.say(cur_url)
    driver.switch_to.window(main_window)
    driver.quit()

@bot.command()
async def player (names):
    # if names.content.startswith('player'):
        options = Options()
        options.add_argument('--headless')

        driver = SeleneDriver.wrap(webdriver.Chrome(executable_path=ChromeDriverManager().install(), chrome_options=options))

        driver.get('https://worldofwarships.asia/ja/community/accounts/search/?search='+names)
        cur_url = driver.current_url
        print(cur_url)
        if cur_url.find('overview') == -1:
            enter = driver.find_element_by_xpath('//*[@id="js-search-results"]/div/div[1]/table/tbody/tr/td[2]/a')
            enter.click()
            
        element = driver.find_element_by_xpath('//*[@id="account_page"]/div[3]/div[2]/div/div/div[2]/div/div[2]/table/tbody/tr[3]/td[3]')
        element2 = driver.find_element_by_xpath('//*[@id="account_page"]/div[3]/div[2]/div/div/div[2]/div/div[2]/table/tbody/tr[2]/td[3]')
        print(element2.text)
        print(element.text)
        text1 = str(names)+'は戦闘数'+str(element2.text)+'勝率'+str(element.text)+'ですぅ'
        text2 = '勝率'+str(element)
        driver.quit()
        await bot.say(text1)



bot.run("NDA1MzM0MzE2Nzg5Mzk5NTYy.DUi6Cw.pWL7kQdus-R9p9hg9dqGkGtyI2I")
