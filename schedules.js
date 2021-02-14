const fs = require('fs')
var colours = ["w3-light-blue", "w3-light-green", "w3-khaki", "w3-pale-red", "w3-deep-purple", "w3-orange"]

class Session {
    constructor(sessionName, meetingId, password, dayOfWeek, encryptedPass, startHour, startMin, endHour, endMin, colour) {
        this.sessionName = sessionName
        this.meetingId = meetingId;
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
    let input = JSON.parse(fs.readFileSync('sessions.json'))
    if(Array.isArray(input)){
       return input; 
    }
    let output = [];
    output.push(input);
    return output;
}

function addSession(session) {
    var sessions = loadSessions()
    session.colour = colours[sessions.length%6];
    sessions.push(session)
    writeToFile(sessions)
    return sessions;
}

function editSession(){
    //TODO
}

function removeSession(dayOfWeek, startHour, startMin){
    var sessions = loadSessions();
    for(let i = 0; i < sessions.length; i++){
        if(dayOfWeek === sessions[i].dayOfWeek && startHour === sessions[i].startHour && startMin === sessions[i].startMin){
            sessions.splice(i, 1);
            writeToFile(sessions);
            return;
        }
    }
}

function writeToFile(json){
    fs.writeFileSync('sessions.json', JSON.stringify(json), (err) => {
        if (err) throw err;
        console.log("file saved");
    })
}