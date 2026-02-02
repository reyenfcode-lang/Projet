console.log("JavaScript chargé");

// ===== Prénom (h1) =====
var titre = document.querySelector("h1");

if (titre) {
  titre.addEventListener("click", function () {
    titre.style.color = titre.style.color === "darkblue" ? "" : "darkblue";
  });
}

// ===== Fonction simple pour sections =====
function activerSection(idSection) {
  var section = document.querySelector(idSection);
  if (!section) return;

  var titreSection = section.querySelector("h2");
  if (!titreSection) return;

  function toggleSection() {
    section.style.backgroundColor =
      section.style.backgroundColor === "lightblue" ? "" : "lightblue";
  }

  titreSection.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleSection();
  });

  titreSection.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleSection();
    }
  });
}

// ===== Activation =====
activerSection("#competences");
activerSection("#projets");
activerSection("#parcours");
