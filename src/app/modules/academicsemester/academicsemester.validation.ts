import { z } from "zod"
import { AcademicCodes, AcademicTitles, academicSemesterMonth  } from "./academicsemester.constant"
const create = z.object({
    body: z.object({
        year: z.number({
            required_error: "Year is required"
        }),
        title: z.enum([...AcademicTitles] as [string,...string[]]),
        code: z.enum([...AcademicCodes] as [string,...string[]]),
        startMonth: z.enum([...academicSemesterMonth] as [string,...string[]]),
        endMonth:  z.enum([...academicSemesterMonth] as [string,...string[]]),
    })
})
const update = z.object({
    body: z.object({
        year: z.number().optional(),
        title: z.enum([...AcademicTitles] as [string,...string[]]).optional(),
        code: z.enum([...AcademicCodes] as [string,...string[]]).optional(),
        startMonth: z.enum([...AcademicTitles] as [string,...string[]]).optional(),
        endMonth:  z.enum([...AcademicTitles] as [string,...string[]]).optional(),
    })
});

export const AcademicSemesterValidation = {
    create,
    update
}