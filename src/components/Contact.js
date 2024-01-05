import React from "react";
import "../App.css";

export const Contact = () => {
  const contactData = [
    {
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACv0lEQVR4nO2UT2jTYByG48F5c4ieJ47RBE0rbZItcT2VHYQWWoebx11ksEPPehC92YA35wSvnpyDVoUetNrmYGvRKiK7bG6oW77uIqOCcyVx/eSbjWY1af70r/C98N7Kr++TPC1B4ODg4ODg6FLyeE7kKepugSTLeZLcyZNkseDxTBNdzk+JnlYluqjk6B0l5y2rOfoOzFDHrceT5GqBoqBBl0rDw4OdHg4zzKAi0Uuq5IX/NEevNIXYf/LG47WuFSmK6dR4JetlVMm7Zjj+b+fNAUhyywIAtQp4Lt7u8YDn4orkrVqMh0qOBuYAFFWzAQCBwEGZ5x59CQaPtTr86+joUSBwD9BNq/G/Abw102N2xmsAdYjPm+OjvNvxgGcCQOA+avfsAKC2DaBeBQjcFUgQh5yMLwvsLOC5qv5WrwAcKaVXBjS0ZYD5iZn3bgHsKNWoDHAB8Doz9sYUYEgEcHJuUc3RZ6tuAJopZaQMcADwI+vbvZUOVSKpGGwKgBq49g7eD8b2XAIcUKqZMsAmwPrzQPXy4zBE420BoJ66uQGvXrxeM/prtTOmDrGOavfzqsH49NNxeCEV/TPeNoDWybnFmnTGt+sGwGlV3fDvWZ8ipicODHcFoCmVYkNb3QLYfOHf1ivTMoCmVCIcX0FKdRLg5TP+U6MybQHQOjuz8AEIXKUDAJWFJ6HlZsPbAoBaFvwnAc++atd4WeDebvD+ETvj2wKAPltimMMyz4qywLWklMxz91bPjxxBN7sKoAWcY6KAZ7edP3X2mzzGXtLf6gkAilOlNGWIhvQMwIlSemX6CsBKKSNl+hLASCkzZfoWAAVpIgvsbVQzZfoawE0iGEDEb6ClRLBCCQD6/kecjMmmB4ZEWex3gHAqmjA9cPrG8sA+hMWb6AVAOBkDkWRMnHo4NdCp78fBwcHBIf67/ALECpwyy5gUBAAAAABJRU5ErkJggg==",
      title: "Email",
      value: "varalakshmivaru3234@gmail.com",
    },
    {
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAByElEQVR4nO2ZP0/CQBjG22scXI2Tiauy+glc3MC4+iX8DA6G9IiDJsYBBhdNHJwcNRGIHY3xjoBCgkTEAUP8A63yt7ymBVQEIq2mvSb3JM/UN5fnd+97N1wFgYuLi4tpSTJdQTKJI5lqCFNwxDLVRExjkkyW/xRexAQ7FhoPt4hJ0P7OuxwedS2FSMAygDk2DIRHRhdkGrUOgInqdnDUs0wqNgAYCI6//G8AvkgazgsaaA0dlIIG8+G0twCUggbfFb/XvAWgNfQ+ALWuewtA8XoHfJG0CWF0IpZXYS584y0A5JIFDoA7OzFM43yf3b2G7YsSpEpVqDbb8FprmaO4dvoAk5sJtgEW9jLw+NaEUbosvsPMTopdgOxLHX5TLK+CxCrAuPIf5dgE0Ntgzv/S4S2sHucheqcOrdtPPrMJsK4U+2omQgk4yVUG6jJPNTYBpreTA+ssHmQH6sq1FnsA7R/fe57aSo5d63oH7K6FOADmHTDFRwjzQ0z5LYT4NWpRo24Otyx4+mkR07JlAON9noHgYFjE9MwygPFzwe3gqGsJX/ktA3S6QIJuhxcx2bAV/rMTIRIw3uedPRNENcbG9s5zcXFxCU7pA5Jwntel+S2tAAAAAElFTkSuQmCC",
      title: "Linkedin",
      value: "https://www.linkedin.com/in/varalakshmi-pillipaka-544231206/",
    },
    {
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABZ0lEQVR4nN2Vu0oDURCGPxOF2EQLQVJaqhAsfARBQhCDImKlpU8hXkDR0tLGa2lrYecLCIJEE7GwUUS8dKbSyIFZWMc5uyex0h+mOfv9/5w9uzsL/11ZoAzsAhfAC/AKVGVtWpi2NA7UgWZK3comgtUBrACfAeFROXZLvKlaayG4qcp5E1VWhhGgAlwbYTVgBuhT6yVfeKecZxzukmt5oAh0SxVlzSljNI5831QxdjkQcKT9hm/CAg8VdAPkAhrkjLdtzwKrCpoKCI80qbyXFvSkoOiMQ5RXXvcx/tDzLxr0KG/Dgs4VNNtCgznlvbOgHQXdA4MB4UPAg/IeW2DJeN0awLqEaA0DG8Jo37zVICNP3wFLwEnMsG3wB55x8Sgfo6kx4AN4BwrAqRgKnjuwGiyQomUBN1M4PSJc7ROoVRnBV8BZAhcPP/LNoKQfTk2OzCe3iTdgMfRfoJUFRhOuu/He207w39EX2SiwvEzSpyQAAAAASUVORK5CYII=",
      title: "Github",
      value: "https://github.com/varalakshmi-Pillipaka",
    },
  ];

  const handleClick = (value, title) => {
    if (title === "Email") {
      const emailUrl = `mailto:${value}`;
      window.open(emailUrl);
    } else {
      window.open(value, "_blank");
    }
  };

  return (
    <section id="contact">
      <div className="contact container">
        <div>
          <h1 className="section-title">Contact Info</h1>
        </div>
        <div className="contact-items">
          {contactData.map((item, index) => (
            <button
              className="contact-item"
              key={index}
              onClick={() => handleClick(item.value, item.title)}
            >
              <div className="icon">
                <img src={item.icon} alt="bindu" />
              </div>
              <div className="contact-info">
                <h1>{item.title}</h1>
                {item.title === "Email" && <h2>{item.value}</h2>}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;