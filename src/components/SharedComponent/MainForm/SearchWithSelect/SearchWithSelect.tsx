'use client'

import React, {
    useState,
    ChangeEvent,
    FocusEventHandler,
    MouseEventHandler,
    useEffect,
} from 'react'
import { FaAngleDown } from 'react-icons/fa'

interface Option {
    id: number,
    name: string,
    value: string
}

interface SearchWithSelectProps {
    options: Option[]
    label_name?: keyof Option
    disabled?: boolean
    required?: boolean
    requiredMessage?: string
    placeholder?: string
    error?: { message?: string }
    register?: (name: string, options?: Record<string, unknown>) => Record<string, unknown> // optional for react-hook-form
    onSelect: (selected: Option) => void
}

const SearchWithSelect: React.FC<SearchWithSelectProps> = ({
    options,
    placeholder,
    onSelect,
    label_name = 'name', // default to 'name' if not provided
}) => {
    const [filteredOptions, setFilteredOptions] = useState<Option[]>([])
    const [inputValue, setInputValue] = useState<string>('')
    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)

        if (value) {
            const filtered = options.filter((option) =>
                (option[label_name] as string)
                    ?.toLowerCase()
                    .includes(value.toLowerCase())
            )
            setFilteredOptions(filtered)
        } else {
            setFilteredOptions(options)
        }

        setShowDropdown(true)
    }

    const handleSelect: MouseEventHandler<HTMLLIElement> = (e) => {
        const selectedText = (e.target as HTMLLIElement).textContent
        const selectedOption = filteredOptions.find(
            (option) => option[label_name as keyof Option] === selectedText
        )
        if (selectedOption) {
            setInputValue(selectedOption[label_name as keyof Option] as string)
            onSelect(selectedOption)
            setShowDropdown(false)
        }
    }

    const handleFocus: FocusEventHandler<HTMLInputElement> = () => {
        setFilteredOptions(options)
        setShowDropdown(true)
    }

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev)
    }

    useEffect(() => {
        if (!inputValue) {
            setFilteredOptions(options)
        }
    }, [options, inputValue])

    return (
        <div className="w-full relative">
            <div className="w-full relative">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder={placeholder || 'Start typing...'}
                    className={`w-full p-2 border border-gray-300 rounded-sm focus:outline-0`}
                    onFocus={handleFocus}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                />
                <div
                    className="absolute top-[50%] right-2 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <FaAngleDown className={`${showDropdown && "rotate-180"} transition-all duration-300`} />
                </div>
                {showDropdown && filteredOptions.length > 0 && (
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
                        <ul className="absolute w-full bg-white border rounded-sm border-gray-300 mt-1 max-h-40 overflow-y-auto z-10 shadow-md">
                            {filteredOptions.map((option, i) => (
                                <li
                                    key={i}
                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={handleSelect}
                                >
                                    {option[label_name]}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchWithSelect
