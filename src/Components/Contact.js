import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="w-[1000px] ml-auto mr-auto">
      <div className="p-20">
        <h1 className="text-4xl font-bold text-center ">Contact Us </h1>
        <h3 className="mt-6 font-semibold text-center">
          Hungry for assistance or have a craving to share? Our Contact Us page
          is your direct line to our food-loving team. Whether you need help
          with an order, want to share your feedback, or simply want to chat
          about your favorite dishes, we're here for you. Reach out through the
          app, shoot us an email, or connect on social media – we're always
          ready to serve up a side of excellent customer support!"
        </h3>
        <div className="flex flex-row  justify-between mt-10 items-start">
          <div className=" flex flex-col gap-5 font-semibold  w-[60%]">
            <div>
              <h2 className="text-xl font-semibold">Contact Details</h2>
            </div>
            <div>
              <h3 className="flex gap-3 items-center">
                <FontAwesomeIcon icon={faPhone} />
                6369795937
              </h3>
              <h3 className="flex gap-3 items-center">
                <FontAwesomeIcon icon={faEnvelope} />
                FoodExpress@gmail.com
              </h3>
              <h3 className="flex gap-3 ">
                <FontAwesomeIcon icon={faLocationDot} /> Bundl Technologies Pvt
                Ltd (FoodExpress) Tower D, 9th Floor, IBC Knowledge Park,
                Bannerghatta Main Road, Bangalore - 560029, Karnataka, India.
              </h3>
            </div>
          </div>
          <div className="w-[40%] flex flex-col  justify-evenly gap-5 ">
            <div>
              <h2 className="text-center font-semibold text-xl">
                Social Media{" "}
              </h2>
            </div>
            <div className="flex justify-evenly">
              <FontAwesomeIcon className="text-3xl" icon={faInstagram} />
              <FontAwesomeIcon className="text-3xl" icon={faXTwitter} />
              <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
              <FontAwesomeIcon className="text-3xl" icon={faWhatsapp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
