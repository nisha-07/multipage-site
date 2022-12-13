import "./Home.css";

import { useFetch } from "../hooks/useFetch";

const Home = () => {
    const { data: articles, isPending, error } = useFetch("http://localhost:3000/articles");
    return (
        <div className="home">
            <h5>Home page</h5>
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {articles && articles.map(article => (
                <div key={article.id} className="card">
                    <h4>{article.title}</h4>
                    <p>{article.author}</p>
                    <a href={`/articles/${article.id}`}>Read more ...</a>
                </div>
            ))}
        </div>
    )
}

export default Home
