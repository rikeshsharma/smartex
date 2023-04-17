// console.log("newadminjs is loaded");

function submitForm(){
    let name = document.getElementById("nameInput").value;
    let ID = document.getElementById("AdhaarIDInput").value;
    let address = document.getElementById("addressInput").value;
    let phoneno = document.getElementById("phoneInput").value;

    if(name.length === 0){
        window.alert("Name field must not be empty");
        return;
    }
    if(name.length < 2){
        window.alert("Please enter a correct Name");
        return;
    }
    let IDpattern = /^\d{12}$/;

    if(ID.match(IDpattern)){
        
    }
    else{
        window.alert("The Aadhaar number is incorrect");
        return;
    }
    ID = "GUID" + ID;
    if(address.length === 0){
        window.alert("Please enter address to proceed");
        return;
    }
    let phoneNumberPattern = /^\d{10}$/;
	if(phoneno.match(phoneNumberPattern)){
      
    }
    else{
        window.alert("Enter a correct phone number");
        return;
    }

    fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=addGeneralUser', {
        method: 'POST',
        body: JSON.stringify({
            ID : ID,
            name : name,
            address : address,
            phoneno : phoneno,
        }),
        headers: {
            // 'Content-Type': 'application/json'
            // "Access-Control-Allow-Origin": "*"
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle success or error response from server
        // console.log(data);
        console.log(data);
        if(data.name == name){
            window.alert("Successfully added new general user with user ID " + data.userID);
            // document.getElementById("nameInput").value = "";
            // document.getElementById("idnoInput").value = "";
            // document.getElementById("addressInput").value = "";
            // document.getElementById("phoneInput").value = "";

            // location.reload();
            window.location.href= "homepage.html";
        }
        else{
             window.alert("Failed to add new general user");
        }
    })
    .catch(error => {
        console.error(error);
    });
}
