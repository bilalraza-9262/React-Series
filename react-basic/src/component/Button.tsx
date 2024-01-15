
const Button = ({text}:{text:string}) => {
	// console.log(props.text);

	// const student={
	// 	name:"bilal"
	// }

	// const myObj={
	// 	text:""
	// }
	// const {text}=myObj destructuring
	let value = "";

	if (text === "save") {
		value = "Login"
	} else {
		value = "Logout"	
	}

	// const buttonText = "bilal";
	return (
		<div>
			<button className="m-3 bg-blue-500 px-5 py-1 rounded-md hover:bg-blue-700 text-white">{value}</button>

		</div>
	)
}

export default Button
