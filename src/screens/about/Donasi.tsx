import banner from "../../assets/images/banner.webp";
import donasi from "../../assets/images/donasi.jpeg";

export default function Donasi() {
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
          src={donasi}
          alt="donasi"
          className="w-full max-w-lg lg:max-w-3xl h-auto object-contain"
        />
      </div>
    </div>
  );
}
