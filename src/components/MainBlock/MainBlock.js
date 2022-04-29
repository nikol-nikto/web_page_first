import "./MainBlock.css"
import { SideBar } from "./SideBar/SideBar"
import { PostsAll } from "./Posts/postsAll"

export const MainBlock = ({ setIsLoggedIn }) => {
    return(
        <>
            <SideBar setIsLoggedIn={setIsLoggedIn} />
            <PostsAll />
        </>
    )
}