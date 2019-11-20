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
	b=re.search(r'// ==/UserScript==(.*)',a,re.M|re.S)[1]
	return f'''// ==UserScript==
// @name        {name}
// @version     0.1
// @description try to take over the world!
// @author      {author}
// @namespace   {namespace}
// @match       {link}
// @updateURL   https://raw.githubusercontent.com/{author}/{repo}/master/{fn}
// ==/UserScript==

'''+b
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
if __name__ == '__main__':
	hotkey('win','3') # chrome index
	# hotkey('ctrl','shift','h')
	sleep(1)
	hotkey('ctrl','a')
	hotkey('ctrl','x')
	a=paste()
	print(a)
	name=re.search('// @name (.*)',a)[1].strip()
	fn=name.replace(' ','_')
	local_path=pathlib.Path(__file__).parents[0].as_uri()	
	ext='.user.js'
	l=len(glob(fn+ext))
	# if l:fn+=f'_{l+1}'
	fn+=ext
	link=re.search('@match\s*(.*)',a)[1].strip()
	print(local(),file=open(fn,'w'))
	copy(browser())
	hotkey('ctrl','v')
	hotkey('ctrl','s')

