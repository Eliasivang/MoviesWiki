import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {useQuery} from '../hooks/useQuery.jsx'

export function Search() {
  
  const query = useQuery();
  const search = query.get("search");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (  
    <form 
    onSubmit={handleSubmit}>
      <div 
      className='flex items-center justify-center'>
        <input 
        className="h-10 p-2 text-black rounded-l-lg w-60 outline-0" 
        type="text" 
        placeholder="Search a Movie" 
        value={search ?? ""}
        onChange={(e) =>{
            const value = e.target.value;
            navigate("/?search=" + value)
        }}>
        </input>
        <button 
        className='w-8 h-10 text-black bg-white rounded-r-lg' 
        type="submit">
        <FaSearch 
        size={20}/>
        </button>
      </div>
    </form>
  )
 } 


