import Navbar from "@/components/Navbar";
import blueNavbarLogo from "@/assets/icons/CharteragBlueLogo.svg";

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center mb-96'>
        <Navbar logo={blueNavbarLogo} linkColor="#062949"/>
        <p className="mt-32">Login page</p>
        
    </div>
  )
}

export default LoginPage;