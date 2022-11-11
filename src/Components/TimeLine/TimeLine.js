

import { useEffect, useState } from "react";
import AngrySvgComponent from "../TimeLineEmojies/Angry";
import CareSvgComponent from "../TimeLineEmojies/Care";
import HappySvgComponent from "../TimeLineEmojies/Happy";
import LikeSvgComponent from "../TimeLineEmojies/Like";
import SadSvgComponent from "../TimeLineEmojies/Sad";
import WowSvgComponent from "../TimeLineEmojies/Wow";


import CommentReactionSvgComponent from "../TimeLineEmojies/CommentReaction";

import EmptyHeartReactionSvgComponent from "../TimeLineEmojies/EmptyHeart";

import FillHeartReactionSvgComponent from "../TimeLineEmojies/FillHeart";

import ShareReactionSvgComponent from "../TimeLineEmojies/ShareReaction";

let emojiesArray = [<AngrySvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s]"} />,
<CareSvgComponent  classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />,
<HappySvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />,
<LikeSvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />,
<SadSvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />,
<WowSvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />]

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
let monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul',
'Aug','Sep','Oct','Nov','Dec'] ; 
function dateHandler(entryDate){
	let startTimeISOString = entryDate;
	let startTimeDate = new Date(startTimeISOString);
	let todayDate = new Date() ; 
	let diffBetWeenDays = Math.floor((todayDate - startTimeDate)/1000) ; 
	console.log(startTimeDate.getFullYear())
	//return Math.floor(diffBetWeenDays/(1000)) ; 
	let finalResult ;
	if(diffBetWeenDays < 60 ){
		if(diffBetWeenDays > 1) {
			finalResult = `Posted ${diffBetWeenDays} Second's ago`
		}else {
			finalResult = `Posted ${diffBetWeenDays} Second ago`
		}
		
	}
	else if(diffBetWeenDays < 3600){
		if(Math.floor(diffBetWeenDays/60) > 1) {
			finalResult = `Posted ${Math.floor(diffBetWeenDays/60)} Minuet's  ago`
		}else{
			finalResult = `Posted ${Math.floor(diffBetWeenDays/60)} Minuet  ago`
		}
	}
	else if(diffBetWeenDays < 86400){
		
		if(Math.floor(diffBetWeenDays/3600) > 1 ){
			finalResult = `Posted ${Math.floor(diffBetWeenDays/3600)} Hour's  ago`
		}else{
			finalResult = `Posted ${Math.floor(diffBetWeenDays/3600)} Hour  ago`
		}
	}
	else if(diffBetWeenDays >= 86400 && diffBetWeenDays < 2592000){
		if(Math.floor(diffBetWeenDays/86400) > 1){
			finalResult = `Posted ${Math.floor(diffBetWeenDays/86400)} Day's  ago`
		}else{
			finalResult = `Posted ${Math.floor(diffBetWeenDays/86400)} Day  ago`
		}
	}
	else if(diffBetWeenDays < 31104000){
		
		if(Math.floor(diffBetWeenDays/2592000) > 1){
			finalResult = `Posted ${Math.floor(diffBetWeenDays/2592000)} Month's ago`
		}else{
			finalResult = `Posted ${Math.floor(diffBetWeenDays/2592000)} Month ago`
		}
	}
	else if(diffBetWeenDays > 31104000){
		if(Math.floor(diffBetWeenDays/31104000) > 1){
			finalResult = `Posted on ${startTimeDate.getDate()} ${monthArray[startTimeDate.getMonth()]}, ${startTimeDate.getFullYear()}`
		}else{
			finalResult = `Posted ${Math.floor(diffBetWeenDays/31104000)} Year ago`
		}
	}
	return finalResult ; 
}
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
		fetchDate("post",4)  ; 
	},[])
