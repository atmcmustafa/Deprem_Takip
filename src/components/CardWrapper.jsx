import { useEffect, useState } from "react";
import Card from "./Card";

const CardWrapper = () => {
  const [dataArr, setDataArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApi = async () => {
      const url = `https://api.orhanaydogdu.com.tr/deprem/kandilli/live`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setDataArr(data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getApi();
  }, []);

  return (
    <>
      {loading ? (
        <div className="relative dark:bg-slate-700 bg-white min-h-screen">
          <span className="loader absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></span>
        </div>
      ) : (
        <div className="flex flex-col px-6 sm:px-0 py-8 w-full gap-4 dark:bg-slate-900 bg-white">
          {dataArr
            ? dataArr.map((data, index) => {
                const eventDate = new Date(data.date);
                const formattedDate = eventDate.toLocaleDateString();
                const formattedTime = eventDate.toLocaleTimeString();

                const now = new Date();
                const timeDifference = now.getTime() - eventDate.getTime();
                const secondsAgo = Math.floor(timeDifference / 1000);
                const minutesAgo = Math.floor(secondsAgo / 60);
                const hoursAgo = Math.floor(minutesAgo / 60);
                console.log();
                return (
                  <Card
                    date={formattedDate}
                    depth={data.depth}
                    location={data.title}
                    mag={data.mag}
                    key={index}
                    hour={formattedTime}
                    whatTime={
                      hoursAgo < 24
                        ? hoursAgo === 0
                          ? `• ${minutesAgo} dakika önce`
                          : `• ${hoursAgo} saat önce`
                        : `• ${Math.floor(hoursAgo / 24)} gün önce`
                    }
                  />
                );
              })
            : ""}
        </div>
      )}
    </>
  );
};

export default CardWrapper;
