import React from "react";
import { Helmet, HelmetData } from "react-helmet-async";

type HeadProps = {
  title?: string;
  description?: string;
};

const helmetData = new HelmetData({});

export const Head = ({ title = "", description = "" }: HeadProps = {}) => {
  return (
    <Helmet
      helmetData={helmetData}
      defaultTitle="Thadaarus"
      title={`${title ? `${title} | ` : ""}Thadaarus`}
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
