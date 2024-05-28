const fs = require('fs');
const util = require('util');

module.exports = async function countStudents(path) {
  const pathname = `${process.cwd()}/${path}`;
  const readFile = util.promisify(fs.readFile);
  try {
    const data = await readFile(pathname, 'utf8');
    const studentData = data.split('\n').slice(1, -1);
    const CS = studentData
      .filter((student) => student.split(',')[3] === 'CS')
      .map((student) => student.split(',')[0]);
    const SWE = studentData
      .filter((student) => student.split(',')[3] === 'SWE')
      .map((student) => student.split(',')[0]);
    console.log(`Number of students: ${studentData.length}`);
    console.log(
      `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`,
    );
    console.log(
      `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`,
    );

    return `Number of students: ${studentData.length}
Number of students in CS: ${CS.length}. List: ${CS.join(', ')}
Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
