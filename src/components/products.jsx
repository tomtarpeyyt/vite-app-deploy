import { productList } from "../constants";

const ProductSection = () => {
    return (
        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">Buy out stuff now</h2>
            <div className="flex flex-wrap justify-center">
                { productList.map((product, index) => (
                    <div key={ index } className="w-full sm:w-1/2 lg:w-1/3 px-6 py-4">
                        <div className="bg-neutral-900 rounded-md p6 text-md border border-neutral-800 font-thin p-4">
                            <h6 className="text-xl">{ product.name }</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">
                                        { product.description }
                                    </span>
                            <div className="flex mt-4 items-start">
                                <img src={ product.image } alt="product-image" className="w-40 h-40 mr-6 rounded-lg border border-neutral-300" />
                                <div>
                                    <p>{ product.text }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
}

export default ProductSection;