"use client";

import { FC, useEffect, useState, useRef } from "react";
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
  const [totalPages, setTotalPages] = useState<number>(10);

  const routeMap: { [key: string]: number } = {
    "/flood/propertyType": 1,
    "/flood/floodZone": 2,
    "/flood/NFIPDetails": 3,
    "/flood/unitSelect": 4,
    "/flood/insurableValue": 5,
    "/flood/insurableContent": 6,
    "/flood/loanDetails": 6 + (contentInsured ? 1 : 0),
    "/flood/requiredCoverage": 7 + (contentInsured ? 1 : 0),
    "/flood/insuranceProviders": 8 + (contentInsured ? 1 : 0),
    "/flood/moreDetails": 9 + (contentInsured ? 1 : 0),
    "/flood/complete": 10 + (contentInsured ? 1 : 0),
  };

  useEffect(() => {
    setProgress(routeMap[path]);
  }, [path]);

  // Load initial form state from localStorage
  // const loadFormState = () => {
  //   const savedState = localStorage.getItem("formikState");
  //   return savedState ? JSON.parse(savedState) : emptyForm;
  // };

  // Create a ref to store formik values
  const formikValuesRef = useRef(null);

  // This effect will run when formikValuesRef.current changes
  // useEffect(() => {
  //   if (formikValuesRef.current) {
  //     localStorage.setItem(
  //       "formikState",
  //       JSON.stringify(formikValuesRef.current)
  //     );
  //   }
  // }, [formikValuesRef.current]);

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
        // initialValues={loadFormState()}
        initialValues={emptyForm}
        validationSchema={formValidationSchema}
        // the submit function is in complete page
        onSubmit={() => {}}
        enableReinitialize
      >
        {(formikProps) => {
          // Update the ref instead of using hooks directly
          // formikValuesRef.current = formikProps.values;

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
