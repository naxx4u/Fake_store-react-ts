import {useState} from 'react'


export const MenuButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-blue-300 transition ease transform duration-300`;
  return (
    <button
    className="flex flex-col h-12 w-12  rounded justify-center items-center group basis-32"
    onClick={() => setIsOpen(!isOpen)}
  >
    <div
      className={`${genericHamburgerLine} ${
        isOpen
          ? "rotate-45 translate-y-1 opacity-100 group-hover:opacity-100"
          : "opacity-100 group-hover:opacity-100"
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        isOpen
          ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
          : "opacity-100 group-hover:opacity-100"
      }`}
    />
  </button>
  )
}
