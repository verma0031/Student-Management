import React, { useContext, useState } from "react";
import { StudentContext } from "../StudentContext";
import StudentModal from "./StudentModal";

const Header = () => {
	const { students, editStudent } = useContext(StudentContext);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		editStudent(null); // Ensure the modal is in add mode
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<header>
			<h1>Student Management</h1>
			<button onClick={openModal}>Add Student</button>
			<p>Total Students: {students.length}</p>
			<StudentModal isOpen={modalIsOpen} onRequestClose={closeModal} />
		</header>
	);
};

export default Header;
