import React, { useState } from 'react'
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson } from "react-icons/bs"
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from "react-icons/ai"
import { RiDashboardFill } from "react-icons/ri"

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(true);
    const Menus = [
        { title: "Dashboard" },
        { title: "Pages" , icon: <AiOutlineFileText/> },
        { title: "Media", spacing: true, icon: <BsFillImageFill/> },
        {
            title: "Projects", icon: <BsReverseLayoutTextSidebarReverse/>,
            submenu: true,
            submenuItems: [
                { title: "Submenu 1" },
                { title: "Submenu 2" },
                { title: "Submenu 3" }
            ],
        },
        { title: "Analytics", icon: <AiOutlineBarChart/> },
        { title: "Inbox", icon: <AiOutlineMail/> },
        { title: "Profile", spacing: true, icon: <BsPerson/> },
        { title: "Setting", icon: <AiOutlineSetting/> },
        { title: "Logout", icon: <AiOutlineLogout/> },
    ];
  return (
        <div className={`custom-sticky bg-blue-500 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-white bg-blue-500 text-3xl rounded-full absolute -right-3 top-9 border border-dark-blue cursor-pointer ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}/>
            <div className='inline-flex'>
                <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
                <h1 className={`text-white origin-left font-bold text-2xl duration-300 ${!open && "scale-0"}`}>iVote</h1>
            </div>
            <div className={`flex items-center rounded-md bg-light-white bg-gray-200 mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
                <BsSearch className={`text-blue-500 text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
                <input type={"search"} placeholder="Tìm kiếm" className={`text-base bg-transparent w-full text-dark focus:outline-none ${!open && "hidden"}`} />
            </div>
            <ul className='pt-2'>
                {Menus.map((menu, index) => (
                    <>
                        <li key={index} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${menu.spacing ? "mt-9" : "mt-2"}`}>
                            <span className='text-2xl block float-left'>
                                {menu.icon ? menu.icon : <RiDashboardFill/>}
                            </span>
                            <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                            {menu.submenu && open && (
                                <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)}/>
                            )}
                        </li>

                        {menu.submenu && submenuOpen && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) => (
                                    <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                                        {submenuItem.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                ))}
            </ul>
        </div>
  )
}

export default Sidebar