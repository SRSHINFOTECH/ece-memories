import React, { memo } from "react";
import AvatarColors from "./AvatarColors";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./avatarStyle.css";

const ObAvatar = ({ data, className }) => {
  let firstLetter = data[0].toUpperCase();
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip bsPrefix="obtooltip">{data}</Tooltip>}
    >
      <span
        className={`${className} rounded-circle text-center text-white align-self-center avatarIcon`}
        style={
          firstLetter.toUpperCase().match(/[A-Z]/i)
            ? {
                background: AvatarColors[firstLetter]
              }
            : { background: "black" }
        }
      >
        {firstLetter}
      </span>
    </OverlayTrigger>
  );
};

export default memo(ObAvatar);
