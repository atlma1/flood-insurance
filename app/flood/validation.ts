import * as Yup from "yup";

export const formValidationSchema = Yup.object({
  propertyType: Yup.string()
    .oneOf(["residential", "commercial", ""])
    .required("Property type is required"),
  NFIPDetails: Yup.object({
    NFIPMapNumber: Yup.string().required("NFIP Map Number is required"),
    NFIPMapEffectiveDate: Yup.string().required(
      "NFIP Map Effective Date is required"
    ),
    letterMapChange: Yup.boolean().required(
      "Letter of Map Change status is required"
    ),
  }),
  FEMA: Yup.array().of(
    Yup.object().shape(
      {
        floodZone: Yup.string().when("address", {
          is: (address: string) => !address || address.trim() === "",
          then: (schema) =>
            schema.required("Either flood zone or address is required"),
          otherwise: (schema) => schema,
        }),
        address: Yup.string().when("floodZone", {
          is: (floodZone: string) => !floodZone || floodZone.trim() === "",
          then: (schema) =>
            schema.required("Either flood zone or address is required"),
          otherwise: (schema) => schema,
        }),
      },
      [["floodZone", "address"]]
    )
  ),

  numberOfUnits: Yup.number()
    .positive("Number of units must be a positive number")
    .required("Number of units is required"),
  insurableValue: Yup.object({
    totalAppraisalValue: Yup.number(),
    appraisedLandValue: Yup.number(),
    hazardPolicyReplacementCost: Yup.number(),
    agentProvidedInsurableValue: Yup.number(),
    occupancyStatus: Yup.string()
      .oneOf(["Owner occupied", "Rented", "Vacant", "N/A", "Other", ""])
      .required("Occupancy status is required"),
  }).test(
    "insurableValue-test",
    "Either total appraisal values or hazard policy replacement cost/agent provided insurable value must be provided",
    (value) => {
      const {
        totalAppraisalValue,
        appraisedLandValue,
        hazardPolicyReplacementCost,
        agentProvidedInsurableValue,
      } = value;
      const appraisalValuesProvided =
        totalAppraisalValue != null &&
        totalAppraisalValue > 0 &&
        appraisedLandValue != null &&
        appraisedLandValue > 0;
      const replacementValuesProvided =
        (hazardPolicyReplacementCost != null &&
          hazardPolicyReplacementCost > 0) ||
        (agentProvidedInsurableValue != null &&
          agentProvidedInsurableValue > 0);
      return appraisalValuesProvided || replacementValuesProvided;
    }
  ),
  contentInsurance: Yup.object({
    contentCoverageAmount: Yup.number(),
    contentCoverageStartDate: Yup.string(),
    contentCoverageEndDate: Yup.string(),
  }).test(
    "contentInsurance-test",
    "Content coverage amount, start date and end date must be provided",
    (value) => {
      const {
        contentCoverageAmount,
        contentCoverageStartDate,
        contentCoverageEndDate,
      } = value;
      return (
        contentCoverageAmount != null &&
        contentCoverageStartDate != null &&
        contentCoverageEndDate != null &&
        ((contentCoverageAmount > 0 &&
          contentCoverageStartDate !== "" &&
          contentCoverageEndDate !== "") ||
          (contentCoverageAmount == 0 &&
            contentCoverageStartDate == "" &&
            contentCoverageEndDate == ""))
      );
    }
  ),
  loanDetails: Yup.object({
    loanAmount: Yup.number()
      .positive("Loan amount must be a positive number")
      .required("Loan amount is required"),
    superiorLieans: Yup.array().of(
      Yup.number().positive("Superior liens must be positive numbers")
    ),
  }),
  policyDetails: Yup.object({
    typeOfCoverage: Yup.string()
      .oneOf(["NFIP Policy", "Private Policy"])
      .required("Type of coverage is required"),
    coverageAmount: Yup.number()
      .positive("Coverage amount must be a positive number")
      .required("Coverage amount is required"),
    coverageStartDate: Yup.string().required("Coverage start date is required"),
    coverageEndDate: Yup.string().required("Coverage end date is required"),
  }),
  floodInsuranceCarrier: Yup.string().required(
    "Flood insurance carrier is required"
  ),
  morePolicyDetails: Yup.object({
    closingDate: Yup.string().required("Closing date is required"),
    applicantName: Yup.string().required("Applicant name is required"),
    preparedBy: Yup.string().required("Prepared by is required"),
    accountNumber: Yup.string().required("Account number is required"),
  }),
});
