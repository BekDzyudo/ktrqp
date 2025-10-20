import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMacCommand } from "react-icons/ai";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import section1Image from "../../public/image/section1_image.png";
import section3Image from "../../public/image/section3_image.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineProduct } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineQrcode } from "react-icons/ai";
import { IoPlaySkipForwardCircleOutline } from "react-icons/io5";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlinePlayLesson } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";

function Home() {
  return (
    <div className="flex flex-col gap-20 items-center">
      <section className="w-[1500px] mt-16 grid grid-cols-3 gap-10">
        <div className="flex flex-col gap-5">
          <span className="border-l-6 text-black font-semibold  border-amber-300 text-[16px] px-2 bg-gray-100">
            Kasbiy ta’lim yo‘nlishlari bo’yicha o‘quv resurslari
          </span>
          <h2 className="text-black font-bold text-4xl">
            Kasbiy ta’lim resurslari va qo‘llanmalar platformasi haqida
          </h2>
          <p className="text-black text-[18px] font-normal">
            Maqsadimiz – barcha uchun jahon standartlari mos taʼlim olish
            imkoniyatini yaratish.
          </p>
          <Link to="/adabiyotlar" className="flex items-center gap-5">
            <div className="bg-amber-400 py-2 px-6 rounded-md">
              <AiOutlineMacCommand className="text-black text-3xl" />
            </div>
            <p className="text-black text-[23px] font-semibold">
              Kasbga yo’naltirilgan resurslar
            </p>
          </Link>
          <Link className="flex items-center gap-5">
            <div className="bg-amber-400 py-2 px-6 rounded-md">
              <LiaMoneyBillWaveSolid className="text-black text-3xl" />
            </div>
            <p className="text-black text-[23px] font-semibold leading-8">
              Pullik resurslar. <br /> Qisqa muddatli kurslar
            </p>
          </Link>
        </div>
        <div className="border h-[415px] w-full">
          <img
            src={section1Image}
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </div>
        <table>
          <tr className="border border-gray-300 px-2 rounded-2xl h-full flex flex-col justify-between">
            <thead className="text-gray-600 font-bold text-xl flex items-center gap-4 border-b border-gray-300 py-5">
              <GiHamburgerMenu className="text-2xl" /> Tizim imkoniyatlari
            </thead>
            <td className="text-gray-600 font-semibold text-xl flex items-center gap-4 border-b border-gray-300 py-5">
              <AiOutlineProduct className="text-2xl" /> Ta’lim standarstlari
            </td>
            <td className="text-gray-600 font-semibold text-xl flex items-center gap-4 border-b border-gray-300 py-5">
              <AiOutlineProduct className="text-2xl" /> Rahbar/admin,
              instruktor...
            </td>
            <td className="text-gray-600 font-semibold text-xl flex items-center gap-4 border-b border-gray-300 py-5">
              <AiOutlineProduct className="text-2xl" /> Yangi standart va
              hujjatlar
            </td>
            <td className="text-gray-600 font-semibold text-xl flex items-center gap-4 border-b border-gray-300 py-5">
              <AiOutlineProduct className="text-2xl" /> AR/VR, simulyatorlar
            </td>
            <td className="text-gray-600 font-semibold text-xl flex items-center gap-4 py-5">
              <AiOutlineProduct className="text-2xl" /> Materiallarni yuklash
            </td>
          </tr>
        </table>
      </section>
      <section className="w-[1500px]">
        <h1 className="text-center text-black font-bold text-5xl mb-7">
          Biz qanday ishlayabmiz?
        </h1>
        <div className="grid grid-cols-3 gap-12">
          <div className="flex gap-5 items-center">
            <h1 className="text-[#274C9C] text-8xl font-bold">1</h1>
            <div>
              <h3 className="text-black font-bold">ASOSIY VAZIFALARI</h3>
              <p className="text-black text-[16px]">
                О‘quv-metodik qо‘llanmalarni joylashtirish – dasturlar,
                darsliklar, metodik kо‘rsatmalar, ilmiy-amaliy materiallar.
                Elektron resurslar bazasi – video-leksiyalar, podkastlar,
                infografikalar, prezentatsiyalar. Qidiruv va filtr – fan,
                mavzular, muallif yoki ta’lim yо‘nalishi bо‘yicha tezkor topish
                imkoniyati.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <h1 className="text-[#274C9C] text-8xl font-bold">2</h1>
            <div>
              <h3 className="text-black font-bold">
                FOYDALANUVCHILAR UCHUN IMKONIYATLAR
              </h3>
              <p className="text-black text-[16px]">
                О‘qituvchi – о‘zining metodik ishlanmalarini joylashtiradi va
                boshqalardan foydalanadi. О‘quvchi/talaba – fan bо‘yicha
                qо‘shimcha resurslardan mustaqil о‘rganadi.
                Administrator/Metodist – materiallarni ekspertiza qiladi,
                tasdiqlaydi va yangilaydi
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <h1 className="text-[#274C9C] text-8xl font-bold">3</h1>
            <div>
              <h3 className="text-black font-bold">TIZIM IMKONIYATLARI</h3>
              <p className="text-black text-[16px]">
                Avtorizatsiya – login/parol orqali kirish, shaxsiy kabinet.
                Material yuklash – pdf, ppt, doc, video, audio va interaktiv
                kontentlarni qо‘shish. Reyting va fikr bildirish – materiallarni
                baholash va sharh qoldirish. Integratsiya – edu.profedu.uz,
                my.gov.uz yoki LMS tizimlari bilan uyg‘un ishlay olishi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1500px] grid grid-cols-2 gap-30">
        <div>
          <span className="border-l-6 text-black font-semibold border-amber-300 text-[16px] px-2 bg-gray-100">
            Siz nimani o’rganasiz?
          </span>
          <h2 className="text-black font-bold text-4xl my-5">
            О‘qituvchi nimani о‘rganadi va qiladi?
          </h2>
          <div className="join join-vertical bg-gray-50 w-full">
            <div className="collapse collapse-arrow join-item border-gray-400 w-full border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title font-semibold text-[#1674cc] text-xl">
                How do I create an account?
              </div>
              <div className="collapse-content text-md text-black">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-gray-400 w-full border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold text-[#1674cc] text-xl">
                I forgot my password. What should I do?
              </div>
              <div className="collapse-content text-md text-black">
                Click on "Forgot Password" on the login page and follow the
                instructions sent to your email.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-gray-400 w-full border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold text-[#1674cc] text-xl">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-md text-black">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-gray-400 w-full border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold text-[#1674cc] text-xl">
                I forgot my password. What should I do?
              </div>
              <div className="collapse-content text-md text-black">
                Click on "Forgot Password" on the login page and follow the
                instructions sent to your email.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-gray-400 w-full border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold text-[#1674cc] text-xl">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-md text-black">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-gray-400 w-full border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold text-[#1674cc] text-xl">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-md text-black">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
          </div>
        </div>
        <div className="border border-amber-400 h-[500px]">
          <img
            src={section3Image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="w-[1500px] grid grid-cols-2 gap-10">
        <div className="flex justify-center items-center bg-gray-900 w-full h-[400px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/CbeNcJ-6gYE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl text-black font-bold">Video darsliklar</h2>
          <p className="text-normal text-black">
            It is important to stay focused on saving money in any way you can.
            We help you monitor your spending habits so you can easily spot and
            cut any unnecessary expenses. Simply join today to get started!
          </p>
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center w-8 h-8">
                <AiOutlineUsergroupAdd className="w-full text-black h-full" />
              </div>
              <div className="flex flex-col gap-0.5 mb-5">
                <h4 className="text-black text-xl font-semibold">Amaliy imtihonlari</h4>
                <p className="text-black text-md">15 imtihonlar</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center w-8 h-8">
                <IoPlaySkipForwardCircleOutline className="w-full h-full text-black" />
              </div>
              <div className="flex flex-col gap-0.5 mb-5">
                <h4 className="text-black text-xl font-semibold">Video yo‘riqnomalar</h4>
                <p className="text-black text-md">1 yo‘riqnoma</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center w-8 h-8">
                <AiOutlineQrcode className="w-full text-black h-full" />
              </div>
              <div className="flex flex-col gap-0.5 mb-5">
                <h4 className="text-black text-xl font-semibold">O’quv modullari</h4>
                <p className="text-black text-md">10 modul</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center w-8 h-8">
                <MdOutlinePlaylistPlay className="w-full text-black h-full" />
              </div>
              <div className="flex flex-col gap-0.5 mb-5">
                <h4 className="text-black text-xl font-semibold">Animatison roliklar</h4>
                <p className="text-black text-md">10 animatsion rolik</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center w-8 h-8">
                <MdOutlinePlayLesson className="w-full text-black h-full" />
              </div>
              <div className="flex flex-col gap-0.5 mb-5">
                <h4 className="text-black text-xl font-semibold">“Master klass” darslari</h4>
                <p className="text-black text-md">8 darslik</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center w-8 h-8">
                <MdOndemandVideo className="w-full text-black h-full" />
              </div>
              <div className="flex flex-col gap-0.5 mb-5">
                <h4 className="text-black text-xl font-semibold">Video kurslar</h4>
                <p className="text-black text-md">20 video</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
