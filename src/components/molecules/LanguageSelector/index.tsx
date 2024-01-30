"use client";

import { useState } from "react";
import Checkbox from "../../atoms/Checkbox";
import Rotated from "../../atoms/Rotated";

export default function LanguageSelector() {
  const [value, setValue] = useState("en");
  return (
    <Rotated className="flex gap-4">
      <Checkbox name="pt" value={value} setValue={setValue}>
        PT
      </Checkbox>
      <Checkbox name="en" value={value} setValue={setValue}>
        EN
      </Checkbox>
    </Rotated>
  );
}
