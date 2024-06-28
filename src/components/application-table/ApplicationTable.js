import React from "react";
import { useDataContext } from "../../hooks/useDataContext";
import { ICON_TYPES } from "../../utils/constants.utils";
import "./ApplicationTable.scss";

const ApplicationTable = ({ applications }) => {
  const { tableData } = useDataContext();
  return (
    <table className="application-table">
      <thead>
        <tr>
          <th>Created</th>
          <th>Name</th>
          <th>Type</th>
          <th>Risk Score</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((entry, index) => (
          <tr key={index}>
            <td className="two-columns">
              <span>{entry.createdDate}</span>
              <span>{entry.createdTime}</span>
            </td>
            <td className="two-columns">
              <span>{entry.name}</span>
              <span>{entry.email}</span>
            </td>
            <td>{entry.type}</td>
            <td className="two-rows">
              {entry.risk.icon && <i class={entry.risk.icon}></i>}
              <span>{entry.risk.score}</span>
            </td>
            <td className="two-rows">
              {entry.status.icon && <i class={entry.status.icon}></i>}
              <span>{entry.status.status}</span>
            </td>
            <td>
              <i class={ICON_TYPES.LIST}></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApplicationTable;
