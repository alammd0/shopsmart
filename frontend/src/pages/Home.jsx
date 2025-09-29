import { Link } from "react-router-dom"
import Electronic from "../assets/Electronic.jpg"

export default function Home() {
    return (
        <div className="bg-secondary px-4 py-3 font-serif">
            <div className="max-w-11/12 mx-auto">
                {/* hero Section */}
                <div className="relative">
                    <img src={Electronic} alt="Electronic" className="w-full h-[650px] rounded-md shadow-md shadow-primary object-cover"/> 
                     <div className="absolute inset-0 bg-black/60 rounded-md"></div>

                    <div className="absolute bottom-10 left-10 space-y-4">
                        <h1 className="text-4xl text-secondary font-bold">Evaluate Your Home</h1>
                        <p className="text-[14px] text-secondary font-normal">ShopSmart is a home inspection and evaluation service that helps you find the perfect home for your family.</p>
                        <button className="bg-background/90 px-4 py-1 rounded-md cursor-pointer hover:bg-background/50">
                            <Link to="/products">
                                Shop Now
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}