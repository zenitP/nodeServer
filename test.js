// (error, response, body) => or function(error, response, body)
 
var test = require('./script');

var request = require('request');
const http = require('http');

request('https://api.openbrewerydb.org/breweries', (error, response, body) => {
  
if (!error && response.statusCode == 200) {
    
    /*  Вывод в консоль. 
        Форматированный и нет. Для тестирования
    *
        console.log(JSON.parse(body));      
        console.log('body:', body); 
    */       

    /*  если данные JSON не как application/json, 
        имеет смысл дописать (JSON.parse(body), null, "   ")
    */

    var str = JSON.stringify(JSON.parse(body));
    var obje = JSON.parse(body);

    var defaultBreweryName = 'Avondale Brewing Co';
    

    test.fun(obje);

    // the task 3
    //test.fun2(defaultBreweryName);

    // the task 4
    // change to res.end(output4)
    // let defaultState = 'Arizona';
    // let output4 = JSON.stringify(test.fun3(defaultState));

    let id = [];
    let name =[];
    let address = [];
    let phone = [];
    let website_url = [];

    [id, name, address, phone, website_url] = test.fun5();

    //application/json
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        // the task 1
        let kkkkkk = "";
        for(let i = 0; i < id.length; i++){
            kkkkkk += `<tr align="center"><td>`+id[i]+`</td><td>`+name[i]+`</td><td>`+address[i]+`</td><td>`+phone[i]+`</td><td>`+website_url[i]+`</td></tr>`;
        }
       

        res.end(`
            <!doctype html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Заголовок</title>
                </head>

                <body> 
                <table border="1" width = "100%">
                    <tr>
                        <th>Идентификатор</th><th>Название</th><th>Полный адрес</th><th>Телефон</th><th>Адрес сайта</th>
                    </tr>
                    `+res.writeHead(200, { 'Content-Type': 'application/json'})+`
                    
              </table>
                        `+str+`
                </body>
            </html>
            
        `);
      
    }).listen(8080, () => console.log('........................server is running'));

  }
});




