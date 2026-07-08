document.addEventListener("DOMContentLoaded", () => {
    const header = `
        <header>
            <nav>
                <a href="../Pages/01-accueil.html">Accueil</a>
                <a href="../Pages/02-staff.html">Staff</a>
                <a href="../Pages/03-activites.html">Activités</a>
                <a href="../Pages/04-reseaux.html">Réseaux</a>
                <a href="../Pages/05-reglement.html">Règlement</a>
                <a href="../Pages/06-support.html">Support</a>
                <a href="../Pages/07-securite.html">Sécurité</a>
                <a href="../Pages/08-faq.html">FAQ</a>
                <a href="../Pages/09-actualites.html">Actualités</a>
                <a href="../Pages/10-avis.html">Avis</a>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", header);
});
