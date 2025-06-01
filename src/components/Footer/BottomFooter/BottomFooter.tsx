
const BottomFooter = () => {
    return (
        <div className="py-5 border-t border-[#2a2a2a]">
            <div className="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-white text-center md:text-left hover-text-mainColor transition-all duration-500">Copyright, BostonExpressCab.com 2025. All rights reserved.
                    {/* <a className="underline cursor-pointer text-nowrap" href="https://diligentsoftit.com" target="_blank" rel="noopener noreferrer">Diligent soft it</a> */}
                </p>
                {/* <div className="flex justify-center items-center gap-4">
                    <p className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Terms & Conditions</p>
                    <p className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Privacy Policy</p>
                </div> */}
            </div>
        </div>
    );
};

export default BottomFooter;