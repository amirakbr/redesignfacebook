

import { useEffect, useState } from "react";
import AngrySvgComponent from "../TimeLineEmojies/Angry";
import CareSvgComponent from "../TimeLineEmojies/Care";
import HappySvgComponent from "../TimeLineEmojies/Happy";
import LikeSvgComponent from "../TimeLineEmojies/Like";
import SadSvgComponent from "../TimeLineEmojies/Sad";
import WowSvgComponent from "../TimeLineEmojies/Wow";
import HandlerPost from "./PostTimeLine";



/*

let emojiesArray = [<AngrySvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s]"} />,
<CareSvgComponent  classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />,
<HappySvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />,
<LikeSvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />,
<SadSvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />,
<WowSvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />]
*/

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

	const [TimeLine , setTimeLine] = useState(false) ; 
	useEffect(() =>{
		const fetchDate = async (destination,limit) => {
			try {
				const response = await fetch(`https://dummyapi.io/data/v1/${destination}?limit=${limit}`, {
					method: 'get',
					"Access-Control-Allow-Origin" : "*" , 
					 headers:{
						  'app-id' : "63641c4775177d7dd7dd4141" 
					 }
				});
				const result = await response.json() ; 
				if(response.ok){
					setTimeLine(result.data) ; 
				}
				console.log(result.data)
				console.log(TimeLine); 
			} catch (error) {
				console.log("error",error) ;
			}
		}
		fetchDate("post",10)  ; 
	},[])
return(
					<>
						{
							TimeLine && 
							<div className="relative">
								{
									TimeLine.map((item , index)=>
									index === TimeLine.length - 1 ? <>
										<HandlerPost datakey="end-post" item={item} />
									</>
									:
									<>
										<HandlerPost datakey="normalpost" item={item}/>
									</>
									)
								}
							</div>
						}
					
					</>

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
/*

 */