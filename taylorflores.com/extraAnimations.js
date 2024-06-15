// eslint-disable-next-line no-unused-vars
function setOnClicks(){
    document.getElementById('bannerButton')
        .addEventListener('onclick', ()=>{
            document.getElementById('wrapper').scrollIntoView(true)
        })
}