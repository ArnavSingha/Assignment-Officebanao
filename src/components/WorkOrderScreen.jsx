import { useState } from "react";
import Other from "./Other";
import Overview from "./Overview";
import SaveOverlay from "./SaveOverlay";

const WorkOrderScreen = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [showSaveOverlay, setShowSaveOverlay] = useState(false);

    const handleSaveClick = () => {
        setShowSaveOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowSaveOverlay(false);
    };

    return (
        <>
            <div>
                <h1 className="text-left text-xl font-semibold mt-[1rem] md:mt-[1rem] ml-[2rem] md:ml-[3rem] ">
                    {'<'}<span> Create Workorder</span>
                </h1>

                <button
                    className="float-right bg-green-500 text-white px-10 py-2 rounded relative bottom-6 mr-[3rem]"
                    style={{ backgroundColor: "#52ACA9" }}
                    onClick={handleSaveClick}
                >
                    Save
                </button>


                {showSaveOverlay && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-50"
                        onClick={handleCloseOverlay}
                    />
                )}

                <div className="flex mt-10">
                    <button
                        className={`px-[8rem] ml-[3rem] py-2 font-bold ${activeTab === 'Overview' ? 'border-b-4 border-black' : 'border-b-4 border-gray-400'}`}
                        onClick={() => setActiveTab('Overview')}
                    >
                        Overview
                    </button>

                    <button
                        className={`px-[7rem] py-2 font-bold ${activeTab === 'Other' ? 'border-b-4 border-black' : 'border-b-4 border-gray-400'}`}
                        onClick={() => setActiveTab('Other')}
                    >
                        Other
                    </button>
                </div>

                {activeTab === 'Overview' ? <Overview /> : <Other />}
                {showSaveOverlay && <SaveOverlay onClose={handleCloseOverlay} activeTab={activeTab} />}
            </div>
        </>
    );
};

export default WorkOrderScreen;
