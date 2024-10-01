import { FaSyringe, FaUserMd } from "react-icons/fa";
import Pelayanan from "../../Page/Pelayanan/Pelayanan";
import Poliklinik from "../../Page/Poliklinik/Poliklinik";
export const WebLink = [
    { 
        path: '/pelayanan', 
        label: 'PELAYANAN',
        component: <Pelayanan />,
        icon:  <FaUserMd/>
    },
    { 
        path: '/poliklinik', 
        label: 'POLIKLINIK',
        component: <Poliklinik />,
        icon:  <FaSyringe/>
    },
];


