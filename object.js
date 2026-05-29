const student = {
  name: "Rohit Kumar",
  class: 12,
  roll_number: 15,
  marks: { english: 85, math: 90, science: 92 },
  points: [10, 30, 50, 100, 70, { a: 80 }],
  age: 80,
};
console.log(student.marks.math);
console.log(student.points[4]);
console.log(student.points[5].a);
