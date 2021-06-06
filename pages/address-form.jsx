/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
import Navbar from '../components/navbar';
import AddressForm from '../components/address/AddressForm';

const AddressFormPage = (props) => {
  return (
    <Navbar>
      <AddressForm APP_ID_GEO={props.APP_ID_GEO} APP_KEY_GEO={props.APP_KEY_GEO} />
    </Navbar>
  );
};

export async function getStaticProps(ctx) {
  return {
    props: {
      APP_ID_GEO: process.env.APP_ID_GEO,
      APP_KEY_GEO: process.env.APP_KEY_GEO,
    },
  };
}

export default AddressFormPage;
