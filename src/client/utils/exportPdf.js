import jsPDF from 'jspdf';
import 'jspdf-autotable';
import moment from 'moment';
import { findLabel, genders, residencies, statuses } from '../enrollment/pages/students/constant';
const exportToPDF = (data, columns, companyHeader) => {
    const filename = `${new Date().getTime()}.pdf`
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);
    const headers = [columns];
    //  const data = this.state.people.map(elt=> [elt.name, elt.profession]);
    let newArray = data.map(obj => Object.values(obj));
    let content = {
        startY: 50,
        head: headers,
        body: newArray
    };
    doc.text(companyHeader, marginLeft, 40);
    doc.autoTable(content);
    doc.save(filename)
}
const column = [
    "Student ID",
    "Name",
    "Gender",
    "DOB",
    "Residency",
    "Status",
];
const PrepareExportData = (students) => {
    const results =
        students?.map(
            ({
                student: { studentId, name, gender, residency, dateOfBirth, status
                }
            }) => {
                return {
                    studentId,
                    name,
                    gender: findLabel(genders, gender)?.label,
                    dateOfBirth: moment(dateOfBirth).format('LL'),
                    residency: findLabel(residencies, residency)?.label,
                    status: findLabel(statuses, status)?.label
                };
            }
        );
    return results;
};
export const ExportPDFHandler = (data, header) => {
    exportToPDF(PrepareExportData(data), column, header)
}