import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null); // stores the API response
    const [loading, setLoading] = useState(false);// tells us whether the request is happening
    const [error, setError] = useState(null); // stores an error if the request fails


    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            try {
                const response = await fetch(url);
                const result = await response.json();

                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return {
        data,
        loading,
        error,
    };

}
export default useFetch;