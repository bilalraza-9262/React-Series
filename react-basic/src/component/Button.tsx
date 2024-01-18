
const Button = (props: any) => {
	console.log(props.text);
	const value = props.text;

	// const student = {
	// 	name: "bilal"
	// }
	// student.name
	// const myObj={
	// 	text:""
	// }
	// const {text}=myObj destructuring
	// let value = "";

	// if (text === "save") {
	// 	value = "Login"
	// } else {
	// 	value = "Logout"	
	// }

	// const buttonText = "bilal";
	// const values=`my name is ${value}`
	return (
		<div>
			<button className={`m-3 ${value === "submit" ? "bg-blue-500" : "bg-red-300"} px-5 py-1 rounded-md hover:bg-blue-700 text-white`}>{value}</button>

		</div>
	)
}

export default Button