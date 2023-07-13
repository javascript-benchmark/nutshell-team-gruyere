


const articleAPIManager = {

    getAllArticles: () => {
        return fetch ("http://localhost:8088/news")
        .then(response => response.json()
        );
    },

    getOneArticle: articleId => {
        return fetch(`http://localhost:8088/news/${articleId}`)
        .then(response => response.json()
        );
    },

//      Method to post one Article
    postArticle: singleArticleObject => {
        return fetch("http://localhost:8088/news", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(singleArticleObject)
        })
    },

    deleteOneArticle: id =>
        fetch(`http://localhost:8088/news/${id}`, {
        method: "DELETE"
        }),

    editOneArticle: (id, articleObject) => {
            return  fetch(`http://localhost:8088/news/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(articleObject)
            })
    }
}


export default articleAPIManager;