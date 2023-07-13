const jwapiManager = {

    getallevents: () => {
      return fetch("http://localhost:8088/events").then(response =>
        response.json()
      );
    },

    getoneevent: id => {
      return fetch(`http://localhost:8088/events/${id}`).then(response =>
        response.json()
      );
    },

    postevent: eventEntryObject =>
      fetch("http://localhost:8088/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(eventEntryObject)
      }),

    editeventEntry: (id, eventEntryObject) => {
      return fetch(`http://localhost:8088/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(eventEntryObject)
      })
    },

    deleteOneEntry: id =>
      fetch(`http://localhost:8088/events/${id}`, {
        method: "DELETE"
      })
  };

  export default jwapiManager;