console.log("JavaScript chargé");

// ===== Prénom (h1) =====
var titre = document.querySelector("h1");

if (titre) {
  titre.addEventListener("click", function () {
    if (titre.style.color === "darkblue") {
      titre.style.color = "";
    } else {
      titre.style.color = "darkblue";
    }
  });
}

// ===== Helpers fermeture/ouverture =====
function fermerSection(uneSection) {
  uneSection.style.backgroundColor = "";
}

function ouvrirSection(uneSection) {
  uneSection.style.backgroundColor = "lightblue";
  uneSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function fermerToutesSections() {
  var sections = document.querySelectorAll("section:not(.contact)");
  sections.forEach(function (section) {
    fermerSection(section);
  });
}

// ===== Sections (À propos / Compétences / Projets / Parcours) =====
function activerSection(idSection) {
  var section = document.querySelector(idSection);
  if (!section) return;

  var titreSection = section.querySelector("h2");
  if (!titreSection) return;

  function toggleSection() {
    var ouverte = section.style.backgroundColor === "lightblue";

    fermerToutesSections();

    if (!ouverte) {
      ouvrirSection(section);
    }
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

  // Clic dans la section : ne ferme pas tout
  section.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

// ===== Activation =====
activerSection("#apropos");
activerSection("#competences");
activerSection("#projets");
activerSection("#parcours");

// ===== Fermer au clic extérieur =====
document.addEventListener("click", function () {
  fermerToutesSections();
});
