export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-assignment-group" name="assignmentGroup">
                <option value="assignment">Assignment</option>
                <option value="exam">Exam</option>
                <option value="quiz">Quiz</option>
                </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
                <select id="wd-display-grade-as" name="displayGradeAs">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                </select>
            </td>
         </tr>

         <tr>
            <td align="right" valign="top">
                <label>Online Entry Options</label>
            </td>
            <td>
                <div>
                <input type="checkbox" id="text-entry" name="entryOptions" value="text-entry" />
                <label htmlFor="text-entry">Text Entry</label>
                </div>
                <div>
                <input type="checkbox" id="website-url" name="entryOptions" value="website-url" />
                <label htmlFor="website-url">Website URL</label>
                </div>
                <div>
                <input type="checkbox" id="media-recordings" name="entryOptions" value="media-recordings" />
                <label htmlFor="media-recordings">Media Recordings</label>
                </div>
                <div>
                <input type="checkbox" id="student-annotation" name="entryOptions" value="student-annotation" />
                <label htmlFor="student-annotation">Student Annotation</label>
                </div>
                <div>
                <input type="checkbox" id="file-uploads" name="entryOptions" value="file-uploads" />
                <label htmlFor="file-uploads">File Uploads</label>
                </div>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
                <input
                type="text"
                id="wd-assign-to"
                name="assignTo"
                defaultValue="Everyone"
                />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
                <input
                type="date"
                id="wd-due-date"
                name="dueDate"
                defaultValue="2024-05-13"
                />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
                <input
                type="date"
                id="wd-available-from"
                name="availableFrom"
                defaultValue="2024-05-06"
                />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-until">Until</label>
            </td>
            <td>
                <input
                type="date"
                id="wd-until"
                name="until"
                defaultValue="2024-05-20"
                />
            </td>
          </tr>



        </table>
      </div>
  );}
  