
const Home = () => {
  return (
    <>
      <div className="animate-[wiggle_1s_ease-in-out_infinite]">
        <div className="mt-5 w-[1170px] mx-auto pt-10 pl-20 bg-cover bg-[url('https://prestashop.coderplace.com/PRS02/PRS02045/PRS02/modules/cp_imageslider/views/img/sample-1.jpg')]">
          <p className="text-[#0961B3] font-[400] text-xl">
            Gorilla Glass Victus
          </p>
          <h2 className="mt-4 text-5xl font-[200] mb-5">
            SAMSUNG GALAX S21 <br />
            ULTRA 5G EXCELLENT <br />
          <span className="font-[500]">EDITION </span>
          </h2>

          <p className="text-xl font-[200]">
          Old Price : $499
          </p>
          <p className="text-xl font-[500]">
            New Price: $399
          </p>
          <button className="bg-[#FAD505] h-12 px-16 rounded-md my-8">Shop Now</button>
        </div>
      </div>
    </>
  )
}

export default Home