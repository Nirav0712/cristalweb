import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Team1 from '../../Components/Team/Team1';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="Team"
      ></BreadCumb>
      <Team1></Team1>
    </div>
  );
};

export default page;