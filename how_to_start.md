1) download and unzip the project
2) to start you will need installed node.js. You can read about the installation on the official website - here https://nodejs.org/en/download/package-manager/. Download here https://nodejs.org/en/download/
3) go to the root of the project (you can use the commands "cd" from the terminal) and enter "node nodeServer". Then you will see "........................server is running" in case of a successful launch. 
4) go to the browser and enter one of the addresses localhost:8080(/, /task4, /task5)

--------------------------------------------------------------------------------------
* you can stop the server with the command: pgrep node |xargs kill -9
* check port 8080 for "busy", command: lsof -i tcp: 8080
* If the browser does not support json data display, you can install the plugin https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc
