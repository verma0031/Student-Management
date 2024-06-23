import React from "react";
import ReactDOM from "react-dom/client";
import StudentProvider from "./StudentContext";
import Header from "./components/Header";
import StudentList from "./components/StudentList";

const App = () => {
	return (
		<StudentProvider>
			<div className="App">
				<Header />
				<StudentList />
			</div>
		</StudentProvider>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
