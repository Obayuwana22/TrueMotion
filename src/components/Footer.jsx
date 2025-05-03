import { footer } from "../data";

const Footer = () => {
  return (
    <div>
      <div className="mt-16">
        <h1 className="uppercase font-bold text-2xl text-primary-500 mb-5">
          truemotion
        </h1>
        <p className="font-medium text-secondary-300 text-xs">
          Our vision is to provide convenience <br /> and help increase your
          sales business.
        </p>
        <div className="flex space-x-14 flex-wrap capitalize mt-10">
          {footer.map((item) => (
            <div key={item.id} className="">
              <h2 className="font-semibold text-xl mb-5">{item.title}</h2>
              <ul className="mb-10">
                {item.list.map((item) => (
                  <li key={item.id} className="font-medium text-secondary-300 mb-3">
                    <a href="">{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="font-semibold text-xs">
          <div className="flex justify-between mb-8">
            <span>Privacy & Policy</span>
            <span>Terms & Condition</span>
          </div>
          <p>&copy; 2022 MORENT. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
