import talkshow from "../../assets/images/talkshow.svg";
import workshop from "../../assets/images/workshop.svg";
import healing from "../../assets/images/healing.svg";
import bazar from "../../assets/images/bazar.svg";

export default function Event() {
  return (
    <div className="w-full bg-secondary">
      <div className="w-full h-14 bg-primary"></div>
      <div className="py-11 md:px-28 px-11">
        <h2 className="text-6xl mb-10 pb-3 font-bold bg-gradient-to-r from-black to-[#DDC4A6] inline-block text-transparent bg-clip-text font-montserrat">
          Our Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mb-8">
          {[{
            img: workshop,
            title: "Workshop",
            desc: "Workshop ini dirancang untuk membantu peserta menyusun rencana hidup yang terarah dan realistis. Peserta akan diajak untuk mengeksplorasi potensi diri, menetapkan tujuan, dan merancang langkah konkret untuk masa depan.",
          }, {
            img: talkshow,
            title: "Talkshow",
            desc: "Talk Show ini bertemakan 'Balancing Dreams and Reality: A Roadmap for the Future'. Akan menghadirkan Kak Devi Ulumit yang membahas cara menyeimbangkan impian dengan realita kehidupan.",
          }, {
            img: healing,
            title: "Healing Corner",
            desc: "Kegiatan journaling untuk kesehatan mental dengan berbagai teknik. Juga ada wadah menyampaikan rasa cinta dan peduli lewat tulisan kepada saudara-saudari di Palestina.",
          }, {
            img: bazar,
            title: "Bazar",
            desc: "Bazar dengan stand-stand makanan, produk/barang, atau jasa untuk memeriahkan acara dan mendukung usaha masyarakat.",
          }].map((event, index) => (
            <div key={index} className="flex flex-col justify-start md:h-full">
              <img
                src={event.img}
                alt={event.title}
                className="w-full mb-2 cursor-pointer"
              />
              <div
                className="relative bg-[#f4f4d6] px-6 py-10 rounded-lg w-full shadow-md flex-grow"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              >
                <p className="text-center font-medium text-base sm:text-lg md:text-xl text-[#613D20]">
                  {event.desc}
                </p>
              </div>
              <a
                href="https://forms.gle/qJu5DCBV9MDCRzcQA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <div className="w-full rounded-xl px-7 py-3 bg-primary text-secondary text-xl flex justify-center font-montserrat cursor-pointer mt-3">
                  {event.title}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
