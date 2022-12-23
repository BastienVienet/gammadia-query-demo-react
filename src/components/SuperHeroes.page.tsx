import {useState, useEffect} from 'react'
import axios, {AxiosResponse} from 'axios'

export const SuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<Array<{ name: string }>>([])

    useEffect(() => {
        axios.get<Array<{ name: string }>>('http://localhost:4000/superheroes').then((res: AxiosResponse<Array<{ name: string }>>) => {
            setData(res.data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <h2>Super Heroes Page</h2>
            {data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>
            })}
        </>
    )
}
