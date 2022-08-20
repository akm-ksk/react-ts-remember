import type {User} from "./type/user";
import {FC} from "react";

export const ListItem: FC<User> = props => {
    const {id, name, age, personalColor, hobbies} = props;
    return (
        <p style={{color: personalColor}}>
            {id} : {name} ({age}) {hobbies?.join(" / ")}
        </p>
    )
}

ListItem.defaultProps = {
    personalColor: "gray"
}