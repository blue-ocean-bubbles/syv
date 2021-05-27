/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image';

const Footer = () => (
    <div className="absolute bottom-0 w-full border-t-2 border-solid border-gray-400 flex flex-row justify-center bg-gray-100 bg-opacity-90">
      <footer className="p-4">
        <a
          href="http://www.blueoceantechnologies.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center"
        >
          Powered by{' '}
          <span className="">
            <Image src="https://www.seoblog.com/wp-content/uploads/2019/10/BOGT-standard-logo.png" width={100} height={30} />
          </span>
        </a>
      </footer>
    </div>
);

export default Footer;
