import {Product} from "@/components/Product.tsx";
import {NavBar} from "@/components/NavBar.tsx";

export const Products = () => {
    return (
        <>
            <NavBar/>
            <div className="max-h-max bg-gray-100 pt-20 flex">
                <div className="mx-auto max-w-7xl justify-center flex-wrap px-6 md:flex md:space-x-6 xl:px-0 mb-4">
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start flex flex-wrap">
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                    </div>
                </div>

            </div>
        </>
    );
};
