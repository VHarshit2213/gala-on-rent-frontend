import React from 'react'
import { Listbox } from '@headlessui/react'
import { Check, ChevronDown } from 'lucide-react'

export const Button = ({ children, ...rest }) => {
    return (
        <button {...rest}>
            {children}
        </button>
    )
}

export const Card = ({ cardClassName, children }) => {
    return (
        <div className={cardClassName}>
            {children}
        </div>
    )
}

export const CardHeader = ({ headerClassName, children }) => {
    return (
        <div className={headerClassName}>
            {children}
        </div>
    )
}

export const Select = ({
    options = [],
    value,
    onChange,
    label = '',
    className = '',
}) => {
    return (
        <div className={`w-full ${className}`}>
            {label && <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>}
            <Listbox value={value} onChange={onChange}>
                <div className="relative">
                    <Listbox.Button className="relative w-full cursor-pointer rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                        <span className="block truncate">{value.label || value.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" style={{zIndex:999}}>
                        {options.map((option, idx) => (
                            <Listbox.Option
                                key={idx}
                                value={option}
                                className={({ active, selected }) =>
                                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                                    }`
                                }
                            >
                                {({ selected }) => (
                                    <>
                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                            {option.label || option.name}
                                        </span>
                                        {selected && (
                                            <span className="absolute inset-y-0 left-2 flex items-center text-blue-600">
                                                <Check className="w-4 h-4" />
                                            </span>
                                        )}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    )
}


