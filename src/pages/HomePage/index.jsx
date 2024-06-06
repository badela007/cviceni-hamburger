import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState('Kojorádce');

  const handleSelectItem = (page) => {
    setMenuOpened(!menuOpened);
    setPageTitle(page);
  };
  return (
    <>
      <header>
        <div className={menuOpened ? 'menu' : 'menu menu--closed'}>
          <button
            className={`menu__btn ${menuOpened ? 'menu__btn--open' : ''}`}
            onClick={() => {
              setMenuOpened(!menuOpened);
            }}
          ></button>
          <div className="menu__items">
            <p>Kojorádce</p>
            <MenuItem text="Potřebuji poradit" onSelect={handleSelectItem} />
            <MenuItem text="Informace o kojení" onSelect={handleSelectItem} />
            <MenuItem
              text="Hledám laktační poradkyni"
              onSelect={handleSelectItem}
            />
            <MenuItem text="Kontakt" onSelect={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};
