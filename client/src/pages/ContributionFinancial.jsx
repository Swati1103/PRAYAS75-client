import { contributorData } from "../utilis/constant";
import { Contributors } from "./Contributors";

export const ContributionFinancial = () => {

  const foundingMembers = contributorData.find(
    (section) => section.sectionName === "Founding Members"
  ).members;
  const additionalMembers = contributorData.find(
    (section) => section.sectionName === "Additional Members"
  ).members;

  return (
    <div>
      <Contributors
        transactions={foundingMembers}
        selectedCurrency={"Rs"}
        usdToINR={80}
        heading={"Founding Member"}
      />
      <Contributors
        transactions={additionalMembers}
        selectedCurrency={"Rs"}
        usdToINR={80}
        heading={"Additional Member"}
      />
    </div>
  );
};

