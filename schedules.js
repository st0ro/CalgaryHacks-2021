const fs = require('fs')

class Session {
    constructor(sessionName, password, dayOfWeek, encryptedPass, startHour, startMin, endHour, endMin, colour) {
        this.sessionName = sessionName
        this.password = password
        this.encryptedPass = encryptedPass;
        this.dayOfWeek = dayOfWeek
        this.startHour = startHour
        this.endHour = endHour
        this.startMin = startMin
        this.endMin = endMin
        this.colour = colour
    }
}

function loadSessions() {
    return JSON.parse(fs.readFileSync('sessions.json'))
}

function addSession(session) {
    var sessions = loadSessions()
    sessions.push(session)
    fs.writeFile('sessions.json', JSON.stringify(sessions), (err) => {
        if (err) throw err;
        console.log("file saved");
    })
    return sessions;
}