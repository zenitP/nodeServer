var arrayBreweryObjects = [];
var arrayStatesObjects=[]; 

 class Brewery{
    
    constructor(id, name, brewery_type, street, city, state, postal_code, 
        country, longitude, latitude, phone, website_url, updated_at, tag_list) {

        this.id = id;
        this.name = name;
        this.brewery_type = brewery_type;
        this.street = street;
        this.city = city;
        this.state = state;
        this.postal_code = postal_code;
        this.country = country;
        this.longitude = longitude;
        this.latitude = latitude;
        this.phone = phone;
        this.website_url = website_url;
        this.updated_at = updated_at;
        this.tag_list = tag_list
        }

        get getName() {
            return this.name;
        }
    } 
    
    module.exports = {
    
    fun:
    function ty(json){

        for (var i=0; i< json.length; i++) { 
            arrayBreweryObjects.push(
              new Brewery(
                json[i].id, 
                json[i].name,
                json[i].brewery_type,
                json[i].street,
                json[i].city,
                json[i].state,
                json[i].postal_code,
                json[i].country,
                json[i].longitude,
                json[i].latitude,
                json[i].phone,
                json[i].website_url,
                json[i].updated_at,
                json[i].tag_list,
               )); 
                
        
                // arrayStatesObjects.push(
                //     json[i].state 
                // )  
    }  

    // the task 2
    //console.log(arrayBreweryObjects) 
    },

    fun2: 
    getAddress = function getFullAddres(fullBreweryName){

        var fullBreweryAddress;

        for(let i = 0; i < arrayBreweryObjects.length; i++){
    
            //  без проверки полей
            //  fullBrewerAddress = arrayBreweryObjects[i].map((item) => ({
                //   postal_code: item.postal_code,
                //   country: item.country,
                //   state: item.state,
                //   city: item.city,
                //   street: item.street
            //   }));
            
            if(arrayBreweryObjects[i].getName === fullBreweryName){
                
                fullBreweryAddress = "[postal_code: "+arrayBreweryObjects[i].postal_code
                                    +" |country: "+arrayBreweryObjects[i].country
                                    +" |state: "+arrayBreweryObjects[i].state
                                    +" |city: "+arrayBreweryObjects[i].city
                                    +" |street: "+arrayBreweryObjects[i].street+"]";

                console.log(fullBreweryAddress);  
                return fullBreweryAddress;  
            }
        }    
    },
    
    fun3:
    function Obj(NameState){

        //arrayStatesObjects = Array.from(new Set(arrayStatesObjects));

        let k = {
             Alabama: [],
             Alaska: [],
             Arizona: [],
             Arkansas: []
            };

            for(let j= 0; j < arrayBreweryObjects.length; j++){
                if(arrayBreweryObjects[j].state == "Alabama"){
                    k.Alabama.push(getAddress(arrayBreweryObjects[j].name));
                }else 
                    if(arrayBreweryObjects[j].state == "Alaska"){
                        k.Alaska.push(getAddress(arrayBreweryObjects[j].name));
                    }else   
                        if(arrayBreweryObjects[j].state == "Arizona"){
                            k.Arizona.push(getAddress(arrayBreweryObjects[j].name));
                        }else   
                            if(arrayBreweryObjects[j].state == "Arkansas"){
                                k.Arkansas.push(getAddress(arrayBreweryObjects[j].name));
                            }
            }  
            return k;  
    },

    fun5:
    function(){

        let id_table = [];
        let id_name = [];
        let id_address = [];
        let id_phone = [];
        let id_wesite_url = [];
 
        for(let i = 0; i < arrayBreweryObjects.length; i++){
            if(arrayBreweryObjects[i].brewery_type != 'micro'){
                
                console.log(arrayBreweryObjects[i]);

                id_table.push(arrayBreweryObjects[i].id);
                id_name.push(arrayBreweryObjects[i].name);
                id_address.push(getAddress(arrayBreweryObjects[i].name));
                id_phone.push(arrayBreweryObjects[i].phone);
                id_wesite_url.push(arrayBreweryObjects[i].website_url);
            }  
        }

        return [id_table, id_name, id_address, id_phone, id_wesite_url];
    }
    
}; 
