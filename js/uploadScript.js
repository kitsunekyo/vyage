// sköter kontakt med php

const addNewImg = document.getElementById("newPostPictures");
const nyImg = document.getElementById("newPostPics");
const hiddenForm = document.getElementById("hiddenForm");
const imgUploadBtn = document.getElementById("hiddenButton");
let fileInput = document.getElementById("hiddenInput");
let currentClickedDiv;
let newPost = {
    //id:,
    //creatorId: , 
    //rubrik: ,
    //country; , 
    //category: ,
    //coverImg: ,
    //otherImg: [],
    //description: , 
};

//function för att trigga igång val av file 
function chooseImg(e){
    //currenttarget = elementet före punkten, alltså coverImg eller nyImg
    //target = det elementet som man klickar på
    // så om klickat element är samma som det som står före punkten, då ska dialogfönstret öppnas
    if (e.target !== e.currentTarget && e.target.id !== "newPostPics") {
        currentClickedDiv = e.target.id;
        // console.log(e.target.style.background); //returns empty string
        //trigga dialogfönster vid klick av ram för upload (triggar klick-eventet på file-upload-input)
        fileInput.click();
    }
    e.stopPropagation();
}


//function för att trigga igång upload av image
function uploadImg(){
    let formData = new FormData(hiddenForm);
    let nyReq = new Request("http://localhost:7070/admin/imgUpload.php", {
        method: "POST",
        body: formData
    });
    fetch(nyReq)
        .then(resp => {
            if (!resp.ok) {
                throw Error();
            }
            return resp.json();
        })
        .then(resurs => {
            //resurs == sökvägen till den nya uppladdade bilden, sparad under key "file"
            let currentPic = resurs.file;
            //hämta in diven med id:n "currentclickeddiv" och byta bakgrundsbild på den, samt töm +:et
            let currentDiv = document.getElementById(currentClickedDiv);
            currentDiv.innerHTML = "";
            //här måste vi hämta in den nya sökvägen från php:n
            currentDiv.style.background = `url(${currentPic})`;
            currentDiv.style.backgroundSize = "cover";
            currentDiv.style.backgroundPosition = "center";
            //gå in i posts, hitta respektive post med id, och pusha in den nya bilden i arrayn, om post redan existerar, är det en helt ny post, så måste vi skicka ett nytt objekt till databasen enligt objektet ovan 
            //om man klickar igen, så kommer dialogfönstret upp igen, så att man kan byta bild igen, man får dock lägga en unlink 
        })
        .catch(error => {
            console.log(error.message);
            alert("Something went wrong with the upload");
        });
}

//function för att lägga till all info i databasen under posts 
function newPostToDB() {
    //skicka info till db: kolla om iaf coverimage och fälten är ifyllda innan det skickas 
    newPost.ID = " "; //gå igenom alla och ge högsta ID till den nya 
    newPost.creatorID = loggedInUserID; //loggedInUserID = från upload.php som hämtats in via sessions
    newPost.date = false; //timestamp för inlägget
    newPost.description = " ";
    newPost.rubrik = " ";
    newPost.travelcategory = " ";
    newPost.country = " ";
    //lägga till id på serversidan? för att säkerställa att det verkligen är den högsta siffran

}


//eventhandlers

addNewImg.addEventListener("click", chooseImg, false);

// addNewImg.addEventListener("mouseenter", function(e){
//     console.log(this.id);
//     if (e.target !== e.currentTarget && e.target.id !== "newPostPics") {
//         console.log(this.id);
//     }
//     // e.stopPropagation();
    
//     // document.getElementById(this.id).
// });

fileInput.addEventListener("change", uploadImg, false);

//om man klickar på bilden och background-img är add.png, då ska funktionen uploadImg anropas. annars ingen klick och vid hover dyker trash-containern upp. vid klick på trash, delete-anrop, där man tar bort bilden med unlink --> problem med vanilla.. får ej fram vilken bakgrundsbild som elementet har, eventuellt lägga en class på diven när den fylls och sedan tas bort igen när den är empty --> if element hasClass --> då ska trashcan dyka upp, och ingen chooseimg, 

