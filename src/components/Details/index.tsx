import { useState } from "react"
import Daily from "./Daily"
import Weekly from "./Weekly"

const Details = () => {
  const [tab, setTab] = useState("today")
    return(
        <div className="w-[75%] px-4 py-2 bg-[#f6f6f8] rounded-r-xl">
          <div className="">
                <nav className="flex space-x-6 font-semibold">
                    <button
                        onClick={() => setTab('today')}
                        type="button"
                        className={`py-2 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap hover:font-semibold hover:text-blue-600 ${
                          tab === 'today' ? 'text-blue-600' : 'text-gray-700'
                        } ${
                          tab === 'today' ? 'border-blue-600 border-b-[3px] mb-[-1px]' : 'border-b-[2px] border-transparent'
                        }`}
                      >
                        Today
                      </button>
                      <button
                        onClick={() => setTab('week')}
                        type="button"
                        className={`py-2 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap hover:font-semibold hover:text-blue-600 ${
                          tab === 'week' ? 'text-blue-600' : 'text-gray-700'
                        } ${tab === 'week' ? 'border-blue-600 border-b-[3px] mb-[-1px]' : 'border-b-[2px] border-transparent'}`}
                      >
                        Week
                      </button>
                    </nav>
          </div>
          <div>
              {tab === "week" && <Weekly />}       
              <Daily />
          </div>
        </div>
    )
}

export default Details