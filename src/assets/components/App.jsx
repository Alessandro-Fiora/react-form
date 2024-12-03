import { useState } from "react";

function App() {
  const [newArticleTitle, setnewArticleTitle] = useState("");
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

  const handleFormChange = (e) => {
    setnewArticleTitle(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newArticles = [...articles, { title: newArticleTitle }];
    console.log("hai aggiunto: " + newArticleTitle);
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
            {articles.map((article, index) => (
              <li key={index}>
                {article.title}
                <i className="mx-3 fa-solid fa-trash-can"></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
