import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { StudentContext } from "../StudentContext";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Accessibility

const StudentModal = ({ isOpen, onRequestClose }) => {
	const { addStudent, updateStudent, currentStudent } =
		useContext(StudentContext);
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [address, setAddress] = useState("");

	useEffect(() => {
		if (currentStudent) {
			setName(currentStudent.name);
			setMobile(currentStudent.mobile);
			setAddress(currentStudent.address);
		} else {
			setName("");
			setMobile("");
			setAddress("");
		}
	}, [currentStudent, isOpen]); // Reset fields when currentStudent changes or modal is opened

	const handleSubmit = (e) => {
		e.preventDefault();
		const student = { name, mobile, address };
		if (currentStudent) {
			updateStudent(student);
		} else {
			addStudent(student);
		}
		onRequestClose();
	};

	return ReactDOM.createPortal(
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<h2>{currentStudent ? "Edit Student" : "Add Student"}</h2>
			<form onSubmit={handleSubmit}>
				<label>Name:</label>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<label>Mobile:</label>
				<input
					type="text"
					value={mobile}
					onChange={(e) => setMobile(e.target.value)}
					required
					disabled={!!currentStudent}
				/>
				<label>Address:</label>
				<input
					type="text"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					required
				/>
				<button type="submit">{currentStudent ? "Update" : "Add"}</button>
				<button type="button" onClick={onRequestClose}>
					Close
				</button>
			</form>
		</Modal>,
		document.getElementById("modal-root")
	);
};

export default StudentModal;
