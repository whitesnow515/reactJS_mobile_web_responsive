import React, {useState} from "react";
import {Navbar, Collapse, Typography, IconButton} from "@material-tailwind/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom"
import './Header.css'
import logo from "./../assets/logo/logo.png"

export default function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const userData = {
        'name': 'Kyle Davis',
        'img': '/images/user/user1.png',
        'id': 1,
        'member_role': 'Premium Member'
    }
    const handleWindowResize = () => window.innerWidth >= 540 && setOpenNav(false);

    const [active, setActive] = useState(0);
    const [status, setStatus] = useState(false);
    const usermenu = [
        {
          "id": 0,
          "name" : "Account",
          "icon" : "zmdi zmdi-account-circle"
        },
        {
          "id": 1,
          "name" : "Logout",
          "icon" : "zmdi zmdi-run"
        }
      ]
      const onToggle = (e)  => {
        setStatus(!status);
      }
      const onSelect = (e) => () => {
        console.log(e)
        setActive(e)
        setStatus(false);
      }
    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    function NavList() {
        return (
            <ul
                className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 sm:flex-row lg:items-center lg:gap-6">
                {links.map((link, index) => (
                    <Typography
                        as="li"
                        key = {"header" + index}
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-medium ">
                        
                        <Link
                        
                            onClick={() => setOpenNav(false)}
                            to={link.link}>
                            <p className="text-black font-thin flex flex-col hover-after after:bg-green-600 after:transition-all after:h-[1px]">{link.name}</p>
                        </Link>
                    </Typography>
                ))}
            </ul>
        );
    }
    return (
        <>
            <div className="pb-5 px-5 pt-5 z-100">
                <div className="flex w-full">
                <img src={logo} className="w-8 h-8 mr-6 mt-1"/>
                <div className="flex w-full sm:flex-row-reverse items-center justify-between text-blue-gray-900">                    
                    <div className="flex invisible sm:visible" onClick={onToggle}>
                        <div className="mr-2 my-auto">
                            <img src={userData.img} className="my-auto rounded-full w-[60px]"/>
                        </div>
                        <div className="w-full my-auto">
                            <p className="pb-[2px] text-black text-sm font-bold">{userData.name}</p>
                            <p className="pb-[2px] text-gray-800 text-xs">{userData.member_role}</p>
                        </div>
                        <div className="mr-5">
                            <p className="zmdi zmdi-caret-down text-black text-xl"></p>
                        </div>
                    </div>
                    {/* <div className={`${status ? "" : "hidden"} w-[180px] px-8 absolute top-16 mr-4 bg-gray-600 opacity-90 rounded-lg cursor-pointer z-100`}>
                        {usermenu.map((menu, index)=> (
                            <div key={index} className='flex content-center' onClick={onSelect(menu.id)}>
                            <p className='text-white text-[18px] w-full text-left'>{menu.name}</p>
                            <p className={`text-white text-[18px] pt-1 text-left ${menu.icon}`} />
                            </div>
                        ))}
                    </div> */}
                    <div className="sm:flex">
                        <div className="hidden sm:block">
                            <NavList/>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent sm:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}>
                            {openNav
                                ? (<XMarkIcon className="h-6 w-6" strokeWidth={2}/>)
                                : (<Bars3Icon className="h-6 w-6" strokeWidth={2}/>)}
                        </IconButton>
                    </div>
                </div>
                
                </div>
                <Collapse open={openNav} className="z-[1000]">
                    <NavList/>
                </Collapse>
            </div>
            
        </>
    )
}

const links = [
    {
        name: "Buy",
        link: "/buy"
    }, {
        name: "Rent",
        link: "/rent"
    }, {
        name: "Sell",
        link: "/sell"
    }
]

