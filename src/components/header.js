import React from "react"
import ilustration from '../images/developer.svg'

export default() => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center">
            <div className="flex-1">
                <h1 className="font-bold text-purple-700 text-6xl">¡Hola! Soy Erick</h1>
                <p className="text-md font-light">Creo aplicaciones web con Laravel y Vue js.</p>
            </div>
            <img src={ilustration} alt="Work in progress" style={{height:"300px"}}></img>
        </div>
    </header>
)