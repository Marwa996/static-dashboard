if(navigator.serviceWorker){
    navigator.serviceWorker.register("../sw.js")
    .then((reg)=>{
        console.log("File is registered", reg)
    })
    .catch((err)=>{
        console.log("ERROR", err)
    })
}