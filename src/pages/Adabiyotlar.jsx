import { VscKebabVertical } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import useGetFetch from "../hooks/useGetFetch";
import { useState } from "react";
import { Pagination } from "@mui/material";

function Adabiyotlar() {
  const [search, setSearch] = useState("");

  const [darajaa, setDaraja] = useState("");
  const [yil, setYil] = useState("");
  const [bilim, setBilim] = useState("");
  const [talim, setTalim] = useState("");
  const [yunalish, setYunalish] = useState("");
  const [kasb, setKasb] = useState("");
  const [masullarr, setMasullar] = useState("");
  const [blok, setBlok] = useState("");
  const [activeBtn, setActiveBtn] = useState(-1);
  const [page, setPage] = useState(1);

  const { data: darajalar } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/talim-darajalari/`
  );

  const { data: uquv_yili } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/oquv-yillari`
  );

  const { data: bilim_soha } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/bilim-sohalar/`
  );

  const { data: talim_soha } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/talim-sohalar/?bilim_soha=${bilim}`
  );
  const { data: talim_yunalish } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/talim-yonalishlar/?talim_soha=${talim}`
  );

  const { data: kasb_mutaxassislik } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/kasblar/?talim_yunalish=${yunalish}`
  );
  const { data: masullar } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/masullar/?talim_soha=${talim}`
  );
  const { data: bloklar } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/bloklar/`
  );

  const { data, isPending, error } = useGetFetch(
    `${
      import.meta.env.VITE_BASE_URL
    }/fanlar/?daraja=${darajaa}&yil=${yil}&bilim=${bilim}&talim=${talim}&yonalish=${yunalish}&kasb=${kasb}&masul=${masullarr}&blok=${blok}&search=${search}&page=${page}`
  );
  
   function handlePagination(e, p) {
    setPage(p);
  }

  return (
    <div className="mt-10 w-[1500px] mr-auto ml-auto">
      <h2 className="text-black text-4xl font-bold border-b border-gray-400 mb-10 pb-2">
        Kasbiy ta’lim tizimida o‘qitiladigan adabiyotlar
      </h2>
      <div>
        {!data ? (
          <div className="text-gray-500 font-bold text-3xl text-center">
            Materiallar mavjud emas !
          </div>
        ) : (
          <>
            <div className="w-full border border-gray-400 rounded mr-auto ml-auto p-3 mb-10">
              <h2 className="text-black text-xl font-semibold mb-2">
                Ta'lim sohasini tanlash
              </h2>
              <div className="flex gap-4">
                <select
                  onChange={(e) => setYil(e.target.value)}
                  defaultValue=""
                  className="select !bg-white text-black !select-neutral"
                >
                  <option value="" disabled={true}>
                    O‘quv yili
                  </option>
                  {uquv_yili &&
                    uquv_yili.map((item) => {
                      return (
                        <option
                          key={item.id}
                          value={item.id}
                          className="!text-black"
                        >
                          {item.yil}
                        </option>
                      );
                    })}
                </select>
                <select
                  defaultValue=""
                  className="select !bg-white text-black !select-neutral"
                  onChange={(e) => setDaraja(e.target.value)}
                >
                  <option disabled={true} value="">
                    Ta'lim darajasi
                  </option>
                  {darajalar &&
                    darajalar.map((item) => {
                      return (
                        <option
                          key={item.id}
                          value={item.id}
                          className="!text-black"
                        >
                          {item.nomi}
                        </option>
                      );
                    })}
                </select>
                <select
                  defaultValue=""
                  className="select !bg-white text-black !select-neutral"
                  onChange={(e) => setBilim(e.target.value)}
                >
                  <option value="" disabled={true}>
                    Bilim sohasi
                  </option>
                  {bilim_soha &&
                    bilim_soha.map((item) => {
                      return (
                        <option
                          key={item.id}
                          value={item.id}
                          className="!text-black"
                        >
                          {item.nomi}
                        </option>
                      );
                    })}
                </select>
                <select
                  defaultValue=""
                  className="select !bg-white text-black !select-neutral"
                  onChange={(e) => setTalim(e.target.value)}
                >
                  <option value="" disabled={true}>
                    Ta'lim sohasi
                  </option>
                  {talim_soha &&
                    talim_soha.map((item) => {
                      return (
                        <option
                          key={item.id}
                          value={item.id}
                          className="!text-black"
                        >
                          {item.nomi}
                        </option>
                      );
                    })}
                </select>
                <select
                  defaultValue=""
                  className="select !bg-white text-black !select-neutral"
                  onChange={(e) => setYunalish(e.target.value)}
                >
                  <option value="" disabled={true}>
                    Ta'lim yo'nalish
                  </option>
                  {talim_yunalish &&
                    talim_yunalish.map((item) => {
                      return (
                        <option
                          key={item.id}
                          value={item.id}
                          className="!text-black"
                        >
                          {item.nomi}
                        </option>
                      );
                    })}
                </select>
                <select
                  defaultValue=""
                  className="select !bg-white text-black !select-neutral"
                  onChange={(e) => setKasb(e.target.value)}
                >
                  <option value="" disabled={true}>
                    Kasb va mutaxasislik
                  </option>
                  {kasb_mutaxassislik &&
                    kasb_mutaxassislik.map((item) => {
                      return (
                        <option
                          key={item.id}
                          value={item.id}
                          className="!text-black"
                        >
                          {item.nomi}
                        </option>
                      );
                    })}
                </select>
                <select
                  defaultValue=""
                  className="select !bg-white text-black !select-neutral"
                  onChange={(e) => setMasullar(e.target.value)}
                >
                  <option value="" disabled={true}>
                    Mas’ullar
                  </option>
                  {masullar &&
                    masullar.map((item) => {
                      return (
                        <option
                          key={item.id}
                          value={item.id}
                          className="!text-black"
                        >
                          {item.ism}
                        </option>
                      );
                    })}
                </select>
                <button
                  className="btn btn-success text-black"
                  onClick={() => {
                    setBilim(""),
                      setDaraja(""),
                      setKasb(""),
                      setMasullar(""),
                      setSearch(""),
                      setTalim(""),
                      setYil(""),
                      setYunalish("");
                  }}
                >
                  Filterni tozalash
                </button>
              </div>
            </div>
            <div className="w-full flex justify-end gap-5 items-center mr-auto ml-auto mb-10">
              <div className="flex gap-4">
                <button className="btn bg-[#0b67b7] border-none">
                  Jami fanlar soni{" "}
                  <span className="bg-white text-[#0b67b7] rounded py-0.5 px-2">
                    {data?.total}
                  </span>
                </button>
              </div>
              <form action="">
                <input
                  type="text"
                  placeholder="izlash..."
                  className="border border-gray-400 w-96 rounded p-2 text-black"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>
            <div className="gap-10 flex">
              <div className="w-1/6 text-black flex flex-col gap-2">
                {bloklar &&
                  bloklar.map((item, index) => {
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveBtn(index), setBlok(item.id);
                        }}
                        className={`${
                          activeBtn == index && "bg-[#0b67b7] text-white"
                        } border border-[#0b67b7] text-[#0b67b7] hover:bg-[#0b67b7] hover:text-white transition-all rounded-md px-4 py-2 text-[16px] font-semibold`}
                      >
                        {item.nomi}
                      </button>
                    );
                  })}
              </div>
              <div className="w-5/6 overflow-x-auto">
                <table className="table text-black text-[14px]">
                  <thead className="bg-[#0b67b7] text-white text-[14px]">
                    <tr>
                      <th></th>
                      <th>FANNING NOMI</th>
                      <th>
                        KODI DARAJALAR <br /> KESIMIDA
                      </th>
                      <th>
                        SOATI DARAJALAR <br /> KESIMIDA
                      </th>
                      <th>O‘QUV ADABIYOTLARI</th>
                      <th>
                        INSTITUTDAN <br />
                        MAS’ULNING F.I.O.
                      </th>
                      <th>
                        ISHCHI GURUH <br /> A'ZOLARI
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.results?.map((item, index) => {
                      return (
                        <tr
                          key={item.id}
                          className="odd:bg-gray-50 even:bg-gray-200"
                        >
                          <th>{index + 1}</th>
                          <td className="hover:text-primary hover:link">
                            <Link to={`/adabiyotlar/${item.id}`}>
                              {item.nomi}
                            </Link>
                          </td>
                          <td>{item.kasb_kodi + "-" + item.kasb_nomi}</td>
                          <td className="text-[16px] font-semibold">
                            {item.soat} - soat
                          </td>
                          <td>
                            <ol className="m-0 p-0 list-disc ml-3">
                              {item.material_turlari.map(
                                (material_tur, tur_index) => {
                                  return (
                                    <li
                                      key={tur_index}
                                      className="text-sm font-semibold text-black m-0 p-0"
                                    >
                                      {material_tur}
                                    </li>
                                  );
                                }
                              )}
                            </ol>
                          </td>
                          <td>{item.masul}</td>
                          <td className="link text-[#0b67b7]">Ko'rish</td>
                          <td>
                            <VscKebabVertical className="text-2xl font-bold" />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="flex justify-end mt-10">
                     {data?.total_pages > 1 && (
                  <Pagination
                    count={data?.total_pages}
                    color="primary"
                    onChange={handlePagination}
                  ></Pagination>
                )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Adabiyotlar;
