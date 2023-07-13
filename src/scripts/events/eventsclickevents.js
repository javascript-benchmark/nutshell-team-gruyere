import jwapiManager from "./eventsapimanager.js"
import jweventsdomprinter from "./eventsdomprinter.js"

const jwClickEvents= {
newEventPost: ()=> {

    document.querySelector("#jwsubmitbutton")
    .addEventListener("click", function () {
      // On click, create an object with the values from the user's inputs

      const newEventToPost = {
        name: document.querySelector("#nameofevent").value,
        location: document.querySelector("#locationofevent").value,
        date: document.querySelector("#dateofevent").value
      };
      // Post the object to json-server
      jwapiManager
        .postevent(newEventToPost)
        .then(jwapiManager.getallevents)
        .then(parsedEventArray => {
          // Get all the journal entries from json-server and reprint them to refresh the page
          jweventsdomprinter.buildeventcomponent(parsedEventArray);
        });
    });
},

// Event listener for edit button
editEvent: ()=>{
document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes(`edit-button-${event.target.id.split("-")[2]}`)) {
      jwapiManager
        .getoneevent(event.target.id.split("-")[2])
        .then(singleEvent => {

          jweventsdomprinter.printEventEditForm(singleEvent);
        });
    }
  });

},
    //   Event listner for submit button
submitEvent: ()=> {
    document.querySelector("body").addEventListener("click", () => {
        if (event.target.id.includes("save-edit-")) {

          const idFromDatabase = event.target.id.split("-")[2];

          // Get values of form inputs
          const nameValue = document.querySelector(`#edit-name-${idFromDatabase}`)
            .value;

          const locationValue = document.querySelector(
            `#edit-location-${idFromDatabase}`
          ).value;
          const dateValue = document.querySelector(
            `#edit-date-${idFromDatabase}`
          ).value;
          // Put them in an object
          const editedEventValues = {
            name: nameValue,
            location: locationValue,
            date: dateValue
          }

          // Make a PUT request to db
 // Refresh the page --> GET all and then reprint all
          jwapiManager.editeventEntry(idFromDatabase, editedEventValues)
            .then(jwapiManager.getallevents)
            .then(allTheEntries => {
              jweventsdomprinter.buildeventcomponent(allTheEntries)
            })

        }
      });
    }
}

export default jwClickEvents