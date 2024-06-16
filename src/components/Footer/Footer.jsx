import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Get to Know Us</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Cares</li>
              <li>Gift a Smile</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <ul>
              <li>
                <Link to={""}>Facebook</Link>
              </li>
              <li>
                <Link to={""}>Twitter</Link>
              </li>
              <li>
                {" "}
                <Link to={""}>Instagram</Link>
              </li>
              <li>
                <Link to={""}>LinkedIn</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Make Money with Us</h3>
            <ul>
              <li>Sell on ChicBazaar</li>
              <li>Sell under ChicBazaar Accelerator</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by ChicBazaar</li>
              <li>Advertise Your Products</li>
              <li>ChicBazaar Pay on Merchants</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Let Us Help You</h3>
            <ul>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>ChicBazaar App Download</li>
              <li>ChicBazaar Assistant Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex items-center justify-center">
          <p className="text-sm">
            Made with ❤️ by{" "}
            <Link
              href="https://shahfahid.vercel.app"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shah Fahid
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
