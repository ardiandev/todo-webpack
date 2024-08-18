const getDataBtn = document.querySelector(".data-btn");
const url = "https://jsonplaceholder.typicode.com/posts"

async function getData() {
	try {
		const resp = await fetch(url);
		
		if (! resp.ok) {
			throw new Error("invalid data")
		}
		const data  = await resp.json()
		showTodo(data)
		return data;
	} catch(err){
		console.warn(err.message)
	}
}


const showTodo = (data) => {

	console.log("processing")
	
	let output = data.map((item, index) => 
	
	`<div>
		<li>${index + 1}. Title: ${item.title}</li>
		<li>Body: ${item.body}</li>
	</div>`).join("")
	
	document.querySelector(".container").innerHTML = output;
	
}

getDataBtn.addEventListener("click", () => {
	getData()
})



