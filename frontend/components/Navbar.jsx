import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, getProviders } from "next-auth/react";

const Navbar = () => {
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <p className='logo_text'>Scrapbook</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        <div className='flex gap-3 md:gap-5'>
          <Link href='/' className='purple_btn md:gap-9'>
            Cognition Signature
          </Link>
          <Link href='/app/chatbot/page.html' className='purple_btn'>
            Chat with Yourself
          </Link>
          <Link href='/tell-story' className='black_btn'>
            Tell Story
          </Link>
          <Link href='/create-prompt' className='black_btn'>
            Write Memory
          </Link>
          <button type='button' onClick={signOut} className='outline_btn'>
            Sign Out
          </button>
          <Link href='/profile'></Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        <button
          className='hamburger_icon'
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          {/* Add your hamburger icon here */}
        </button>

        {toggleDropdown && (
          <div className='dropdown'>
            <Link
              href='/profile'
              className='dropdown_link'
              onClick={() => setToggleDropdown(false)}
            >
              My Profile
            </Link>
            <Link
              href='/create-prompt'
              className='dropdown_link'
              onClick={() => setToggleDropdown(false)}
            >
              Write Memory
            </Link>
            <button
              type='button'
              onClick={() => {
                setToggleDropdown(false);
                signOut();
              }}
              className='mt-5 w-full black_btn'
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
