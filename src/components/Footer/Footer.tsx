import Link from "next/link"
import { BsFillEnvelopeFill, BsTelephoneOutbound, BsFacebook } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="mt-16">
        <div className="container mx-auto px-4">
            <Link href="/" className="font-black text-tertiary-dark">The Secret Garden Hotel</Link>

            <h4 className="font-semibold text-[40px] py-6">Contact</h4>

            <div className="flex flex-wrap gap-16 items-center justify-between">
                <div className="flex-1">
                    <p>1 Lodge St, Asheville, NC 28803</p>
                    <div className="flex items-center py-4">
                        <BsFillEnvelopeFill />
                        <p  className="ml-2">secretgardenhotel@gmail.com</p>
                    </div>
                    <div className="flex items-center">
                        <BsTelephoneOutbound />
                        <p  className="ml-2">(800) 411-3812</p>
                    </div>
                    <div className="flex items-center pt-4">
                        <BsFacebook />
                        <p  className="ml-2">SecretGardenHotel</p>
                    </div>
                </div>

                <div className="flex-1 md:text-right">
                    <p className="pb-4">Our Story</p>
                    <p className="pb-4">Get In Touch</p>
                    <p className="pb-4">Our Privacy Commitment</p>
                    <p className="pb-4">Terms and Conditions</p>
                    <p>Customer Assistance</p>
                </div>

                <div className="flex-1 md:text-right">
                    <p className="pb-4">Dining Experience</p>
                    <p className="pb-4">Wellness</p>
                    <p className="pb-4">Fitness</p>
                    <p className="pb-4">Sports</p>
                    <p>Events</p>
                </div>
            </div>
        </div>
        <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0"></div>
    </footer>
  )
}

export default Footer