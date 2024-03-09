import { useEffect } from "react";

const Layout = ({title = 'Title', className, Children}) => {
    useEffect(()=>{
        document.title = title;
    },[])
    return (
        <div>
            <div className="mb-3">
                <h3>Menu</h3>
            </div>
            <div className={className}>{Children}</div>
        </div>
    );
}

export default Layout;