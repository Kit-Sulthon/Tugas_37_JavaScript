function panggilNestedArray(value) {
  var result = [];
  for (var i = 0; i < value[0].length; i++) {
    var innerArray = [];
    for (var j = 0; j < value.length; j++) {
      innerArray.push(value[j][i]);
    }
    result.push(innerArray);
  }
  console.log(result);

  // nestedArray.forEach(function (topLevelArray) {
  //   topLevelArray.forEach(function (element) {
  //     console.log(element);
  //   });
  // });

  // var single = {};
  // nestedArray = value[i].nestedArray;
  // if (!single[nestedArray]) {
  //   single[nestedArray] = [];
  // }
  // single[nestedArray].push(value[i]);

  // }\
  /*nestedArray.forEach(function(row){
           row.forEach(function(col){
        console.log(col);
      }
      console.log("----------");
    }*/
}
var nestedArray = [
  [1, 2, 3, 4],
  ["Mark Zuckerberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
  ["Facebook", "Tesla", "Microsoft", "Apple"],
];

panggilNestedArray(nestedArray);
