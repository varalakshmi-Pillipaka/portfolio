import "../App.css";
export const Skills = () => {
  return (
    <section id="skills">
      <div class="skills container">
        <div class="skills-top">
          <h1 class="section-title">Skills</h1>
          <p>
            This Section provides a clear overview of my Skills. Each Card
            showcases my technical abilities and experience in a visually
            engaging way, allowing you to quickly understand my strengths and
            expertise.
            
          </p>
        </div>
        <div class="skills-bottom">
          <div class="skills-item">
            <div class="icon">
              <img
                alt=""
                src="data:image/png;base64,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"
              />
            </div>
            <h2>Front-End Development</h2>
            <p>
              Proficient in HTML, CSS, Tailwind CSS and JavaScript. Experienced
              in JS frameworks like React. Some of my projects using front-end
              technologies are shown below.
            </p>
          </div>
          <div class="skills-item">
            <div class="icon">
              <img
                alt=""
                src="data:image/png;base64,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"
              />
            </div>
            <h2>Java Programming</h2>
            <p>
              I'm Proficient in java syntax and data types and Experienced in
              control flow statements, functions, and data structures.Completed
              java Programming certification course
            </p>
          </div>
          <div class="skills-item">
            <div class="icon">
              <img
                alt=""
                src="data:image/png;base64,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"
              />
            </div>
            <h2>MySQL</h2>
            <p>
              Proficient in SQL syntax. Familiar with MySQL database management
              and administration. Experience in performing CRUD operations on
              DataBase.
            </p>
          </div>
          <div class="skills-item">
            <div class="icon">
              <img
                alt=""
                src="data:image/png;base64,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"
              />
            </div>
            <h2>GIT</h2>
            <p>
              Proficient in using Git version control system for source code
              management. Familiar with branching, merging.Comfortable using
              command line interface and Git GUI like GitHub Desktop
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};