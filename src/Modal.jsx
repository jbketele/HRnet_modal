/**
 * Composant Modal - Affiche une fenêtre modale personnalisée.
 * 
 * Ce composant React remplace l’ancien plugin jQuery utilisé dans le projet HRNet.
 * Il est conçu pour être réutilisable dans d'autres projets React.
 *
 * Props :
 * @param {boolean} isOpen - Détermine si la modale est visible.
 * @param {function} onClose - Fonction appelée lors de la fermeture de la modale.
 */

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
    return (
        <div className="modal">
        
            <span className="close" onClick={onClose}>
            &times;
            </span>
            <p>Employee Created!</p>
        </div>
    );
    }
export default Modal;