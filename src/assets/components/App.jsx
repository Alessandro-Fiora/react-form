import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([
    {
      title: "Articolo 1",
      author: "Alessandro Fiora",
      status: "Draft",
    },
    {
      title: "Articolo 2",
      author: "Alessandro Fiora",
      status: "Published",
    },
    {
      title: "Articolo 3",
      author: "Alessandro Fiora",
      status: "Published",
    },
  ]);

  const [newArticleTitle, setnewArticleTitle] = useState("");
  const [newArticleAuthor, setnewArticleAuthor] = useState("");

  const handleTitleInputChange = (e) => {
    setnewArticleTitle(e.target.value);
  };
  const handleAuthorInputChange = (e) => {
    setnewArticleAuthor(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newArticles = [
      ...articles,
      { title: newArticleTitle, author: newArticleAuthor },
    ];
    setArticles(newArticles);
  };

  const handleDeleteButtonClick = (index) => {
    const newArticles = [...articles];
    newArticles.splice(index, 1);
    setArticles(newArticles);
  };

  return (
    <>
      <div className="container p-5">
        <h1>Lista articoli</h1>
        <form onSubmit={handleFormSubmit}>
          <label for="title-input" className="form-label">
            Inserisci il titolo dell'articolo:
          </label>
          <input
            id="title-input"
            onChange={handleTitleInputChange}
            value={newArticleTitle}
            className="form-control my-3"
            type="text"
          />
          <label for="author-input" className="form-label">
            Inserisci l'autore dell'articolo:
          </label>
          <input
            id="author-input"
            onChange={handleAuthorInputChange}
            value={newArticleAuthor}
            className="form-control my-3"
            type="text"
          />
          <button className="btn btn-primary mb-3">Aggiungi</button>
        </form>

        <div className="article-list-container">
          <ul>
            {articles.map(
              (article, index) =>
                article.title && (
                  <li key={index}>
                    <div className="d-flex">
                      <div className="article-info flex-grow-1">
                        <h3 className="h5">{article.title}</h3>
                        <h4 className="h6 fw-normal">
                          {article.author ? "Autore: " + article.author : ""}
                        </h4>
                        <h4 className="h6 fw-light">
                          {article.status
                            ? "Stato articolo: " + article.status
                            : ""}
                        </h4>
                      </div>
                      <div className="article-buttons">
                        <button
                          onClick={() => {
                            handleDeleteButtonClick(index);
                          }}
                          className="btn p-0 mx-3"
                        >
                          <i className="mx-3 fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
