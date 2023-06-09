import {
    BrowserRouter,
    Link,
    useLocation,
    Route,
    Routes
  } from "react-router-dom";

export default function Voltar({url}) {
    return (
    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{position: "absolute", left: "0px", top: "40px", background: "none", minWidth: "0", width: '49'}}>
        <Link to={url}>
            <rect x="-15" width="64" height="48" rx="9" fill="#D8D2C6"/>
            <path d="M12 23.5L31.5 10.9426L31.5 36.0574L12 23.5Z" fill="#242424"/>
        </Link>
    </svg>
    )
}
