import { stock } from "../data/Data"

export const pedirDatos = () =>{
    const error = false
    return new Promise((resolve, reject)=>{
        //cuerpo de la promesa
        setTimeout(()=>{
            if (!error) {
                resolve(stock)
            }else{
                reject("Error")
            }
            
        },2000)
    })
}