export type formType = {
  propertyType: "residential" | "commercial" | "";
  FEMA: {
    floodZone: string;
    address: string;
  }[];
  numberOfUnits: number;
  insurableValue: {
    totalAppraisalValue: number;
    appraisedLandValue: number;
    hazardPolicyReplacementCost: number;
    agentProvidedInsurableValue: number;
    occupancyStatus:
      | "Owner occupied"
      | "Rented"
      | "Vacant"
      | "N/A"
      | "Other"
      | "";
    contentInsured: boolean;
  };
  contentInsurance: {
    contentCoverageAmount: number;
    contentCoverageStartDate: string;
    contentCoverageEndDate: string;
  };
  loanDetails: {
    loanAmount: number;
    superiorLieans: number[];
  };
  policyDetails: {
    RequiredCoverage: number;
    typeOfCoverage: "NFIP" | "Private" | "";
    coverageAmount: number;
    coverageStartDate: string;
    coverageEndDate: string;
  };
  floodInsuranceCarrier: string;
  morePolicyDetails: {
    closingDate: string;
    applicantName: string;
    preparedBy: string;
    accountNumber: string;
  };
};

export const emptyForm: formType = {
  propertyType: "",
  FEMA: [],
  numberOfUnits: 0,
  insurableValue: {
    totalAppraisalValue: 0,
    appraisedLandValue: 0,
    hazardPolicyReplacementCost: 0,
    agentProvidedInsurableValue: 0,
    occupancyStatus: "",
    contentInsured: false,
  },
  contentInsurance: {
    contentCoverageAmount: 0,
    contentCoverageStartDate: "",
    contentCoverageEndDate: "",
  },
  loanDetails: {
    loanAmount: 0,
    superiorLieans: [],
  },
  policyDetails: {
    RequiredCoverage: 0,
    typeOfCoverage: "",
    coverageAmount: 0,
    coverageStartDate: "",
    coverageEndDate: "",
  },
  floodInsuranceCarrier: "",
  morePolicyDetails: {
    closingDate: "",
    applicantName: "",
    preparedBy: "",
    accountNumber: "",
  },
};


