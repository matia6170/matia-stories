import NavBarLink from "./NavBarLink"
import { getServerSession } from "next-auth"

export default async function AuthButton(){
    const session = await getServerSession()
    let loggedIn = false;
    if (session)
        loggedIn = true;
    



    return <NavBarLink name={session?"log out":"log in"} href="/signin" active={false}/>
}