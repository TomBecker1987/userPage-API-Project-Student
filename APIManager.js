//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    

    loadData(){
        //you should make all your API requests here
        //each request should update the `data` object accordingly

        let dataObj = this.data;
        
        //get random users (object.results - array of 7 user objects )
        $.ajax({
            method:"GET",
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            success: function(result) {
                dataObj.users = result.results;
                // return dataObj;
            },
          })

        //get random quote (object.contents.quotes[0].quote)
        $.ajax({
            method: "GET",
            url: 'https://quotes.rest/qod',
            success: function (result) {
                dataObj.quote = result.contents.quotes[0]
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
          }); 

        //get random Pokemon (get one Pokemon object)

        let randNum = Math.floor(Math.random() * 807) + 1  

        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${randNum}/`,
            success: function (result) {
                dataObj.pokemon = result
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
          }); 

          //get random meat text (get array with 1 string)

          $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=json`,
            success: function (result) {
                dataObj.meatText = {text:result}
            },
            error: function (xhr, text, error) {
                console.log(text);
            }
          }); 
    }
}


// let request = new APIManager()
// let dataObj = request.loadData() //here I get an object. each key corresponds to a different request: users, quote, pokemon, meatTxt