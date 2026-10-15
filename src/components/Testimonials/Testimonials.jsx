
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>TUT GATLUAK</h3>
                  <span>South Sudan</span>
                </div>
              </div>
              <p>
                A supportive learning environment helps students build
                confidence, develop essential skills, and work towards their
                academic goals. Quality education creates opportunities for
                young people to grow and prepare for a brighter future.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>ATHIAN BAYAK</h3>
                  <span>South Sudan</span>
                </div>
              </div>
              <p>
                Education is most meaningful when students are encouraged to
                think creatively, ask questions, and discover their potential.
                A positive school community can inspire learners to become
                responsible and confident individuals.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>AMOS KONG</h3>
                  <span>South Sudan</span>
                </div>
              </div>
              <p>
                Every child deserves an opportunity to learn, explore new
                ideas, and develop strong values. A commitment to learning,
                discipline, and personal growth can help students build a
                strong foundation for their future.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>LOL AYUAL</h3>
                  <span>South Sudan</span>
                </div>
              </div>
              <p>
                Strong partnerships between schools, families, and communities
                help create better learning opportunities. By encouraging
                curiosity, respect, and continuous improvement, we can help
                prepare the next generation for greater possibilities.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
