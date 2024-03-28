//your JS code here. If required.
let text = document.getElementById("text");
let delay = document.getElementById("delay");
let btn = document.getElementById("btn");
let output = document.getElementById("output");


btn.addEventListener("click",fun);

async function fun(){
		try{
			let data = await checker();
			output.innerHTML = data;
		}catch(e){
			console.log(e);
		}
}

function checker(){
	return new Promise((resolve)=>{
		
setTimeout(()=>{
	// console.log(text);
	resolve(text.value);
},Number(delay.value))
	})
}