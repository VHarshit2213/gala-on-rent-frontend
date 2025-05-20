import React, { useState } from 'react'

export const Tabs = ({
    defaultActive,
    tabClassName = '',
    tabButton = '',
    active = '',
    tabContent = '',
    children,
    ...rest
}) => {
    const [activeTab, setActiveTab] = useState(defaultActive);

    const tabs = React.Children.map(children, child => ({
        key: child.props.eventKey,
        title: child.props.title,
        disabled: child.props.disabled,
    }));
    return (
        <div>
            <div className={tabClassName}>
                {tabs.map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => !tab.disabled && setActiveTab(tab.key)}
                        disabled={tab.disabled}
                        className={`${tabButton} ${activeTab === tab.key ? active : ''} ${tab.disabled ? 'disabled' : ''}`}
                        {...rest}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className={tabContent}>
                {React.Children.map(children, child =>
                    child.props.eventKey === activeTab ? child : null
                )}
            </div>
        </div>
    )
}

export const Tab = ({ children }) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}
