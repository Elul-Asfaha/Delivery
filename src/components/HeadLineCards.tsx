const HeadLineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* card */}
            <div className='rounded-xl relative'>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>
                        Sun's Out,BOGO's Out
                    </p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                        ORDER NOW
                    </button>
                </div>
                <img
                    src='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1010&q=80'
                    alt='/'
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                />
            </div>
            <div className='rounded-xl relative'>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>
                        New Restaurant
                    </p>
                    <p className='px-2'>Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                        ORDER NOW
                    </button>
                </div>
                <img
                    src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                    alt='/'
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                />
            </div>
            <div className='rounded-xl relative'>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>
                        We Deliver Desserts
                    </p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                        ORDER NOW
                    </button>
                </div>
                <img
                    src='https://plus.unsplash.com/premium_photo-1666702222560-ee56d8db4c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1060&q=80'
                    alt='/'
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                />
            </div>
        </div>
    );
};

export default HeadLineCards;
