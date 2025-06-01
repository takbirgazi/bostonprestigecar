import MainForm from '@/components/SharedComponent/MainForm/MainForm';
import PageHeader from '@/components/SharedComponent/PageHeader/PageHeader';
import heroBg from "@/assets/images/heroBg2.jpg";

const HeroMobile = () => {
    const pageHeading = {
        heading: "Looking for a taxi? You're at the right place.",
        bgImage: heroBg.src
    }
    return (
        <div>
            <PageHeader pageHeaderData={pageHeading} />
            <div className="w-full p-2">
                <MainForm />
            </div>
        </div>
    );
};

export default HeroMobile;