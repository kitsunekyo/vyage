"use strict";



/*function editProfile(){
    let profileBio = document.getElementById("profileBio");
    let bioText = profileBio.innerHTML; // Hämtar innehållet från bio text
    //Byt ut bioDiv till ett input fält med det innehållet som fanns sedan innan
    //Sen när användaren trycker på spara så byt tillbaka till en vanlig div igen
    
}

//Click event för att ändra på sin profil
let edit = document.getElementById("profileSettings");
edit.addEventListener('click', function(event){
    editProfile()
})*/ //var tvungen att släcka denna då den gör att denna js.fil inte fungerar, något är fel i ovan kod som gör att nedan inte körts/kaj



//Click event för registration!
let register = document.getElementById("register");
register.addEventListener('submit', function(event){
    event.preventDefault();

    let UserName = document.getElementById("newUsername").value;
    let UserPassword = document.getElementById("newPassword").value;
    let UserEmail = document.getElementById("newEmail").value;
    let UserTravelStatus = document.getElementById("travelStatus").checked;

    let request = new Request("../admin/api.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: UserName,
            password: UserPassword,
            email: UserEmail,
            travelStatus: UserTravelStatus
            //profilePic: false,
            //bio: false,
            //top3Wishes: false,
            //top3Favs: false
            //ovan behövs ej då det skaoas i apin /kaj
        })
    })
    fetch(request)
    .then(response => {
        return response.json();
    })
    .then(resource => {
        console.log(resource)
        if (resource.errors !== undefined) {
            let errorRegister = document.getElementById("errorRegister");
            errorRegister.innerHTML = "";
            let message = document.createTextNode(resource.errors)
            errorRegister.appendChild(message)
            document.getElementById("newUsername").value = "";
            document.getElementById("newPassword").value = "";
            document.getElementById("newEmail").value = "";        
        }  else if (resource.data !== undefined) {
            // Om användaren fyllt i input fälten korrekt så skapas en ny användare med feedback om att det går att logga in
            let errorRegister = document.getElementById("errorRegister");
            errorRegister.innerHTML = "";
            let message = document.createTextNode("Registration successful. Welcome to Voyage!")
            errorRegister.appendChild(message)
            document.getElementById("newUsername").value = "";
            document.getElementById("newPassword").value = "";
            document.getElementById("newEmail").value = ""; 
            
        }
    })
})


// HMMMM INGET ANNAT VERAR FUNKA PÅ DENNA SIDA...typ som detta här udner funkar ej

// Funktioner för profileTop --------------------->
  
  // clickevent på profil i sidebar och på users på polariod
  // loopa db users och hitta den profil som är klickad på via namnet eller id?
  // ta dens top3Wishes och top3Favs - loopa dem
  // loopa element med class='topWantsList' och class='topFavsList'
  // placera användrens top tre på respektive

  let profileBtn = document.getElementById("profile");
  profileBtn.addEventListener("click", function(){
      // för den som är inloggad
      
      let path = window.location.search;
      console.log(path);

  })


  let path = window.location.search;
  console.log(path);
  console.log('path');
  