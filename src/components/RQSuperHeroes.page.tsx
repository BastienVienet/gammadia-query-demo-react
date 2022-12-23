import {useQuery} from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

type QueryResult = {
    isLoading: boolean,
    data: any,
    isError: boolean,
    error: any,
    isFetching: boolean
    refetch: any,
}

export const RQSuperHeroesPage = () => {

    const onSuccess = () => {
        console.log('Perform side effect after data fetching')
    }

    const onError = () => {
        console.log('Perform side effect after encountering an error')
    }

    const {isLoading, data, isError, error, isFetching, refetch}: QueryResult = useQuery(
        'super-heroes',
        fetchSuperHeroes, {
            enabled: false,
            onSuccess: onSuccess,
            onError: onError,
            select: (data: any) => {
                return data.data.map((hero: any) => hero.name)
            }
        }
    )

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            <button onClick={refetch}>Fetch heroes</button>
            {
                /*
                 data?.data.map((hero: { id: number; name: string }) => {
                     return <div key={hero.id}>{hero.name}</div>
                 })
                */
                data?.map((heroName: string) => {
                    return <div key={heroName}>{heroName}</div>
                })
            }
        </>
    )
}