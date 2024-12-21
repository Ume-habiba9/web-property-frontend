import statsbg from 'assets/images/statsbg.svg'
import icon1 from 'assets/icons/Icon(1).png'
import icon2 from 'assets/icons/Icon(2).png'


interface StatsData {
    ReturnRate: number;
    properties: number;
    Transactions: number;
}
function Stats() {
    // Hardcoded stats data
    const stats: StatsData = {
        ReturnRate: 7.4,
        properties: 3856,
        Transactions: 2540,
    };
    const formatNumber = (num: number): string => num.toLocaleString("en-US");
    return (
        <div className='relative h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center gap-4'
            style={{
                backgroundImage: `url(${statsbg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
            <div className='flex flex-row align-center gap-9 py-9 justify-between px-28'>
                <h2 className='font-bold text-2xl w-8/12'>
                    The highest level of service from IVYHOLD's best agents
                </h2>
                <p className=' w-2/3 font-normal text-xl'>Lorem ipsum dolor sit amet consectetur. Elementum sagittis fringilla diam tristique posuere. Tristique lectus sit natoque eget mattis magna.</p>
            </div>
            <div className='flex flex-row align-center gap-56 py-9 px-28'>
                <div className='flex flex-row bg-white rounded-3xl p-6  w-1/3'>
                    <div>
                        <img className='' src={icon1} alt="" /></div>
                    <div>
                        <h3 className='font-bold text-xl font-bold text-xl p-4'>
                            Meet your local luxury agent</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Elementum sagittis fringilla diam tristique posuere. Tristique lectus .</p>            </div>

                </div>
                <div className=' p-6 leading-9 text-white bg-primary rounded-3xl w-1/3'>
                    <img src={icon2} alt="" />
                    <h3 className='font-bold text-xl'>Get Expert consultation</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Elementum sagittis fringilla diam tristique posuere. Tristique lectus .</p>
                </div>
            </div>
            <section>
                <div className="grid grid-cols-3 divide-x-4 divide-black  p-9   text-center align-center ">
                    <div className="">
                        <p className="text-5xl font-bold">{formatNumber(stats.ReturnRate)}%</p>
                        <p>Property Return Rate</p>
                    </div>
                    <div className="px-9">
                        <p className="text-5xl font-bold">{formatNumber(stats.properties)}</p>
                        <p>Property in Sell & Rent</p>
                    </div>
                    <div className=" text-center px-9">
                        <p className="text-5xl font-bold">{formatNumber(stats.Transactions)}</p>
                        <p>Daily Completed Transactions</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Stats