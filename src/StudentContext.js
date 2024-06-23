import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
	const [students, setStudents] = useState([]);
	const [currentStudent, setCurrentStudent] = useState(null);

	const addStudent = (student) => {
		setStudents([...students, student]);
	};

	const updateStudent = (updatedStudent) => {
		setStudents(
			students.map((student) =>
				student.mobile === currentStudent.mobile ? updatedStudent : student
			)
		);
		setCurrentStudent(null);
	};

	const deleteStudent = (mobile) => {
		setStudents(students.filter((student) => student.mobile !== mobile));
	};

	const editStudent = (student) => {
		setCurrentStudent(student);
	};

	return (
		<StudentContext.Provider
			value={{
				students,
				addStudent,
				updateStudent,
				deleteStudent,
				currentStudent,
				editStudent,
			}}
		>
			{children}
		</StudentContext.Provider>
	);
};

export default StudentProvider