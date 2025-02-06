import { useTranslation } from "react-i18next";
import Button from "./Button";
import "./navbar.css";
import { useEffect } from "react";

const NavBar = ({ showSearch, handleShowSearch, setSearchController, searchController }) => {
    const { t, i18n } = useTranslation();
    let lang = localStorage.lang ? localStorage.lang : 'ru';

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, []);

    const switchLang = () => {
        let localLang = localStorage.lang;
        if (localLang) {
            lang === 'ru' ? lang = 'uz' : lang = 'ru';
            localStorage.lang = lang;
            i18n.changeLanguage(lang);
        } else {
            lang === 'ru' ? lang = 'uz' : lang = 'ru';
            localStorage.lang = lang;
            i18n.changeLanguage(lang);
        }
    }

    return (
        <header className="header">
            <nav className="nav">
                <button onClick={switchLang}>
                    {lang}
                </button>

                <Button showSearch={showSearch}
                    onClick={() => handleShowSearch(false)} />
                {
                    showSearch ? <input type="text"
                        placeholder= {t('searchInput')}
                        value={searchController}
                        onChange={(e) => setSearchController(e.target.value)} /> : <h1>{t('notes')}</h1>
                }
                <Button
                    type={!showSearch ? 'search' : 'close'}
                    showSearch={true}
                    onClick={() => handleShowSearch(showSearch ? false : true)}
                />
            </nav>
        </header>
    )
};
export default NavBar;