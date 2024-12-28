function App() {
  return (
    <>
      <div className="grid grid-cols-12 grid-flow-col h-screen">
        {/* Left side */}
        <div className="flex flex-col bg-leftside col-span-4 h-full py-4">
          <div className="flex flex-col gap-5 items-center p-4 ">
            <h2 className="font-bold text-white text-lg">MY SERVICES</h2>
            <div className="flex justify-between items-center w-[75%] border-white border py-4 px-3 rounded-xl bg-custom-gradient">
              <p className="text-gray-800 text-sm">
                Add new services on the thanks app
              </p>
              <p className="text-blue-500 cursor-pointer text-sm font-bold">
                GET APP
              </p>
            </div>
            <div className="flex gap-5 items-center w-[75%]  border-white border  rounded-xl bg-[#3e4146] px-2 py-2">
              <div className="p-2 bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>

              <div className="flex flex-col ">
                <p className="text-white font-bold">Prepaid</p>
                <p className=" cursor-pointer text-white">7732010981</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="col-span-8 h-full bg-gray-100 px-12 py-10">
          {/* Right-side content goes here */}
          <div className=" w-full h-full grid grid-cols-2 gap-5">
            {/* left  */}
            <div className=" grid p-5">
              <div className="bg-white rounded-lg flex flex-col p-4 h-24 gap-3 border border-gray-100 shadow-sm">
                <p className="text-gray-800 text-sm">SERVICE OVERVIEW</p>
                <p className="text-gray-800 text-xl">
                  <span className="font-bold">1.7 GB,</span> unlimited talktime
                </p>
              </div>
              <div className="bg-white rounded-lg flex flex-col gap-3 pt-4 border border-gray-100 shadow-sm">
                <div className="font-sm font-bold text-gray-700 px-4">
                  PACKS
                </div>

                {/* pack money  */}
                <div className="flex justify-between px-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-xl">₹859 unlimited</p>
                    <p className="text-sm text-gray-500">
                      <span className="text-teal-500">active</span>• expiring on
                      31 Dec 2024
                    </p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
                {/* bars  */}
                <div className="flex flex-col gap-4 px-4">
                  <div className="flex justify-between flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-500">CALLS</p>
                      <p className="text-sm font-bold text-gray-900">
                        truely unlimited
                      </p>
                    </div>
                    <div className="h-1 bg-gradient-to-tr from-sky-400 to-blue-600 w-full rounded"></div>
                  </div>
                  <div className="flex justify-between flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-500">SMS</p>
                      <p className="text-sm font-bold text-gray-900">
                        100 SMS left
                      </p>
                    </div>
                    <div className="h-1 bg-slate-300 w-full rounded"></div>
                  </div>
                </div>
                <hr />
                {/* pack money  */}
                <div className="flex justify-between px-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-xl">₹0 unlimited 5g</p>
                    <p className="text-sm text-gray-500">
                      <span className="text-teal-500">active</span>• expiring on
                      1 Jan 2025
                    </p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
                {/* bars  */}
                <div className="flex flex-col gap-4 px-4">
                  <div className="flex justify-between flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-500">CALLS</p>
                      <p className="text-sm font-bold text-gray-900">
                        truely unlimited
                      </p>
                    </div>
                    <div className="h-1 bg-gradient-to-tr from-sky-400 to-blue-600 w-full rounded"></div>
                  </div>
                  <div className="flex justify-between flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-500">SMS</p>
                      <p className="text-sm font-bold text-gray-900">
                        100 SMS left
                      </p>
                    </div>
                    <div className="h-1 bg-slate-300 w-full rounded"></div>
                  </div>
                </div>
                <div className="bg-[#ecedff] w-full p-5 rounded h-full flex items-center justify-center">
                  <div className="bg-gray-950 text-white text-sm font-bold flex items-center py-2 px-5 rounded-lg justify-center w-full">
                    RECHARGE
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="py-5 flex flex-col gap-5 px-5">
              <div className="bg-white rounded-lg flex flex-col p-4 gap-3 border border-gray-100 shadow-sm">
                <p className="text-gray-800 text-sm font-bold">SHORTCUTS</p>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center ">
                    <div className="flex gap-2 items-center">
                      <div className="bg-[#e3e5ff] rounded-full p-2">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class=""
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.59 7.905a.6.6 0 0 0 .6.6H22a.6.6 0 1 0 0-1.2h-3.81a.6.6 0 0 0-.6.6Z"
                            fill="#000"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.095 5.4a.6.6 0 0 0-.6.6v3.81a.6.6 0 1 0 1.2 0V6a.6.6 0 0 0-.6-.6Z"
                            fill="#000"
                          ></path>
                          <path
                            d="M5.984 9.87c-.412 0-.765.082-1.06.245a1.91 1.91 0 0 0-.7.641c-.178.264-.31.57-.395.92a4.98 4.98 0 0 0-.117 1.083c0 .901.179 1.6.536 2.097.365.497.913.746 1.642.746.311 0 .579-.043.804-.129.233-.085.45-.217.652-.396.18-.17.323-.353.431-.547.117-.202.202-.45.257-.745H6.6c-.287 0-.481-.07-.582-.21a.785.785 0 0 1-.14-.443c0-.473.24-.71.722-.71h2.213c.21 0 .38.062.513.186.14.117.21.299.21.547v3.157a.94.94 0 0 1-.024.21.4.4 0 0 1-.082.198.464.464 0 0 1-.22.128 1.066 1.066 0 0 1-.397.058 1.04 1.04 0 0 1-.384-.058.556.556 0 0 1-.222-.128.525.525 0 0 1-.093-.186.964.964 0 0 1-.023-.21v-.373a2.694 2.694 0 0 1-.198.221 1.88 1.88 0 0 1-.198.175 2.585 2.585 0 0 1-.839.454c-.303.11-.69.163-1.165.163-.597 0-1.126-.093-1.584-.28a3.22 3.22 0 0 1-1.165-.826 3.764 3.764 0 0 1-.71-1.316A6.144 6.144 0 0 1 2 12.782a5.9 5.9 0 0 1 .21-1.56c.147-.52.38-.982.699-1.386.326-.404.741-.73 1.246-.979.505-.248 1.118-.372 1.84-.372.583 0 1.091.077 1.526.233.435.155.843.411 1.223.768.124.132.225.272.303.42.085.14.128.287.128.442a.73.73 0 0 1-.221.536.78.78 0 0 1-.56.21c-.178 0-.318-.047-.419-.14-.1-.093-.229-.21-.384-.35a5.367 5.367 0 0 0-.35-.302 1.49 1.49 0 0 0-.722-.373 2.132 2.132 0 0 0-.535-.058Zm11.254 4.555c0 .823-.268 1.421-.804 1.794-.536.365-1.297.547-2.283.547h-2.504c-.427 0-.64-.205-.64-.617V9.265c0-.17.054-.31.162-.42.117-.108.288-.162.513-.162h2.353c.916 0 1.634.167 2.155.5.52.327.78.882.78 1.666 0 .225-.027.431-.081.618a1.802 1.802 0 0 1-.222.477c-.093.14-.202.26-.326.361a2.906 2.906 0 0 1-.384.245c.233.077.43.182.594.314.163.125.295.268.396.431.1.163.174.342.221.536.047.194.07.392.07.594Zm-1.945-3.424c0-.125-.02-.245-.059-.361a.868.868 0 0 0-.186-.315.874.874 0 0 0-.35-.221 1.496 1.496 0 0 0-.535-.082h-1.561v1.969h1.56c.218 0 .397-.027.537-.082a.873.873 0 0 0 .35-.221.867.867 0 0 0 .185-.315c.04-.124.059-.248.059-.372Zm.268 3.378c0-.14-.02-.276-.059-.408a.813.813 0 0 0-.21-.35.993.993 0 0 0-.395-.232 1.713 1.713 0 0 0-.606-.094h-1.689v2.144h1.689c.45 0 .773-.105.967-.315.202-.217.303-.466.303-.745Z"
                            fill="#000"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-800 font-bold">
                        {" "}
                        Top up data
                      </p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 text-blue-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center ">
                    <div className="flex gap-2 items-center">
                      <div className="bg-[#e3e5ff] rounded-full p-2">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class=""
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.915 4.51a7.493 7.493 0 0 0-7.305 5.825.6.6 0 0 1-1.17-.266 8.693 8.693 0 0 1 16.949 0 .6.6 0 0 1-1.17.266 7.493 7.493 0 0 0-7.305-5.825Zm-8.023 8.703a.6.6 0 0 1 .718.452 7.493 7.493 0 0 0 14.609 0 .6.6 0 0 1 1.17.266 8.693 8.693 0 0 1-16.95 0 .6.6 0 0 1 .453-.718Z"
                            fill="#000"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.08 16.403a.6.6 0 0 1-.163-.833l1.704-2.533a.6.6 0 0 1 .833-.163l2.533 1.704a.6.6 0 0 1-.67.996l-2.035-1.37-1.37 2.036a.6.6 0 0 1-.832.163ZM21.938 8.43a.6.6 0 0 1 .158.834l-1.717 2.516a.6.6 0 0 1-.834.158L17.03 10.22a.6.6 0 0 1 .676-.99l2.021 1.377 1.378-2.02a.6.6 0 0 1 .834-.158Zm-12.646.693a.6.6 0 0 1 .6-.6h4.045a.6.6 0 1 1 0 1.2h-.882c.182.38.257.807.23 1.224a2.46 2.46 0 0 1-.743 1.62c-.332.319-.76.547-1.272.655l1.95 1.95a.6.6 0 0 1-.849.848l-2.903-2.903a.6.6 0 0 1 .424-1.025h.674c.562 0 .922-.176 1.145-.39.23-.22.356-.52.376-.833.02-.316-.07-.612-.23-.817-.152-.192-.38-.329-.72-.329H9.892a.6.6 0 0 1-.6-.6Z"
                            fill="#000"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.292 10.874a.6.6 0 0 1 .6-.6h4.045a.6.6 0 1 1 0 1.2H9.892a.6.6 0 0 1-.6-.6Z"
                            fill="#000"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-800 font-bold">
                        Recharge
                      </p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 text-blue-500 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center ">
                    <div className="flex gap-2 items-center">
                      <div className="bg-[#e3e5ff] rounded-full p-2">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class=""
                        >
                          <path
                            d="M13.72 19.985H7.113c-.946 0-1.713-.67-1.713-1.498V5.498C5.4 4.67 6.167 4 7.113 4h6.475a1 1 0 0 1 .658.247l2.801 2.451a1 1 0 0 1 .342.753v2.592m-.026 2.966v4.986m0-4.986 1.371 1.371m-1.372-1.371-1.371 1.371m1.371 5.61V20"
                            stroke="#000"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-800 font-bold">
                        Upgrade to postpaid
                      </p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 text-blue-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center ">
                    <div className="flex gap-2 items-center">
                      <div className="bg-[#e3e5ff] rounded-full p-2">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class=""
                        >
                          <path
                            d="M2.695 4.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-15Z"
                            stroke="#000"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8.695 18.691h.01"
                            stroke="#000"
                            stroke-width="1.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M15.105 18.598a6.2 6.2 0 1 0 0-12.4m-.305 4.34h6m-6 3.843h6"
                            stroke="#000"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M15.105 6.198a9.486 9.486 0 0 1 2.48 6.2 9.486 9.486 0 0 1-2.48 6.2M7.695 4.946h2"
                            stroke="#000"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-800 font-bold">
                        International Roaming
                      </p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 text-blue-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 flex flex-col gap-5">
                {/* image  */}
                {/* rows */}
                <div className="flex flex-col gap-5">
                  {/* first row  */}
                  <div className="flex flex-col gap-5">
                    <div
                      className="banner-container flex h-24 rounded-lg justify-center items-center "
                      style={{
                        backgroundImage: `url("https://assets.airtel.in/teams/adtech-cms/ADTECH/images/selfcare_app_redirection_sidebar_banner_vector.png"), linear-gradient(279.08deg, rgb(0, 119, 245) -7.28%, rgb(24, 213, 255) 107.2%)`,
                      }}
                    >
                      <div className="banner-icon-container">
                        <img
                          src="https://assets.airtel.in/static-assets/mini-manage/images/HandcellStars.png"
                          loading="lazy"
                          className="wt-img banner-icon h-24"
                          height="16"
                          alt="banner icon"
                        />
                      </div>
                      <div className="banner-content">
                        <p
                          className="wt-typography"
                          data-type="title-para-md"
                          style={{ color: "rgb(246, 246, 246)" }}
                        >
                          APP-ONLY SHORTCUTS
                        </p>
                        <p
                          className="wt-typography"
                          data-type="body-para-sm-bold"
                          style={{ color: "rgb(246, 246, 246)" }}
                        >
                          Access on airtel Thanks app
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center ">
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#e3e5ff] rounded-full p-2">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class=""
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.603 15.478a1.566 1.566 0 0 1 3.132 0v.353a1.566 1.566 0 1 1-3.132 0v-.353Zm1.566-.366a.366.366 0 0 0-.366.366v.353a.366.366 0 0 0 .732 0v-.353a.366.366 0 0 0-.366-.366ZM8.05 11.633a1.566 1.566 0 0 1 3.132 0v.353a1.566 1.566 0 1 1-3.132 0v-.353Zm1.566-.365a.366.366 0 0 0-.366.365v.353a.366.366 0 1 0 .732 0v-.353a.366.366 0 0 0-.366-.365ZM14.22 9.61a.53.53 0 0 1 .25.763l-3.984 6.939a.68.68 0 0 1-.847.277.53.53 0 0 1-.25-.763l3.985-6.94a.68.68 0 0 1 .847-.277Z"
                              fill="#000"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.069 2.4h5.867a1.512 1.512 0 0 1 1.243 2.35l-1.191 1.535c1.82.993 3.245 2.157 4.242 3.568 1.117 1.583 1.665 3.436 1.665 5.617 0 2.126-.981 3.697-2.618 4.707-1.602.987-3.802 1.423-6.277 1.423s-4.675-.436-6.276-1.42c-1.637-1.004-2.619-2.568-2.619-4.682 0-2.181.548-4.034 1.665-5.618.997-1.415 2.424-2.582 4.245-3.581L7.82 4.749A1.512 1.512 0 0 1 9.064 2.4h.005Zm1 4.698c-1.952 1-3.376 2.137-4.318 3.473-.957 1.357-1.446 2.96-1.446 4.927 0 1.674.746 2.861 2.047 3.66C7.688 19.978 9.636 20.4 12 20.4s4.31-.421 5.647-1.245c1.3-.802 2.048-1.995 2.048-3.685 0-1.966-.49-3.57-1.446-4.925-.937-1.328-2.352-2.457-4.291-3.447H10.07Zm3.7-1.2h-3.548L8.797 4.05a.312.312 0 0 1 .275-.451h5.856a.313.313 0 0 1 .275.45L13.77 5.898Z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className=" flex flex-col">
                          <div className="text-sm text-gray-800 font-bold ">
                            Manage DND
                          </div>
                          <p className="text-sm text-gray-500">
                            Manage your 'Do Not Disturb' preferences via the app
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* second row  */}

                  <div className="flex flex-col">
                    <div className="flex justify-between items-center ">
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#e3e5ff] rounded-full p-2">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class=""
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 3.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8ZM2.4 12a9.6 9.6 0 1 1 19.2 0 9.6 9.6 0 0 1-19.2 0Z"
                              fill="#000"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.213 5.212a.6.6 0 0 1 .848 0L18.787 17.94a.6.6 0 1 1-.848.848L5.213 6.061a.6.6 0 0 1 0-.849Z"
                              fill="#000"
                            ></path>
                          </svg>
                        </div>
                        <div className=" flex flex-col">
                          <div className="text-sm text-gray-800 font-bold ">
                            Update GST
                          </div>
                          <p className="text-sm text-gray-500">
                            Update your GST details and save on tax-based
                            expenses
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* button  */}
                <div className="bg-gray-950 text-white text-sm font-bold flex items-center py-2 px-5 rounded-lg justify-center">
                  DOWNLOAD THANKS APP NOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
