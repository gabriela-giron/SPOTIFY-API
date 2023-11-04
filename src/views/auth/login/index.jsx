import React, { useState } from 'react'

const InicioSesion = () => {
    const handleLogin = () => {
        // Redirige al usuario a la página de autorización de Spotify
        window.location.href = 'https://accounts.spotify.com/authorize?client_id=982f6e2b5f0145ca8f2af2963079c9f3&redirect_uri=http://localhost:5173&scope=user-read-private%20user-read-email&response_type=token&state=RANDOM_STATE';
    };
    return (
        <div className="p-4 rounded-lg flex items-center justify-center flex-col">
          <h1 className="text-6xl font-title text-orange">Keren's iPod</h1>
          <p className="font-paragraph mt-2">
            Este es un ejemplo de cómo usar Tailwind CSS en un componente de React.
          </p>
            <form>
              <div className="w-42 p-6">
                <label htmlFor="username" className="block text-gray-700 font-paragraph p-2">Nombre de Usuario</label>
                <input
                    type="text" id="username"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-200 focus:outline-none"
                    placeholder="username"
                />
                <label htmlFor="password" className="block text-gray-700 font-paragraph p-2">Contraseña</label>
                <input
                    type="password" id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-200 focus:outline-none"
                    placeholder="password"
                />
              </div>
            </form>
            <button className="bg-pale-pink text-black font-paragraph px-4 py-2 mt-4 rounded hover:bg-blue" onClick={handleLogin}>
               Ingresar
            </button>
        </div>
    );
}

export default InicioSesion