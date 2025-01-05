"use client";
import React, { useState } from "react";
import Additems from "@/components/fileupload/Additems";

function PlatformManager() {
  const [platforms] = useState(["Windows", "MacOS", "Linux", "Android", "iOS"]);

  return (
    <>
      <Additems items={platforms} heading="Platforms" title1="Platform" />
    </>
  );
}

export default PlatformManager;
