import {FC, ReactNode} from 'react';


interface LinkProp{
    href: string;
    icon: ReactNode | null;
}

const HeaderLinks : FC<LinkProp> = ({href, icon}) => {
    return (
        <a href={href} className={'header__menu-link'}>
            {icon}
        </a>
    );
};

export default HeaderLinks;