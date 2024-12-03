import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([
    {
      title: "Titolo articolo 1",
    },
    {
      title: "Titolo articolo 2",
    },
    {
      title: "Titolo articolo 3",
    },
  ]);

  const [newArticleTitle, setnewArticleTitle] = useState("");

  const handleFormChange = (e) => {
    setnewArticleTitle(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newArticles = [...articles, { title: newArticleTitle }];
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
          <h2 className="h4">Inserisci articolo:</h2>
          <input
            onChange={handleFormChange}
            value={newArticleTitle}
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
                    {article.title}
                    <button
                      onClick={() => {
                        handleDeleteButtonClick(index);
                      }}
                      className="btn mx-3"
                    >
                      <i className="mx-3 fa-solid fa-trash-can"></i>
                    </button>
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
