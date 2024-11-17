import { useState, useEffect } from "react";
import banner from "../../assets/images/banner.webp";
import comingsoon from "../../assets/images/coming-soon.svg";
import mainevent from "../../assets/images/main-event.svg";

export default function BannerAbout() {
  const targetDate = new Date("December 1, 2024 09:15:00").getTime();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountdown({ days, hours, minutes, seconds });
    if (distance < 0) {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full py-5 md:px-16 px-10 bg-black relative overflow-hidden"
      style={{
        backgroundColor: "#50341E",
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "auto",
      }}
    >
      <div className="grid place-items-center">
        <img
          src={comingsoon}
          alt="comingsoon"
          className="hidden md:block mb-[-180px]"
        />
        <img
          src={mainevent}
          alt="main-event"
          className="block md:hidden w-[90%] h-auto"
        />
        <div className="mt-5 md:mt-0 relative w-[90%] sm:w-[500px] h-[109.89px]">
          <div
            className="absolute inset-0 rounded-[269.667px]
                      bg-[radial-gradient(61.94%_48.96%_at_49.96%_96.22%,_#917D66_0%,_#FADB44_100%)]
                      shadow-[0px_1.079px_67.417px_0px_#FFEFD5,_0px_0px_0px_11.865px_rgba(255,255,255,0.07),
                              0px_-1.079px_0px_2.697px_rgba(95,83,69,0.2)_inset,
                              0px_1.079px_0px_2.697px_rgba(255,255,255,0.4)_inset]"
          />
          <div
            className="absolute w-[90%] sm:w-[330px] h-[32px] flex items-center justify-center text-black font-['Platypi'] font-bold text-[16px] sm:text-[32px] tracking-[1.92px]"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <div className="text-center">
              <p className="text-xs sm:text-2xl">
                {countdown.days}d : {countdown.hours}h : {countdown.minutes}m : {countdown.seconds}s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
