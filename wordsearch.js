const wordSearch = (letters, word) => {
  // For Horizontal word search
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {

    if (l.includes(word)) {
      return true;
    }
  }

  // For Horizontal word search
  const transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));

  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

//Transpose the array to be used in vertical word search
const transpose = function(matrix) {
  const newMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }

  return newMatrix;
};

module.exports = wordSearch;


