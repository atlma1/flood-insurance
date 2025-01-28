"use client";
import { useRouter } from "next/navigation";
import Button from "../../../components/button";
import Title from "../../../components/title";
import Image from "next/image";
import { useFormikContext } from "formik";
import { formType } from "../form";

const CompletePage = () => {
  const router = useRouter();
  const { resetForm, values, isValid, errors } = useFormikContext<formType>();

  const onDownload = async () => {
    console.log("Download clicked");
    console.log("Form is valid:", isValid);
    console.log("Form errors:", errors);
    console.log("Current values:", values);

    try {
      const response = await fetch("/api/flood", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to generate quote");
      }

      // Get the blob from the response
      const blob = await response.blob();

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link and click it to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = `flood-quote-${values.propertyType}.xlsm`;
      document.body.appendChild(a);
      a.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const onRestart = () => {
    resetForm();
    router.push("./propertyType");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Title title="Complete!" />
      <Image
        src="/icons/completeIcon.svg"
        width={166}
        height={166}
        alt="complete"
        className="mt-[127px]"
      />
      <div className="flex-row flex justify-center mt-[120px] gap-[25px]">
        <Button
          label="Download"
          icon="/icons/downloadIcon.svg"
          onClick={onDownload}
        />
        <Button
          label="Restart"
          icon="/icons/restartIcon.svg"
          onClick={onRestart}
          bgColor="bg-white"
        />
      </div>
      <button onClick={onRestart}>
        <p className="text-white underline font-inter text-[24px] mt-[48px]">
          Add another building to policy
        </p>
      </button>
    </div>
  );
};

export default CompletePage;
