from pyperclip import *
import pathlib,re,os
r=None
import tm
# r=r'D:\Gits\SmartUserScripts\SO_Lines.user.js'
if r:
	a=open(r).read()
else:
	a=paste().replace('\r','')
	f=(re.search('// @name (.*)',a)[1].strip().replace(' ','_')+'.user.js')
	r=open(f,'w')
	print(a,file=r)
	r=os.path.realpath(r.name)
import re
a=re.search('.*==/UserScript==',a,re.M|re.S)[0]
a=re.sub('// @updateURL.*',f'// @require   	{pathlib.Path(r).as_uri()}',a)
copy(a)