import { useState, useEffect } from "react";

const SaveOverlay = ({ onClose, activeTab }) => {

    const [clientName, setClientName] = useState("");

    const [commencementDate, setCommencementDate] = useState("");
    const [completionDate, setCompletionDate] = useState("");

    const [rfqCode, setRfqCode] = useState("");
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const [commencementDateValid, setCommencementDateValid] = useState(true);
    const [completionDateValid, setCompletionDateValid] = useState(true);

    const handleSave = () => {
        if (clientName && isDateValid(commencementDate) && isDateValid(completionDate) && rfqCode) {
            console.log("Input data:", {
                Client: clientName,
                "Date of Commencement": commencementDate,
                "Date of Completion": completionDate,
                "RFQ Code": rfqCode,
                Workorder: activeTab === 'Overview' ? "Packages" : "Other",
            });

            if (activeTab === 'Overview') {
                console.log("Selected Checkbox data:");
                console.log("Packages:");

                for (let packageId = 1; packageId <= 5; packageId++) {
                    const packageCheckboxId = `package-${packageId}`;
                    const packageCheckbox = document.getElementById(packageCheckboxId);
                    if (packageCheckbox?.checked) {
                        console.log(`   "${activeTab} ${packageId}"`);
                    }

                    console.log(`      Activities:`);
                    for (let activityId = 1; activityId <= 4; activityId++) {
                        const activityCheckboxId = `activity-${packageId}-${activityId}`;
                        const activityCheckbox = document.getElementById(activityCheckboxId);
                        if (activityCheckbox?.checked) {
                            console.log(`         "Activity ${activityId}"`);

                            // print selected checkbox data for Work Items under each Activity
                            
                            console.log(`            Work Items:`);
                            for (let workItemId = 1; workItemId <= 3; workItemId++) {
                                const workItemCheckboxId = `work-item-${packageId}-${activityId}-${workItemId}`;
                                const workItemCheckbox = document.getElementById(workItemCheckboxId);
                                if (workItemCheckbox?.checked) {
                                    console.log(`               "Work Item ${workItemId}"`);
                                }
                            }
                        }
                    }
                }
            } else if (activeTab === 'Other') {
                console.log("Selected Checkbox data:");
                console.log(`   "${activeTab}"`);
            }

            onClose();
        }
    };

    // handling date validation

    const isDateValid = (dateString) => {
        const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
        return dateString.match(dateFormat);
    };

    const handleCloseOverlay = () => {
        setIsOverlayVisible(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    useEffect(() => {
        setIsOverlayVisible(true);
    }, []);

    return (
        <div
            style={{
                transition: "transform 0.3s ease-out",
                transform: isOverlayVisible ? "translateX(0)" : "translateX(100%)",
            }}
            className="fixed top-0 right-0 bottom-0 w-[33.33%] bg-white flex flex-col justify-between rounded-l-3xl"
        >
            <div className="p-8 rounded-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Workorder</h2>
                    <button
                        className="text-gray-500 text-2xl mr-[4rem] mb-1"
                        onClick={handleCloseOverlay}
                    >
                        X
                    </button>
                </div>
                <div>

                    <div className="mb-4">
                        <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mt-[1rem]">
                            Client
                        </label>
                        <select
                            id="clientName"
                            name="clientName"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-4/5"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            required
                        >
                            <option value="">Client Name</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>

                    <div className="mb-4 ">
                        <label htmlFor="commencementDate" className="block text-sm font-medium text-gray-700 ">
                            Date of Commencement
                        </label>
                        <input
                            type="text"
                            id="commencementDate"
                            name="commencementDate"
                            placeholder="dd/mm/yyyy"
                            className={`mt-1 p-2 border rounded-md w-4/5 ${commencementDateValid ? 'border-gray-300' : 'border-red-500'}`}

                            value={commencementDate}
                            onChange={(e) => {
                                const inputDate = e.target.value;
                                setCommencementDate(inputDate);
                                setCommencementDateValid(isDateValid(inputDate) || inputDate === "");
                            }}
                            required
                        />
                        {!commencementDateValid && (
                            <p className="text-red-500 text-sm mt-1">Invalid date format. Please use dd/mm/yyyy.</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="completionDate" className="block text-sm font-medium text-gray-700">
                            Date of Completion
                        </label>
                        <input
                            type="text"
                            id="completionDate"
                            name="completionDate"
                            placeholder="dd/mm/yyyy"
                            className={`mt-1 p-2 border rounded-md w-4/5 ${completionDateValid ? 'border-gray-300' : 'border-red-500'}`}
                            value={completionDate}
                            onChange={(e) => {
                                const inputDate = e.target.value;
                                setCompletionDate(inputDate);
                                setCompletionDateValid(isDateValid(inputDate) || inputDate === "");
                            }}
                            required
                        />
                        {!completionDateValid && (
                            <p className="text-red-500 text-sm mt-1">Invalid date format. Please use dd/mm/yyyy.</p>
                        )}
                    </div>


                    <div className="mb-4">
                        <label htmlFor="rfqCode" className="block text-sm font-medium text-gray-700">
                            RFQ Code
                        </label>
                        <input
                            type="text"
                            id="rfqCode"
                            name="rfqCode"
                            placeholder="RFQ Code"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-4/5"
                            value={rfqCode}
                            onChange={(e) => setRfqCode(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <button
                    onClick={handleSave}
                    className="text-white py-2 pl-[5rem] pr-[5rem] rounded mt-[15rem] ml-[16rem]"
                    style={{ backgroundColor: "#52ACA9" }}
                >
                    Done
                </button>
            </div>
        </div>
    );
};

export default SaveOverlay;
