import './Header.css';

function Header () {
    const today = new Date().toLocaleDateString('fr-FR');
    return(
        <header className="header">
            <h1 className="header-titre">SenTransport </h1>
            <p className="header-soustitre">Votre guide de transport en commun à Dakar</p>
            <p>{today}</p>
        </header>
    );
}
export default Header;