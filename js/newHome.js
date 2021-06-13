let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
  empPayrollList = getEmployeePayrollDataFromStorage();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHTML();
});

const getEmployeePayrollDataFromStorage = () => {
  return localStorage.getItem('EmployeePayrollList') ? 
 JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];  
}
const createInnerHTML = () => {
  
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                     "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = creteEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
    innerHtml=`${innerHtml}
      <tr>
        <td><img class="profile" alt="" 
       src="${empPayrollData._profilePic}">
        </td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
          <img id="${empPayrollData._id}" onclick="remove(this)" 
          src="../img/twotone_delete_black_24dp.png">
          <img id="${empPayrollData._id}" onclick="update(this)" 
          src="../img/twotone_edit_black_24dp.png">
        </td>
      </tr>
      `;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
}
const creteEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
          {
            _name: "Prashant",
            _gender: "male",
            _department: [
              "Engineering"
            ],
            _salary: "40000",
            _startDate: "7 Nov 2019",
            _notes: "",
            _id: 1604589551457,
            _profileUrl: "./twotone_delete_black_24dp.png"
          },
          {
            _name: "Alok",
            _gender: "male",
            _department: [
              "Engineering"
            ],
            _salary: "50000",
            _startDate: "1 Jan 2021",
            _notes: "",
            _id: 1604589551457,
            _profileUrl: "./twotone_edit_black_24dp.png"
          }
        ];
          return empPayrollListLocal;   
    }
    const getDeptHtml = (deptList) => {
        let deptHtml = '';
        for (const dept of deptList) {
            deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
        }
        return deptHtml;
      };
      