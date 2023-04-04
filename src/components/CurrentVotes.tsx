import React, { useState } from "react";

const ballots = [
  { title: "Cuộc bầu cử 1", group: "Nhóm 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",link:`/ballot` , timeStart: "14:00  |  10-4-2023", timeEnd: "19:00  |  26-6-2023" },
  { title: "Cuộc bầu cử 2", group: "Nhóm 2", content: "Sed euismod consequat diam, nec mollis sapien congue sed.",link:`/ballot` , timeStart: "14:00  |  10-4-2023", timeEnd: "19:00  |  26-6-2023" },
  { title: "Cuộc bầu cử 3", group: "Nhóm 1", content: "Fusce posuere risus sed libero rhoncus, sit amet maximus tortor malesuada.", timeStart: "14:00  |  10-4-2023", timeEnd: "19:00  |  26-6-2023" },
  { title: "Cuộc bầu cử 4", group: "Nhóm 3", content: "Mauris eget nisl et nibh imperdiet ultricies.",link:`/ballot` , timeStart: "14:00  |  10-4-2023", timeEnd: "19:00 |   26-6-2023" },
  { title: "Cuộc bầu cử 5", group: "Nhóm 1", content: "Proin varius mi vitae quam aliquet, at pharetra orci consectetur.", timeStart: "14:00 |   10-4-2023", timeEnd: "19:00  |  26-6-2023" },
  { title: "Cuộc bầu cử 6", group: "Nhóm 2", content: "Suspendisse potenti. Nam convallis malesuada interdum.",link:`/ballot` , timeStart: "14:00  |  10-4-2023", timeEnd: "19:00 |   26-6-2023" },
  { title: "Cuộc bầu cử 7", group: "Nhóm 3", content: "Vivamus vel neque in est pharetra scelerisque vel a tellus.",link:`/ballot` , timeStart: "14:00 |   10-4-2023", timeEnd: "19:00 |   26-6-2023" },
  { title: "Cuộc bầu cử 8", group: "Nhóm 1", content: "Curabitur fringilla libero id felis tincidunt, vel pulvinar lacus consequat.", timeStart: "14:00 |   10-4-2023", timeEnd: "19:00  |  26-6-2023" },
];

const CurrentVotes = () => {
  const [selectedGroup, setSelectedGroup] = useState("All");

  // Filter
  const filteredballots = selectedGroup === "All" ?
    ballots :
    ballots.filter(ballot => ballot.group === selectedGroup);

  return (
    <div className="flex">
      <div className="container mx-auto p-4">
        <h1 className="items-center p-7 text-3xl">Tất cả các cuộc bầu cử theo nhóm</h1>
        <div className="flex justify-between mb-4">
          <button
            className={`px-5 py-2 rounded hover:bg-blue-600 transition duration-300 ${selectedGroup === "All" ? "bg-blue-600 text-white" : "bg-blue-300 text-white"}`}
            onClick={() => setSelectedGroup("All")}
          >
            Tất cả
          </button>
          <button
            className={`px-5 py-2 rounded hover:bg-blue-600 transition duration-300 ${selectedGroup === "Nhóm 1" ? "bg-blue-600 text-white" : "bg-blue-300 text-white"}`}
            onClick={() => setSelectedGroup("Nhóm 1")}
          >
            Nhóm 1
          </button>
          <button
            className={`px-5 py-2 rounded hover:bg-blue-600 transition duration-300 ${selectedGroup === "Nhóm 2" ? "bg-blue-600 text-white" : "bg-blue-300 text-white"}`}
            onClick={() => setSelectedGroup("Nhóm 2")}
          >
            Nhóm 2
          </button>
          <button
            className={`px-5 py-2 rounded hover:bg-blue-600 transition duration-300 ${selectedGroup === "Nhóm 3" ? "bg-blue-600 text-white" : "bg-blue-300 text-white"}`}
            onClick={() => setSelectedGroup("Nhóm 3")}
          >
            Nhóm 3
          </button>
        </div>
        {/* Display */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {filteredballots.map(ballot => (
            <a href={`${ballot.link}`} className="hover:scale-105 transition duration-300">
                <div className="bg-white rounded-lg shadow p-4" key={ballot.title}>
                <h2 className="text-xl font-bold mb-2">{ballot.title}</h2>
                <p className="text-gray-700 mb-2">{ballot.content}</p>
                <p className="text-gray-700 mb-2">Bắt đầu: {ballot.timeStart}</p>
                <p className="text-gray-700 mb-2">Kết thúc: {ballot.timeEnd}</p>
                <p className="text-gray-500">{ballot.group}</p>
            </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentVotes;