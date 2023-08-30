import React from "react";
import QualityControlHeader from "./QualityControlHeader";
import QualityControlBody from "./QualityControlBody";
import QualityTesting from "./QualityTesting";
import Footer from "./Footer";

const QualityControlMain = () => {
  return (
    <>
      <QualityControlHeader />
      <QualityControlBody />
      <QualityTesting />
      <Footer />
    </>
  );
};

export default QualityControlMain;
