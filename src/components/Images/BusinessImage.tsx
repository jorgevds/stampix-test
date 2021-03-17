import React from "react";
import pelckmans from "../../images/pelckmans.svg";
import haenem from "../../images/haenem.svg";
import philips from "../../images/philips.svg";

interface ImageProps {}

const Image: React.FC<ImageProps> = () => {
  return (
    <article className="absolute flex justify-center w-full mx-auto minlg:px-10 sm:left-0 hover-target lg:bottom-0">
      <img src={haenem} className="m-auto w-14" alt="H M logo" />
      <img
        src={pelckmans}
        className="m-auto w-14"
        alt="Pelckmans publishing logo"
      />
      <img src={philips} className="m-auto w-14" alt="Philips logo" />
    </article>
  );
};

export default Image;
