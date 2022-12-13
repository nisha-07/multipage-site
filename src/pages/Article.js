import { useHistory, useParams } from "react-router-dom"

import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const Article = () => {
    // params is an object
    //const params = useParams();

    const { id } = useParams();
    const { data: article, isPending, error } = useFetch(`http://localhost:3000/articles/${id}`)
    const history = useHistory();

    useEffect(() => {
        if (error) { setTimeout(() => history.push("/"), 2000) }
    }, [error, history]);


    return (
        <div>
            <h4>Article details - {id}</h4>
            <hr />
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {article &&
                <>
                    <h4>{article.title}</h4>
                    <p>{article.author}</p>
                    <p>{article.body}</p>
                </>
            }
        </div >
    )
}

export default Article
