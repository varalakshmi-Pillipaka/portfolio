import "../App.css";
export const Header = () => {
  const navItems = [
    { id: "main", text: "Home", dataAfter: "Home" },
    { id: "skills", text: "Skills", dataAfter: "Skills" },
    { id: "projects", text: "Projects", dataAfter: "Projects" },
    { id: "about", text: "About", dataAfter: "About" },
    { id: "contact", text: "Contact", dataAfter: "Contact" }
  ];

  return (
    <section id="header">
      <div className="header container">
        <div className="navbar">
          <div className="brand">
            <a href="#main">
              <h1>
                <span>V</span>aralakshmi <span>P</span>illipaka
              </h1>
            </a>
          </div>
          <div className="nav-list">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} data-after={item.dataAfter}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};