return(
					<>
						{
							TimeLine && 
							<div className="relative">
								{
									TimeLine.map((item , index)=>
									index === TimeLine.length - 1 ? <>
									<div data-endless="end" className="flex flex-col mx-[5%] text-white mt-[1rem] bg-[#1a1c20] rounded overflow-hidden">
										<div className="w-full flex flex-col">
											<div className="flex flex-col"> 
											<div className="flex flex-col p-[1rem]">
												<div className="w-full">
												<div className="miniphone:flex-row flex flex-col miniphone:justify-start justify-center items-center">
												<div className="w-profilePicture h-profilePicture overflow-hidden rounded-full border-[.15rem] border-lightBlueSky flex items-center justify-center">
													<img className="max-w-[unset] w-profilePicture h-profilePicture rounded-full object-cover object-center" src={item.owner.picture} />
												</div>
												<div className="flex flex-col miniphone:ml-[1rem]">
													<p className="mb-[.2rem] text-md text-center miniphone:text-start">
														<span>
															{
																item.owner.firstName
															},
														</span>
														<span className="ml-[.3rem]">
															{
																item.owner.lastName
															}
														</span>
													</p>
													<span className="text-sm text-[#9f9fa1]">
														{
															dateHandler(item.publishDate)
														}
													</span>
												</div>
												</div>
											</div>
											<div className="mt-[.6rem] flex flex-col miniphone:items-start items-center">
												<p className="miniphone:ml-[3.85rem] text-center miniphone:text-start break-all">
													{
														item.text
													}
												</p>
												<div className="miniphone:ml-[3.85rem] miniphone:justify-start justify-center flex m-[.8rem_0_.3rem_0] flex-wrap">
													{
														item.tags.map((tag)=>
															<p className="mr-[.45rem] mt-[.45rem] px-4 py-1 bg-[#2d343e] rounded-[.3rem] break-all hover:bg-[#848d9b] transation-all duration-[.3s] font-[500] hover:shadow-[0rem_0rem_.4rem_.01rem_#848d9b] shadow-[inset_0rem_0rem_0.3rem_#2d343e] hover:shadow-[inset_0rem_0rem_0.3rem_transparent]">
																#{
																	tag
																}
															</p>
														)
													}
												</div>
											</div>
											</div>
											<div className="w-full h-[20rem] miniphone:h-[25rem] tablet:h-[28rem] minilaptop:h-[32rem] flex">
												<img className="w-full h-auto max-h-[auto] object-cover object-center" src={
													item.image
												} />
											</div>
											</div>
											<div className="flex flex-col">
												<div className="flex items-center justify-between miniphone:justify-start flex-wrap p-[1rem]">
													<div className="flex">
														{
															emojiesArray.map((item,index) => index <= (Math.ceil(Math.	random() * 5))  ? item : null)
												
														}
													</div>
													<span className="text-w ml-[.5rem] text-lg font-base flex">
														{
															item.likes
														} Likes
													</span>
												</div>
												<div className="flex items-center justify-between px-[1rem] py-[.3rem] bg-[#282e38]">
													<EmptyHeartReactionSvgComponent classes="h-[2rem]" />
													<CommentReactionSvgComponent classes="h-[2rem]"/>
													<ShareReactionSvgComponent classes="h-[2rem]"/>
												</div>
											</div>
										</div>
									</div>
									</>
									:
									<>
									<div className="flex flex-col mx-[5%] text-white mt-[1rem] bg-[#1a1c20] rounded overflow-hidden">
										<div className="w-full flex flex-col">
											<div className="flex flex-col"> 
											<div className="flex flex-col p-[1rem]">
												<div className="w-full">
												<div className="miniphone:flex-row flex flex-col miniphone:justify-start justify-center items-center">
												<div className="w-profilePicture h-profilePicture overflow-hidden rounded-full border-[.15rem] border-lightBlueSky flex items-center justify-center">
													<img className="max-w-[unset] w-profilePicture h-profilePicture rounded-full object-cover object-center" src={item.owner.picture} />
												</div>
												<div className="flex flex-col miniphone:ml-[1rem]">
													<p className="mb-[.2rem] text-md text-center miniphone:text-start">
														<span>
															{
																item.owner.firstName
															},
														</span>
														<span className="ml-[.3rem]">
															{
																item.owner.lastName
															}
														</span>
													</p>
													<span className="text-sm text-[#9f9fa1]">
														{
															dateHandler(item.publishDate)
														}
													</span>
												</div>
												</div>
											</div>
											<div className="mt-[.6rem] flex flex-col miniphone:items-start items-center">
												<p className="miniphone:ml-[3.85rem] text-center miniphone:text-start break-all">
													{
														item.text
													}
												</p>
												<div className="miniphone:ml-[3.85rem] miniphone:justify-start justify-center flex m-[.8rem_0_.3rem_0] flex-wrap">
													{
														item.tags.map((tag)=>
															<p className="mr-[.45rem] mt-[.45rem] px-4 py-1 bg-[#2d343e] rounded-[.3rem] break-all hover:bg-[#848d9b] transation-all duration-[.3s] font-[500] hover:shadow-[0rem_0rem_.4rem_.01rem_#848d9b] shadow-[inset_0rem_0rem_0.3rem_#2d343e] hover:shadow-[inset_0rem_0rem_0.3rem_transparent]">
																#{
																	tag
																}
															</p>
														)
													}
												</div>
											</div>
											</div>
											<div className="w-full h-[20rem] miniphone:h-[25rem] tablet:h-[28rem] minilaptop:h-[32rem] flex">
												<img className="w-full h-auto max-h-[auto] object-cover object-center" src={
													item.image
												} />
											</div>
											</div>
											<div className="flex flex-col">
												<div className="flex items-center justify-between miniphone:justify-start flex-wrap p-[1rem]">
													<div className="flex">
														{
															emojiesArray.map((item,index) => index <= (Math.ceil(Math.	random() * 5))  ? item : null)
												
														}
													</div>
													<span className="text-w ml-[.5rem] text-lg font-base flex">
														{
															item.likes
														} Likes
													</span>
												</div>
												<div className="flex items-center justify-between px-[1rem] py-[.3rem] bg-[#282e38]">
													<EmptyHeartReactionSvgComponent classes="h-[2rem]" />
													<CommentReactionSvgComponent classes="h-[2rem]"/>
													<ShareReactionSvgComponent classes="h-[2rem]"/>
												</div>
											</div>
										</div>
									</div>
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