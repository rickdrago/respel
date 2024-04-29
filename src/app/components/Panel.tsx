import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    boxColor: string;
    title: string;
    icon: string;
    iconSize: string;
    description: string;
    btnText: string;
    dataSource: any[];
}

const Panel: React.FC<Props> = ({
    children,
    boxColor,
    title,
    icon,
    iconSize,
    description,
    btnText,
    dataSource,
}) => {
    return (
        <article
            className={`flex flex-col w-78 bg-white rounded rounded-2xl h-105 border-solid border-2 shadow-2xl justify-between ${boxColor === 'green'
                    ? 'border-main_green'
                    : boxColor === 'red'
                        ? 'border-main_red'
                        : 'border-main_blue'
                }`}
        >
            <header
                className={`flex items-center px-5 h-14 font-bold text-lg ${boxColor === 'green'
                        ? 'text-main_green'
                        : boxColor === 'red'
                            ? 'text-main_red'
                            : 'text-main_blue'
                    }`}
            >
                <span
                    className={`inline-flex h-10 w-10 rounded-full justify-center items-center mr-3 ${boxColor === 'green'
                            ? 'bg-light_green'
                            : boxColor === 'red'
                                ? 'bg-main_pink'
                                : 'bg-light_blue'
                        }`}
                >
                    <span
                        className={`text-font_gray ${icon ? icon : ''} ${iconSize ? iconSize : ''
                            }`}
                    ></span>
                </span>
                {title}
            </header>
            <div className="flex flex-1 bg-gray-200 flex-col p-4 gap-4 h-64 overflow-auto hide-scrollbar">
                {children}
            </div>
            <footer className="h-32 flex flex-0 justify-end pr-4 py-2">
                <button
                    className={`btn ${boxColor === 'green'
                            ? 'btn-green'
                            : boxColor === 'red'
                                ? 'btn-red'
                                : 'btn-blue'
                        }`}
                >
                    {btnText}
                </button>
            </footer>
        </article>
    );
};

export default Panel;