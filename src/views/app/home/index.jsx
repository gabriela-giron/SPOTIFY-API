import React, { useEffect, useState } from 'react'

const home = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    // Extrae el token de acceso de la URL
    //este trae todos los datos que devuelve la URL ( )
    const hashParams = {};
    const hash = window.location.hash.substring(1);
    console.log(hash)
    const params = hash.split('&');
    console.log('params',params)

    params.forEach(param => {
      const [key, value] = param.split('=');
      hashParams[key] = decodeURIComponent(value);
    });

    if (hashParams.access_token) {
      setAccessToken(hashParams.access_token);
    }

    console.log(hashParams)
    console.log('hash ', hash)
  }, []);

  return (
    <>
      {accessToken ? (
          <div>
            <div className="p-4 rounded-lg flex items-center justify-center flex-col">
              <h1 className="text-6xl font-title text-orange">Keren's iPod</h1>
              <p className="font-paragraph mt-2">
                Bienvenido a tu espacio musical :D
              </p>
              
            </div>
          </div>
        ) : (
          <p>algo no funciono :s</p>
        )}
    </>
  );
}

export default home