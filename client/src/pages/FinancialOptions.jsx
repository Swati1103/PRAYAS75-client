export const FinancialOptions = ({
  setSelectedCurrency,
  setActiveComponent,
}) => {
  return (
    <div className="">
      <div className="py-6 p-4 flex justify-around">
        <div className="">
          <p className="text-2xl font-bold">Currency</p>
          <select
            className="font-semibold w-20 h-8"
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value={"Rs"}>Rs</option>
            <option value={"$"}>$</option>
          </select>
        </div>
        <button
          className="my-2 mx-8  border-2 bg-blue-600 text-white text-xl font-bold py-1 text-center w-[100%]  h-12 rounded-full"
          onClick={() => {
            setActiveComponent("AllTransaction");
          }}
        >
          All Transaction
        </button>
        <button
          className="my-2  mx-8 border-2 bg-blue-600 text-white text-xl font-bold py-1 text-center w-[100%]  h-12 rounded-full"
          onClick={() => {
            setActiveComponent("Contributions");
          }}
        >
          Contributions
        </button>
        <button
          onClick={() => {
            setActiveComponent("Disbursment");
          }}
          className="my-2  mx-8 border-2 bg-blue-600 text-white text-xl font-bold py-1 text-center w-[100%]  h-12 rounded-full"
        >
          Disbursement
        </button>
        <button
          onClick={() => {
            setActiveComponent("Expenses");
          }}
          className="my-2  mx-8 border-2 bg-blue-600 text-white text-xl font-bold py-1 text-center w-[100%]  h-12 rounded-full"
        >
          Expenses
        </button>
      </div>
    </div>
  );
};
