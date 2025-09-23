"use client";

const GoogleFormButton = ({ className = "" }) => {
  const handleClick = () => {
    window.open("https://forms.gle/dhJdvLxezyezaFrr9", "_blank");
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={handleClick}
        className="z-40 px-10 py-5 m-2 bg-[#d53232] text-white font-bold rounded-lg hover:bg-[#e32e2e] transition duration-300 ${className}"
      >
        REGISTER NOW
      </button>
    </div>
  );
};

export default GoogleFormButton;
