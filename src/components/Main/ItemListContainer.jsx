//import React from 'react'
//import styled from "styled-components"
import { useState, useEffect } from "react"
import { pedirDatos } from "../../helpers/pedirDatos" 
import ItemList from "../../itemList/ItemList"
export default function ItemListContainer() {

    const [productos,setProductos] = useState([])
    useEffect(()=>{
        pedirDatos()
        .then((res)=>{
            console.log(res)
          setProductos(res)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
           // console.log("fin del proceso")
        })

    },[])

return(

    <div className="row"><ItemList productos={productos}/></div>
)
}

