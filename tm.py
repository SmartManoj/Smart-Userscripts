from time import *	
import pathlib
from pyautogui import *
from glob import *
from pyperclip import *
import re
author='SmartManoj'
repo='SmartUserScripts'
namespace=f'https://github.com/{author}'
def local():
	return f'''// ==UserScript==
// @name        {name}
// @version     0.1
// @description try to take over the world!
// @author      {author}
// @namespace   {namespace}
// @match       {link}
// @updateURL   https://raw.githubusercontent.com/{author}/{repo}/master/{fn}
// ==/UserScript==

'''
def browser():
	return f'''// ==UserScript==
// @name        {name}
// @version     0.1
// @description try to take over the world!
// @author      {author}
// @namespace   {namespace}
// @match       {link}
// @require   	{local_path}/{fn}
// @grant       GM_setClipboard
// ==/UserScript==


'''
hotkey('win','3') # chrome index
hotkey('ctrl','shift','h')
fn=prompt('Enter File name')
name=prompt('Enter Script name',default=fn)
sleep(1)
hotkey('ctrl','a')
hotkey('ctrl','x')
local_path=pathlib.Path(__file__).parents[0].as_uri()	
ext='.user.js'
l=len(glob(fn+ext))
if l:fn+=f'_{l+1}'
fn+=ext
a=paste()
link=re.search('@match\s*(.*)',a)[1].strip()
print(local(),file=open(fn,'w'))
copy(browser())
hotkey('ctrl','v')