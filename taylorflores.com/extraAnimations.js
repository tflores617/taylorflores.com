function setOnClicks(){
    document.getElementById('bannerButton')
        .addEventListener('onclick', ()=>{
            document.getElementById('wrapper').scrollIntoView(true)
        })
}