##How to make your own translation script for RPG Maker MV
>
Hint: <code>use this expression</code>


### a) How to extract text.
* Backup "data" and "js" folders.

1. Take all "Map###" files that saved in utf-8 and copy somewhere else (files that saved with different coding have to be processed separately - this is important!) 
2. Place merge_files.cmd in the same folder and launch it.
3. After program window closed, delete all Map files, rename "outfile.json" to "maps1.json" (name doesn't matter as long as you get it), and relocate it somewhere else.
4. Repeat the same with left Map files that weren't saved in utf-8, and rename "outfile.json" to "maps2.json". You have to open them in Unicode (UTF-8) later.


5. Open maps1.json in text editor, in my case using Word, and save as maps1.doc.
6. Ctrl+H, replace all <code>},{</code> to <code>},^p{</code> (for non map files also use <code>","</code> -> <code>",^p"</code>) then switch to wildcards and replace all <code>"data"*"events"</code> to <code>"events"</code>. Don't forget to save from time to time.
7. Look for the lines with Japanese text. In this case it's look like "code":401,"indent":0,"parameters":["きゃあ！"]},
8. Switch to wildcards and search for all entries using <code>"code":401,"indent":?,"parameters"\*,^13</code>, then mark them with some color. Repeat the same with other lines. <code>(*1 see at the end of this readme)</code>
9. Search for <code>"name"*,</code> and all other entries you need. Don't forget to mark them with colors.


10. Remove wildcards, then choose Format -> Highlight two times, leave "find" blank and replace with <code>^p</code> - this should remove all text that wasn't highlighted with colors.
11. Use replacement <code>^p^p</code> to <code>^p</code> unstill you'll get solid wall of text. Remove highlight and format.
12. Use wildcards and replace all <code>"code":???,"indent":?,"parameters":\[</code> with nothing.
13. Clean up things like <code>"name":"",</code> or <code>"name":"EV001",</code> and <code>]},</code> (use <code>]},^p</code> -> <code>^p</code>), numbers at the beginning (use <code>^p^#,</code> -> <code>^p</code>), etc.
14. In the end you should get solid wall of text that looks like this:
<p>"ルーシアの現在のレベル　\\v[71]"<br>
"しない"<br>
"探索を終了する"<br>
"しない"<br>
"name":"橋",<br>
"name":"Chest1",<br>
"通常レベルが\\v[73]下がります"<br>
"\\c[3]ルーシア\\c[0]"<br>
etc.


15. Open Excel, copy all text form Word into first column. <code>(*2 see at the end of this readme)</code>
16. Go to Data -> Filter -> Advanced Filter.
17. Check "Unique records only".
18. Copy what you get first into Notepad then from there back into Word. Close Excel.
19. Clean up things you don't need to translate ("name":"Chest1", for example).
With this, you've made your default test file.


###b) How to translate (using googletrans as example).
20. Open Excel, copy all text form default test file into first column.
21. Upload default test file into google translate.
22. Paste translated text into Excel's second column. It should have matched length. If it don't, then you did something wrong. <code>(*3 see at the end of this readme)</code>


### c) How to make translation script.
23. Copy text from both columns into Notepad, then from there into new Word document (you want to leave your default test file untouched, you'll need it).
24. Ctrl+H and replace all <code>" "</code> with <code>' : '</code> then all <code>^p"</code> with <code>^p        '"</code> and all <code>"^p</code> with <code>"',^p</code> and save it as maps1_translated.doc. In general all Japanese lines that will be replaced should start with <code>'</code>, have <code>' : '</code> between Japanese and English, and all English lines that will replace them should end with <code>',</code>.
25. Copy all text from maps1_translated.doc into default_auto_trans.user.jc and install to browser.


### d) How to test script.
26. Open test_script.hrml with Notepad and copy all text from your default_auto_trans.user.jc under "alert("no errors");".
27. Open test_script.hrml with browser. If you don't get "no errors" message then there's some errors that prevent script from working correctly.
28. Use some debug tool (Ctrl+Shift+K in Firefox, Ctrl+Shift+I in Opera, etc - you also may need to reload page) to find and fix all errors. For example "I'll win" should look like "I\'ll win". You also can use this method to find script errors in some \*.json files (it won't work with maps tough AFAIK).
29. Repeat until you'll get "no errors" message.


### e) How to replace words.
30. After your script will be free of errors and running, copy some \*.json file, open it with Word, and paste content from your default test file - maps1.doc. Name it maps1_test.json for example.
31. Drag maps1_test.json into browser and check for non-replaced lines (alternatively: copy all text from browser into maps1_test.json, remove all translated lines and save).
32. Fix non-replaced lines in script, reload page in browser, find all non-replaced lines, rinse and repeat - until all of them they replaced correctly.
33. After script start to replace all lines, drag Map001.json into browser, wait until it finished work (it may take some time, up to 20+ min in case of big file and slow PC), copy all text, open Map001.json with Word, replace all text and save. Repeat with other maps.
34. Check map code using http://gamestailer94.de/translator/ or RPG MAKER MV Translator.html - if map doesn't show anything at all, then there's some errors in that map.


You now successfully replaced all Japanese text with your translation. Run a new game to test it.


### f) Other.
\*1. You also want to find and highlight with color all [file_name.json] entries. Use wildcards and <code>\[*json\]^13</code> to find them all then highlight with color.


\*2.  In case you're using RPG_Maker_MV_part_trans script or any similar script that translates MV games, you better to open that script, copy everything into word, use wildcards and find all Japanese lines using <code>'\*' : '</code>. Then copy all selected into new Word document, uncheck wildcards, find all <code>^p'</code> replace with <code>^p</code>, then find <code>' : '^p</code> and replace with <code>^p</code>. Paste everything into Excel's first column, and only *then* paste lines from your default test file *under* it (remember the number were it starts from). Then see 16. and 17. Copy your text from the number you remembered.

This will remove all the duplicates that may already been translated. Also, place your script above all other similar scripts that translates MV games, thus it will work first.


\*3. Better to paste translated text into Word and replace all <code>'</code> with <code>\'</code>. It will save you a lot of troubles later.

The end.
