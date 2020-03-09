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
    let listOfBreweriesAddresses = JSON.stringify(pathToScript.fun4());

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
                        </html> `;

    http.createServer((request, response) => {
        
        // for tasks *, 4, you need to change {'Content-Type': 'application/json'}
        response.writeHead(200, { 'Content-Type': 'text/html, charset=utf-8'});

        // variables for other tasks
        // * fullListOfBreweries
        // 4 listOfBreweriesAddresses
        // 5 resultTableHtml

        // demonstration of task 5
        response.end(resultTableHtml);
     
    }).listen(8080, () => console.log('........................server is running'));

  }
});




