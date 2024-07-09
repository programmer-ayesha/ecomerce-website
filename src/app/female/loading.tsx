// import LoadingComponent from "@/components/ui/LoadingComponent"

import LoadingComponent from "@/components/ui/LoadingComponents"
import React from "react"

const Loading = () => {
    return (
        <LoadingComponent isCarousel={false}
            cardLimit={6} />
    )
}

export default Loading