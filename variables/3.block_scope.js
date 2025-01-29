//Block scope
//Variables declared with let or const inside a block(sorrounded by curly brackets)

function blockScopeExample(){
    let functionScopedVar= "Accesible within this function"
    
    if (true){
        let blockScopedVar = "Only accessible withing this block"
        console.log(blockScopedVar)//Accessible withing this fcuntion
    }

    //console.log(blockScopedVar) if I try to call the variable outside of the blok it will error out
    console.log(functionScopedVar)//Also accessible withing the whole function not just this block
}

blockScopeExample()