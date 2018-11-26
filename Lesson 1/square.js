function triangle(rows = 4){

  let arrOfLines = [];
  var str = '';

  for (let i = 0; i < rows; i++){
      arrOfLines[i] = (i == 0) ? '*' : arrOfLines[i-1] + '*';
  }

  arrOfLines.forEach((elem) => {
    str += elem + '\n'
  });

  return str;
}

function square (rows = 4, columns = 4){

  var str = '';

  for (var i = 0; i < rows; i++){
      for (var j = 0; j < columns; j++) {
        str += '*';
      }
      str += '\n';
  }

  return str;
}
module.exports.triangle = triangle;
module.exports.square = square;
