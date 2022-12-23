import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {QueryClientProvider, QueryClient} from 'react-query'
import '../style/App.css'
import {HomePage} from './Home.page'
import {RQSuperHeroesPage} from './RQSuperHeroes.page'
import {SuperHeroesPage} from './SuperHeroes.page'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
        <Router>
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/super-heroes'>Traditional Super Heroes</Link>
                        </li>
                        <li>
                            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/super-heroes' element={<SuperHeroesPage/>}/>
                    <Route path='/rq-super-heroes' element={<RQSuperHeroesPage/>}/>
                </Routes>
            </>
        </Router>
    </QueryClientProvider>
    )
}

export default App