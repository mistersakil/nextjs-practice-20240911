import Image from "next/image";
import React from "react";

import products1 from "@/images/products-sm(1).png";

const ImageCom = () => {
  return (
    <div>
      <Image src={products1} alt="products1" />
    </div>
  );
};

export default ImageCom;
