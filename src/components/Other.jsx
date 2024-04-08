import { useEffect } from "react"

const Other = () => {

    useEffect(() => {
        console.log("Hello World!");
    }, []);

    return (

        <div className="flex items-center justify-center mt-[15rem] " >
            <h1 className="text-4xl font-bold text-center  rounded px-4 py-2" style={{ backgroundColor: "#52ACA9" }}>
                Hello World! <span className="text-sm">(check console)</span>
            </h1>
        </div>

    )
}

export default Other