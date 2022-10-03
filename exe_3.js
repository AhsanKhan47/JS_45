let user = "Eren Yeager";

let lowerCase = user.toLowerCase();
console.log(`lowercase : ${lowerCase}`);

let upperCase = user.toUpperCase();
console.log(`Uppercase : ${upperCase}`);

function titleCase(statement){
    return statement
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(titleCase("wake up in the MORNING I GOT ORDER ON MY mind"));