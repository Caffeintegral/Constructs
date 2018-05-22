import discord
from discord.ext import commands
import random
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont

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
async def tier(left : int, right : int):
    client = discord.Client()
    dif = right - left
    num = random.randint(left,right)
    rand = random.randint(1,2)
    ch1 = discord.Object(id='404849528383078401')
    if rand == 1:
        text = '今夜はTier' + str(num) + '以外，行きたくない'
        img1 = Image.open("genji.png")

        draw = ImageDraw.Draw(img1)
        font = ImageFont.truetype("C:\Windows\Fonts\msgothic.ttc", 25, encoding="unic")
        fillcolor = "white"
        shadowcolor = "black"
        x,y=20,190
        draw.text((x-2, y), text, font=font, fill=shadowcolor)
        draw.text((x+2, y), text, font=font, fill=shadowcolor)
        draw.text((x, y-2), text, font=font, fill=shadowcolor)
        draw.text((x, y+2), text, font=font, fill=shadowcolor)

        draw.text((x-2, y-2), text, font=font, fill=shadowcolor)
        draw.text((x+2, y-2), text, font=font, fill=shadowcolor)
        draw.text((x-2, y+2), text, font=font, fill=shadowcolor)
        draw.text((x+2, y+2), text, font=font, fill=shadowcolor)
        draw.text((x, y), text, font=font, fill=fillcolor)
        img1.save("saveimg.png")
        
        await bot.send_file(ch1,'saveimg.png')
    elif rand == 2:
        text1 = '選んだのか．．．'+ str(left) +'から' + str(right) + 'のTierを．．．'
        text2 = 'お前が行くのはTier' + str(num) + 'だと思ってた'
        img1 = Image.open("genji.png")

        draw = ImageDraw.Draw(img1)
        font = ImageFont.truetype("C:\Windows\Fonts\msgothic.ttc", 22, encoding="unic")
        fillcolor = "white"
        shadowcolor = "black"
        x1,y1=10,165
        x2,y2=15,200
        draw.text((x1-2, y1), text1, font=font, fill=shadowcolor)
        draw.text((x1+2, y1), text1, font=font, fill=shadowcolor)
        draw.text((x1, y1-2), text1, font=font, fill=shadowcolor)
        draw.text((x1, y1+2), text1, font=font, fill=shadowcolor)

        draw.text((x1-2, y1-2), text1, font=font, fill=shadowcolor)
        draw.text((x1+2, y1-2), text1, font=font, fill=shadowcolor)
        draw.text((x1-2, y1+2), text1, font=font, fill=shadowcolor)
        draw.text((x1+2, y1+2), text1, font=font, fill=shadowcolor)
        draw.text((x1, y1), text1, font=font, fill=fillcolor)

        draw.text((x2-2, y2), text2, font=font, fill=shadowcolor)
        draw.text((x2+2, y2), text2, font=font, fill=shadowcolor)
        draw.text((x2, y2-2), text2, font=font, fill=shadowcolor)
        draw.text((x2, y2+2), text2, font=font, fill=shadowcolor)

        draw.text((x2-2, y2-2), text2, font=font, fill=shadowcolor)
        draw.text((x2+2, y2-2), text2, font=font, fill=shadowcolor)
        draw.text((x2-2, y2+2), text2, font=font, fill=shadowcolor)
        draw.text((x2+2, y2+2), text2, font=font, fill=shadowcolor)
        draw.text((x2, y2), text2, font=font, fill=fillcolor)
        img1.save("saveimg.png")
        await bot.send_file(ch1,'saveimg.png')
@bot.group(pass_context=True)
async def genji(ctx):
    if ctx.invoked_subcommand is None:
        await bot.say('結婚したのか、俺以外のヤツと...')
@bot.group(pass_context=True)
async def konya(ctx):
    if ctx.invoked_subcommand is None:
        await bot.say('http://koi-game.voltage.co.jp/lovejob/konya/')

@bot.group(pass_context=True)
async def お兄ちゃん(ctx):
    if ctx.invoked_subcommand is None:
        await bot.say('http://tinkle-position.com/onigyu/')

@bot.group(pass_context=True)
async def ママ(ctx):
    if ctx.invoked_subcommand is None:
        await bot.say('http://www.akabeesoft2.com/bosei/')

bot.run("NDA0MTg0NTY1ODgwNzE3MzEy.DUSZSg.NsAf8tWmmZIc2Y-MdkSDcE1Wodg")
