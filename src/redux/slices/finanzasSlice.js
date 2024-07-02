import { createSlice } from "@reduxjs/toolkit"


const finanzaAlmacenadas = JSON.parse(localStorage.getItem('finanzas')) || []

const guardarFinanzas = (finanzas) => {
    localStorage.setItem('finanzas', JSON.stringify(finanzas))
}

//para crear el slice necesitamos 3 cosas
const finanzaSlice = createSlice({
    name: 'transaccion', //1-colocamos el nombre al slice
    initialState: finanzaAlmacenadas, //2-agregamos el valor inicial
    /* 3- agregamos los reducers, donde podemos crear funciones */
    reducers: {
        //creamos la funcion finanzas , donde los reducers reciben "state y action"
        finanzas: (state, action) => {
            const nuevoFinanza = {
                ...action.payload,
                monto: Number(action.payload.monto)
            };
            state.push(nuevoFinanza);
            guardarFinanzas(state);
        },
        actualizarFinanza: (state, action) => {
            console.log(state)
            console.log(action.payload)
            const { id, descripcion, monto, categoria, fecha, tipo } = action.payload
            const finanzas = state.find((finanza) => finanza.id === id)
            if (finanzas) {
                finanzas.descripcion = descripcion
                finanzas.categoria = categoria
                finanzas.monto = Number(monto)
                finanzas.fecha = fecha
                finanzas.tipo = tipo
                guardarFinanzas(state)
            }
        },
        borrarFinanza: (state, action) => {
            console.log(state)
            console.log(action.payload)
            const { id } = action.payload
            const finanzas = state.filter((finanza) => finanza.id !== id)
            console.log(finanzas)
            if (finanzas) {
                guardarFinanzas(finanzas)
            }
            return finanzas
        },
        sumarGastos: (state) => {
            return state
                .filter(finanza => finanza.tipo === "Gasto")
                .reduce((total, finanza) => total + finanza.monto, 0);
        }
    }
})
//exportamos el reducer para importarlo en el store
export const { finanzas, actualizarFinanza, borrarFinanza} = finanzaSlice.actions
export default finanzaSlice.reducer
//exportamos la funcion finanzas

/* ahi vuelvo sali sin querer */