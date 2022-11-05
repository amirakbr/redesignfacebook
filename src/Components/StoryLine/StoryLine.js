import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
function renderImage(entry,path){
     return `./${path}/${entry}.png`
}
let storyDataBase=[
     {
          username : 'Ali Rahman' , 
          profileimage : renderImage(1,'profileimage') ,  
          storycontent : renderImage(1,'story') ,
     },
     {
          username : 'Ali Rahman' , 
          profileimage : renderImage(2,'profileimage') ,  
          storycontent : renderImage(2,'story') ,
     },
     {
          username : 'Ali Rahman' , 
          profileimage : renderImage(3,'profileimage') ,  
          storycontent : renderImage(3,'story') ,
     },
     {
          username : 'Ali Rahman' , 
          profileimage : renderImage(4,'profileimage') ,  
          storycontent : renderImage(4,'story') ,
     },
     {
          username : 'Ali Rahman' , 
          profileimage : renderImage(5,'profileimage') ,  
          storycontent : renderImage(5,'story') ,
     },
     {
          username : 'Ali Rahman' , 
          profileimage : renderImage(6,'profileimage') ,  
          storycontent : renderImage(6,'story') ,
     },
]
export default function StoryLine (){
     return(
          <div className='w-full px-[5%] mt-[2rem]'>
               <h2 className='text-white text-xl mb-[.8rem] ml-[1rem]'>
                    Stories :
               </h2>
                    <Swiper
          // install Swiper modules
                    breakpoints={{
                         768: {
                              width: 700,
                              slidesPerView: 3,
                              },
                         }}
                         modules={[Navigation, Pagination, Scrollbar, A11y]}
                         spaceBetween={15}
                         slidesPerView={3}
                         scrollbar={{ draggable: true }}
                         >  {
                         storyDataBase.map((item,index)=>
                                   <SwiperSlide key={index}>
                                   <div className='relative h-[6rem] rounded-[1rem] overflow-hidden '>
                                        <img className="h-[100%]
                                        w-full
                                        " 
                                        src={item.storycontent}
                                        alt={item.username+'story'} />
                                        <div className='absolute w-full h-full top-[0] flex flex-col items-center justify-center bg-[#00000052] hover:bg-transparent transition-all ease-in'>
                                             <img className="h-[2.5rem]
                                                  w-[2.5rem] rounded-full border-[.2rem] border-[#35abff] object-cover object-top
                                                  " 
                                                  src={item.profileimage}
                                                  alt={item.username +'story'} 
                                             />
                                             <span className='text-white text-xs mt-2'>
                                                  {
                                                       item.username
                                                  }
                                             </span>
                                        </div>
                                   </div>
                                   </SwiperSlide>
                              )
                         }         
                    </Swiper>
          </div>
     )
}