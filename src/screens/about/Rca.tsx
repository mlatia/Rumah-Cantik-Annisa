import banner from "../../assets/images/banner-2.svg";

export default function Rca() {
  return (
    <div
      className="flex flex-col justify-center w-full py-12 md:py-20 px-6 md:px-20 bg-white relative"
      style={{
        backgroundColor: "#934B18",
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
      }}
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-bold bg-gradient-to-r from-secondary to-white inline-block text-transparent bg-clip-text text-center">
        Navigating The Unknown <br /> Shaping Tomorrow
      </h2>

      <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12">
        <div
          className="relative bg-[#f4f4d6] px-6 py-5 rounded-lg w-full md:w-3/5 shadow-md"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <p className="text-center font-medium text-base sm:text-lg md:text-xl text-[#613D20]">
            Rumah Cantik Annisaa (RCA) hadir sebagai wadah yang memberikan solusi Islami bagi para mahasiswi Muslimah yang tengah menghadapi kecemasan terkait masa depan mereka.
          </p>
        </div>
      </div>

      <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        <div
          className="relative bg-[#f4f4d6] px-6 py-5 rounded-lg w-full md:w-3/5 shadow-md"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <p className="text-center font-medium text-base sm:text-lg md:text-xl text-[#613D20]">
            Dengan tema “Navigating the Unknown, Shaping Tomorrow,” acara ini dirancang untuk mengajak peserta berdiskusi, berbagi, dan belajar bagaimana mengatasi kecemasan yang dirasakan dengan pendekatan islami.
          </p>
        </div>
      </div>
    </div>
  );
}
