import tibbiyot from "../../public/image/tibbiyot.png";
import kalendar from "../../public/image/kalendar.png";
import biznes from "../../public/image/biznes.png";
import { FaDownload } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import rasm1 from "../../public/image/1.png";
import rasm2 from "../../public/image/2.png";
import rasm3 from "../../public/image/3.png";
import { FaRegEye } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import useGetFetch from "../hooks/useGetFetch";

function Materiallar() {
  const param = useParams();

  const { data, isPending, error } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/fanlar/${param.id}/adabiyotlar`
  );

  return (
    <div className="mt-10 w-[1500px] mr-auto ml-auto">
      <div className="">
        <h2 className="text-black text-4xl font-bold border-b border-gray-400 mb-10 pb-2">
          Kasbiy ta’lim tizimida o‘qitiladigan adabiyotlar nomi
        </h2>
        {!data?.adabiyotlar ? (
          <div className="text-gray-500 font-bold text-3xl text-center">
            Materiallar mavjud emas !
          </div>
        ) : (
          <div className="w-full grid grid-cols-4 gap-10">
            {data?.adabiyotlar.map((item) => {
              return (
                <div
                  key={item.id}
                  className="h-min border-2 border-gray-400 rounded-2xl p-2 flex flex-col gap-3"
                >
                  <div className="max-w-96 h-52">
                    <img
                      src={item.rasm_url}
                      alt=""
                      className="w-full object-cover h-full"
                    />
                  </div>
                  <h2 className="text-black text-[18px] font-bold uppercase">
                    {item.fan_nomi}
                  </h2>
                  <p className="text-black text-sm">
                    {item.kasb_kodi + "-" + item.kasb_nomi}
                  </p>
                  <h4 className="text-[#333333CC] font-semibold text-[16px]">
                    {item.material_turi}
                  </h4>
                  <Link
                    to={item.file_url}
                    target="_blank"
                    className="btn btn-primary w-1/2 mr-auto ml-auto"
                  >
                    <FaDownload /> Yuklab olish
                  </Link>
                  <div className="text-black flex justify-around mt-2">
                    <span className="flex items-center gap-1.5 text-[14px] text-gray-600">
                      <FaRegEye /> {item.korilgan_soni} ko'rilgan
                    </span>
                    <span className="flex items-center gap-1.5 text-[14px] text-gray-600">
                      <FiDownload /> {item.yuklanishlar_soni} yuklab olingan
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Materiallar;
