import { useState } from "react";

const Overview = () => {
    const [expandedPackages, setExpandedPackages] = useState([]);
    const [expandedActivities, setExpandedActivities] = useState({});

    const toggleExpand = (packageId) => {
        setExpandedPackages((prev) =>
            prev.includes(packageId)
                ? prev.filter((id) => id !== packageId)
                : [...prev, packageId]
        );
    };

    const toggleActivityExpand = (packageId, activityId) => {
        setExpandedActivities((prev) => {
            const key = `${packageId}-${activityId}`;
            return {
                ...prev,
                [key]: !prev[key],
            };
        });
    };

    const handleCheckboxClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className="mt-8">
            <div className="flex font-semibold bg-blue-200 ml-[3rem]">
                <div className="flex">
                    <span><input type="checkbox" onClick={handleCheckboxClick} className="ml-[0.5rem] border-gray-400 hover:border-blue-500" /></span>
                    <h1 className="text-xl ml-[1rem]">Packages</h1>
                </div>
                <div className="ml-[35rem]">
                    <h2 className="text-xl">Rate <span className="text-sm"><i>(in sqft)</i></span></h2>
                </div>
                <div className="ml-[17rem]">
                    <h3 className="text-xl">Total</h3>
                </div>
            </div>

            {[1, 2, 3, 4, 5].map((packageId) => (
                <div className="">
                <div key={packageId} className="flex flex-col items-start border-t border-gray-300">
                    <div className="flex items-center ml-[3rem] mt-1">
                        <div className="w-[13.2rem]">
                            <input type="checkbox" id={`package-${packageId}`} onClick={handleCheckboxClick} className="ml-[0.5rem] border-gray-400 hover:border-blue-500" />
                            <label className="ml-[1rem] text-gray-700 font-semibold" htmlFor={`package-${packageId}`}>Civil {packageId}</label>
                        </div>
                        <div className="ml-[29rem]">
                            567.80
                        </div>
                        <div className="ml-[19.8rem]">
                            ₹ 2,98,6792
                        </div>
                        <div className="ml-[19.6rem] text-emerald-600 text-2xl cursor-pointer font-bold">

                            <span onClick={() => toggleExpand(packageId)}>
                                {expandedPackages.includes(packageId) ? " − " : " + "}
                            </span>
                        </div>
                    </div>


                    {expandedPackages.includes(packageId) && (
                        <>
                            {[1, 2, 3, 4].map((activityId) => (
                                <div key={`${packageId}-${activityId}`} className="ml-4 border-t border-gray-300">
                                    <div className="flex items-center">
                                        <div>
                                            <input type="checkbox" id={`activity-${packageId}-${activityId}`} onClick={handleCheckboxClick} className="ml-[5rem] border-gray-400 hover:border-blue-500" />
                                            <label className="ml-[1rem] text-gray-700" htmlFor={`activity-${packageId}-${activityId}`}>Activity {activityId}</label>
                                        </div>
                                        <div className="ml-[33.4rem]">
                                            567.80
                                        </div>
                                        <div className="ml-[19.7rem]">
                                            ₹ 2,98,6792
                                        </div>
                                        <div className="ml-[19.7rem] text-black text-2xl cursor-pointer">

                                            <span onClick={() => toggleActivityExpand(packageId, activityId)}>
                                                {expandedActivities[`${packageId}-${activityId}`] ? "^" : "v"}
                                            </span>
                                        </div>
                                    </div>

                                    {expandedActivities[`${packageId}-${activityId}`] && (
                                        <div className="ml-4 border-t border-gray-300">

                                            {[1, 2, 3].map((workItemId) => (
                                                <div key={`${packageId}-${activityId}-${workItemId}`} className="flex items-center">
                                                    <div>
                                                        <input className="ml-[6rem] border-gray-400 hover:border-blue-500" type="checkbox" id={`work-item-${packageId}-${activityId}-${workItemId}`} onClick={handleCheckboxClick} />
                                                        <label className="ml-[1rem] text-gray-700" htmlFor={`work-item-${packageId}-${activityId}-${workItemId}`}>Work Item {workItemId}</label>
                                                    </div>
                                                    <div className="ml-[52.6rem]">
                                                        ₹ 2,98,6792
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </>
                    )}
                </div>
                </div>
            ))}
        </div>
    );
};

export default Overview;
