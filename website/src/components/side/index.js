import React from "react";
import { Link } from "react-router-dom";
import "./side.css"

export const Side = () => {
    return (
        <aside>
            <ul className="tools">
                <li>
                    <Link target="_blank">BSS</Link>
                </li>
                <li>
                    <Link target="_blank">MX</Link>
                </li>
                <li>
                    <Link target="_blank">OM</Link>
                </li>
                <li>
                    <Link target="_blank">360</Link>
                </li>
                <li>
                    <Link target="_blank">CPM</Link>
                </li>
                <li>
                    <Link target="_blank">IR</Link>
                </li>
                <li>
                    <Link target="_blank">BSS</Link>
                </li>
            </ul>

        </aside>
    )
}