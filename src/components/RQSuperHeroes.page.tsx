import {useQuery} from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

type QueryResult = {
    isLoading: boolean,
    data: any,
    isError: boolean,
    error: any
}

export const RQSuperHeroesPage = () => {
    const {isLoading, data, isError, error}: QueryResult = useQuery(
        'super-heroes',
        fetchSuperHeroes
    )

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            {
                data?.data.map((hero: { id: number; name: string }) => {
                    return <div key={hero.id}>{hero.name}</div>
                })
            }
        </>
    )
}