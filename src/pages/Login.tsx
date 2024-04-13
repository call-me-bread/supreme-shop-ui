import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="w-full sm:max-w-md p-5 mx-auto">
                    <h2 className="mb-12 text-center text-5xl font-extrabold">Hello.</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="email">이메일</label>
                            <input id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="password">비밀번호</label>
                            <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                        </div>
                        <div className="mt-6">
                            <button
                                onClick={() => navigate('/products')}
                                className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                                로그인
                            </button>
                        </div>
                        <div className="mt-6 text-center">
                            <button onClick={() => navigate('/register')}>회원가입</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
