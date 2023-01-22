document.getElementById('recapInputForm').addEventListener('submit', saveRecap)

function fetchMonthRecap () {
    let recap = JSON.parse(localStorage.getItem('recap'))
    let recapList = document.getElementById('recapList')

    recapList.innerHTML = '';

    for (let i=0; i< recap.length; i++){
        let id = recap[i].id
        let month = recap[i].month
        let overall = recap[i].overall
        let health = recap[i].health
        let family = recap[i].family
        let home = recap[i].home
        let work = recap[i].work
        let exercising = recap[i].exercising
        let friends = recap[i].friends
        let memorable = recap[i].memorable
        let music = recap[i].music
        let media = recap[i].media
        let eat = recap[i].eat

        //recapList.innerHTML +=
    }
}

function saveRecap(e){
    let recapId = chance.guid()
}

// https://www.youtube.com/watch?v=tykncscV93Y&t=5158s
// currently at 1:46 of video