const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// O nome da propriedade "glove box" possui um espaço. Por isso, para acessá-la, foi preciso usar a notação de colchetes ao invés da notação de ponto.
