import { CiHeart } from "react-icons/ci";

const CityList = () => {
    const locations = [
        { id: 1, name: "Amherst" },
        { id: 2, name: "Ayer" },
        { id: 3, name: "Arlington" },
        { id: 4, name: "Ashland" },
        { id: 5, name: "Auburn" },
        { id: 6, name: "Boston" },
        { id: 7, name: "Cambridge" },
        { id: 8, name: "Bolton" },
        { id: 9, name: "Berlin" },
        { id: 10, name: "Boxborough" },
        { id: 11, name: "Billerica" },
        { id: 12, name: "Carlisle" },
        { id: 13, name: "Clinton" },
        { id: 14, name: "Devens" },
        { id: 15, name: "Dracut" },
        { id: 16, name: "Fitchburg" },
        { id: 17, name: "Framingham" },
        { id: 18, name: "Groton" },
        { id: 19, name: "Gardner" },
        { id: 20, name: "Harvard" },
        { id: 21, name: "Holden" },
        { id: 22, name: "Hudson" },
        { id: 23, name: "Lexington" },
        { id: 24, name: "Lincoln" },
        { id: 25, name: "Littleton" },
        { id: 26, name: "Lowell" },
        { id: 27, name: "Lancaster" },
        { id: 28, name: "Leominster" },
        { id: 29, name: "Lunenburg" },
        { id: 30, name: "Maynard" },
        { id: 31, name: "Marlborough" },
        { id: 32, name: "Milbury" },
        { id: 33, name: "Pepperll" },
        { id: 34, name: "Pinehurst" },
        { id: 35, name: "Stow" },
        { id: 36, name: "Shirley" },
        { id: 37, name: "Shrewsbury" },
        { id: 38, name: "Springfield" },
        { id: 39, name: "Westford" },
        { id: 40, name: "Wayland" },
        { id: 41, name: "Waltham" },
        { id: 42, name: "Woburn" }
    ];
    return (
        <div className="pt-10">
            <div className="py-3 flex flex-row items-center gap-1">
                <span className="text-2xl"> <CiHeart /> </span>
                <p className="font-lato font-bold text-lg pr-2">Populer Citys</p>
                <span className="grow h-[1px] bg-gray-200"></span>
            </div>
            <div className="flex flex-wrap gap-2">
                {
                    locations.map(location => <div className="bg-[#aa8818] flex items-center justify-center gap-1 text-white hover:bg-white hover:text-[#aa8818] border border-transparent hover:border-[#aa8818] shadow-xs transition-colors duration-300 px-2 rounded-[3px]  py-0 my-0.5 cursor-pointer" key={location.id}>
                        <span className="font-lato text-ms font-medium">{location.name}</span>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CityList;