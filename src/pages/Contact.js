import { useLocation } from "react-router-dom"

const Contact = () => {
    const queryString = useLocation().search;

    const queryParams = new URLSearchParams(queryString);
    const name = queryParams.get("name");


    return (
        <div>
            <h5>Contact page of {name}</h5>
        </div>
    )
}

export default Contact