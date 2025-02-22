export const NavBar = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Supreme Online Shop</span>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-black rounded md:bg-transparent md:text-black-700 md:p-0"
                                   aria-current="page">상품목록</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-black rounded md:bg-transparent md:text-black-700 md:p-0"
                                   aria-current="page">장바구니</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-black rounded md:bg-transparent md:text-black-700 md:p-0"
                                   aria-current="page">배송정보</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};
