import { Link } from "react-router-dom"
import Electronic from "../assets/Electronic.jpg"
import Men from "../assets/Men.jpg"
import Women from "../assets/Women.jpg"
import Phone from "../assets/Phone.jpg"
import Sale from "../assets/Sale.jpg"
import CategoryCard from "../components/core/home/CategoryCard"
import { productData } from "../data/product-data"
import Card from "../components/core/home/Card"

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

                {/* shop by category Section */}
                <section className="mt-10 space-y-6">

                    <div className="text-2xl font-bold text-primary">
                        Shop by Category
                    </div>

                    <div className="flex gap-14">
                        {/* category Card - 01 */}
                        <CategoryCard img={Men} title="Men"/>

                        {/* category Card - 02 */}
                        <CategoryCard img={Women} title="Women"/>
                        
                        {/* category Card - 03 */}
                        <CategoryCard img={Phone} title="Phone"/>

                        {/* category Card - 04 */}
                         <CategoryCard img={Sale} title="Sale"/>
                    </div>
                </section>

                {/* New Arrivals Section */}

                <section className="mt-10 space-y-6">
                    <div className="text-2xl font-bold text-primary">
                        New Arrival Products
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        {
                            productData.map((item) => {
                                // console.log(item)
                                return (
                                    <Card 
                                        key={item.id}
                                        img={item.image}
                                        title={item.title}
                                        description={item.description}
                                        cta={item.cta}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}