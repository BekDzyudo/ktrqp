import tibbiyot from "../../public/image/tibbiyot.png";
import kalendar from "../../public/image/kalendar.png";
import biznes from "../../public/image/biznes.png";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import rasm1 from "../../public/image/1.png";
import rasm2 from "../../public/image/2.png";
import rasm3 from "../../public/image/3.png";
import { FaRegEye } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function Materiallar() {
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
          Kasbiy ta’lim tizimida o‘qitiladigan adabiyotlar nomi
        </h2>
        <div className="gap-10 flex">
          <div className="w-1/4 text-black">
            <div className="collapse collapse-arrow bg-gray-200 mb-2">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-semibold">
                Umumtaʼlim fanlari
              </div>
              <div className="collapse-content text-md flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    defaultChecked
                  />
                  <span>Jismoniy tarbiya</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>Geografiya</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>Biologiya</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>Fizika va astronomiya</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>Matematika</span>
                </label>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-gray-200 mb-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-semibold">
                Umumkasbiy fanlar
              </div>
              <div className="collapse-content text-md flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>Аxborot texnologiyalari asoslari</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    defaultChecked
                  />
                  <span>Elektrotexnika va elektronika asoslari</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>Mehnat muxofazasi va texnika xavfsizligi</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>Media va axborot savodxonligi</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>Biznes asoslari</span>
                </label>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-gray-200 mb-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-semibold">Maxsus fanlar</div>
              <div className="collapse-content text-md flex flex-col gap-2"></div>
            </div>
            <div className="collapse collapse-arrow bg-gray-200 mb-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-semibold">
                O‘quv amaliyot(lar)i
              </div>
             <div className="collapse-content text-md flex flex-col gap-2"></div>
            </div>
            <div className="collapse collapse-arrow bg-gray-200 mb-2">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-semibold">
                Ta’lim moduli (modul)
              </div>
              <div className="collapse-content text-md flex flex-col gap-2"></div>
            </div>
          </div>
          <div className="w-3/4 grid grid-cols-3 gap-10">
            <div className="h-min border-2 border-gray-400 rounded-2xl p-2 flex flex-col gap-3">
              <img src={rasm1} alt="" className="max-w-96" />
              <h2 className="text-black text-[18px] font-bold">
                AXBOROT TEXNOLOGIYALARI ASOSLARI
              </h2>
              <p className="text-black text-sm">
                30610101-Raqamli axborotlarni qayta ishlash ustasi
              </p>
              <h4 className="text-[#333333CC] font-semibold text-[16px]">
                O‘quv qo’llanma
              </h4>
              <button className="btn btn-primary w-1/2 mr-auto ml-auto">
                <FaDownload /> Yuklab olish
              </button>
              <div className="text-black flex justify-around mt-2">
                <span className="flex items-center gap-1.5 text-[14px] text-gray-600">
                  <FaRegEye /> 145 ko'rilgan
                </span>
                <span className="flex items-center gap-1.5 text-[14px] text-gray-600">
                  <FiDownload /> 45 yuklab olingan
                </span>
              </div>
            </div>
            <div className="h-min border-2 border-gray-400 rounded-2xl p-2 flex flex-col gap-3">
              <img src={rasm2} alt="" className="max-w-96" />
              <h2 className="text-black text-[18px] font-bold">
                AXBOROT TEXNOLOGIYALARI ASOSLARI
              </h2>
              <p className="text-black text-sm">
                30610101-Raqamli axborotlarni qayta ishlash ustasi
              </p>
              <h4 className="text-[#333333CC] font-semibold text-[16px]">
                O‘quv qo’llanma
              </h4>
              <button className="btn btn-primary w-1/2 mr-auto ml-auto">
                <FaDownload /> Yuklab olish
              </button>
              <div className="text-black flex justify-around mt-2">
                <span className="flex items-center gap-1.5 text-[14px] text-gray-600">
                  <FaRegEye /> 145 ko'rilgan
                </span>
                <span className="flex items-center gap-1.5 text-[14px] text-gray-600">
                  <FiDownload /> 45 yuklab olingan
                </span>
              </div>
            </div>
            <div className="h-min border-2 border-gray-400 rounded-2xl p-2 flex flex-col gap-3">
              <img src={rasm3} alt="" className="max-w-96" />
              <h2 className="text-black text-[18px] font-bold">
                AXBOROT TEXNOLOGIYALARI ASOSLARI
              </h2>
              <p className="text-black text-sm">
                30610101-Raqamli axborotlarni qayta ishlash ustasi
              </p>
              <h4 className="text-[#333333CC] font-semibold text-[16px]">
                O‘quv qo’llanma
              </h4>
              <button className="btn btn-primary w-1/2 mr-auto ml-auto">
                <FaDownload /> Yuklab olish
              </button>
              <div className="text-black flex justify-around mt-2">
                <span className="flex items-center gap-1.5 text-[14px] text-gray-600">
                  <FaRegEye /> 145 ko'rilgan
                </span>
                <span className="flex items-center gap-1.5 text-[14px] text-gray-600">
                  <FiDownload /> 45 yuklab olingan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Materiallar;
