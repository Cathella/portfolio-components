import * as React from "react";

function Nav() {
  return (
    <div className="flex gap-5 justify-between px-20 py-8 text-lg leading-7 text-black max-md:flex-wrap max-md:px-5">
      <div className="flex gap-5 justify-between items-center font-medium max-md:flex-wrap">
        <div className="self-stretch text-2xl font-bold">NC</div>
        <div className="self-stretch my-auto">Home</div>
        <div className="self-stretch my-auto">Projects</div>
        <div className="self-stretch my-auto">Services</div>
        <div className="self-stretch my-auto">About us</div>
      </div>
      <div className="flex gap-2 self-start font-semibold capitalize">
        <div className="underline">Start project</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/81969eff1e3b42014519e3e9d8705a7cfddf4fd4cf12baef9a7a6200a091f5aa?"
          className="shrink-0 my-auto w-6 aspect-square"
        />
      </div>
    </div>
  );
}

export default Nav;