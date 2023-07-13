import addeventlist from "./eventeventclicker.js"
import jwapiManager from "./eventsapimanager.js"


// ADD EVENT BUTTON AND CREATES THE EVENT FORM

const jweventsdomprinter = {
    buildeventcomponent: () => {
        const eventLog = document.querySelector("#event-section")
        eventLog.innerHTML= ""
        document.querySelector("#apisection").innerHTML = ""
        eventLog.innerHTML = `
<h2>EVENTS</h2>
<button id="event-button">Add Event</button>
`
        jwapiManager.getallevents()
            .then(parsedevents => {
                // When they come back from the API, print them
            parsedevents.forEach(singleEvent => {
                // console.log(singleEvent)
            document.querySelector("#apisection").innerHTML +=
         `<h3>${singleEvent.name}</h3>
        <p>LOCATION:${singleEvent.location}</p>
        <p>DATE:${singleEvent.date}</p>
        <button id="edit-button-${singleEvent.id}">EDIT</button>
        `
                })
            });
    },

    printEventEditForm: (eventToEdit) => {

        const targetEventCard = document.querySelector(`#edit-button-${eventToEdit.id}`)

        targetEventCard.innerHTML = `<section>
          <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="edit-name-${eventToEdit.id}" type="text" value="${eventToEdit.name}">
          <br>
          <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="edit-location-${eventToEdit.id}" type="text" value="${eventToEdit.location}">
          <br>
          <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  id="edit-date-${eventToEdit.id}" type="text" value="${eventToEdit.date}">
          <br>
          <button id="save-edit-${eventToEdit.id}">Save</button>
        </section>`

    }
}


export default jweventsdomprinter;