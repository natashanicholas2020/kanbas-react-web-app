export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify.
          The landing page should include the following: Your full name and section Links to each of the lab assignments, 
          link to the Kambaz application Links to all relevant source repositories The Kambas application should include a 
          link to navigate back to the landing page.
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
                <td>
                    <label  htmlFor="wd-select-group"> Assignment Type: </label><br/>
                </td>
                <td>
                    <select id="wd-select-group">
                    <option value="TEST">Test</option>
                    <option value="QUIZ">Quiz</option>
                    <option selected value="ASSIGNMENT">
                        Assignment</option>
                    </select>
                </td>
            </tr>

            <tr>
                <td>
                    <label  htmlFor="wd-display-grade-as"> Display Grade As: </label><br/>
                </td>
                <td>
                    <select id="wd-display-grade-as">
                    <option value="POINTS">Points</option>
                    <option selected value="PERCENTAGE">
                        Percentage</option>
                    </select>
                </td>
            </tr>

            <tr>
                <td>
                    <label  htmlFor="wd-submission-type"> Submission Type: </label><br/>
                </td>
                <td>
                    <select id="wd-submission-type">
                    <option value="INPERSON">In Person</option>
                    <option selected value="ONLINE">
                        Online</option>
                    </select>
                </td>
            </tr>

            <tr>
                <td>
                <label>Online Entry Options:</label><br/>
                    <input type="checkbox" name="check-genre" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>

                    <input type="checkbox" name="check-genre" id="wd-wd-website-url"/>
                    <label htmlFor="wd-wd-website-url">Website URL</label><br/>

                    <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                    <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label>

                    <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                    <label htmlFor="wd-file-upload">File Uploads</label>
                </td>
            </tr>

            <tr>
                <td>
                    <label htmlFor="wd-assign-to">Assign Assignment to:</label>
                    <input placeholder="Everyone" id="wd-assign-to" /> <br />
                </td>
            </tr>

            <tr>
                <td>
                <label htmlFor="wd-due-date"> Due Date: </label>
                    <input type="date"
                    value="2025/05/13"
                    id="wd-due-date"/><br/>
                </td>
            </tr>

            <tr>
                <td>
                <label htmlFor="wd-available-from"> Available From: </label>
                    <input type="date"
                    value="2025/05/06"
                    id="wd-available-from"/><br/>
                </td>
                <td>
                <label htmlFor="wd-available-until"> Available Until: </label>
                    <input type="date"
                    value="2025/05/20"
                    id="wd-available-until"/><br/>
                </td>
            </tr>

            <tr>
                <td>
                    <button type="button"
                        onClick={() => alert("Canceled")}
                        id="wd-cancel">
                        Cancel
                    </button>
                    <button type="button"
                        onClick={() => alert("Saved")}
                        id="wd-save">
                        Save
                    </button>
                </td>
            </tr>

        </table>
      </div>
  );}


