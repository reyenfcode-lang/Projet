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

// ===== Sections (Compétences / Projets / Parcours) =====
function activerSection(idSection) {
  var section = document.querySelector(idSection);
  if (!section) return;

  var titreSection = section.querySelector("h2");
  if (!titreSection) return;

  function fermerSection(uneSection) {
    uneSection.style.backgroundColor = "";

    var h2 = uneSection.querySelector("h2");
    if (h2) {
      h2.textContent = h2.textContent.replace(" ▾", "");
    }
  }

  function ouvrirSection(uneSection) {
    uneSection.style.backgroundColor = "lightblue";

    var h2 = uneSection.querySelector("h2");
    if (h2) {
      var texteBase = h2.textContent.replace(" ▾", "");
      h2.textContent = texteBase + " ▾";
    }

    uneSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toggleSection() {
    var sections = document.querySelectorAll("section");

    sections.forEach(function (autreSection) {
      if (autreSection !== section) {
        fermerSection(autreSection);
      }
    });

    var ouverte = section.style.backgroundColor === "lightblue";

    if (ouverte) {
      fermerSection(section);
    } else {
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
}

// ===== Activation =====
activerSection("#competences");
activerSection("#projets");
activerSection("#parcours");
