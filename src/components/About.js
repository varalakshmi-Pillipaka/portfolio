import "../App.css";
import profileimage from "../assets/profileimage.jpeg";
export const About = () => {
  return (
    <section id="about">
      <div class="about container">
        <div class="col-left">
          <div class="about-img">
            <img src={profileimage} alt="me" />
          </div>
        </div>
        <div class="col-right">
          <h1 class="section-tite">About Me</h1>
          
          <p>
            I am excited to join a team that values innovation and high-quality user
            experiences. I have experience in creating logics and visually appealing, 
            responsive web pages using HTML, CSS, JavaScript and Advanced Java. 
            My attention to detail and logical thinking skills enable me to create clean
            and organized code that is easy to maintain and troubleshoot. I have
            experience with popular front-end and back-end frameworks such as React Js
            and SpringBoot. In addition, I have a good understanding of UX/UI
            principles and best practices, which allows me to create
            user-friendly interfaces that meet the needs of end-users. My
            ability to work in a fast-paced environment and adapt to changing
            priorities has been an asset in my previous work experiences. I am
            also comfortable with version control systems like Git. Overall, I
            am a self-motivated and creative FullStack developer with a passion
            for creating logics and visually stunning, user-friendly web pages.
          </p>
          <a
            class="cta"
            href="https://drive.google.com/file/d/1sdqLnbsX4VZNoIbOo4GIry9DQYaWDJOj/view?usp=drive_link"
            target="blank"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};