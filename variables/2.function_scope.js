//Variables declared with var inside a function
//in function scope the variable is declared right after the function is created

function functionScopeExample(){
    var functionScopedVar= "Accesible within this function"
    if (true){
        var stillFunctionScopedVar = "Also accessible withing the whole function, not jsut this block"
    }

    console.log(functionScopedVar)//Accessible withing this fcuntion
    console.log(stillFunctionScopedVar)//Also accessible withing the whole function not just this block
}

functionScopeExample()