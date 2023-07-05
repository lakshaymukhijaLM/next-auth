import Link from 'next/link';
import {signIn, signOut, useSession} from 'next-auth/react'

function Navbar(){
  const {data : session} = useSession()
  console.log({session})
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className={`main-nav`}> 
        <li>
          <Link href="/" >
            Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        {!session && ( <li>
          <Link href="/api/auth/signin" onClick={e => {
            e.preventDefault()
            signIn('github')
          }}>SignIn</Link>
        </li> )}

        {session && (<li>
        <Link href="/api/auth/signout" onClick={e => {
            e.preventDefault()
            signOut()
          }}>SignOut</Link>
        </li>  )}
        
        
      </ul>
    </nav>
  );
};

export default Navbar;
