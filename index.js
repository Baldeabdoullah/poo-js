//------------------------
// LA POO EN JAVASCRIPT
// on reconnait un objet aux accolades
const obj = {
  pseudo: "from scratch",
  ville: "bordeiax",
  admin: false,

  direBonjour: function () {
    console.log("bonjour le suis " + this.pseudo);
  },

  //   direBonjour() {
  //     console.log("bonjour le suis " + obj.pseudo);
  //   },
};

//Ajouter
obj.age = 24;
obj["admin"] = true;
// console.log(obj);

//modifier
obj.pseudo = "FS";

//supprimer
delete obj.ville;
// console.log(obj);

// Checker si une propriete existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//parcourir l'objet
for (const key in obj) {
  //   console.log(key);
  //   console.log(key + " : " + obj[key]);
}

console.log(obj.direBonjour());
