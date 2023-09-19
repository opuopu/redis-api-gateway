import { Request } from 'express';
import { authService } from '../../../shared/axios';
const createStudent = async (req: Request) => {
  const data = req.body;
  const { academicDepartment, academicFaculty, academicSemster } = data;
  const academicDepartmentResponse = await authService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );
  if (academicDepartmentResponse && Array.isArray(academicDepartmentResponse.data)) {
    data.student.academicDepartment = academicDepartmentResponse.data[0]._id;
  }
  const academicSemesterResponse = await authService.get(
    `/academic-semesters?syncId=${academicSemster}`
  );
  if (academicSemesterResponse && Array.isArray(academicSemesterResponse.data)) {
    data.student.academicSemester = academicSemesterResponse.data[0]._id;
  }
  const academicFacultyResponse = await authService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );
  if (academicFacultyResponse && Array.isArray(academicFacultyResponse.data)) {
    data.student.academicFaculty = academicFacultyResponse.data[0]._id;
  }
};

export const userServices = {
  createStudent
};
