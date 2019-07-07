// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance

let request = new APIManager()
let render = new Renderer()

let data = {}

let loadData = function () {
    request.loadData();
    data = request.data
}

let renderData = function () {
    $(".user-container").empty()
    $(".quote-container").empty()
    $(".pokemon-container").empty()
    $(".meat-container").empty()
    $(".user-friends").empty()
    render.render(data)
}

let renderDT = function (dt) {
    $(".user-container").empty()
    $(".quote-container").empty()
    $(".pokemon-container").empty()
    $(".meat-container").empty()
    $(".user-friends").empty()
    render.render(dt)
}

let users

if ( localStorage.users == undefined ) {
    users = []
}
else {
    users = JSON.parse(localStorage.users)
}


let saveUserPage = function () {
    let user = {}
    let firstName = data.users[0].name.first;
    let lastName = data.users[0].name.last;
    let fullName = `${firstName} ${lastName}`
    user[fullName] = {...data}
    users.push(user)
    localStorage.users = JSON.stringify(users)
}


let loadUserPage = function () {
    $("#users").empty()
    let dt = JSON.parse(localStorage.users)
    for ( let d of dt ) {
        if (Object.keys(d)[0] == $(this).data(`id`)) {
            renderDT(d[$(this).data(`id`)]);
        }
    }
}




