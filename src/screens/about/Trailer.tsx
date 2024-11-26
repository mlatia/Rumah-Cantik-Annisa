

import banner from "../../assets/images/banner.webp";

export default function Trailer() {
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
        <div className="relative  w-full flex justify-center">
        <div className="relative w-full md:w-3/5" style={{ paddingBottom: '56.25%' }}>
        <iframe
            src="https://www.youtube.com/embed/YpTcp8HmWyQ"
            title="YouTube video trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        ></iframe>
        </div>
        </div>
    </div>
  );
}
