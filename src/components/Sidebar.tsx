import React, { useState } from 'react'
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson } from "react-icons/bs"
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from "react-icons/ai"
import { RiDashboardFill } from "react-icons/ri"

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(true);
    const Menus = [
        { title: "Trang chủ", link: "/allPages" },
        { title: "Phiếu bầu của bạn", link: "/allBallots" , icon: <AiOutlineFileText/> },
        { title: "Trang cá nhân", link: "/profile",spacing: true, icon: <BsPerson/> },
        {
            title: "Nhóm của bạn", icon: <BsReverseLayoutTextSidebarReverse/>,
            submenu: true,
            submenuItems: [
                { title: "Nhóm trường đại học Giao thông Vận tải", link:"/groupPage" },
                { title: "Nhóm các thầy cô trường THPT Kim Liên", link:"/groupPage" },
                { title: "Hội sinh viên K62 ĐH GTVT", link:"/groupPage" }
            ],
        },
        { title: "Thống kê", link:"/groupPage", icon: <AiOutlineBarChart/> },
        { title: "Inbox", link:"/groupPage" , icon: <AiOutlineMail/> },
        { title: "Profile", link:"/profile", spacing: true, icon: <BsPerson/> },
        { title: "Cài đặt" , link:"/settings", icon: <AiOutlineSetting/> },
        { title: "Đăng xuất", link:"/logout", icon: <AiOutlineLogout/> },
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
                            <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}> <a href={`${menu.link}`}>{menu.title}</a></span>
                            {menu.submenu && open && (
                                <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)}/>
                            )}
                        </li>

                        {menu.submenu && submenuOpen && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) => (
                                    <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                                        <a href={`${submenuItem.link}`}>{submenuItem.title}</a>
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