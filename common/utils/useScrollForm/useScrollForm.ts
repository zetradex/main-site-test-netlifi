import { useCallback } from 'react';

interface IUseScrollForm {
    idElement: string
}

export const useScrollForm = ({ idElement }: IUseScrollForm) => useCallback(() => {
    const element = document.getElementById(idElement);
    if (element) {
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
}, [idElement]);
