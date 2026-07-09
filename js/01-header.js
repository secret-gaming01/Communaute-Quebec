document.addEventListener("DOMContentLoaded", () => {
    const header = `
        <header id="header">
            <nav class="nav">
                <ul class="nav-links">
                    <li><a href="../Pages/01-accueil.html">Accueil</a></li>
                    <li><a href="../Pages/02-staff.html">Staff</a></li>
                    <li><a href="../Pages/03-activites.html">Activités</a></li>
                    <li><a href="../Pages/04-reseaux.html">Réseaux</a></li>
                    <li><a href="../Pages/05-reglement.html">Règlement</a></li>
                    <li><a href="../Pages/06-support.html">Support</a></li>
                    <li><a href="../Pages/07-securite.html">Sécurité</a></li>
                    <li><a href="../Pages/08-faq.html">FAQ</a></li>
                    <li><a href="../Pages/09-actualites.html">Actualités</a></li>
                    <li><a href="../Pages/10-avis.html">Avis</a></li>
                </ul>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", header);
});
