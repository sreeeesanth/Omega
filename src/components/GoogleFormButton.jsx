"use client";

const GoogleFormButton = () => {
  const handleClick = () => {
    window.open("https://forms.gle/dhJdvLxezyezaFrr9", "_blank");
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={handleClick}
        className="z-10 px-6 py-3 bg-[#d53232] text-white font-bold rounded-lg hover:bg-[#e32e2e] transition duration-300"
      >
        REGISTER NOW
      </button>
    </div>
  );
};

export default GoogleFormButton;
