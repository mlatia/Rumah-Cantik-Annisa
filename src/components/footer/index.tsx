import logo from "../../assets/images/logo-rca.svg";
import instagram from "../../assets/images/Instagram.webp";
import linkedin from "../../assets/images/LinkedIn.webp";

const socials = [
  {
    image: instagram,
    url: "https://www.instagram.com/annisaa.itb/",
  },
  {
    image: linkedin,
    url: "",
  },
];

export default function Footer() {
  return (
    <div className="w-full bg-[#50341E] py-12 px-16">
      <div className="md:flex justify-between items-start md:gap-14">
        <div className="md:w-4/12 sm:w-full sm:mb-7">
          <div className="flex justify-start items-start gap-3 mb-11">
            <img src={logo} alt="logo" className="size-24"></img>
            <p className="flex-1 text-white text-lg break-words">
              Annisa GAMAIS ITB, Jl. Ganesa No.7, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 border-t-2 border-black pt-10">
        <p className="md:text-lg text-xs text-white">
          &copy;Rumah Cantik Annisa. All Rights Reserved
        </p>
        <ul className="flex justify-end items-end gap-2">
          {socials.map((d) => (
            <li key={d.url} className="cursor-pointer">
              <a href={d.url} target="_blank" rel="noopener noreferrer">
                <img src={d.image} alt="social-icon"></img>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
