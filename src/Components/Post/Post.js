import { useState } from "react";
import {ReactComponent as EmojiSvg} from "../../Assets/postSectionIcons/emojiSvg.svg" ;
import {ReactComponent as GifSvg} from "../../Assets/postSectionIcons/gifSvg.svg" ;
import {ReactComponent as LocationSvg} from "../../Assets/postSectionIcons/locationSvg.svg" ;
import {ReactComponent as MediaSvg} from "../../Assets/postSectionIcons/mediaSvg.svg" ;
import {ReactComponent as PollSvg} from "../../Assets/postSectionIcons/pollSvg.svg" ;
import {ReactComponent as SchaduelSvg} from "../../Assets/postSectionIcons/schaduelSvg.svg" ;
function handlePostSection(e){
     e.target.style.height = `` ; 
     e.target.style.height = `${e.target.scrollHeight}px` ; 
}


export default function Post() { 
     const [handlePostActivate , setHandlePostActivate] = useState(0) ;
     return(
          
          <div className="mt-[5%] px-[5%]">
               <div className="flex items-start p-[1rem] rounded-[1rem] bg-[#1a1c20]">
                    <img alt="userProfileImage" className="w-[3rem] h-[3rem] rounded-full object-cover object-top" src="./profileimage/1.png" />
                    <div className="w-[calc(100%-4rem)] flex-col">
                         <div className="p-[.5rem_.2rem_0_.2rem]  bg-backgroundgrayscale ml-[.5rem] rounded-[1rem]">
                              <textarea className="w-[100%] p-[0rem_.8rem] outline-0 focus:outline-none text-[#9f9fa1] placeholder:text-[#9f9fa1] 
                              text-lg max-h-[calc(50vh)] relative resize-none scrollbar-thin scrollbar-thumb-[#1a1c20] scrollbar-track-transparent 
                              scrollbar-thumb-rounded-[10rem] bg-transparent
                              " placeholder="Amir, what's the latest?" type='text' id="dd" onInput={handlePostSection}
                              onChange={(e)=>Number(e.target.value.length) > 0 ? setHandlePostActivate(1) :setHandlePostActivate(0)}
                              >
                              
                              </textarea>
                         </div>
                         <div className="flex items-center justify-center w-full px-[5%] w-full flex-wrap mt-[1rem] tablet:justify-between">
                              <div className="flex items-center justify-center tablet:justify-[unset]  mb-[.8rem] flex-wrap">
                                   <MediaSvg className="w-emojiPostSection 
                                   h-emojiPostSection flex items-center judtify-center m-[.4rem_.4rem_0_.4rem] tablet:m-[0_.4rem_0_0] p-[.4rem] hover:bg-backgroundgrayscale transition-all duration-[.4s] rounded
                                   "/>
                                   <GifSvg className="w-emojiPostSection 
                                   h-emojiPostSection flex items-center judtify-center m-[.4rem_.4rem_0_.4rem] tablet:m-[0_.4rem_0_0] p-[.4rem] hover:bg-backgroundgrayscale transition-all duration-[.4s] rounded"/>

                                   <PollSvg className="w-emojiPostSection 
                                   h-emojiPostSection flex items-center judtify-center m-[.4rem_.4rem_0_.4rem] tablet:m-[0_.4rem_0_0] p-[.4rem] hover:bg-backgroundgrayscale transition-all duration-[.4s] rounded"/>

                                   <EmojiSvg className="w-emojiPostSection 
                                   h-emojiPostSection flex items-center judtify-center m-[.4rem_.4rem_0_.4rem] tablet:m-[0_.4rem_0_0] p-[.4rem] hover:bg-backgroundgrayscale transition-all duration-[.4s] rounded"/>

                                   <SchaduelSvg className="w-emojiPostSection 
                                   h-emojiPostSection flex items-center judtify-center m-[.4rem_.4rem_0_.4rem] tablet:m-[0_.4rem_0_0] p-[.4rem] hover:bg-backgroundgrayscale transition-all duration-[.4s] rounded"/>

                                   <LocationSvg className="w-emojiPostSection 
                                   h-emojiPostSection flex items-center judtify-center m-[.4rem_.4rem_0_.4rem] tablet:m-[0_.4rem_0_0] p-[.4rem] hover:bg-backgroundgrayscale transition-all duration-[.4s] rounded"/>

                              </div>
                              <div className="p-[.1rem_1rem] bg-lightBlueSky rounded-md mb-[.8rem] tablet:mt-[0] mt-[.4rem] transition-all duration-[.4s]" style={{
                                   opacity : handlePostActivate ? 1 : 0.5
                              }}>
                                   <span className="text-[1.2rem] text-white ">
                                        Post
                                   </span>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}