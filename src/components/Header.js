import React from 'react';

function Header() {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const headerOffset = 60; // Height of fixed header
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#about" onClick={handleClick}>About</a></li>
          <li><a href="#projects" onClick={handleClick}>Projects</a></li>
          <li><a href="#skills" onClick={handleClick}>Skills</a></li>
          <li><a href="#contact" onClick={handleClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
