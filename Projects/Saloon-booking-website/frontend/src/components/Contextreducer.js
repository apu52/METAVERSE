import React, { useContext,useReducer,createContext } from 'react'


const CartstateContext=createContext();
const CartdispatchContext= createContext();
const reducer=(state,action)=>{
    
    switch(action.type){
        
        case "ADD":
            
            return [...state,{service:action.service,price:action.price,qty:action.qty}]
        case "REMOVE":
            let newarr=[...state]
            newarr.splice(action.index,1)
            return newarr
        case "UPDATE":
            let arr=[...state]
            arr.find((data,index)=>{
                    console.log(action.service)
                    if(data.service===action.service)
                    {
                    arr[index]={...data,qty:(action.qty)}
                    }
                
                    return arr;
            })
            return arr;
        case "DROP":
            let emptyarr=[]
            return emptyarr;
        default:
                console.log("error")
    }
}

export const CartProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer,[])
    return(
        <CartdispatchContext.Provider value={dispatch}>
            <CartstateContext.Provider value={state}>
                {children}
            </CartstateContext.Provider>
        </CartdispatchContext.Provider>
    )
}
export const useCart=()=>useContext(CartstateContext);

export const useDispatchCart=()=>useContext(CartdispatchContext);




