// StatReseau.js
import './StatReseaux.css';

function StatReseaux({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((acc, l) => acc + l.arrets, 0);
  const ligneMax = lignes.reduce((max, l) => l.arrets > max.arrets ? l : max, lignes[0]);

  return (
    <div className="stat-reseau">
      <div className="stat-card">
        <span className="stat-valeur">{totalLignes}</span>
        <span className="stat-label">Lignes actives</span>
      </div>
      <div className="stat-card">
        <span className="stat-valeur">{totalArrets}</span>
        <span className="stat-label">Arrêts au total</span>
      </div>
      <div className="stat-card">
        <span className="stat-valeur">Ligne {ligneMax.numero}</span>
        <span className="stat-label">Plus d'arrêts ({ligneMax.arrets})</span>
      </div>
    </div>
  );
}

export default StatReseaux;