
const Slider = (text, title1, title2, title3, oldPrice, newPrice, img) => {
  return (
    <div className="animate-[wiggle_1s_ease-in-out_infinite]">
      <div className={`mt-5 w-[1170px] mx-auto pt-10 pl-20 bg-cover bg-[url(${img})]`} >
        <p className="text-[#0961B3] font-[400] text-xl">
          {text}
        </p>
        <h2 className="mt-4 text-5xl font-[200] mb-5">
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
        <button className="bg-[#FAD505] h-12 px-16 rounded-md my-8">Shop Now</button>
      </div>
    </div>
  )
}

export default Slider