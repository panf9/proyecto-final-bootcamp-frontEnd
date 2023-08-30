import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Card = ({ title_1, title_2, text, img }) => {
  return (
    <div className="relative overflow-hidden w-72 group">
        <img className="object-cover rounded  group-hover:scale-105 hover:duration-500" src={`${img}`} alt="imagen" />
        <div className="absolute top-5 pl-8">
          <h2 className="font-light text-lg">{title_1}</h2>
          <h2 className="font-bold text-lg">{title_2}</h2>
          <p className="font-light text-sm">{text}</p>
          <p className="text-sm flex items-center gap-1">Shop Now <MdOutlineKeyboardArrowRight className="bg-[#FAD505] rounded-lg"/> </p>
        </div>
      </div>
  )
}

export default Card