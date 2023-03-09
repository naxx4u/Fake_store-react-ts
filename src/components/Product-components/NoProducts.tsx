import { GiSpiderWeb } from "react-icons/gi"

export const NoProducts = () => {
  return (
    <div className="flex flex-col uppercase gap-5">
    
        <span className="text-xl  text-center text-slate-100 ">this page is empty :(</span>
        <span className="text-[18rem]  text-2xl text-center text-slate-100 ">
          <GiSpiderWeb />
        </span>
     
    </div>
  )
}
