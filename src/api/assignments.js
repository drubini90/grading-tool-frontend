import request from "./request";

export const getAssignments = () => request("/api/assignments");

export const getAssignment = id => request("/api/assignments/" + id);

export const createAssignment = assignmentInfo =>
  request("/api/assignments/new", { body: assignmentInfo, method: "POST" });

export const editAssignment = (id, assignmentInfo) =>
  request("/api/assignments/" + id + "/edit", {
    body: assignmentInfo,
    method: "PATCH"
  });

export const deleteAssignment = id =>
  request("/api/assignments/" + id + "/delete", {
    body: null,
    method: "DELETE"
  });

export const getGradedAssignments = () => request("/api/assignments/graded");

export const getUngradedAssignments = () =>
  request("/api/assignments/ungraded");
