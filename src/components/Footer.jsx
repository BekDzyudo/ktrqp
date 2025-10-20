import { Link } from "react-router-dom"
import logo from "../../public/image/logo_white.png"
import { IoMailUnreadOutline } from "react-icons/io5";
import { PiTelegramLogoLight } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#091242] text-white w-full py-5 mt-20">
      <div className="grid grid-cols-3 w-[1500px] mr-auto ml-auto pb-5">
        <div className="flex items-center gap-3">
        <img className="w-20" src={logo} alt="" />
        <p className="text-white">Professional ta'limni <br />rivojlantirish <br />instituti</p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-bold text-blue-200 flex items-center gap-3"><FaPhone className="text-xl"/> Telefon</p>
          <p>+99893 123 45 67</p>
        </div>
        <div>
          <p className="font-bold text-blue-200 flex items-center gap-3"><PiTelegramLogoLight className="text-xl"/> Telegram</p>
          <Link to="https://t.me/ipi_uz">profedu.uz</Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-bold text-blue-200 flex items-center gap-3"><IoMailUnreadOutline className="text-xl"/> Email</p>
          <p>pedagoginnovatsiyalar@edu.uz</p>
        </div>
        <div>
          <p className="font-bold text-blue-200 flex items-center gap-3"><GrLanguage className="text-xl"/> Rasmiy web-sayt</p>
          <Link to="https://ipitvet.uz/uz/">https://ipitvet.uz/</Link>
        </div>
      </div>
      </div>
      <div className="border-t border-gray-600 pt-2 flex justify-center">
        <p className="w-[1500px]">2025. Barcha huquqlar himoyalangan. Saytdan olingan barcha ma’lumotlar chop etilganda veb-saytga havola qilish majburiy</p>
      </div>
    </footer>
  )
}

export default Footer