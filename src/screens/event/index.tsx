import talkshow from "../../assets/images/product1.svg";
import investment from "../../assets/images/investment.svg";
import healing from "../../assets/images/healing.svg";
import dummy from "../../assets/images/dummy.svg";

export default function Event() {
  return (
    <div className="w-full bg-secondary">
      <div className="w-full h-14 bg-primary"></div>
      <div className="py-11 md:px-28 px-11">
        <h2 className="text-6xl mb-10 pb-3 font-bold bg-gradient-to-r from-black to-[#DDC4A6] inline-block text-transparent bg-clip-text font-montserrat">
          Our Events
        </h2>
        <div className="md:flex justify-between items-center gap-6 md:mb-8">
          <div className="md:w-4/12 sm:w-full mb-7">
            <a
              href="https://drive.google.com/file/d/1ARnJWBkA0478UV8IhSXbaDa6XYrc_t2Q/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={investment}
                alt="talkshow"
                className="w-full mb-2 cursor-pointer"
              />
            </a>

            <div className="w-full rounded-xl px-7 py-3 bg-primary text-secondary text-xl flex justify-center font-montserrat">
              Talkshow
            </div>
          </div>
          <div className="md:w-4/12 sm:w-full mb-7">
            <a
              href="https://drive.google.com/file/d/1BZKxtX3IorBJqOEzwTd-ic4k0q2OPZe1/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={talkshow}
                alt="investment"
                className="w-full mb-2 cursor-pointer"
              />
            </a>

            <div className="w-full rounded-xl px-7 py-3 bg-primary text-secondary text-xl flex justify-center font-montserrat">
              Investment Workshop
            </div>
          </div>
          <div className="md:w-4/12 sm:w-full mb-7">
            <a
              href="https://drive.google.com/file/d/1BiUQ79pJKQcIcEfGuLtf_H1ErEHyFFfb/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={healing}
                alt="healing"
                className="w-full mb-2 cursor-pointer"
              />
            </a>

            <div className="w-full rounded-xl px-7 py-3 bg-primary text-secondary text-xl flex justify-center font-montserrat">
              Healing Corner
            </div>
          </div>
        </div>
        <div className="md:w-4/12 sm:w-full mb-7">
          <a
            href="https://drive.google.com/file/d/1ARnJWBkA0478UV8IhSXbaDa6XYrc_t2Q/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={dummy}
              alt="talkshow"
              className="w-full mb-2 cursor-pointer"
            />
          </a>

          <div className="w-full rounded-xl px-7 py-3 bg-primary text-secondary text-xl flex justify-center font-montserrat">
            Bazar
          </div>
        </div>
      </div>
    </div>
  );
}
