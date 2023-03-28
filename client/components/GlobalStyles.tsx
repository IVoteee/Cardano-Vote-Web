import React from "react";

type Props = {
    children: React.ReactNode
}

const GlobalStyles = function({children}: Props) {
    return (
        <div>{children}</div>
    )
}

export default GlobalStyles;