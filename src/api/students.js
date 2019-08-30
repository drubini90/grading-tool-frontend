import request from "./request";

export const getAllStudents = () => request("/api/students");
export const getAllStudentsWithFilter = (score_gte, score_lte) =>
  request("/api/students/?score_gte=" + score_gte + "&score_lte=" + score_lte);
