export interface SelectOptionType {
    selectOptionData: {
        title: string,
        selectData: {
            id: number,
            title: string,
            value: string
        }[],
        selectValue: (value: string) => void;
    }
}