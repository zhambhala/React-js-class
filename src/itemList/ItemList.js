import Item from "../components/item/Item"


const ItemList = ({productos=[]})=>{
    
  return (
    <div>
    <h1>Productos</h1>
    <div className="row m-2 p-5"> {productos.map((prod)=><Item producto={prod} key={prod.id}/>)}</div>
    </div>
  )
}
export default ItemList