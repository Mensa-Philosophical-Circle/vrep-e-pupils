import { useWindowResize } from "../utils/windowResize";
import scheduleData from "../utils/weeklyTable";
function WeeklyTable() {
const isMobile = useWindowResize();

  return (
    <div>

{isMobile ? (
  <h3 className="flex justify-center text-20 font-semibold py-4">Schedule</h3>
) : null}
    <div className={`h-600 ${isMobile ? 'h-80 w-78 py-4' : 'lg:w-740 h-600'} bg-white flex flex-col overflow-auto top-96 right-8 rounded-20`}>
    {!isMobile ? (
  <h3 className="flex justify-center text-20 font-semibold py-4">Schedule</h3>
) : null}
      
      <table className={`table-auto border-collapse w-full h-auto flex flex-col ${isMobile ? 'px-2 py-2' : 'px-8 py-8'}`}>
        <thead className="w-full border-b border-table ">
          <tr className={`flex text-days ${isMobile ? 'text-8' : 'text-12'}`}>
            <th className=" w-full p-4">
            </th>
            <th className="text-12 text-days border-l border-r border-table font-normal w-full p-3">Mon</th>
            <th className=" text-days border-r border-table font-normal w-full p-3" >Tue</th>
            <th className=" text-days border-r border-table font-normal w-full p-3">Wed</th>
            <th className=" text-days font-normal border-r border-table w-full p-3">Thu</th>
            <th className=" text-days font-normal w-full p-3">Fri</th>
          </tr>
        </thead>

        <tbody className="w-full text-heading font-semi border-collapse">
          {scheduleData.map((row) => (
            <tr className={` flex flex-wrap justify-between items-center ${isMobile ? 'text-8' : 'text-12'} ${row.col1.includes("9:00-10:00") || row.col1.includes("11:00-12:00") || row.col1.includes("13:00-14:00") ? 'bg-bord text-days' : ''} `} key={row.id}>

              <td className={`border-r border-table  ${isMobile ? 'w-17 p-2' : 'w-277 p-4'}`}>{row.col1}</td>
             
              <td className=  {`border-r border-table text-heading font-semibold ${isMobile ? 'p-3' : 'pr-4 p-4'}`}>{row.col2}</td>

              <td className={`border-r border-table text-heading font-semibold ${isMobile ? 'p-3' : 'pr-4 p-4'} `} >{row.col3}</td>
              <td className={`border-r border-table text-heading font-semibold ${isMobile ? 'p-3' : 'pr-4 p-4'}`}>{row.col4}</td>
              <td className={`border-r border-table text-heading font-semibold ${isMobile ? 'p-3 py-4' : 'pr-4 p-4'}`} >{row.col5}</td>
              <td className={` ${isMobile ? 'p-3 py-4' : 'pr-4 p-4'} text-heading font-semibold`} >{row.col6}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default WeeklyTable;
