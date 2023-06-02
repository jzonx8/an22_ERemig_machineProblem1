// BSCS Source Code Template for 3T AY 2022-2023
/*
	Program: 	Computation of Grades using Function
	Programmer: Emmanuel Jazon C. Remig
	Section: 	BSCS
	Start Date: June 2, 2023
	End Date: 	June 2, 2023

*/
// Function to calculate the grade score
function calculateGradeScore(classParticipation, summativeAssessment, examGrade) {
  return Math.round((classParticipation + summativeAssessment + examGrade) / 3);
}

// Function to determine the letter grade based on the grade score
function determineLetterGrade(gradeScore) {
  if (gradeScore >= 90) {
    return 'A';
  } else if (gradeScore >= 80) {
    return 'B';
  } else if (gradeScore >= 70) {
    return 'C';
  } else if (gradeScore >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Array to store student data
var students = [];

// Function to prompt user input for each student
function inputStudentData() {
  var student = {};
  student.name = prompt('Enter the name of the student ' + i + ':');
  student.classParticipation = parseInt(prompt('Enter the class participation score:'));
  student.summativeAssessment = parseInt(prompt('Enter the summative assessment score:'));
  student.examGrade = parseInt(prompt('Enter the exam grade:'));
  students.push(student);
}

// Prompt user input for 5 students
let j = parseInt(prompt('Enter number of students: '))
for (var i = 1; i <= j; i++) {
  inputStudentData();
}

// Display the table header
console.log('Name of Student\t\tClass Participation\t\tSummative Assessment\t\tExam Grade\t\tGrade Score\t\tLetter Grade');

// Display the student data
for (var i = 0; i < students.length; i++) {
  var student = students[i];
  var gradeScore = calculateGradeScore(student.classParticipation, student.summativeAssessment, student.examGrade);
  var letterGrade = determineLetterGrade(gradeScore);
  console.log(
    student.name + '\t\t\t\t' + student.classParticipation + '\t\t\t\t\t\t' + student.summativeAssessment +
    '\t\t\t\t\t\t' + student.examGrade + '\t\t\t\t' + gradeScore + ' \t\t\t\t' + letterGrade
  );
}
