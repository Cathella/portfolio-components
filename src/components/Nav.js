const MenuItem = ({ children }) => {
  return <a href="#" className="self-stretch my-auto">{children}</a>;
};

function Nav() {
  return (
    <header className="flex gap-5 justify-between px-20 py-8 text-lg leading-7 text-black max-md:flex-wrap max-md:px-5">
      <nav className="flex gap-5 justify-between items-center font-medium max-md:flex-wrap">
        <div className="self-stretch text-2xl font-bold">NC</div>
        <MenuItem>Home</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>About us</MenuItem>
      </nav>
      <div className="flex gap-2 self-start font-semibold capitalize">
        <a href="#" className="underline" tabindex="0">Start project</a>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/81969eff1e3b42014519e3e9d8705a7cfddf4fd4cf12baef9a7a6200a091f5aa?apiKey=27ec22b9382040ef8580a5e340d3a921&" className="shrink-0 my-auto w-6 aspect-square" alt="Project Start Icon" tabindex="0" />
      </div>
    </header>
  );
}

export default Nav;