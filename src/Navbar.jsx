import {useState} from 'react';

export default function Navbar({cart}) {
  const [light, setLight] = useState(true);

  function toggleTheme() {
    setLight(!light);
    document.body.classList.toggle("dark");
  }
  let totalItems = 0;
  cart.forEach(item => {
    totalItems += item.quantity;
  });
  return (
    <div className="navbar">
      <a className="logo">SuperM</a>
      <nav className="nav-wrapper">
        <button onClick={toggleTheme} className="theme-switcher">
          <img src={light ? "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1732813039/react-tutorial/superm-v2/light.svg" : "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1732813039/react-tutorial/superm-v2/dark.svg"} width="24" height="24" alt={light ? "Light theme" : "Dark theme"}  />
        </button>
        <ul className="nav">
          <li className="nav-item"><a>Home</a></li>
          <li className="nav-item"><a>Login</a></li>
          <li className="nav-item"><a>Products</a></li>
        </ul>
        <a className="btn btn-nav">Cart ({totalItems})</a>
      </nav>
    </div>
  );
}
