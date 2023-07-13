const articlePrinter = {

      printNewArticleButtonToDOM: () => {
      // Grab a reference to the output container
        document.querySelector("#news-header").innerHTML = "";

        document.querySelector("#article-section").innerHTML +=
        "<button id='new-article-btn'>New Article</button>";
      },

      printArticleFormToDOM: () => {
        // Grab a reference to the output container
        // document.querySelector("#article-section").innerHTML = "";

        document.querySelector("#news-header").innerHTML += `
        <form>
        <input type="text" id="new-article-title-box" placeholder="Title of News" />
        <br>
        <input type="text" id= "new-article-synopsis-box" placeholder="Synopsis" />
        <br>
        <input type="text" id="new-article-URL-box" placeholder="URL" />
        </form>
          <button id="save-new-article-btn">Save Article</button>`;
      },
      printSavedArticles: arrayOfArticlesParam => {
          document.querySelector("#news-cont").innerHTML = "";

          arrayOfArticlesParam.forEach(singleArticle => {

            document.querySelector(
              "#news-cont"
            ).innerHTML += `<div class="article-card" id="article-card-${singleArticle.id}">
            <p>TITLE: ${singleArticle.title}</p>
            <p>SYNOPSIS: ${singleArticle.synopsis}</p>
            <p>URL: ${singleArticle.url}</p>
              <button id ="delete-article-${singleArticle.id}">Delete</button>
              <button id ="edit-article-${singleArticle.id}">Edit</button>
          </div>
          `
          });
      },
      printArticleEditForm: (articleObjectToEdit) => {
          const articleTargetCard = document.querySelector(`#article-card-${articleObjectToEdit.id}`)

          articleTargetCard.innerHTML = `
          <section class="article-card">
          TITLE: <input type="text" id="edit-input-${articleObjectToEdit.id}" type="text" value="${articleObjectToEdit.title}"
          <br>
          SYNOPSIS: <input type="text" id="edit-input-${articleObjectToEdit.id}" type="text" value="${articleObjectToEdit.synopsis}"
          <br>
          URL: <input type="text" id="edit-input-${articleObjectToEdit.id}" type="text" value="${articleObjectToEdit.url}"
          <br>
            <button id="save-edit-${articleObjectToEdit.id}">Save</button>
          </section>
          `
      }
}
export default articlePrinter;