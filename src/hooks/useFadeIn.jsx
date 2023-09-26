import { useEffect, useState } from "react";

export const useFadeIn = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShow(true);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return isShow;
};
