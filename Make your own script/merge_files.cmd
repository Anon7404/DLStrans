@echo off
 
set "result=outfile.json"
 
>"%result%" (
for /f "delims=" %%i in ('2^>nul dir/a-d/b *.json') do @(
 if "%%i" neq "%result%" (
  echo [%%i]
  <"%%i" more| more
 )
)
)
 
exit/b 0