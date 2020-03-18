let pathToScript = require('./script');
let request = require('request');

const http = require('http');

request('https://api.openbrewerydb.org/breweries', (error, response, body) => {
  
if (!error && response.statusCode == 200) {
        
    // the task 1
    let fullListOfBreweries = JSON.stringify(JSON.parse(body));
      
    // the task 2
    let jsonObje = JSON.parse(body);
    pathToScript.fun2(jsonObje);

    // the task 3
    // let defaultBreweryName = 'State 48 Brewery';
    // console.log(pathToScript.fun3(defaultBreweryName));

    // variable for task 4
    let listOfBreweriesAddresses = [];
   
    for (let entry of pathToScript.fun4()) { 
        listOfBreweriesAddresses.push(entry);
    }

    listOfBreweriesAddresses = JSON.stringify(listOfBreweriesAddresses);

    // variables for task 5
    let id = [];
    let name =[];
    let address = [];
    let phone = [];
    let website_url = [];
    let struct_table = "";
    let resultTableHtml = "";

    [id, name, address, phone, website_url] = pathToScript.fun5();
    
    for(let i = 0; i < id.length; i++){
        struct_table += `<tr align="center"><td>`+id[i]+`</td><td>`+name[i]+`</td><td>`
                        +address[i]+`</td><td>`+phone[i]+`</td><td>`+website_url[i]+`</td></tr>`;
    }

    resultTableHtml = `   
                        <!doctype html>
                        <html>
                            <head>
                                <meta charset="utf-8">
                                <title>Задание 5</title>
                               
                            </head>
                            <body> 
                            <table border="1" width = "100%">
                                <tr>
                                    <th>Идентификатор</th><th>Название</th><th>Полный адрес</th>
                                    <th>Телефон</th><th>Адрес сайта</th>
                                </tr>
                                `+struct_table+`
                            </table>    
                            </body>
                        </html>`;

    http.createServer((request, response) => {
        
        switch(request.url){

            case '/': 
                response.writeHead(200, { 'Content-Type': 'application/json, charset=utf-8'});
                response.end(fullListOfBreweries);
            case '/task4':
                response.writeHead(200, { 'Content-Type': 'application/json, charset=utf-8'});
                response.end(listOfBreweriesAddresses);
            case '/task5':
                response.writeHead(200, { 'Content-Type': 'text/html, charset=utf-8'});
                response.end(resultTableHtml);
            default:
                response.writeHead(404, { 'Content-Type': 'text/plain, charset=utf-8'});
                response.end('404 - Not found');
        }
     
    }).listen(8080, () => console.log('........................server is running'));

  }
});
