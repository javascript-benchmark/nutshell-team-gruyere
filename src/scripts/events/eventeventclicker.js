import jwapiManager from "./eventsapimanager.js"
import jweventsdomprinter from "./eventsdomprinter.js"


const addeventbuttonclick = document.querySelector("body")

// WHEN BUTTON IS CLICKED WILL BRING UP ADD EVENT INPUT

const addeventlist =
  addeventbuttonclick.addEventListener("click", function () {

    if (event.target.id.includes("event-button")) {
      document.querySelector("#buttonsection").innerHTML = `
         <h2>ADD EVENT</h2>
         <form>
NAME OF EVENT: <input type="text" id= "nameofevent"  value=" ">
<br><br>
LOCATION: <input type="text" id="locationofevent" value=" ">
<br></br>
DATE OF EVENT : <input type="text" id="dateofevent" value=" ">
<br></br>
</form>
<button id=jwsubmitbutton>SUBMIT</button> `

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
    }
  })


export default addeventlist