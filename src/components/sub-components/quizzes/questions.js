import React, { useEffect, useState } from "react";
import { getData } from "./add";


export const Questions = () => {
    const [questions, setQuestions] = useState(null)
    useEffect(() => {
        let arr = getData()
        setQuestions(arr)
    }, [])


    return (
        <div className="questions">
            <ul>

                {
                    questions && questions.map((obj, i) => {
                        return (<li key={i}>
                            <p className="q">
                                <p>The Question:</p>
                                <span>{obj.q} </span>
                            </p>

                            <p className="a">
                                <p>The Answer:</p>
                                <span>{obj.a}</span>
                            </p>
                        </li>)
                    })
                }

            </ul>
        </div>
    )
}