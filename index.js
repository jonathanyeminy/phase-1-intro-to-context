// Your code here
let employeeRecord = {}
function createEmployeeRecord([firstName, familyName, title], payPerHour) {
    let timeInEvents = []
    let timeOutEvents = [] 
    let employeeRecord = { 
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: timeInEvents,
        timeOutEvents: timeOutEvents
    }
}

createEmployeeRecord(["Gray", "Worm", "Security"], 1)
console.log(employeeRecord)
//function createEmployeeRecords() {}