import headerStyles from "./header.module.css"
import { addContact } from "../../services/services";
import { IHeaderProps } from "../header/Iheader";
import { Link } from "react-router-dom";

const Header=(props:IHeaderProps)=>{      
        return(
            <div className='Header'>
                <div className={headerStyles.titleBar}>
                    <p>Address Book</p>
                </div>
                <div className={headerStyles.nav}>
                <nav>
                    <div className={headerStyles.nav}>
                        <Link to="/Home" ><button className={headerStyles.btn1} onClick={()=>{props.toggleForm(false);props.toggleContactDetails(false)}}>HOME</button></Link>
                        <Link to="/Add" ><button className={headerStyles.btn2} onClick={()=>{props.toggleForm(true);props.toggleContactDetails(false);props.setMode("view")}}>+ADD</button></Link>
                        <div className={headerStyles.logo}><img src={require('../../assets/blog-icon.png')} alt="logo" id="logo"/></div>
                    </div>
                </nav>
            </div>

            </div>
        )
}
export default Header