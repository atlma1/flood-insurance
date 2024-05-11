"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import ProgressBar from "../../components/progressBar";
import { usePathname } from "next/navigation";
import { Formik, Form } from "formik";
import React from "react";
import { emptyForm } from "./form";
import { formValidationSchema } from "./validation";

interface FloodLayoutProps {
  children: React.ReactNode;
}

const FloodLayout: FC<FloodLayoutProps> = ({ children }) => {
  const [progress, setProgress] = useState(1);
  const path = usePathname();

  const routeMap: { [key: string]: number } = {
    "/flood/propertyType": 1,
    "/flood/floodZone": 2,
    "/flood/unitSelect": 3,
    "/flood/insurableValue": 4,
    "/flood/loanDetails": 5,
    "/flood/requiredCoverage": 6,
    "/flood/complete": 7,
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
        onSubmit={(values, actions) => {
          console.log(values);
          localStorage.setItem("formikState", JSON.stringify(values));
        }}
        enableReinitialize
      >
        {(formikProps) => {
          useEffect(() => {
            localStorage.setItem(
              "formikState",
              JSON.stringify(formikProps.values)
            );
          }, [formikProps.values]);
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
      <ProgressBar progress={progress} />
    </div>
  );
};

export default FloodLayout;
