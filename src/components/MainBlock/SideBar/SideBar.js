import "./SideBar.css"
import { User } from "./User/User"
import { Navigation } from "./Navigation/Navigation"
import { LogOut } from "./LogOut/LogOut"

export const SideBar = ({ setIsLoggedIn }) => {
    return(
        <aside className="sidebar">
            <section className="sidebarTop">
                <User />
                <Navigation />             
            </section>
            <section className="sidebarBottom">
                <LogOut setIsLoggedIn={setIsLoggedIn} />
            </section>
        </aside>
    )
}
