import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      {/*grid layout*/}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/*first*/}
      <div>
        <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            Pui Pui Sekai
        </h1>
        <p className="text-sm text-black opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ducimus corrupti odit doloribus excepturi similique esse aliquid voluptate, reiciendis ut sapiente magnam. Aperiam consequatur dolore nemo consectetur sapiente vitae odio.
        </p>
        <p className="text-base mt-6 text-black opacity-80">
            ( +000 ) 1234 5678 90 - info@example.com
        </p>
      </div>
      {/*second*/}
      <div className="lg:mx-auto">
        <h1 className="footer_title">Information</h1>
        <p className="footer_link">About Us</p>
        <p className="footer_link">Privacy Policy</p>
        <p className="footer_link">Return Policy</p>
        <p className="footer_link">Dropshipping</p>
        <p className="footer_link">Shipping Policy</p>
      </div>
      {/*third*/}
      <div className="lg:mx-auto">
        <h1 className="footer_title">Account</h1>
        <p className="footer_link">Dashboard</p>
        <p className="footer_link">My Orders</p>
        <p className="footer_link">Account Details</p>
        <p className="footer_link">Track Orders</p>
      </div>
      {/*fourth*/}
      <div className="lg:mx-auto">
        <h1 className="footer_title">Shop</h1>
        <p className="footer_link">Affiliate</p>
        <p className="footer_link">Best Sellers</p>
        <p className="footer_link">Latest Products</p>
        <p className="footer_link">Sale Products</p>
      </div>
      </div>
      {/*copyright*/}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
        <p className="text-sm text-black opacity-60">© Copyright Pui Pui Sekai 2025</p>
        <Image
            src="/images/pay.svg"
            alt="payment"
            width={230}
            height={230}
            className="object-contain sm:ml-auto"
        />
      </div>
    </div>
  )
}

export default Footer
