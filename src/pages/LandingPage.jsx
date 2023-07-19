import { MoviesGrid } from "../components/MoviesGrid"
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery"

export function LandingPage () {
    const query = useQuery();
    const search= query.get("search");

    const debouncedSearch = useDebounce(search,300);
    return (
        <div className="h-screen">
            <h1 className="p-3 text-4xl font-light text-center bg-violet-800 ">Discover :</h1>
        <div className="flex items-center justify-center">
            <MoviesGrid key={debouncedSearch} search= {debouncedSearch}/>
        </div>
        </div>
    )
}