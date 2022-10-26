let invitationList =  ["Eren Yeager", "Muhammad ali", "Mikasa"];

for (i=0; i<invitationList.length; i++){
    if(invitationList[i]=="Muhammad ali"){
        console.log(`${invitationList[i]} could not make it to the dinner`);
    }

    // console.log(`Please accept the invitation ${invitationList[i]},It'll be a pleasure to have you at the dinner. `)

}

//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
invitationList.splice(1,1, "Ayanokoji");
console.log(invitationList)

for(i=0; i<invitationList.length; i++){
    
    console.log(`${invitationList[i]},It'll be a pleasure to have you at the dinner.`)
}

// Exercise number 16
// bigger table found! exe 16

for(i=0; i<invitationList.length; i++){
    console.log(` ${invitationList[i]} We have found the bigger table `)

}


//Add one new guest to the beggining of your array.
invitationList.splice(0,0, "Mohsin bhoi");



//Add one new guest to the middle of your array.

invitationList.splice(2,0, "Mike");

//Add one new guest to the end of your array.
invitationList.push("Akon")

for(i=0; i<invitationList.length; i++){
    
        console.log(`${invitationList[i]},It'll be a pleasure to have you at the dinner.`)

}

// Exercise number 17 starts
console.log("The new dinner table won't arrive at the time so we will can only have two guest for the dinner.");
console.log(invitationList)




// for (  i = invitationList; invitationList.length > 2; invitationList.pop() ){
//     console.log( `Sorry ${invitationList.slice(-1)}  You can't be invited to the dinner.`)
// }
// console.log(invitationList)


//Second method
for(i = invitationList ; invitationList.length>2; invitationList.pop()){

    console.log(`Sorry ${invitationList.slice(-1)} You can't be invited to the dinner.`)

}
console.log(invitationList)

// // Point three

// for(i = 0; i < invitationList.length; i++){
//     console.log(`Hey ${invitationList[i]} Just letting you know that you are still invited.`)
// }
// invitationList.pop();
// invitationList.pop();
// console.log(invitationList)



























