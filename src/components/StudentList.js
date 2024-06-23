import React, { useContext } from "react";
import { StudentContext } from "../StudentContext";

const StudentList = () => {
	const { students, editStudent, deleteStudent } = useContext(StudentContext);

	return (
		<div>
			<h2>Student List</h2>
			<ul>
				{students.map((student) => (
					<li key={student.mobile}>
						<p>Name: {student.name}</p>
						<p>Mobile: {student.mobile}</p>
						<p>Address: {student.address}</p>
						<button onClick={() => editStudent(student)}>Edit</button>
						<button onClick={() => deleteStudent(student.mobile)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default StudentList;
