
import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext()



const NoticiasProvider = ({children}) => {
    const [categoria, setCategoria] = useState("general")
    const [noticias,setNoticias]= useState([])
    const [pagina, setPagina] = useState(1)
    const [totaNoticias, setTotalNoticias]= useState(0)

    useEffect(() => {
        const consultarApi = async () => {
        const url=`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`
        const {data} = await axios(url)
        setNoticias(data.articles)
        setTotalNoticias(data.totalResults) 
        setPagina(1)
        }
        consultarApi()

    },  [categoria])

    useEffect(() => {
        const consultarApi = async () => {
        const url=`https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`
        const {data} = await axios(url)
        setNoticias(data.articles)
        setTotalNoticias(data.totalResults) 
        
        }
        consultarApi()

    },  [pagina])

    const handelChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    const handleChangePagina = (e,valor) => {
            setPagina(valor)
    }
    
return (

    <NoticiasContext.Provider
        value={{
            categoria,
            handelChangeCategoria,
            noticias,
            totaNoticias,
            handleChangePagina,
            pagina

        }

            
        }
    >
        {children}

    </NoticiasContext.Provider>
)

    }

export {
    NoticiasProvider
}

export default NoticiasContext