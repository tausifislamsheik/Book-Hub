import bannerImg from '../../assets/bannerImg.jpg'

const Banner = () => {
    return (
        <div class="hero bg-base-300 mt-5 rounded-2xl lg:p-10 lg:px-20">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img
                src={bannerImg}
                class="lg:max-w-sm rounded-lg shadow-2xl"
                />
                <div className='lg:py-20'>
                <h1 class="text-3xl lg:text-5xl font-bold mb-5 lg:mb-16">Books to freshen up your bookshelf!</h1>
                <button class="btn bg-[#23BE0A] text-white lg:p-7 lg:text-xl">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;