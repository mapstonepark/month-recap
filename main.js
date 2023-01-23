document.getElementById('recapInputForm').addEventListener('submit',saverecap)

function fetchrecaps() {
    let recaps = JSON.parse(localStorage.getItem('recaps'))
    let recapsList = document.getElementById('recapsList')
    console.log(recaps)

    recapsList.innerHTML = '';

    for (let i = 0; i < recaps.length; i++) {
        let id = recaps[i].id
        let month = recaps[i].month
        let description = recaps[i].description
        let severity = recaps[i].severity
        let familyInput = recaps[i].familyInput
        let status = recaps[i].status
        let statusColor = status == "Closed" ? 'label-success' : 'label-info'

        recapsList.innerHTML += 
        '<div class="well">' +
        '<h6>recap ID:' + id + '</h6>' +
        '<p><span class= "label ' + statusColor + ' ">' + status + '</span></p>' +
        '<h3>' + month + '</h3>' +
        '<p>' + description + '</p>' + 
        '<p><span class="glyphicon glyphicon-time"></span> ' + severity + ' ' + '<span class="glyphicon glyphicon-user"></span>' + familyInput + '</p>' +
        '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')">Close</a> ' +
        '<a href="#" class="btn btn-danger" onclick="deleterecap(\''+id+'\')">Delete</a> '
        + '</div>'
    }
}

function saverecap(e) {
    let recapId = chance.guid()
    let recapMonth = document.getElementById('recapMonthInput').value
    let recapDesc = document.getElementById('recapDescInput').value
    let recapHealth = document.getElementById('recapHealthInput').value
    let recapFamilyInput = document.getElementById('recapFamilyInput').value
    let recapStatus = 'Open'

    let recap = {
        id: recapId,
        month: recapMonth,
        description: recapDesc,
        severity: recapHealth,
        familyInput: recapFamilyInput,
        status: recapStatus
    }

    if(localStorage.getItem('recaps')===null) {
        let recaps = []
        recaps.push(recap)
        localStorage.setItem('recaps', JSON.stringify(recaps))
    } else {
        let recaps = JSON.parse(localStorage.getItem('recaps'))
        recaps.push(recap)
        localStorage.setItem('recaps', JSON.stringify(recaps))
    }

    document.getElementById('recapInputForm').reset();

    fetchrecaps()

    e.preventDefault()
}

function setStatusClosed(id) {
    let recaps = JSON.parse(localStorage.getItem('recaps'))
    for(let i=0; i < recaps.length; i++) {
        if(recaps[i].id === id) {
            recaps[i].status = "Closed"
        }
    }

    localStorage.setItem('recaps', JSON.stringify(recaps))

    fetchrecaps()
}

function deleterecap (id) {
    let recaps = JSON.parse(localStorage.getItem('recaps'))
    for(let i=0; i < recaps.length; i++) {
        if(recaps[i].id === id) {
            recaps.splice(i,1)
        }
    }

    localStorage.setItem('recaps', JSON.stringify(recaps))

    fetchrecaps()

}