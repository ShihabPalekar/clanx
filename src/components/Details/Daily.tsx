const Daily = () => {
  return (
    <div className="mt-6">
      <p className="font-semibold text-[20px] mb-2">Today's Highlights</p>
      <div className="flex gap-5 justify-between">
        <div className="bg-white rounded-md shadow-xs px-6 py-3 basis-[33.33%]">
          <div className="text-[#C0C0C0]">Wind Status</div>
          <div className="flex gap-1 items-end my-3">
            <div className="text-[24px] font-semibold">7.70</div>
            <div className="text-[16px] pb-1">km/h</div>
          </div>
          <div className="flex gap-2 pb-2">
            <div className="rounded-full border border-gray-300 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="blue"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>WSW</div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-xs px-6 py-3 basis-[33.33%]">
          <div className="text-[#C0C0C0]">Sunrise & Sunset</div>
          <div className="my-3">
            <div className="flex gap-2 items-center mb-3">
              <div className="rounded-full p-1 border-2 border-orange-400 bg-orange-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>
              </div>
              <div>3:32 PM</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-full p-1 border-2 border-orange-400 bg-orange-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
              <div>3:32 PM</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-xs px-6 py-3 basis-[33.33%]">
          <div className="text-[#C0C0C0]">Visibility</div>
          <div className="flex gap-1 items-end my-3">
            <div className="text-[24px] font-semibold">7.70</div>
            <div className="text-[16px] pb-1">km</div>
          </div>
          <div className="flex gap-1 pb-2 items-center">
            <div>Average</div>
            <span role="img" aria-label="Sad Face Emoji">
              🙁
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daily;
