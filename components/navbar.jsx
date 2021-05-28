/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ children, bg }) => (
  <div className="inline-flex w-full h-full">
    <div className="top-0 w-full inline-block h-full">
      {bg && (
        <div className="inline-block top-0 bg-gradient-to-r from-blue-900 via-blue-900 to-transparent relative w-full h-full" style={{ zIndex: '-1' }}>
          <Image className="bg-center filter h-full relative opacity-60 contrast-120 brightness-40" style={{ zIndex: '-1' }} src="https://www.history.com/.image/t_share/MTU3ODc4NjgxMDkyNjk1MzY5/ask-bald-eagle-istock_000017215186large-2.jpg" alt="background" layout="fill" objectFit="cover" objectPosition="center 25%" />
        </div>
      )}
      <div className="absolute top-0 w-full z-50">
        <div className="h-full">
          <div className={`${bg ? '' : 'shadow-lg bg-gray-500 '}flex flex-row justify-center`}>
            <div className="flex flex-row w-8/12 justify-between items-center">
              <Link href="/">
                <a className="flex flex-row text-white items-center text-3xl font-extrabold uppercase gap-5">
                  <Image src="/logo.png" className="m-4 filter invert grayscale contrast-max brightness-100 shadow-md" height={150} width={150} />
                  <span>Secure Your Vote</span>
                </a>
              </Link>
              <div className="flex flex-row gap-4">
                <Link href="/sign-in">
                  <a>
                    <span className="btn btn-outline text-xl">Sign In</span>
                  </a>
                </Link>
                <Link href="/sign-up">
                  <a>
                    <span className="btn btn-purple text-xl">Sign Up</span>
                  </a>
                </Link>
                <Link href="/donate">
                  <a>
                    <span className="btn btn-purple text-xl">Donate</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-8/12 mx-auto">{children}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
