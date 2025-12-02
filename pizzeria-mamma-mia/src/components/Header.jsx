import React from 'react';

const Header = () => {
  // Estilos en línea para la imagen de fondo (puedes usar CSS externo también)
  const headerStyle = {
    backgroundImage: "url('https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
  };

  return (
    <header style={headerStyle}>
      <div className="overlay" style={{backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <h1>¡Pizzería Mamma Mía!</h1>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
          <hr style={{ width: '50%', borderTop: '2px solid white' }} />
      </div>
    </header>
  );
};

export default Header;
