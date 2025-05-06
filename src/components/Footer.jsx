import { footer } from "../data";

const Footer = () => {
  return (
    <div className="mt-16">
      <div className="xl:flex xl:justify-between">
        <div className="mb-10">
          <h1 className="uppercase font-bold text-2xl text-primary-500 mb-5">
            truemotion
          </h1>
          <p className="font-medium text-secondary-300 text-xs xl:text-base">
            Our vision is to provide convenience <br /> and help increase your
            sales business.
          </p>
        </div>
        <div className="flex space-x-14 flex-wrap capitalize xl:space-x-20">
          {footer.map((item) => (
            <div key={item.id} className="">
              <h2 className="font-semibold text-xl mb-5">{item.title}</h2>
              <ul className="mb-10">
                {item.list.map((item) => (
                  <li
                    key={item.id}
                    className="font-medium text-secondary-300 mb-3"
                  >
                    <a href="">{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-secondary-200 mb-9"></div>
      <div className="font-semibold text-xs xl:flex xl:justify-between xl:text-base">
        <div className="flex justify-between mb-8 xl:order-2 xl:gap-20">
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
        <p className="xl:order-1">&copy; 2022 MORENT. All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
