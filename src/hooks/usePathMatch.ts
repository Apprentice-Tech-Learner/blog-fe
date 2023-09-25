import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

type TUsePathMatch = {
    headerTitle: string,
    activeHeaderTitle: boolean,
    userId: string|undefined
}

export const usePathMatch = (): TUsePathMatch => {
    const location = useLocation();
    const [headerTitle, setHeaderTitle] = useState('');
    const [activeHeaderTitle, setActiveHeaderTitle] = useState(false);
    const [userId, setUserId] = useState();

    useEffect(() => {

    }, [location.pathname]);

    return { headerTitle, activeHeaderTitle, userId };
}
