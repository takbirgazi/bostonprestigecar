import Image from "next/image";
import logoFooter from "@/assets/images/logoFooter.png";


const FooterTop = () => {
    return (
        <div className='pt-7 md:pt-8 px-10'>
            <div className="flex flex-col items-center justify-center mb-8">
                <figure>
                    <Image src={logoFooter} alt="BostonExpressCab Footer Logo" />
                </figure>
            </div>
            <p className="text-center pb-7 md:pb-8 font-bold text-white max-w-4xl mx-auto">Welcome to Boston Express Cab, your premier transportation provider for the Greater Boston area and beyond.Since 2019, we&apos;ve proudly served Medford, MA, and surrounding regions, offering a diverse fleet of vehicles and exceptional service to cater to your diverse needs.</p>
        </div>
    );
};

export default FooterTop;