import { Link } from "react-router-dom"

export default function Navbar() {
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
                <div className="flex gap-8 items-center">
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
            </div>
        </div>
    )
}