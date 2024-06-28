import { SCORE_TYPES, STATUS_TYPES, ICON_TYPES } from "./constants.utils";

export const tableData = [
  {
    createdDate: "May 15, 2024",
    createdTime: "14:12:27",
    name: "KÁROLY-EDWARD RÁCZ",
    email: "sdflh@dasdada.com",
    type: "aiscan2",
    risk: { icon: ICON_TYPES.CIRCLE_CHECK, score: SCORE_TYPES.LOW },
    status: { icon: ICON_TYPES.CHECK, status: STATUS_TYPES.APPROVED },
  },
  {
    createdDate: "May 15, 2024",
    createdTime: "14:02:06",
    name: "KÁROLY-EDWARD RÁCZ",
    email: "dsadas@dsadas.com",
    type: "aiscan2",
    risk: {
      score: SCORE_TYPES.NOT_CALCULATED,
    },
    status: {
      icon: ICON_TYPES.ELLIPSIS,
      status: STATUS_TYPES.CUSTOMER_PROCESSING,
    },
  },
  {
    createdDate: "May 03, 2024",
    createdTime: "08:57:14",
    name: "KÁROLY-EDWARD RÁCZ",
    email: "fasfas@fasfas.com",
    type: "aiscan2",
    risk: { icon: ICON_TYPES.CIRCLE_CHECK, score: SCORE_TYPES.LOW },
    status: { icon: ICON_TYPES.CHECK, status: STATUS_TYPES.APPROVED },
  },
  {
    createdDate: "May 03, 2024",
    createdTime: "08:33:55",
    name: "KÁROLY-EDWARD RÁCZ",
    email: "sdas@fiadsfa.com",
    type: "aiscan2",
    risk: { icon: ICON_TYPES.CIRCLE_CHECK, score: SCORE_TYPES.LOW },
    status: { icon: ICON_TYPES.CHECK, status: STATUS_TYPES.APPROVED },
  },
  {
    createdDate: "May 03, 2024",
    createdTime: "08:23:24",
    name: "KÁROLY-EDWARD RÁCZ",
    email: "dasd@fdasfa.com",
    type: "aiscan2",
    risk: { icon: ICON_TYPES.CIRCLE_CHECK, score: SCORE_TYPES.LOW },
    status: { icon: ICON_TYPES.CHECK, status: STATUS_TYPES.APPROVED },
  },
  {
    createdDate: "May 01, 2024",
    createdTime: "10:45:58",
    name: "ssdgfh",
    email: "dsaf@fasfa.com",
    type: "aiscan2",
    risk: {
      score: SCORE_TYPES.NOT_CALCULATED,
    },
    status: {
      icon: ICON_TYPES.ELLIPSIS,
      status: STATUS_TYPES.USER_ACCEPTED_KYC_INVITATION,
    },
  },
  {
    createdDate: "Mar 22, 2024",
    createdTime: "09:53:16",
    name: "KÁROLY-EDWARD RÁCZ",
    email: "dafasf@dsada.com",
    type: "aiscan2",
    risk: { icon: ICON_TYPES.CIRCLE_CHECK, score: SCORE_TYPES.LOW },
    status: { icon: ICON_TYPES.CHECK, status: STATUS_TYPES.APPROVED },
  },
];
