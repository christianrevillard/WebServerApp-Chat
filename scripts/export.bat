xcopy "%1..\..\Apps\Chat\Chat\Client" "%1Chat\Client" /Y /I /S
xcopy "%1..\..\Apps\Chat\Chat\Server" "%1Chat\Server" /Y /I /S
xcopy "%1..\..\Apps\Chat\Lib\Client" "%1Lib\Client" /Y /I /S /EXCLUDE:%2

