// console.log("newadminjs is loaded");

function addNewAdmin(){
    let name = document.getElementById("nameInput").value;
    let ID = document.getElementById("idnoInput").value;
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
    if(ID.length < 12){
        window.alert("The Aadhaar number is incorrect");
        return;
    }
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
        if(data.name == name){
            window.alert("Successfully added new general user");
            document.getElementById("nameInput").value = "";
            document.getElementById("idnoInput").value = "";
            document.getElementById("addressInput").value = "";
            document.getElementById("phoneInput").value = "";

            location.reload();
        }
        else{
             window.alert("Failed to add new general user");
        }
    })
    .catch(error => {
        console.error(error);
    });
}
