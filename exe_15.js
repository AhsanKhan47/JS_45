
let invitationList =  ["Eren Yeager", "Muhammad ali", "Mikasa"];


console.log(`${invitationList[2]} did not accept the invitation due to his boyfriend Eren`);
invitationList.splice(2,1, "Ayanokoji");


console.log(`It'll be a pleasure to have you at the dinner. Please accept the invitation ${invitationList} `);


// exercise 16
console.log("Attention!!! \n Due to too much request we managed to book a large dinning table.")
invitationList.splice(0, 0, "Karuizawa san");
console.log(invitationList);
invitationList.splice(2,0, "Yagami Light");
invitationList.push("Karen");
console.log(`\n`)
console.log(`It'll be a pleasure to have you at the dinner. Please accept the invitation ${invitationList[0]}`);
console.log(`It'll be a pleasure to have you at the dinner. Please accept the invitation ${invitationList[1]}`);
console.log(`It'll be a pleasure to have you at the dinner. Please accept the invitation ${invitationList[2]} \n`);

console.log(`It'll be a pleasure to have you at the dinner. Please accept the invitation ${invitationList} `);


// exercise 17
console.log("The dinning table won't arrive at the requested time. We may be able to only accept two invitation");


console.log( )