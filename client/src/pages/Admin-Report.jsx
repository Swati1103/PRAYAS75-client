import Jubilee_Batch_Scholarship from "../utilis/Jubilee_Batch_Scholarship.pdf";
import { AllTransactionFinancial } from "./AllTransactionFinancial";
export const AdminReport = () => {
  return (
    <div>
      <div className="text-center hover:scale-125 duration-300">
        <a
          className="bg-blue-500  h-10 text-center p-2 rounded-lg hover:bg-blue-700  "
          href={Jubilee_Batch_Scholarship}
          download="Scholarship Report"
        >
          <button className="print-btn">Print Report</button>
        </a>
      </div>
      <div className="text-blue-800 bg-slate-200">
        <AllTransactionFinancial />
      </div>
    </div>
  );
};
