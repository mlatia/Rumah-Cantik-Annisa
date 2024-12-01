import banner from "../../assets/images/banner.webp";
import comingsoon from "../../assets/images/coming-soon.svg";
import mainevent from "../../assets/images/main-event.svg";

export default function BannerAbout() {
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
      </div>
    </div>
  );
}
