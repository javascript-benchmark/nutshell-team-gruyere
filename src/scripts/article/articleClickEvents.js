import articleDOMPrinter from "./articleDOMPrinter.js";
import articlePrinter from "./articleDOMPrinter.js";
import articleAPIManager from "./articleAPIManager.js";

// ___ ~~~ NEWS ARTICLE COMPONENT ~~~ ___ //
// Created by: Melody Miller

const articleClickEvents = {

    // input for task section
    articleNewButton:() => { // ARTICLE ------ NEW ARTICLE BUTTON -----//

        // Event listener for the New Article button

        document.querySelector("#article-section").addEventListener("click", function() {
            if (event.target.id === "new-article-btn") {

                // console.log("New Article Btn Success!")
                articlePrinter.printArticleFormToDOM()

        }
      });

    },

    articleSaveButton:() => { // ARTICLE ------ SAVE ARTICLE BUTTON ------//
        document.querySelector("#news-header").addEventListener("click", function() {
            if (event.target.id === "save-new-article-btn") {

                // Input values of form
                const userInputTitle = document.querySelector("#new-article-title-box").value;
                const userInputSynopsis = document.querySelector("#new-article-synopsis-box").value;
                const userInputURL = document.querySelector("#new-article-URL-box").value;

                var currentTime = new Date();

                // POST input values
                const articleObjectToPost = {


                    title: userInputTitle,
                    synopsis: userInputSynopsis,
                    url:  userInputURL,
                    userId: 1,
                    date: currentTime
                };
                // API POST
            articleAPIManager.postArticle(articleObjectToPost)
            .then(articleAPIManager.getAllArticles)
            .then(parsedArticles => {
                // Print articles to container
                document.querySelector("#news-cont").innerHTML = "";

                articleDOMPrinter.printSavedArticles(parsedArticles)
            })

            }
        })
    },

    articleDeleteButton:() => { // ARTICLE ------- DELETE BUTTON ----------//
        document.querySelector("#news-cont").addEventListener("click", () => {
            // If the user clicks on a delete button, it deletes
            if (event.target.id.includes("delete-article")) {
                // get the unique id of the article to be deleted

                const wordArray = event.target.id.split("-");
                const idOfThingWeWantToDelete = wordArray[2];

            // Make a DELETE request to json-server
        articleAPIManager.deleteOneArticle(idOfThingWeWantToDelete).then(() => {
                // Once the delete is completed, get all the articles
            articleAPIManager.getAllArticles().then(parsedArticles => {
                    // Articles return, print them to the DOM again
                articleDOMPrinter.printSavedArticles(parsedArticles);
            });
        });
            }
        });

        },

    articleEditButton:() => { // ARTICLE ------ EDIT BUTTON ------//
            // Event listener for edit button
        document.querySelector("#news-cont").addEventListener("click", () => {
            if (event.target.id.includes("edit-article")) {
                    // console.log("Edit Btn Success!")
                    // Get the id of the thing to edit from the button's id attribute
                    const wordArray = event.target.id.split("-");
                    const idOfThingWeWantToEdit = wordArray[2];

              // Pass id into articleAPIManager to bring back the article to edit
            articleAPIManager.getOneArticle(idOfThingWeWantToEdit).then(singleArticle => {
                articleDOMPrinter.printArticleEditForm(singleArticle);
            });
                }
            });
        },

        // input for task section
    articleSaveEditButton:() => { // ARTICLE ------ SAVE EDIT BUTTON ------ //

         document.querySelector("body").addEventListener("click", () => {
                if (event.target.id.includes("save-edit")) {
                console.log("Btn Success!")
          // Retrieve the id of the thing we want to edit
          const wordArray = event.target.id.split("-");
          const idOfThingWeWantToEdit = wordArray[2];

          // Retrieve the value of the input
          const editedInputValue = document.querySelector(
            `#edit-input-${idOfThingWeWantToEdit}`
          ).value;

          // Insert the input value into an object
          const editedArticleObj = {
            title: editedInputValue,
            synopsis: editedInputValue,
            url: editedInputValue,
            userId: localStorage.getItem("userId")
          };

          // Send to database w/ PUT method
          articleAPIManager
            .editOneArticle(idOfThingWeWantToEdit, editedArticleObj)
            .then(() => {
              articleAPIManager.getAllArticles().then(allArticles => {
                articleDOMPrinter.printSavedArticles(allArticles);
              });
            });

        }
      });


    }
}


export default articleClickEvents



