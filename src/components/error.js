import React from "react";
const errStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4rem',
    color: 'transparent',
    "-webkit-text-stroke": "4px var(--text)"

}

export const Error404 = () => {
    return <h1 style={errStyle}>ERROR 404</h1>
}