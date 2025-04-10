const transposeMatrix = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    const transposed = [];
  
    for (let i = 0; i < cols; i++) {
      transposed[i] = [];
      for (let j = 0; j < rows; j++) {
        transposed[i][j] = matrix[j][i];
      }
    }
  
    return transposed;
  };
  const A = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  
  const result = transposeMatrix(A);
  
  console.log(result);