// Fill in the functions for your Renderer Class

Handlebars.registerHelper('toProperCase', function(item){
    let newItem = ""
    for ( let i in item ) {
        i = parseInt(i)
        if ( i == 0  || item[i-1] == " " ) {
            newItem += item[i].toUpperCase()
        }
        else {
            newItem += item[i]
        }
    }
    return newItem;
})

class Renderer {
    _renderUsers(users) {
        let source = $("#user-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(users)
        $(".user-container").append(newHTML)
    }

    _renderFriends(users) {
        let source = $("#user-friends-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({friends: users})
        $(".friends-container").append(newHTML)
    }

    _renderQuote(quoteInfo) {
        let source = $("#quote-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(quoteInfo)
        $(".quote-container").append(newHTML)
    }

    _renderPokemon(pokemonInfo) {
        let source = $("#pokemon-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(pokemonInfo)
        $(".pokemon-container").append(newHTML)
    }

    _renderMeat(meatText) {
        let source = $("#meat-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(meatText)
        $(".meat-container").append(newHTML)
    }

    render(data){
        //invokes all the individual _render methods
        this._renderUsers(data.users[0])
        this._renderFriends(data.users.slice(1))
        this._renderQuote(data.quote)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data.meatText)
        
    }
    showUsersToLoad() {
        let localUsers = JSON.parse(localStorage.users)
        let names = []
        for ( let user of localUsers ) {
            names.push(Object.keys(user)[0])
        }
        let source = $("#load-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({names})
        $("#users").append(newHTML)
        $(".dropdown").on("click",loadUserPage)
    }
}

