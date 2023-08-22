
const Slider = ({text, title1, title2, title3, oldPrice, newPrice, img}) => {
  return (
    <div>
      <div className="mt-5 w-[1170px] mx-auto bg-cover relative -z-50" >
        <img src={`${img}`} alt="" className="object-cover " />
        <div className="absolute top-7 pl-16">
          <div className="text-amiation">
            <p className="text-[#0961B3] font-[400] text-xl">
              {text}
            </p>
            <h2 className="mt-2 text-5xl font-[200] mb-5">
              {title1} <br />
              {title2}  <br />
              <span className="font-[500]">{title3}</span>
            </h2>
            <p className="text-xl font-[200]">
              Old Price : ${oldPrice}
            </p>
            <p className="text-xl font-[500]">
              New Price: ${newPrice}
            </p>
          </div>
          <button className="bg-[#FAD505] h-12 px-16 rounded-md mt-3">Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Slider