const students = [ 
  { name: "Alice", scores: [90, 85, 92], age: 23 }, 
  { name: "Bob", scores: [75, 80, 85], age: 67 }, 
  { name: "Charlie", scores: [90, 95, 85], age: 77 }, 
  { name: "Jack", scores: [100, 100, 100], age: 20 } 
];

// Step 1: Find the youngest student
const youngestStudent = students.reduce((youngest, current) =>
  current.age < youngest.age ? current : youngest
);

// Step 2: Calculate total score
const totalScore = youngestStudent.scores.reduce((sum, score) => sum + score, 0);

console.log(`Total score of youngest student (${youngestStudent.name}):`, totalScore);
