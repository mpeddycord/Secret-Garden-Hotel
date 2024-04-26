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

                <div className="flex-1 flex-wrap gap-16 items-center justify-between md:text-right">
                    <div className="text-right mb-2 hover:translate-x-2 duration-500 transition-all">
                        <Link href="/story">Our Story</Link>
                    </div>
                    <div className="text-right mb-2 hover:translate-x-2 duration-500 transition-all">
                        <Link href="/contact">Get In Touch</Link>
                    </div>
                    <div className="text-right mb-2 hover:translate-x-2 duration-500 transition-all">
                        <Link href="/privacy">Our Privacy Commitment</Link>
                    </div>
                    <div className="text-right mb-2 hover:translate-x-2 duration-500 transition-all">
                        <Link href="/terms">Terms and Conditions</Link>
                    </div>
                    <div className="text-right mb-2 hover:translate-x-2 duration-500 transition-all">
                        <Link href="/assistance">Customer Assistance</Link>
                    </div>
                </div>

                <div className="flex-1 md:text-right">
                    <div className="text-right mb-2 hover:translate-x-2 duration-500 transition-all">
                        <Link href="/dining">Dining Experience</Link>
                    </div>
                    <div className="text-right mb-2 hover:translate-x-2 duration-500 transition-all">
                        <Link href="/wellness">Wellness</Link>
                    </div>
                    <div className="text-right mb-2 hover:translate-x-2 duration-500 transition-all">
                        <Link href="/fitness">Fitness</Link>
                    </div>
                    <div className="text-right mb-2 hover:translate-x-2 duration-500 transition-all">
                        <Link href="/sports">Sports</Link>
                    </div>
                    <div className="text-right mb-2 hover:translate-x-2 duration-500 transition-all">
                        <Link href="/events">Events</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0"></div>
    </footer>
  )
}

export default Footer