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

        <form>
          <input type="email" name="email" placeholder="correo@email.com" />
          <button>Submit</button>
        </form>
      </div>
    </div>
    <div>
      <div className="w-full md:w-[1170px] text-center md:flex md:justify-between my-8 mx-auto gap">
        <div>
          <h2 className="font-semibold text-lg my-4">Contact Us</h2>
          <p>Contact Us</p>
          <p>Demo Store</p>
          <p>42 Puffin Street 12345 Puffinville</p>
          <p>France,</p>
          <p>United States</p>
          <p>0123-456-789</p>
          <p>demo@demo.com</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg my-4">Products</h2>
          <p>Prices Drop</p>
          <p>New Products</p>
          <p>Best Sales</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg my-4">Our Company</h2>
          <p>Delivery</p>
          <p>Legal Notice</p>
          <p>Terms And Conditions Of Use</p>
          <p>About Us</p>
          <p>Secure Payment</p>
          <p>Contact Us</p>
          <p>Sitemap</p>
          <p>Stores</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg my-4">Information</h2>
          <p>Delivery</p>
          <p>Legal Notice</p>
          <p>Terms And Conditions Of Use</p>
          <p>About Us</p>
          <p>Secure Payment</p>
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