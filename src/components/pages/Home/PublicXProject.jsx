import { FaArrowRight } from "react-icons/fa";

const PublicXProject = () => {
    return (
        <div className='w-full'>
            <div className="bg-[#FFB300] w-80 h-96 px-20 py-7 sticky">
                <h3 className="uppercase font-bold">Public X Projects</h3>
            </div>
            <div className="bg-[url('/img_1.webp')] bg-cover bg-center w-full h-screen">
                <div className="w-full h-full flex flex-col justify-start items-center pl-10">
                    <div className="w-full h-full flex items-center mt-20">
                        <h3 className="text-white text-2xl md:text-3xl">What if beams of light could provide <br />
                            global access to fast, affordable connectivity?</h3>
                    </div>
                    <div className="text-2xl group cursor-pointer h-full md:text-3xl flex justify-start text-start w-full gap-7 -mt-10">
                        <div className="text-3xl bg-[#F5F5F5] group-hover:bg-[#FFB300] rounded w-12 h-12 flex justify-center items-center overflow-x-hidden"><FaArrowRight className="-translate-x-10 group-hover:translate-x-3 duration-200 " /> <FaArrowRight className=" -translate-x-3 group-hover:translate-x-12 duration-200" /></div>
                        <h3 className="text-white group-hover:text-[#FFB300] pt-2">Explore Taara</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PublicXProject;