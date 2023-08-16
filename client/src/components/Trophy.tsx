import { FaTrophy } from "react-icons/fa";

const Trophy = ({ trophyCount }: any) => {
  return (
    <div className="absolute top-5 left-5 flex flex-col items-center p-4">
      <FaTrophy className="w-14 h-14 text-[#FFD700]" />
      <p className="text-3xl">{trophyCount}</p>
    </div>
  );
};

export default Trophy;
