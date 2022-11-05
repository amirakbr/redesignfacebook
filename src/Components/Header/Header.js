import { ReactComponent as SvgMagnfier } from "./magnifier.svg" ; 
export default function Header()
{
return(
     <div className="flex flex-col mt-[.5rem]">
          <div className="flex items-center flex-wrap justify-evenly px-[10%] gap-[.5rem]">
               <div className="flex items-center icon mb-[.5rem]">
                    <span className="text-3xl font-semibold text-[#ffff] w-[2.5rem] h-[2.5rem] flex items-center justify-center rounded-[100%] bg-[#3b5998]">
                         F
                    </span>
                    <span className="text-3xl font-semibold text-[#3b5998] ml-[.3rem]">
                         acebook
                    </span>
               </div>
               <div className="flex items-center gap-[.5rem] w-[100%] px-[1rem] bg-backgroundgrayscale p-1 rounded-full">
                    <SvgMagnfier className="w-[2rem] h-[2rem]" />
                    <input className="h-[2.5rem] w-[100%] pl-[.5rem] ml-[.5rem] outline-0 focus:outline-none text-[#9f9fa1] placeholder:text-[#9f9fa1] 
                    text-lg bg-transparent
                    " type="search" placeholder="Search..."/>
               </div>
          </div>
     </div>
)
}