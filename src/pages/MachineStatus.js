import React, { useEffect } from "react";
import { connect } from "react-redux";

const MachineStatus = (props) => {
  useEffect(() => {
    console.log(props.selectedMachineId);
  }, []);

  //   console.log(props.selectedMachineId);
  return (
    <div className="machinestatus">
      <h1>MachineStatus Page</h1>
      <p>
        <h3>{props.selectedMachineId}</h3>
      </p>
    </div>
  );
};

const mapStoreToProps = (state) => {
  return {
    selectedMachineId: state.selectedMachineId,
  };
};

export default connect(mapStoreToProps)(MachineStatus);
