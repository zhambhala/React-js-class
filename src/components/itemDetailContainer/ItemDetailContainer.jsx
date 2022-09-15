/*import {useEffect ,useState} from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from "../itemDetail/ItemDetail"

function ItemDetailContainer() {
    const [loading, setLoading]= useState(true)
    const [item, setItem] = useState(null)
    const {itemId} = useParams()
    console.log(item)
    console.log(itemId)
    useEffect(()=>{
        setLoading(true)
        pedirDatos()
        .then((res)=>{
            setItem(res.find((prod)=> prod.id === Number(itemId)))
        })
        .catch(error => console.log(error))
        .finally(()=>{setLoading(false)
        })
    }, [])
  return (
    <div>
        {loading ? <h2>loading....</h2> :<ItemDetail item={item}/>
        }
    </div>
  )
}

export default ItemDetailContainer*/