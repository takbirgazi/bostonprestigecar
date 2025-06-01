
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SelectOptionType } from "./SelectOptionType";

const SelectOption: React.FC<SelectOptionType> = ({ selectOptionData }) => {
    return (
        <div
            style={{ maxHeight: 200, overflowY: 'auto' }}
            onWheel={e => {
                const target = e.currentTarget;
                if (
                    (e.deltaY < 0 && target.scrollTop === 0) ||
                    (e.deltaY > 0 && target.scrollTop + target.clientHeight === target.scrollHeight)
                ) {
                    // Prevent parent scroll when at the edge
                    e.stopPropagation();
                }
            }}
        >
            <Select required onValueChange={(value) => selectOptionData.selectValue(value)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={`Select a ${selectOptionData.title}`} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="h-[200px] overflow-y-auto">
                        <SelectLabel>{selectOptionData.title}</SelectLabel>
                        {
                            selectOptionData.selectData.map(time => (
                                <SelectItem key={time.id} value={time.value}>
                                    {time.title}
                                </SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectOption;