document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("envoyerAvis");
    const container = document.getElementById("avisContainer");

    if (!btn) return;

    btn.addEventListener("click", () => {
        const note = document.getElementById("note").value;
        const commentaire = document.getElementById("commentaire").value;

        if (!note || !commentaire) return alert("Remplis tout !");

        const avis = document.createElement("div");
        avis.innerHTML = `<p><strong>${note}/5</strong> — ${commentaire}</p>`;
        container.prepend(avis);
    });
});
