class Session {
    constructor(sessionName, password, dayOfWeek, startTime, endTime) {
        this.sessionName = sessionName
        this.password = password
        this.dayOfWeek = dayOfWeek
        this.startTime = startTime
        this.endTime = endTime
    }
}

const fs = require('fs')
var sessions = []

function loadSessions() {
    sessions = JSON.parse(fs.readFileSync)
}

function addSession(session) {
    sessions.push(session)
    fs.writeFileSync('sessions.txt', JSON.stringify(sessions))
}