//Switch//

//The switch statement evaulates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case

const num = 70;

switch(num){
    case 50:
        console.log("Fifty!")
        break
    case 60:
        console.log("Sixty!")
        break
    case 70:
        console.log("Seventy!")
        break
    default:
        console.log("Default behaviour")
        break
}