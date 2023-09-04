import React from "react";

function RecipeTag({tag}) {
    return (
        <li>
            {tag.name}
        </li>
    )
}

export default RecipeTag;