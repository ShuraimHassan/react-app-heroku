/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
class MainSection extends React.Component {

  state = {
      bulbImage : 'https://images.pexels.com/photos/355904/pexels-photo-355904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      officeTableimg : 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      womanImage : 'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      spectreImg: 'https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      socialMedia:'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      terminalWinds:'https://images.pexels.com/photos/157039/pexels-photo-157039.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  }


  render() {
    return (
      <div>
        <div className="w-full  bg-white p-12" style={{backgroundColor: "#131b31"}}>
          <div className="header flex items-end justify-between mb-12 ml-2">
            <div className="title">
              <p className="text-4xl font-bold text-yellow-400 mb-4">
                Latest Featured Blogs for this Summer!
        </p>
              <p className="text-2xl font-light text-yellow-200">
                All article are verified by 2 experts and valdiate by the CTO
        </p>
            </div>
            <div className="text-end">
              <form className="flex w-full max-w-sm space-x-3">
                <div className=" relative ">
                  <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title" />
                </div>
                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-yellow-400 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                  Search
          </button>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a href="#" className="w-full block h-full">
                <img alt="blog photo" src={this.state.bulbImage} className="max-h-40 w-full object-cover" />
              </a><div className="bg-white dark:bg-gray-800 w-full p-4"><a href="#" className="w-full block h-full">
                <p className="text-indigo-500 text-md font-medium">
                  Video
            </p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  Work at home
            </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  Work at home, remote, is the new age of the job, every person can work at home....
            </p>
              </a><div className="flex items-center mt-4"><a href="#" className="w-full block h-full">
              </a><a href="#" className="block relative">
                    <img alt="profil" src='https://lh3.googleusercontent.com/cXyK2b3bEJx1Q-MHQD_9TEEBDF8pRwAiE2ylnkCrRRkEV15u_JGLws4wPe2mhK28qRg5gALhIsGLmLVGGGjKPL6bu813xP5BFfuZMOlunf6FBEYZVF_u945TPTeghDTPWQTcjsTqDa8MFCVqxurUvKzRuz4kAacYkYdRwNmaVQltGEdgxMShJhDpgzQSbqHCK4WMzg0fL_IDxeoUf2c3MGmhSTJSHCYaUl1mkHo4hV8CK3Y0zi0udaSiUBtQlAueIwQXOObZASAp0P4OqyNdgiI-wL2p4C197MtbcfbIZVOKBS5lzA3Wt-Dnd5GSMUXkh6TEaU7RQ-z17Iwu60ZMgBN74RvnlepPLG20LSLqhpGJ6QgyOCOx77uWFbLiZU3FjMmFJSHnMi06Mu1RS1Uu-WWU2BmSPhSmXQHIGcu-bLEqPMsmMYHkEB2WvF-HHShusa6lBuGbYtSEYNH851wWaUs51MPD3l0_l-tFUtSc8tNF0hjfFREOTTtd4kCnC69jmOGovFvG5Srk_DyMs7_NjzkO2AdAAWLByo0PqEoe2zx2OvLLAFXMqyEEk3tlHdMOPJ7-Nxb4KIHDJ3Yb6bdiQVbeHemUcVqOW_Q8UivM7xlbn_bQXvhfNZ6mEN0puKQl8F8lN8NZT5mbuR23N6Cb8G94nm0D3mDWbUguVM9fUsd53x7kFcriuJiNtdkMyVG_pdTCxkpUOm5fp-RVnFo-2aW4GQ=w505-h673-no?authuser=0' className="mx-auto object-cover rounded-full h-12 w-20 " />
                  </a>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">
                      Shuraim Hassan
              </p>
                    <p className="text-gray-400 dark:text-gray-300">
                      5 / 27 /2021 - 6 min read
              </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a href="#" className="w-full block h-full">
                <img alt="blog photo" src={this.state.socialMedia} />
              </a><div className="bg-white dark:bg-gray-800 w-full p-4"><a href="#" className="w-full block h-full">
                <p className="text-indigo-500 text-md font-medium">
                  Oui
            </p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  Blog Post 
            </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
            </p>
              </a><div className="flex items-center mt-4"><a href="#" className="w-full block h-full">
              </a><a href="#" className="block relative">
                    <img alt="profil" src='https://lh3.googleusercontent.com/cXyK2b3bEJx1Q-MHQD_9TEEBDF8pRwAiE2ylnkCrRRkEV15u_JGLws4wPe2mhK28qRg5gALhIsGLmLVGGGjKPL6bu813xP5BFfuZMOlunf6FBEYZVF_u945TPTeghDTPWQTcjsTqDa8MFCVqxurUvKzRuz4kAacYkYdRwNmaVQltGEdgxMShJhDpgzQSbqHCK4WMzg0fL_IDxeoUf2c3MGmhSTJSHCYaUl1mkHo4hV8CK3Y0zi0udaSiUBtQlAueIwQXOObZASAp0P4OqyNdgiI-wL2p4C197MtbcfbIZVOKBS5lzA3Wt-Dnd5GSMUXkh6TEaU7RQ-z17Iwu60ZMgBN74RvnlepPLG20LSLqhpGJ6QgyOCOx77uWFbLiZU3FjMmFJSHnMi06Mu1RS1Uu-WWU2BmSPhSmXQHIGcu-bLEqPMsmMYHkEB2WvF-HHShusa6lBuGbYtSEYNH851wWaUs51MPD3l0_l-tFUtSc8tNF0hjfFREOTTtd4kCnC69jmOGovFvG5Srk_DyMs7_NjzkO2AdAAWLByo0PqEoe2zx2OvLLAFXMqyEEk3tlHdMOPJ7-Nxb4KIHDJ3Yb6bdiQVbeHemUcVqOW_Q8UivM7xlbn_bQXvhfNZ6mEN0puKQl8F8lN8NZT5mbuR23N6Cb8G94nm0D3mDWbUguVM9fUsd53x7kFcriuJiNtdkMyVG_pdTCxkpUOm5fp-RVnFo-2aW4GQ=w505-h673-no?authuser=0' className="mx-auto object-cover rounded-full h-12 w-20 " />
                  </a>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">
                      Shuraim Hassan
              </p>
                    <p className="text-gray-400 dark:text-gray-300">
                      5 / 27 /2021 - 6 min read
              </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a href="#" className="w-full block h-full">
                <img alt="blog photo" src={this.state.socialMedia} className="max-h-40 w-full object-cover" />
              </a><div className="bg-white dark:bg-gray-800 w-full p-4"><a href="#" className="w-full block h-full">
                <p className="text-indigo-500 text-md font-medium">
                  Oui
            </p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  Blog Post
            </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
            </p>
              </a><div className="flex items-center mt-4"><a href="#" className="w-full block h-full">
              </a><a href="#" className="block relative">
                    <img alt="profil" src='https://lh3.googleusercontent.com/cXyK2b3bEJx1Q-MHQD_9TEEBDF8pRwAiE2ylnkCrRRkEV15u_JGLws4wPe2mhK28qRg5gALhIsGLmLVGGGjKPL6bu813xP5BFfuZMOlunf6FBEYZVF_u945TPTeghDTPWQTcjsTqDa8MFCVqxurUvKzRuz4kAacYkYdRwNmaVQltGEdgxMShJhDpgzQSbqHCK4WMzg0fL_IDxeoUf2c3MGmhSTJSHCYaUl1mkHo4hV8CK3Y0zi0udaSiUBtQlAueIwQXOObZASAp0P4OqyNdgiI-wL2p4C197MtbcfbIZVOKBS5lzA3Wt-Dnd5GSMUXkh6TEaU7RQ-z17Iwu60ZMgBN74RvnlepPLG20LSLqhpGJ6QgyOCOx77uWFbLiZU3FjMmFJSHnMi06Mu1RS1Uu-WWU2BmSPhSmXQHIGcu-bLEqPMsmMYHkEB2WvF-HHShusa6lBuGbYtSEYNH851wWaUs51MPD3l0_l-tFUtSc8tNF0hjfFREOTTtd4kCnC69jmOGovFvG5Srk_DyMs7_NjzkO2AdAAWLByo0PqEoe2zx2OvLLAFXMqyEEk3tlHdMOPJ7-Nxb4KIHDJ3Yb6bdiQVbeHemUcVqOW_Q8UivM7xlbn_bQXvhfNZ6mEN0puKQl8F8lN8NZT5mbuR23N6Cb8G94nm0D3mDWbUguVM9fUsd53x7kFcriuJiNtdkMyVG_pdTCxkpUOm5fp-RVnFo-2aW4GQ=w505-h673-no?authuser=0' className="mx-auto object-cover rounded-full h-12 w-20 " />
                  </a>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">
                      Shuraim Hassan
              </p>
                    <p className="text-gray-400 dark:text-gray-300">
                      5 / 27 /2021 - 6 min read
              </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a href="#" className="w-full block h-full">
                <img alt="blog photo" src={this.state.spectreImg} />
              </a><div className="bg-white dark:bg-gray-800 w-full p-4"><a href="#" className="w-full block h-full">
                <p className="text-indigo-500 text-md font-medium">
                </p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  Blog Post
            </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
            </p>
              </a><div className="flex items-center mt-4"><a href="#" className="w-full block h-full">
              </a><a href="#" className="block relative">
                    <img alt="profil" src="https://lh3.googleusercontent.com/cXyK2b3bEJx1Q-MHQD_9TEEBDF8pRwAiE2ylnkCrRRkEV15u_JGLws4wPe2mhK28qRg5gALhIsGLmLVGGGjKPL6bu813xP5BFfuZMOlunf6FBEYZVF_u945TPTeghDTPWQTcjsTqDa8MFCVqxurUvKzRuz4kAacYkYdRwNmaVQltGEdgxMShJhDpgzQSbqHCK4WMzg0fL_IDxeoUf2c3MGmhSTJSHCYaUl1mkHo4hV8CK3Y0zi0udaSiUBtQlAueIwQXOObZASAp0P4OqyNdgiI-wL2p4C197MtbcfbIZVOKBS5lzA3Wt-Dnd5GSMUXkh6TEaU7RQ-z17Iwu60ZMgBN74RvnlepPLG20LSLqhpGJ6QgyOCOx77uWFbLiZU3FjMmFJSHnMi06Mu1RS1Uu-WWU2BmSPhSmXQHIGcu-bLEqPMsmMYHkEB2WvF-HHShusa6lBuGbYtSEYNH851wWaUs51MPD3l0_l-tFUtSc8tNF0hjfFREOTTtd4kCnC69jmOGovFvG5Srk_DyMs7_NjzkO2AdAAWLByo0PqEoe2zx2OvLLAFXMqyEEk3tlHdMOPJ7-Nxb4KIHDJ3Yb6bdiQVbeHemUcVqOW_Q8UivM7xlbn_bQXvhfNZ6mEN0puKQl8F8lN8NZT5mbuR23N6Cb8G94nm0D3mDWbUguVM9fUsd53x7kFcriuJiNtdkMyVG_pdTCxkpUOm5fp-RVnFo-2aW4GQ=w505-h673-no?authuser=0" className="mx-auto object-cover rounded-full h-12 w-20 " />
                  </a>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">
                      Shuraim Hassan
              </p>
                    <p className="text-gray-400 dark:text-gray-300">
                      5 / 27 /2021 - 6 min read
              </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a href="#" className="w-full block h-full">
                <img alt="blog photo" src={this.state.terminalWinds} className="max-h-40 w-full object-cover" />
              </a><div className="bg-white dark:bg-gray-800 w-full p-4"><a href="#" className="w-full block h-full">
                <p className="text-indigo-500 text-md font-medium">
                </p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  Blog Post
            </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
            </p>
              </a><div className="flex items-center mt-4"><a href="#" className="w-full block h-full">
              </a><a href="#" className="block relative">
                    <img alt="profil" src="https://lh3.googleusercontent.com/cXyK2b3bEJx1Q-MHQD_9TEEBDF8pRwAiE2ylnkCrRRkEV15u_JGLws4wPe2mhK28qRg5gALhIsGLmLVGGGjKPL6bu813xP5BFfuZMOlunf6FBEYZVF_u945TPTeghDTPWQTcjsTqDa8MFCVqxurUvKzRuz4kAacYkYdRwNmaVQltGEdgxMShJhDpgzQSbqHCK4WMzg0fL_IDxeoUf2c3MGmhSTJSHCYaUl1mkHo4hV8CK3Y0zi0udaSiUBtQlAueIwQXOObZASAp0P4OqyNdgiI-wL2p4C197MtbcfbIZVOKBS5lzA3Wt-Dnd5GSMUXkh6TEaU7RQ-z17Iwu60ZMgBN74RvnlepPLG20LSLqhpGJ6QgyOCOx77uWFbLiZU3FjMmFJSHnMi06Mu1RS1Uu-WWU2BmSPhSmXQHIGcu-bLEqPMsmMYHkEB2WvF-HHShusa6lBuGbYtSEYNH851wWaUs51MPD3l0_l-tFUtSc8tNF0hjfFREOTTtd4kCnC69jmOGovFvG5Srk_DyMs7_NjzkO2AdAAWLByo0PqEoe2zx2OvLLAFXMqyEEk3tlHdMOPJ7-Nxb4KIHDJ3Yb6bdiQVbeHemUcVqOW_Q8UivM7xlbn_bQXvhfNZ6mEN0puKQl8F8lN8NZT5mbuR23N6Cb8G94nm0D3mDWbUguVM9fUsd53x7kFcriuJiNtdkMyVG_pdTCxkpUOm5fp-RVnFo-2aW4GQ=w505-h673-no?authuser=0" className="mx-auto object-cover rounded-full h-12 w-20 " />
                  </a>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">
                      Shuraim Hassan
              </p>
                    <p className="text-gray-400 dark:text-gray-300">
                      5 / 27 /2021 - 6 min read
              </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
              <a href="#" className="w-full block h-full">
                <img alt="blog photo" src={this.state.womanImage} className="max-h-40 w-full object-cover" />
              </a><div className="bg-white dark:bg-gray-800 w-full p-4"><a href="#" className="w-full block h-full">
                <p className="text-indigo-500 text-md font-medium">
                  Oui
            </p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  Blog Post
            </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
            </p>
              </a><div className="flex items-center mt-4"><a href="#" className="w-full block h-full">
              </a><a href="#" className="block relative">
                    <img alt="profil" src="https://lh3.googleusercontent.com/cXyK2b3bEJx1Q-MHQD_9TEEBDF8pRwAiE2ylnkCrRRkEV15u_JGLws4wPe2mhK28qRg5gALhIsGLmLVGGGjKPL6bu813xP5BFfuZMOlunf6FBEYZVF_u945TPTeghDTPWQTcjsTqDa8MFCVqxurUvKzRuz4kAacYkYdRwNmaVQltGEdgxMShJhDpgzQSbqHCK4WMzg0fL_IDxeoUf2c3MGmhSTJSHCYaUl1mkHo4hV8CK3Y0zi0udaSiUBtQlAueIwQXOObZASAp0P4OqyNdgiI-wL2p4C197MtbcfbIZVOKBS5lzA3Wt-Dnd5GSMUXkh6TEaU7RQ-z17Iwu60ZMgBN74RvnlepPLG20LSLqhpGJ6QgyOCOx77uWFbLiZU3FjMmFJSHnMi06Mu1RS1Uu-WWU2BmSPhSmXQHIGcu-bLEqPMsmMYHkEB2WvF-HHShusa6lBuGbYtSEYNH851wWaUs51MPD3l0_l-tFUtSc8tNF0hjfFREOTTtd4kCnC69jmOGovFvG5Srk_DyMs7_NjzkO2AdAAWLByo0PqEoe2zx2OvLLAFXMqyEEk3tlHdMOPJ7-Nxb4KIHDJ3Yb6bdiQVbeHemUcVqOW_Q8UivM7xlbn_bQXvhfNZ6mEN0puKQl8F8lN8NZT5mbuR23N6Cb8G94nm0D3mDWbUguVM9fUsd53x7kFcriuJiNtdkMyVG_pdTCxkpUOm5fp-RVnFo-2aW4GQ=w505-h673-no?authuser=0" className="mx-auto object-cover rounded-full h-12 w-20 " />
                  </a>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">
                      Shuraim Hassan
              </p>
                    <p className="text-gray-400 dark:text-gray-300">
                      5 / 27 /2021 - 6 min read
              </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default MainSection;