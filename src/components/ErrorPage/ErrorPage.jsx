import errorImg from '../../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className='w-4/6 mx-auto my-16 rounded-2xl' src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;