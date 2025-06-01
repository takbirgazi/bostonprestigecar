import { PageHeaderType } from "./PageHeaderType";

const PageHeader: React.FC<PageHeaderType> = ({ pageHeaderData }) => {
    return (
        <div style={{ background: `url("${pageHeaderData.bgImage}")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="h-80">
            <div className="container mx-auto max-w-[1200px] px-4 flex justify-center items-center h-full">
                <div>
                    <h2 className="text-5xl font-bold text-white text-center">{pageHeaderData.heading}</h2>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;