import { pastConferences } from './data.js'

function generateSpeakers()
 {
    let pastSpeakersDisplay = document.getElementById("past-speakers-display")
    for ( let conference of pastConferences) {
        const year = conference.year
        const conferenceYear = document.createElement("div")
            conferenceYear.innerHTML += 
            `
                <div id="${conference.year}Conference">
                    <h1>Beartooth ${year}</h1>
                </div>
            `

        conferenceYear.className = "conference-year-container"
        pastSpeakersDisplay.append(conferenceYear)
    
        if (year === "2020") {
            conferenceYear.innerHTML += `
            <p>No Conference</p>
            `
        } else {
            for (let speaker of conference.speakers) {
                const name = speaker.name
                const homeTown = speaker.homeTown
                const memberOf = speaker.memberOf
    
    
                    conferenceYear.innerHTML += 
                    `
                        <p>${name} | ${homeTown} | ${memberOf}</p>
                    `
    
            }
        }
    }
}
    
generateSpeakers()

