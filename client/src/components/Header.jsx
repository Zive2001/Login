import { Link } from "react-router-dom"

function Header() {
  return (
    <div className=' bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold'>
          Login
        </h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/SignUp'><li>SignUp</li></Link>
         
          <Link to='/About'><li>About</li></Link>
          <Link to='/Signin'><li>SignIn</li></Link>
          
        </ul>

      </div>
    </div>
  )
}

export default Header