from pyperclip import *
import pathlib

r=r'D:\Gits\SmartUserScripts\SO_Lines.user.js'
import re
a=re.search('.*==/UserScript==',open(r).read(),re.M|re.S)[0]
a=re.sub('// @updateURL.*',f'// @require   	{pathlib.Path(r).as_uri()}',a)
copy(a)