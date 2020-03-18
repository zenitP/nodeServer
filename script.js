let arrayBreweryObjects = [];
let arrayStatesObjects = [];

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
    
    fun2:
    function ty(json){

        for (let i=0; i< json.length; i++) { 
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
          
                arrayStatesObjects.push(json[i].state);
        }  
    },

    fun3: 
    getAddress = function getFullAddres(fullBreweryName){

        let fullBreweryAddress;

        for(let i = 0; i < arrayBreweryObjects.length; i++){
            
            if(arrayBreweryObjects[i].getName === fullBreweryName){
                
                fullBreweryAddress = "[postal_code: "+arrayBreweryObjects[i].postal_code
                                    +" |country: "+arrayBreweryObjects[i].country
                                    +" |state: "+arrayBreweryObjects[i].state
                                    +" |city: "+arrayBreweryObjects[i].city
                                    +" |street: "+arrayBreweryObjects[i].street+"]";
  
                return fullBreweryAddress;  
            }
        }    
    },
    
    fun4:
    function getListAddresses(){
     
        arrayStatesObjects = Array.from(new Set(arrayStatesObjects));
          
        // state => brewery_1.address
        //       => brewery_2.address
        let maps = new Map();

        let breweryRepeatOk;
        
        for (let i = 0; i < arrayStatesObjects.length; i++) {

            breweryRepeatOk = [];

            for (let j = 0; j < arrayBreweryObjects.length; j++) {
                
                if (arrayStatesObjects[i] === arrayBreweryObjects[j].state) {
                    breweryRepeatOk.push(getAddress(arrayBreweryObjects[j].name));               
                }  

                if (j == arrayBreweryObjects.length-1) {
                    maps.set(arrayStatesObjects[i], breweryRepeatOk);
                }
            }
        }

        return maps;  
    },

    fun5:
    function getNoMicro(){

        let id_table = [];
        let id_name = [];
        let id_address = [];
        let id_phone = [];
        let id_wesite_url = [];
 
        for(let i = 0; i < arrayBreweryObjects.length; i++){
            if(arrayBreweryObjects[i].brewery_type != 'micro'){
                
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
