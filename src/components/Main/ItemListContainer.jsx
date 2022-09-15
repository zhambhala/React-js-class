//import React from 'react'
//import styled from "styled-components"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos" 
import ItemList from "../../itemList/ItemList"
export default function ItemListContainer() {

    const [productos,setProductos] = useState([])
    const [loading,setLoading] = useState(true)
    const {categoryId} = useParams()
    console.log(categoryId)
    useEffect(()=>{
        setLoading(true)

        pedirDatos()
        .then((res)=>{
            if (!categoryId) {
                setProductos(res)
            }else{
                setProductos(res.filter((prod)=> prod.categoryId === categoryId))
            }
            console.log(res)
          setProductos(res)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
            // console.log("fin del proceso")
        })

    },[categoryId])

return(
    <div>
    {loading? <h2>Cargando...</h2>
    :<div className="row bg-success  ">
        <ItemList productos={productos}/>
    </div>}
    </div>
)
}

