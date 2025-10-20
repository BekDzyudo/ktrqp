import { VscKebabVertical } from "react-icons/vsc";

function Fanlar() {
  return (
    <div className="mt-10 w-[1500px] mr-auto ml-auto">
      <h2 className="text-black text-4xl font-bold border-b border-gray-400 mb-10 pb-2">
        Kasbiy ta’lim tizimida o‘qitiladigan adabiyotlar
      </h2>
      <div className="w-full flex justify-between items-center border border-gray-400 rounded mr-auto ml-auto p-3 mb-10">
        <div>
          <h2 className="text-black text-xl font-semibold mb-2">
            Umumkasbiy fanlar
          </h2>
          <div className="flex gap-4">
            <button className="btn btn-primary">
              Jami fanlar soni{" "}
              <span className="bg-white text-primary rounded py-0.5 px-2">
                121
              </span>
            </button>
            <select
              defaultValue="O‘quv adabiyotlar"
              className="select !bg-white text-black !select-neutral"
            >
              <option disabled={true}>O‘quv adabiyotlar</option>
            </select>
          </div>
        </div>
        <form action="">
          <input
            type="text"
            placeholder="izlash..."
            className="border border-gray-400 w-96 rounded p-2 text-black"
          />
        </form>
      </div>
      {/* <div className=""> */}
        <div className="overflow-x-auto">
          <table className="table text-black">
            <thead className="text-primary bg-gray-200">
              <tr>
                <th></th>
                <th>FANNING NOMI</th>
                <th>KODI DARAJALAR KESIMIDA</th>
                <th>SOATI DARAJALAR KESIMIDA</th>
                <th>O‘QUV ADABIYOTLARI</th>
                <th>INSTITUTDAN MAS’ULNING F.I.O.</th>
                <th>ISHCHI GURUH A'ZOLARI</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-50 even:bg-gray-200">
                <th>1</th>
                <td className="hover:text-primary hover:link">Аxborot texnologiyalari asoslari</td>
                <td>30610101-Raqamli axborotlarni qayta ishlash ustasi</td>
                <td className="text-[16px] font-semibold">60 - soat</td>
                <td>
                  <ol className="m-0 p-0 list-disc ml-3">
                    <li className="text-sm font-semibold text-black m-0 p-0">
                      O‘qitish materiallar to‘plami
                    </li>
                    <li className="text-sm font-semibold text-black m-0 p-0">
                      Raqamli ta’lim resursi
                    </li>
                  </ol>
                </td>
                <td>Ubaydullayev Mirjalol Baxodir o‘g‘li</td>
                <td className="link text-primary">Ko'rish</td> 
                <td><VscKebabVertical className="text-2xl font-bold"/></td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-gray-200">
                <th>2</th>
                <td className="hover:text-primary hover:link">Аxborot texnologiyalari asoslari</td>
                <td>30610101-Raqamli axborotlarni qayta ishlash ustasi</td>
                <td className="text-[16px] font-semibold">60 - soat</td>
                <td>
                  <ol className="m-0 p-0 list-disc ml-3">
                    <li className="text-sm font-semibold text-black m-0 p-0">
                      O‘qitish materiallar to‘plami
                    </li>
                    <li className="text-sm font-semibold text-black m-0 p-0">
                      Raqamli ta’lim resursi
                    </li>
                  </ol>
                </td>
                <td>Ubaydullayev Mirjalol Baxodir o‘g‘li</td>
                <td className="link text-primary">Ko'rish</td> 
                <td><VscKebabVertical className="text-2xl font-bold"/></td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-gray-200">
                <th>3</th>
                <td className="hover:text-primary hover:link">Аxborot texnologiyalari asoslari</td>
                <td>30610101-Raqamli axborotlarni qayta ishlash ustasi</td>
                <td className="text-[16px] font-semibold">60 - soat</td>
                <td>
                  <ol className="m-0 p-0 list-disc ml-3">
                    <li className="text-sm font-semibold text-black m-0 p-0">
                      O‘qitish materiallar to‘plami
                    </li>
                    <li className="text-sm font-semibold text-black m-0 p-0">
                      Raqamli ta’lim resursi
                    </li>
                  </ol>
                </td>
                <td>Ubaydullayev Mirjalol Baxodir o‘g‘li</td>
                <td className="link text-primary">Ko'rish</td> 
                <td><VscKebabVertical className="text-2xl font-bold"/></td>
              </tr>
              <tr className="odd:bg-gray-50 even:bg-gray-200">
                <th>4</th>
                <td className="hover:text-primary hover:link">Аxborot texnologiyalari asoslari</td>
                <td>30610101-Raqamli axborotlarni qayta ishlash ustasi</td>
                <td className="text-[16px] font-semibold">60 - soat</td>
                <td>
                  <ol className="m-0 p-0 list-disc ml-3">
                    <li className="text-sm font-semibold text-black m-0 p-0">
                      O‘qitish materiallar to‘plami
                    </li>
                    <li className="text-sm font-semibold text-black m-0 p-0">
                      Raqamli ta’lim resursi
                    </li>
                  </ol>
                </td>
                <td>Ubaydullayev Mirjalol Baxodir o‘g‘li</td>
                <td className="link text-primary">Ko'rish</td> 
                <td><VscKebabVertical className="text-2xl font-bold"/></td>
              </tr>
              
            </tbody>
          </table>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Fanlar;
