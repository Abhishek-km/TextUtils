import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div>
          <div className="alert alert-success" role="alert">
            {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}
