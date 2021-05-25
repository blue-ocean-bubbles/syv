import Link from 'next/link';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import AddressForm from '../components/address/AddressForm.js';


const SignUp = () => {
  return (
    <div>
      <Navbar />
        <div className="container">
          <div className="row">
          </div>
          <AddressForm />
        </div>
      <Footer />
    </div>
  )
}

export default SignUp;