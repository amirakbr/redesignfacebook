import { useEffect, useState } from "react";
/*
let getPost = (limit) => {
	fetch(`https://dummyapi.io/data/v1/post?limit=${limit}`,{
     method: 'GET',
	"Access-Control-Allow-Origin" : "*" , 
 	headers:{
  		'app-id' : "63641c4775177d7dd7dd4141" 
 	}
	})
 	.then(response => response.json())
 	.then(response => console.log(response["data"][0]["id"]))
 	.catch(err => console.error(err)
	);
}
getPost(10) ; 
*/
export default function TimeLine() {
	/*
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(()=>{
		fetch(`https://dummyapi.io/data/v1/post?limit=20`)
	})
	*/

	const[advice,setAdvice] = useState("") ; 

	useEffect(() =>{
		let url = `https://ap6566i.adviceslip.com/advice`

		const fetchDate = async (urll) => {
			try {
				const response = await fetch(urll, {
					method: 'get',
					"Access-Control-Allow-Origin" : "*" , 
 					headers:{
  						'app-id' : "63641c4775177d7dd7dd4141" 
 					}
				});
				const json = await response.json() ; 
				console.log(json);
				setAdvice(json);
			} catch (error) {
				console.log("error",error) ;
			}
		} ; 
		fetchDate(`https://dummyapi.io/data/v1/post?limit=5`) ; 
	},[])





return(
	<p className="text-white text-2xl">
		kugiyugiygfuyfg
	</p>
)
}
/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c89af7e253msha08754c4c6401e6p13c3bfjsn9eb578b9b70d',
		'X-RapidAPI-Host': 'twinesocial.p.rapidapi.com'
	}
};

fetch('https://twinesocial.p.rapidapi.com/v1/content?campaign=louboutin', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
*/