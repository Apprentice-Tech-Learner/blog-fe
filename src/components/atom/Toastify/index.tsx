import { ToastContainer } from "react-toastify";

export const Toastify = () => {
    return <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false} // 알림 좌우반전
        pauseOnFocusLoss
        pauseOnHover
        theme='colored'
    />
};
