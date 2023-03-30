import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';

function groupPage() {
  const [posts, setPosts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    const newPost = { title, content };
    setPosts([...posts, newPost]);
    event.target.reset();
  };

  return (
    <div className='flex'>
        <Sidebar/>
        <div className="p-7">
        {/* Main content */}
        <div className="container w-full px-6 py-4">
            <div className="flex-1">
            {/* Left column */}
            <div className="w-1/3 pr-6">
                <div className="bg-white rounded-lg shadow-lg mb-6">
                    <img className='rounded-lg object-cover' src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="" />
                </div>
                <div className="bg-white rounded-lg shadow-lg mb-6">
                    <div className="px-6 py-4">
                        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                        Thông tin nhóm
                        </h1>
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className="text-gray-600 font-bold py-2 align-text-top">Tên nhóm:</td>
                                    <td className="py-2 pl-3 align-text-top">Trường Đại học Giao thông Vận tải</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 font-bold py-2 align-text-top">Số thành viên:</td>
                                    <td className="py-2 pl-3 align-text-top">89</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 font-bold py-2 align-text-top">Số cuộc bầu cử:</td>
                                    <td className="py-2 pl-3 align-text-top">12</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Add post form */}
                <div className="bg-white rounded-lg shadow-lg mb-6">
                <div className="px-6 py-4">
                    <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <h1 className="text-2xl pb-5 font-semibold text-gray-800 mb-2">
                        Đăng bài
                        </h1>
                        <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="title"
                        >
                        Tiêu đề
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Enter title..."
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="content"
                        >
                        Nội dung
                        </label>
                        <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        name="content"
                        placeholder="Enter content..."
                        required
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                        className="h-12 w-36 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                        type="submit"
                        >
                        Đăng bài
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            {/* Right column */}
            <div className="w-2/3">
                {/* Posts */}
                {posts.length > 0 ? (
                posts.map((post, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg mb-6"
                    >
                    <div className="px-6 py-4">
                        <h2 className="text-lg font-medium text-gray-800 mb-2">
                        {post.title}
                        </h2>
                        <p className="text-gray-600">{post.content}</p>
                    </div>
                    </div>
                ))
                ) : (
                <p className="text-gray-600">Chưa có bài đăng nào.</p>
                )}
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default groupPage;