import { HiOutlineMailOpen } from "react-icons/hi";

const Footer = () => {
  return (
    <>
    <div className="mt-6 bg-[#FAD505] py-3">
      <div className="w-full md:w-[1170px] text-center md:flex md:gap-3 mx-auto">
        <HiOutlineMailOpen size="3rem"/>
        <div>
          <h2 className="font-bold text-2xl ">Join Our Newsletter, Get 10% Off</h2>
          <p className="font-light">Get all latest information on events, sales and offers</p>
        </div>

        <form className="ml-10">
          <input type="email" name="email" placeholder="correo@email.com"
          className=" md:w-[450px] py-3 px-4 rounded-l-3xl outline-0"
          />
          <button className=" bg-[#303840] py-3 px-4 rounded-r-3xl text-white">Submit</button>
        </form>
      </div>
    </div>
    <div className="w-96 mx-auto lg:w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full md:w-[1170px]  md:flex md:justify-between my-8 mx-auto gap">
        <div>
          <h2 className="font-semibold text-lg my-4">Contact Us</h2>
          <div className="text-left">
            <p>Contact Us</p>
            <p>Demo Store</p>
            <p>42 Puffin Street 12345 Puffinville</p>
            <p>France,</p>
            <p>United States</p>
            <p>0123-456-789</p>
            <p>demo@demo.com</p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg my-4">Products</h2>
          <div className="text-left">
            <p>Prices Drop</p>
            <p>New Products</p>
            <p>Best Sales</p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg my-4">Our Company</h2>
          <div className="text-left">
            <p>Delivery</p>
            <p>Legal Notice</p>
            <p>Terms And Conditions Of Use</p>
            <p>About Us</p>
            <p>Secure Payment</p>
            <p>Contact Us</p>
            <p>Sitemap</p>
            <p>Stores</p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg my-4">Information</h2>
          <div className="text-left">
            <p>Delivery</p>
            <p>Legal Notice</p>
            <p>Terms And Conditions Of Use</p>
            <p>About Us</p>
            <p>Secure Payment</p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg my-4">Trending Category</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer