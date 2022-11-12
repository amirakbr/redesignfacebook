import AngrySvgComponent from "../TimeLineEmojies/Angry";
import CareSvgComponent from "../TimeLineEmojies/Care";
import HappySvgComponent from "../TimeLineEmojies/Happy";
import LikeSvgComponent from "../TimeLineEmojies/Like";
import SadSvgComponent from "../TimeLineEmojies/Sad";
import WowSvgComponent from "../TimeLineEmojies/Wow";


import CommentReactionSvgComponent from "../TimeLineEmojies/CommentReaction";

import EmptyHeartReactionSvgComponent from "../TimeLineEmojies/EmptyHeart";

import ShareReactionSvgComponent from "../TimeLineEmojies/ShareReaction";


import DateHandler from '../../FunctionHandlers/DateHandler' ; 



  


let emojiesArray = [<AngrySvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s]"} />,
<CareSvgComponent  classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />,
<HappySvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />,
<LikeSvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />,
<SadSvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />,
<WowSvgComponent classes={"w-emojiPost z-0 relative scale-100 hover:z-10 hover:scale-[1.15] transition-all duration-[.2s] -ml-emojiPostSpace"} />] ;


export default function HandlerPost({item}) {
     return(
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
															DateHandler(item.publishDate)
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
															<p className="mr-[.45rem] mt-[.45rem] px-4 py-1 bg-[#2d343e] rounded-[.3rem] break-all hover:bg-[#848d9b] transation-all duration-[.3s] font-[500]">
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