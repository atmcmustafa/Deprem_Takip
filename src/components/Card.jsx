const Card = ({
  location,
  depth,
  mag,
  date,
  hour,
  minus,
  whatTime,
  className,
}) => {
  return (
    <div
      className={`p-5 rounded-md flex gap-4 bg-zinc-100 dark:text-zinc-100 dark:bg-slate-700 max-w-xl w-full mx-auto ${className}`}
    >
      <span className="text-base p-2 rounded-md font-bold dark:bg-slate-800 dark:text-zinc-100 bg-zinc-200 h-fit">
        {mag}
      </span>
      <div>
        <h2 className="text-base font-[500]">{location}</h2>
        <div className="flex gap-0 sm:gap-2 text-gray-400 sm:flex-row flex-col">
          <span>{depth} km</span>
          <span>{date}</span>
          <span>{hour}</span>
          <span>{minus}</span>
          <span>{whatTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
