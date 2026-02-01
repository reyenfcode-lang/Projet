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

// ===== Section Compétences =====
var sectionCompetences = document.querySelector("#competences");

if (sectionCompetences) {
  var titreCompetences = sectionCompetences.querySelector("h2");

  if (titreCompetences) {
    titreCompetences.addEventListener("click", function (event) {
      event.stopPropagation();

      if (sectionCompetences.style.backgroundColor === "lightblue") {
        sectionCompetences.style.backgroundColor = "";
      } else {
        sectionCompetences.style.backgroundColor = "lightblue";
      }
    });

    titreCompetences.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        if (sectionCompetences.style.backgroundColor === "lightblue") {
          sectionCompetences.style.backgroundColor = "";
        } else {
          sectionCompetences.style.backgroundColor = "lightblue";
        }
      }
    });
  }
}

// ===== Section Projets =====
var sectionProjets = document.querySelector("#projets");

if (sectionProjets) {
  var titreProjets = sectionProjets.querySelector("h2");

  if (titreProjets) {
    titreProjets.addEventListener("click", function (event) {
      event.stopPropagation();

      if (sectionProjets.style.backgroundColor === "lightblue") {
        sectionProjets.style.backgroundColor = "";
      } else {
        sectionProjets.style.backgroundColor = "lightblue";
      }
    });

    titreProjets.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        if (sectionProjets.style.backgroundColor === "lightblue") {
          sectionProjets.style.backgroundColor = "";
        } else {
          sectionProjets.style.backgroundColor = "lightblue";
        }
      }
    });
  }
}

// ===== Section Parcours =====
var sectionParcours = document.querySelector("#parcours");

if (sectionParcours) {
  var titreParcours = sectionParcours.querySelector("h2");

  if (titreParcours) {
    titreParcours.addEventListener("click", function (event) {
      event.stopPropagation();

      if (sectionParcours.style.backgroundColor === "lightblue") {
        sectionParcours.style.backgroundColor = "";
      } else {
        sectionParcours.style.backgroundColor = "lightblue";
      }
    });

    titreParcours.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        if (sectionParcours.style.backgroundColor === "lightblue") {
          sectionParcours.style.backgroundColor = "";
        } else {
          sectionParcours.style.backgroundColor = "lightblue";
        }
      }
    });
  }
}
