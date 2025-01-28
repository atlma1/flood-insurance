"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import ProgressBar from "../../components/progressBar";
import { usePathname } from "next/navigation";
import { Formik, Form } from "formik";
import React from "react";
import { emptyForm, formType } from "./form";
import { formValidationSchema } from "./validation";

interface FloodLayoutProps {
  children: React.ReactNode;
}

const FloodLayout: FC<FloodLayoutProps> = ({ children }) => {
  const [progress, setProgress] = useState(1);
  const path = usePathname();
  const [contentInsured, setContentInsured] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(9);

  const routeMap: { [key: string]: number } = {
    "/flood/propertyType": 1,
    "/flood/floodZone": 2,
    "/flood/unitSelect": 3,
    "/flood/insurableValue": 4,
    "/flood/insurableContent": 5,
    "/flood/loanDetails": 5 + (contentInsured ? 1 : 0),
    "/flood/requiredCoverage": 6 + (contentInsured ? 1 : 0),
    "/flood/insuranceProviders": 7 + (contentInsured ? 1 : 0),
    "/flood/moreDetails": 8 + (contentInsured ? 1 : 0),
    "/flood/complete": 9 + (contentInsured ? 1 : 0),
  };

  useEffect(() => {
    setProgress(routeMap[path]);
  }, [path]);

  // Load initial form state from localStorage
  const loadFormState = () => {
    const savedState = localStorage.getItem("formikState");
    return savedState ? JSON.parse(savedState) : emptyForm;
  };

  return (
    <div className="relative items-center flex flex-col pb-[150px] min-h-screen w-screen">
      <Image
        src="/images/background.jpeg"
        alt="background"
        layout="fill"
        objectFit="cover"
        className="absolute -z-10 top-0"
      />
      <Formik
        initialValues={loadFormState()}
        validationSchema={formValidationSchema}
        // the submit function is in complete page
        onSubmit={() => { }}
        enableReinitialize
      >
        {(formikProps) => {
          useEffect(() => {
            localStorage.setItem(
              "formikState",
              JSON.stringify(formikProps.values)
            );
          }, [formikProps.values]);
          useEffect(() => {
            if (formikProps.values.insurableValue.contentInsured) {
              setContentInsured(true);
              setTotalPages(10);
            }
          }, [formikProps.values.insurableValue.contentInsured]);
          return (
            <Form>
              {React.Children.map(children, (child) => {
                // Cloning each child with Formik props
                //@ts-ignore
                return React.cloneElement(child, { formik: formikProps });
              })}
            </Form>
          );
        }}
      </Formik>
      <ProgressBar progress={progress} totalPages={totalPages} />
    </div>
  );
};

export default FloodLayout;
