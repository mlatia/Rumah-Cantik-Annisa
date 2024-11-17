import left from "../../assets/images/leaf-left.svg";
import right from "../../assets/images/leaf-right.svg";

export default function OverviewAbout() {
  return (
    <div
      className="flex flex-row justify-center items-center w-full py-5 md:px-28 px-12 bg-white relative"
      style={{
        backgroundColor: "#DE9E54",
      }}
    >
      <img
        src={left}
        alt="leaf-left"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
      />

      <h2 className="text-center font-montserrat text-3xl md:text-5xl lg:text-8xl font-bold text-white mx-4">
        About Us
      </h2>

      <img
        src={right}
        alt="leaf-right"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
      />
    </div>
  );
}
