import * as XLSX from "xlsx";
import path from "path";
import fs from "fs";
import { formType } from "@/app/flood/form";

export async function makeFloodQuote(form: formType) {
  try {
    // Get the template path
    const templatePath = path.join(
      process.cwd(),
      "public",
      "templates",
      "calculatorTemplate.xlsm"
    );

    // Read the template file into a buffer
    const templateBuffer = fs.readFileSync(templatePath);
    console.log("Template read into buffer");

    // Read the workbook from buffer
    const workbook = XLSX.read(templateBuffer, {
      type: "buffer",
      cellFormula: true,
      cellNF: true,
      cellStyles: true,
      cellDates: true,
      bookVBA: true, // Important for .xlsm files
    });
    console.log("Workbook read from buffer");

    // Your existing logic to modify the workbook...
    const resAndCom = workbook.Sheets["Res & Com Calculator"];
    const condo = workbook.Sheets["Condo Calculator"];


    resAndCom["C5"] = { t: "s", v: form.morePolicyDetails.accountNumber };
    resAndCom["C6"] = { t: "s", v: form.morePolicyDetails.applicantName };

    if (form.FEMA && form.FEMA.length > 0 && form.FEMA[0].address !== "") {
      resAndCom["C9"] = { t: "s", v: form.FEMA[0].address };
    }

    resAndCom["C10"] = { t: "s", v: form.propertyType };
    resAndCom["C11"] = { t: "s", v: form.insurableValue.occupancyStatus };
    if (form.FEMA && form.FEMA.length > 0) {
      resAndCom["C12"] = { t: "s", v: form.FEMA[0].floodZone };
    }
    
    if (form.insurableValue.hazardPolicyReplacementCost !== 0) {
      resAndCom["C24"] = { t: "n", v: form.insurableValue.hazardPolicyReplacementCost };
    } else if (form.insurableValue.agentProvidedInsurableValue !== 0) {
      resAndCom["C25"] = { t: "n", v: form.insurableValue.agentProvidedInsurableValue };
    } else {
      resAndCom["C20"] = { t: "n", v: form.insurableValue.totalAppraisalValue };
      resAndCom["C22"] = { t: "n", v: form.insurableValue.appraisedLandValue };
    }

    resAndCom["C44"] = { t: "s", v: form.policyDetails.typeOfCoverage };

    resAndCom["C46"] = { t: "n", v: form.policyDetails.RequiredCoverage };
    resAndCom["C58"] = {
      t: "n",
      v: form.policyDetails.RequiredCoverage,
    };
    resAndCom["C47"] = { t: "d", v: form.policyDetails.coverageStartDate };
    resAndCom["C59"] = {
      t: "d",
      v: form.policyDetails.coverageStartDate,
    };
    resAndCom["C48"] = { t: "d", v: form.policyDetails.coverageEndDate };
    resAndCom["C60"] = {
      t: "d",
      v: form.policyDetails.coverageEndDate,
    };

    resAndCom["C58"] = { t: "n", v: form.contentInsurance.contentCoverageAmount };


    resAndCom["C63"] = { t: "n", v: form.loanDetails.loanAmount };
    resAndCom["C66"] = { t: "n", v: form.loanDetails.superiorLieans.reduce((a, b) => a + b, 0) };

    resAndCom["K6"] = { t: "s", v: form.morePolicyDetails.preparedBy };
    resAndCom["K7"] = { t: "d", v: form.morePolicyDetails.closingDate };



    
    

    // Write to buffer instead of file
    const outputBuffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsm",
      bookVBA: true,
    });

    // Return both the data and buffer for downloading
    return {
      buffer: outputBuffer,
      filename: `flood-quote-${form.propertyType}.xlsm`,
      propertyType: form.propertyType,
      // Add other data as needed
    };
  } catch (error) {
    console.error("Error in makeFloodQuote:", error);
    throw error;
  }
}
