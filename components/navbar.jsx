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
        <div className="inline-block top-0 bg-gradient-to-r from-blue-900 via-blue-900 to-transparent relative w-full h-full z-50">
          <Image className="bg-center filter h-full relative opacity-60 contrast-120 brightness-40" style={{ zIndex: '-1' }} src="https://www.history.com/.image/t_share/MTU3ODc4NjgxMDkyNjk1MzY5/ask-bald-eagle-istock_000017215186large-2.jpg" alt="background" layout="fill" objectFit="cover" objectPosition="center 25%" />
        </div>
      )}
      <div className="absolute top-0 w-full z-50 h-full">
        <div className="h-full flex flex-col">
          <div className={`${bg ? '' : 'shadow-lg bg-gray-500 '}flex flex-row justify-center`}>
            <div className="flex flex-row justify-between items-center w-8/12 mx-auto">
              <Link href="/">
                <a className="flex flex-row text-white items-center text-3xl font-extrabold uppercase gap-5">
                  <Image src="/logo.png" className="filter invert grayscale contrast-max brightness-100 shadow-md" height={150} width={150} />
                  <span>Secure Your Vote</span>
                </a>
              </Link>
              <div className="flex flex-row gap-4">
                <Link href="/sign-in">
                  <a>
                    <span className="btn btn-outline text-xl px-6 py-3">Sign In</span>
                  </a>
                </Link>
                <Link href="/sign-up">
                  <a>
                    <span className="btn btn-purple text-xl px-6 py-3">Sign Up</span>
                  </a>
                </Link>
                <Link href="/donate">
                  <a>
                    <span className="btn btn-purple text-xl px-6 py-3">Donate</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={`h-full ${bg ? '' : 'bg-gray-100'}`}>{children}</div>
          <div className="mt-auto w-full border-t-2 border-solid border-gray-400 bg-gray-100 bg-opacity-80">
            <footer>
              <a
                href="http://www.blueoceantechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 flex flex-row justify-center gap-2"
              >
                Powered by
                {' '}
                <Image src="https://www.seoblog.com/wp-content/uploads/2019/10/BOGT-standard-logo.png" width={100} height={30} />
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
