interface Iprops {
	options: string,
	text: string
}

const Button = ({ options, text }: Iprops) => {

	// console.log(props["text"]);
	// console.log(props.text);

	// const { text, options } = props;
	// console.log(text, options);
	// const value = text === "save" ? "login" : "signup"
	return (
		<div>
			<button className={`${options === "save" ? "bg-blue-400" : "bg-red-400"} px-5 py-2  rounded-md text-sm text-white  font-light border`}>{text}</button>
		</div>
	)
}

export default Button

// function profile(name: string, age: number, hobbies: string[]) {

// 	console.log(`your name is ${name}`);
// 	console.log(`your Hobbies is ${hobbies}`);
// 	console.log(`your age is ${age}`);

// }

// profile("bilal", 12, ["cricket", "football"])

// profile()
// profile()