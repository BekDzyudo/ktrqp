import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import tibbiyot from "../../public/image/tibbiyot.png";
import kalendar from "../../public/image/kalendar.png";
import biznes from "../../public/image/biznes.png";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function Adabiyotlar1() {
  return (
    <div className="mt-10 w-[1500px] mr-auto ml-auto">
      <div className="w-full border border-gray-400 rounded mr-auto ml-auto p-3 mb-10">
        <h2 className="text-black text-xl font-semibold mb-2">
          Ta'lim sohasini tanlash
        </h2>
        <div className="flex gap-4">
          <select
            defaultValue="Ta'lim sohasi"
            className="select !bg-white text-black !select-neutral"
          >
            <option disabled={true}>Ta'lim sohasi</option>
            {/* <option>Chrome</option>
              <option>FireFox</option>
              <option>Safari</option> */}
          </select>
          <select
            defaultValue="Ta'lim yo'nalish"
            className="select !bg-white text-black !select-neutral"
          >
            <option disabled={true}>Ta'lim yo'nalish</option>
            {/* <option>Chrome</option>
              <option>FireFox</option>
              <option>Safari</option> */}
          </select>
          <select
            defaultValue="Ta'lim darajasi"
            className="select !bg-white text-black !select-neutral"
          >
            <option disabled={true}>Ta'lim darajasi</option>
            {/* <option>Chrome</option>
              <option>FireFox</option>
              <option>Safari</option> */}
          </select>
          <select
            defaultValue="O‘quv yili"
            className="select !bg-white text-black !select-neutral"
          >
            <option disabled={true}>O‘quv yili</option>
            {/* <option>Chrome</option>
              <option>FireFox</option>
              <option>Safari</option> */}
          </select>
          <select
            defaultValue="Blok nomi"
            className="select !bg-white text-black !select-neutral"
          >
            <option disabled={true}>Blok nomi</option>
            {/* <option>Chrome</option>
              <option>FireFox</option>
              <option>Safari</option> */}
          </select>
          <select
            defaultValue="Mas’ullar"
            className="select !bg-white text-black !select-neutral"
          >
            <option disabled={true}>Mas’ullar</option>
            {/* <option>Chrome</option>
              <option>FireFox</option>
              <option>Safari</option> */}
          </select>
          <button className="btn btn-primary">Filterni tozalash</button>
        </div>
      </div>
      <div className="">
        <h2 className="text-black text-4xl font-bold border-b border-gray-400 mb-10 pb-2">
          Kasbiy ta’lim tizimida o‘qitiladigan adabiyotlar
        </h2>
        <div className="grid grid-cols-2 gap-10">
          <Link className="flex gap-5 border border-gray-300 p-2 rounded-xl hover:shadow-xl">
            <div className="h-[300px] w-[45%]">
              <img
                src={tibbiyot}
                alt=""
                className="w-full h-full object-cover rounded-l-xl"
              />
            </div>
            <div className="w-[10%] flex flex-col items-center">
              <img src={kalendar} alt="" className="w-[50px] h-[50px]" />
              <h2 className="text-black text-5xl font-bold">08</h2>
              <p className="text-black text-sm">Mart</p>
            </div>
            <div className="flex flex-col gap-4 w-[45%] border-l-3 border-gray-200 pl-5">
              <h2 className="text-xl text-black font-semibold">
                TIBBIYOTDA AXBOROT TEXNOLOGIYALARI
              </h2>
              <p className="text-sm text-[#666C89]">
                40920102-Tibbiy-ijtimoiy ish
              </p>
              <ol className="m-0 p-0 list-disc ml-5">
                <li className="text-md font-semibold text-black m-0 p-0">
                  O‘qitish materiallar to‘plami
                </li>
                <li className="text-md font-semibold text-black m-0 p-0">
                  Raqamli ta’lim resursi
                </li>
                <li className="text-md font-semibold text-black m-0 p-0">
                  O’quv qollanma
                </li>
              </ol>
              <button className="btn btn-outline btn-primary w-1/2">
                <FaDownload /> Yuklab olish
              </button>
              <p className="text-sm text-[#697077]">25-oktabr 2025-yil</p>
            </div>
          </Link>
          <Link className="flex gap-5 border border-gray-300 p-2 rounded-xl hover:shadow-xl">
            <div className="h-[300px] w-[45%]">
              <img
                src={biznes}
                alt=""
                className="w-full h-full object-cover rounded-l-xl"
              />
            </div>
            <div className="w-[10%] flex flex-col items-center">
              <img src={kalendar} alt="" className="w-[50px] h-[50px]" />
              <h2 className="text-black text-5xl font-bold">25</h2>
              <p className="text-black text-sm">Iyun</p>
            </div>
            <div className="flex flex-col gap-4 w-[45%] border-l-3 border-gray-200 pl-5">
              <h2 className="text-xl text-black font-semibold">
                BIZNES ASOSLARI
              </h2>
              <p className="text-sm text-[#666C89]">
                30610101-Raqamli axborotlarni qayta ishlash ustasi
              </p>
              <ol className="m-0 p-0 list-disc ml-5">
                <li className="text-md font-semibold text-black m-0 p-0">
                  O‘qitish materiallar to‘plami
                </li>
                <li className="text-md font-semibold text-black m-0 p-0">
                  Raqamli ta’lim resursi
                </li>
                <li className="text-md font-semibold text-black m-0 p-0">
                  O’quv qollanma
                </li>
                <li className="text-md font-semibold text-black m-0 p-0">
                  Fan darsliklari
                </li>
              </ol>
              <button className="btn btn-outline btn-primary w-1/2">
                <FaDownload /> Yuklab olish
              </button>
              <p className="text-sm text-[#697077]">30-noyabr 2025-yil</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Adabiyotlar1;
