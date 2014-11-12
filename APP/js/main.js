
// On définit une variable globale
// permettant de stocker l'identifiant de l'utilisateur
var userId = 0;

// Une fois que le DOM est bien chargé
$(function () {


    // Si l'utilisateur appuie sur une touche
    // dans le champ imput d'id #userNickname
    $('#userNickname').keypress(function(eventObject) {
        // Si cette touche est la touche "entrée"
        if (eventObject.which == 13)
        {
            // On appelle la fonction userConnect()
            userConnect();
            console.log("je suis la!");
        }
    });

    //messageListRefresh();
    //usersListRefresh();
});


// Fonction de connection au t'chat du nouvel utilisateur
function userConnect()
{
    $.ajax(
        {
            // On définit l'URL appelée
            url: 'http://localhost/tchat/API/index.php',
            // On définit la méthode HTTP
            type: 'GET',
            // On définit les données qui seront envoyées
            data: {
                action: 'userAdd',
                userNickname: $('#userNickname').val()

        },
             // l'équivalent d'un "case" avec les codes de statut HTTP
            statusCode:
            {
                // Si l'utilisateur est bien créé (case 201)
                201: function (response) {
                    // On stocke l'identifiant récupéré dans la variable globale userId

                    console.log(response);

                    // On masque la fenêtre, puis on rafraichit la liste de utilisateurs
                    // (à faire...)

                    $('#userNickname').hide();
                    $('#users').append('<li>'+$('#userNickname').val() + '</li>');

                    //usersListRefresh();
                    $('#userNickname').show();

                },
                // Si l'utilisateur existe déjà
                208: function()
                {
                    // On fait bouger la fenêtre de gauche à droite
                    // et de droite à gauche 3 fois
                    // (à faire...)

                    $('#users').append('<li>'+$('#userNickname').val() + '</li>');

                    $( "li" ).animate({
                        left: "10px",
                        opacity: 1
                    }, {
                        duration: 10,
                        queue: false
                    });


                }
            }
    })
}

    function usersListRefresh(){
        $('#users').append("hello "+$('#userNickname').val());
}