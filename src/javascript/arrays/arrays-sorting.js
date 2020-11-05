let students = [
{name: "Dean", studID: "3441876"}, 
{name: 'Lee', studID: '3441866'},
{name: 'bulumko', studID: '3441345'},
];

const sortStudents = (s1, s2) => {
	const name1 = s1.name.toLowerCase()
	const name2 = s2.name.toLowerCase()
	if ( name1 === name2) return 0;
	return s1.name.toLowerCase() < name2 ? -1 : 1;
}

console.log("Before sorting:")
console.table(students);


console.log("After sorting:")
console.table(students.sort(sortStudents).map(student => ({...student, name: student.name.toUpperCase()})));
