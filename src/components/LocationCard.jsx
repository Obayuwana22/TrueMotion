const LocationCard = ({ icon, heading, fields = [] }) => {
  return (
    <div className="my-10">
      <div className="shadow-[0_0_10px_rgba(0,0,0,0.1)] p-5 rounded">
        <div className="flex gap-2 mb-5">
          {icon && <img src={icon} alt={`${heading} icon`} />}
          <span className="font-semibold text-secondary-500">{heading}</span>
        </div>
        <div className="flex justify-between gap-3">
          {fields.map((field, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-32 lg:gap-40 xl:gap-52 2xl:gap-96">
              <div>
                <div className="mb-1 font-bold text-secondary-500">{field.label}</div>
                <div className="flex items-center gap-2 text-xs text-secondary-300">
                  {field.type === "select" ? (
                    <select>
                      {field.options?.map((opt, i) => (
                        <option key={i} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input type={field.type} />
                  )}
                </div>
              </div>
              {/* Don't render divider after last item */}
              {index < fields.length - 1 && <div className="w-[1px] bg-secondary-200 h-full"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationCard;


// const LocationCard = ({ arrowDown, titleIcon, title, locations = [] }) => {
//   return (
//     <div className="my-10">
//       <div className="shadow-[0_0_10px_rgba(0,0,0,0.1)] p-5 rounded">
//         <div className="flex gap-2 mb-5">
//           <img src={titleIcon} alt={title} />
//           <span className="font-semiBold text-secondary-500">{title}</span>
//         </div>
//         <div className="flex justify-between">
//           {locations.map((location, index) => (
//             <div key={index} className="flex">
//               <div>
//                 <div className="mb-1 font-bold text-secondary-500">
//                   {location.label}
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-xs text-secondary-300">
//                     {location.value}
//                   </span>
//                   {/* <img src={arrowDown} alt="arrow down" /> */}
//                 </div>
//               </div>
//               {/* <div className={`${index !== 2 && "w-1 bg-red-500"}`}></div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default LocationCard;

// {/* <div key={index} className="flex">
//               <div className={`${index !== 0 && "pl-3"}`}>
//                 <div className="mb-1 font-bold text-secondary-500">
//                   {location.label}
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-xs text-secondary-300">
//                     {location.value}
//                   </span>
//                   {/* <img src={arrowDown} alt="arrow down" /> */}
//                 </div>
//               </div>
//               <div className={`${index !== 2 && "border-r border-secondary-200 pr-3"}`}></div>
//             </div> */}
