import React, { useState } from "react";
import { FaPlusCircle } from 'react-icons/fa'

export const Add = () => {
    const [form, setForm] = useState(false)
    const addQ = () => {
        setForm(!form)
    }

    const newQ = (e) => {
        e.preventDefault()
        let q = document.querySelector('#question').value
        let a = document.querySelector('#answer').value
        setForm(false)
        if (!q & !a) return
        let arr = getData()
        arr.push({ q, a })
        saveData(arr)
    }

    return (
        <>
            <FaPlusCircle size={30} style={{
                position: "absolute",
                left: 10,
                top: 10,
                display: 'block',
                cursor: 'pointer'
            }}
                onClick={addQ}
            />

            {form && <form className="newForm">
                <input type="text" name="question" placeholder="Write your Question" id="question" />
                <input type="text" name="answer" placeholder="Write The answer" id="answer" />
                <button type="submit" onClick={newQ}>Add</button>
            </form>
            }
        </>
    )
}




export const getData = () => {

    return localStorage.q ? JSON.parse(localStorage.q) : []
}

export const saveData = (arr) => {
    localStorage.removeItem('q')
    localStorage.setItem('q', JSON.stringify(arr))
}