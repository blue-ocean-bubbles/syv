import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="inline-flex">
      <div className="text-lg relative z-1">
        <Link href="/">
        <button className="home-button"><img src="https://dcassetcdn.com/design_img/20099/20494/20494_463586_20099_thumbnail.jpg" height="100px" width="100px"></img></button>
        </Link>
        <Link href="/sign-in"><a> <span className="text-3xl">Sign In</span> </a></Link> |
        <Link href="/sign-up"><a> <span className="text-3xl">Sign Up</span> </a></Link> |
        <Link href="/donate"><a> <span className="text-3xl">Donate</span> </a></Link>
      </div>
    </nav>
  )
}

export default Navbar;