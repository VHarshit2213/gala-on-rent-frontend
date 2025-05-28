import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { IoIosArrowDown } from 'react-icons/io'
import { GrLinkNext } from 'react-icons/gr';
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export const ThemeButton = ({ className, title, icon, children, ...rest }) => {
    return (
        <div
            className={`${className} group bg-orange hover:bg-dark border hover:border-dark text-white rounded-full px-3 py-2 w-full max-w-[300px] flex justify-between items-center text-center mx-auto border-0`}
            {...rest}
        >
            <Button className="uppercase">
                {title}
            </Button>

            <div className="p-2 rounded-full border border-orange text-orange bg-white transition-all duration-300 group-hover:border-dark group-hover:text-dark">
                {icon ? icon : <GrLinkNext />}
            </div>
        </div>

    )
}
export const Button = ({ children, ...rest }) => {
    return (
        <button {...rest}>
            {children}
        </button>
    )
}

export const Card = ({ cardClassName, children, ...rest }) => {
    return (
        <div className={cardClassName} {...rest}>
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
export const CardBody = ({ bodyClassName, children }) => {
    return (
        <div className={bodyClassName}>
            {children}
        </div>
    )
}

export const CardFooter = ({ footerClassName, children }) => {
    return (
        <div className={footerClassName}>
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
    listBoxClass, listButtonClass, defaultText
}) => {
    return (
        <div className={`w-full ${className}`}>
            {label && <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>}
            <Listbox value={value} onChange={onChange}>
                {({ open }) => (
                    <>
                        <div className={`${listBoxClass} relative mt-1`}>
                            <Listbox.Button
                                className={`${listButtonClass} relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-[#00000066] focus:outline-none sm:leading-6`} >
                                <span className="flex items-center">
                                    {value ? (
                                        <span className="ml-3 block truncate text-xl">
                                            {value.value}
                                        </span>
                                    ) : (
                                        <span className="ml-3 block text-gray-500 text-xl whitespace-nowrap">
                                            {defaultText}
                                        </span>
                                    )}
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <IoIosArrowDown
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0">
                                <Listbox.Options
                                    className={`listbox-option absolute z-50 mt-1 max-h-56 w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg border border-gray-300 focus:outline-none sm:text-sm`}
                                    style={{
                                        maxHeight: "300px",
                                        overflowY: "auto",
                                    }}>
                                    {options.length > 0 ? (
                                        options.map((option) => (
                                            <Listbox.Option
                                                key={option.id}
                                                value={option}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? "bg-indigo-500 text-white" : "text-gray-600",
                                                        "relative cursor-default select-none py-2 pl-3 pr-9 text-sm border-0",
                                                    )} >
                                                {({ selected, active }) => (
                                                    <div className="flex items-center">
                                                        <span className={classNames(
                                                            selected ? "font-semibold" : "font-normal",
                                                            "ml-3 block truncate text-sm"
                                                        )}  >
                                                            {option.value}
                                                        </span>
                                                    </div>
                                                )}
                                            </Listbox.Option>
                                        ))
                                    ) : (
                                        <Listbox.Option
                                            value=""
                                            disabled
                                            className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-500">
                                            <div className="flex items-center">
                                                <span className="ml-3 text-sm block truncate">
                                                    no data
                                                </span>
                                            </div>
                                        </Listbox.Option>
                                    )}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </div>
    )
}


