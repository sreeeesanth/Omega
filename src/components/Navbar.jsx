"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import IeeeLogo from "@/assets/logos/ieee.png";
import CSLogo from "@/assets/logos/cs.png";
import { NavbarItems } from "@/constants";
import { useParams } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

export default function Nav() {
  const params = useParams()
  const [activeItem, setActiveItem] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    setActiveItem(hash ? hash : "");
  },[params])

  return (
    <Navbar
      maxWidth={'full'}
      style={{
        backgroundColor: "transparent",
        backdropFilter: "none"
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="w-full top-0 h-[77px] left-0 text-white fixed z-10 font-the_damn_font py-[3rem]"
    > 
      <NavbarMenu className="top-0 flex w-full justify-center items-center bg-black fixed">
        <button
          className="text-white absolute mt-7 ml-3 top-0 left-0"
          style={{ fontSize: '3rem' }}
          onClick={() => setIsMenuOpen(false)}
        >
          <MdOutlineClose />
        </button>
        {NavbarItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="font-[700] text-[32px] font-orbitron text-white"
              href={item.link}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent justify="start" className="justify-start max-lg:hidden">
        <NavbarItem className="flex items-center">
          <NavbarBrand className="lg:p-4 mt-2">
            <Image src={IeeeLogo} alt="ieee"/>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="lg:hidden flex items-center justify-center w-full m-auto">
        <NavbarMenuToggle
          className="lg:hidden mr-auto"
          icon={
            isMenuOpen 
              ? <div style={{ fontSize: '3rem' }}><MdOutlineClose /></div>
              : <div style={{ fontSize: '2.5rem' }}><RxHamburgerMenu /></div>
          }
        />

        <NavbarItem className="m-auto">
          <Image src={IeeeLogo} alt="ieee"/>
        </NavbarItem>
        <NavbarItem className="m-auto">
            <Image src={CSLogo} alt="cs"/>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden lg:flex text-[16px] font-[500] gap-[2rem] text-white h-[41px] rounded-[2.5rem] px-[18px]"
        justify="center"
      >
        {NavbarItems.map((item, index) => (
          <NavbarItem key={index}
            className={`rounded-[19px] py-2 px-4 ${
              activeItem === item.link ? "navbar__item-bg" : ""
            }`}
          >
            <Link
              className="font-[500] text-[17px]"
              href={item.link}
              onPress={() => {
                setActiveItem(item.link);
              }}
            >
              <span className="font-orbitron">{item.title}</span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="max-lg:hidden">
        <NavbarItem>
            <Image src={CSLogo} alt="cs"/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}