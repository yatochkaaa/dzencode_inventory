import React from "react";

interface Props {
  categoryName: string;
  categoryLength: number;
}

const PageTitle: React.FC<Props> = ({ categoryName, categoryLength }) => {
  return (
    <div className="page__title">
      {categoryName} / {categoryLength}
    </div>
  );
};

export default PageTitle;
