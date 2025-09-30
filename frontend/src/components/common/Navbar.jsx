import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const homeData =[
        {
            id : 1,
            label : "Home",
            url : "/"
        },

        {
            id : 2,
            label : "Products",
            url : "/products"
        }
    ]

    return (
        <div className="bg-secondary/90 px-4 py-3 font-serif border-b-1 border-primary">
            <div className="max-w-11/12 mx-auto flex justify-between items-center px-4 py-2">
                {/* left side */}
                <div className="text-2xl font-bold text-primary font-serif">
                    ShopSmart
                </div>

                {/* right side */}
                <div className="hidden md:flex gap-8 items-center">
                    <div className="flex gap-8">
                        {
                            homeData.map((item, index) => (
                                <Link className="text-primary text-[16px] font-normal" to={item.url} key={index}>
                                    {item.label}
                                </Link>
                            ))
                        }
                    </div>

                    
                   <div className="flex gap-8 items-center">

                     <Link className="bg-primary/10 px-4 py-1 rounded-md cursor-pointer hover:bg-primary/20" to="/cart">
                        <button className="cursor-pointer">
                            Cart
                        </button>
                    </Link>

                    <Link className="bg-background px-4 py-1 rounded-md text-secondary cursor-pointer hover:bg-background/20 hover:text-primary" to="/login">
                        <button className=" cursor-pointer">
                            Login/Register
                        </button>
                    </Link>

                    {/* Profile Card or logo
                    <Link className="bg-background px-4 py-1 rounded-md text-secondary cursor-pointer hover:bg-background/20 hover:text-primary" to="#">
                        <button className=" cursor-pointer">
                            Login/Register
                        </button>
                    </Link> */}
                   </div>
            
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-secondary/95 px-6 py-4 space-y-4">
                    <div className="flex flex-col gap-4">
                        {homeData.map((item) => (
                            <Link
                                className="text-primary text-lg font-medium hover:text-background transition"
                                to={item.url}
                                key={item.id}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4 pt-4 border-t border-primary">
                        <Link
                            className="bg-primary/10 px-4 py-2 rounded-md hover:bg-primary/20"
                            to="/cart"
                            onClick={() => setIsOpen(false)}
                        >
                            Cart
                        </Link>

                        <Link
                            className="bg-background px-4 py-2 rounded-md text-secondary hover:bg-background/20 hover:text-primary"
                            to="/login"
                            onClick={() => setIsOpen(false)}
                        >
                            Login/Register
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}