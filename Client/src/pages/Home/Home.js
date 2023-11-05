import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  let hscroller = document;
  hscroller.addEventListener("scroll", () => {
    var h = window.screen.height;
    if (window.pageYOffset > h) {
      dis();
    }
  });
  const dis = () => {
    hscroller.getElementById("wrapper_scroll").classList.add("disable_scroll");
  };

  return (
    <>
      <div className="happu">
        <div className="external ">
          <div className="horizontal-scroll-wrapper" id="wrapper_scroll">
            <div className="img-wrapper slower">
              <a href="/" className="">
                <img
                  className="coursel_img"
                  src="https://images.unsplash.com/photo-1678737169727-a3236885e763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </a>
            </div>

            <div className="img-wrapper faster">
              <a href="/" className="">
                <img
                  className="coursel_img"
                  src="https://images.unsplash.com/photo-1678443418620-7a159a488f76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </a>
            </div>

            <div className="img-wrapper slower vertical">
              <a href="/" className="">
                <img
                  className="coursel_img"
                  src="https://images.unsplash.com/photo-1678560482177-445935d68c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </a>
            </div>

            <div className="img-wrapper slower slower-down">
              <a href="/" className="">
                <img
                  className="coursel_img"
                  src="https://images.unsplash.com/photo-1648635167754-75b43524c8b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </a>
            </div>

            <div className="img-wrapper">
              <a href="/" className="">
                <img
                  className="coursel_img"
                  src="https://images.unsplash.com/photo-1678737859044-4b76d943c8c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </a>
            </div>

            <div className="img-wrapper slower">
              <a
                href="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="coursel_img"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-seine-boat.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="img-wrapper slower slower2">
              <a href="/" className="">
                <img
                  className="coursel_img"
                  src="https://images.unsplash.com/photo-1676618836126-67e5beefa61f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </a>
            </div>

            <div className="img-wrapper">
              <a href="/" className="">
                <img
                  className="coursel_img"
                  src="https://images.unsplash.com/photo-1676909433899-dd4a3fd29a84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="titlebox">
            <div className="card1">
              <div className="card2">
                <h1 className="title_main">Post It</h1>
              </div>
            </div>
            <h2 className="title_sub ">Post what you like!</h2>
          </div>
        </div>
      </div>

      <div className="mid__section " id="div" onMouseEnter={dis} onClick={dis}>
        <hr className=" ruler__front" />

        <div className="info ">
          <div className="what">
            <h1>What is Post It?</h1>
            <p>
              Post It is a free photo sharing website. People can upload photos
              to our service. Create account and start posting what you like.
            </p>
          </div>
          <div className="why">
            <h1>Why Post It?</h1>
            <p>
              Post It is like a simplified version of Facebook with an emphasis
              on just photo sharing / status sharing also you can upload your
              status.
            </p>
          </div>
        </div>

        <div className="conclusion">
          <hr className="ruler__front" />

          <h2 className="">What we wanna say is!!</h2>
        </div>
        <div className="cards_container">
          <div className="container__card noselect" id="first_card">
            <div className="canvas">
              <div className="tracker tr-1"></div>
              <div className="tracker tr-2"></div>
              <div className="tracker tr-3"></div>
              <div className="tracker tr-4"></div>
              <div className="tracker tr-5"></div>
              <div className="tracker tr-6"></div>
              <div className="tracker tr-7"></div>
              <div className="tracker tr-8"></div>
              <div className="tracker tr-9"></div>
              <div className="tracker tr-10"></div>
              <div className="tracker tr-11"></div>
              <div className="tracker tr-12"></div>
              <div className="tracker tr-13"></div>
              <div className="tracker tr-14"></div>
              <div className="tracker tr-15"></div>
              <div className="tracker tr-16"></div>
              <div className="tracker tr-17"></div>
              <div className="tracker tr-18"></div>
              <div className="tracker tr-19"></div>
              <div className="tracker tr-20"></div>
              <div className="tracker tr-21"></div>
              <div className="tracker tr-22"></div>
              <div className="tracker tr-23"></div>
              <div className="tracker tr-24"></div>
              <div className="tracker tr-25"></div>
              <div id="card">
                <p id="prompt">Sign up to Post it.</p>
                <div className="title__card">
                  Create account and login to share.
                </div>
              </div>
            </div>
          </div>
          <div className="container__card noselect " id="second_card">
            <div className="canvas">
              <div className="tracker tr-1"></div>
              <div className="tracker tr-2"></div>
              <div className="tracker tr-3"></div>
              <div className="tracker tr-4"></div>
              <div className="tracker tr-5"></div>
              <div className="tracker tr-6"></div>
              <div className="tracker tr-7"></div>
              <div className="tracker tr-8"></div>
              <div className="tracker tr-9"></div>
              <div className="tracker tr-10"></div>
              <div className="tracker tr-11"></div>
              <div className="tracker tr-12"></div>
              <div className="tracker tr-13"></div>
              <div className="tracker tr-14"></div>
              <div className="tracker tr-15"></div>
              <div className="tracker tr-16"></div>
              <div className="tracker tr-17"></div>
              <div className="tracker tr-18"></div>
              <div className="tracker tr-19"></div>
              <div className="tracker tr-20"></div>
              <div className="tracker tr-21"></div>
              <div className="tracker tr-22"></div>
              <div className="tracker tr-23"></div>
              <div className="tracker tr-24"></div>
              <div className="tracker tr-25"></div>
              <div id="card">
                <p id="prompt">See what others post.</p>
                <div className="title__card">
                  See the posts of already existing users.
                </div>
              </div>
            </div>
          </div>
          <div className="container__card noselect" id="third_card">
            <div className="canvas">
              <div className="tracker tr-1"></div>
              <div className="tracker tr-2"></div>
              <div className="tracker tr-3"></div>
              <div className="tracker tr-4"></div>
              <div className="tracker tr-5"></div>
              <div className="tracker tr-6"></div>
              <div className="tracker tr-7"></div>
              <div className="tracker tr-8"></div>
              <div className="tracker tr-9"></div>
              <div className="tracker tr-10"></div>
              <div className="tracker tr-11"></div>
              <div className="tracker tr-12"></div>
              <div className="tracker tr-13"></div>
              <div className="tracker tr-14"></div>
              <div className="tracker tr-15"></div>
              <div className="tracker tr-16"></div>
              <div className="tracker tr-17"></div>
              <div className="tracker tr-18"></div>
              <div className="tracker tr-19"></div>
              <div className="tracker tr-20"></div>
              <div className="tracker tr-21"></div>
              <div className="tracker tr-22"></div>
              <div className="tracker tr-23"></div>
              <div className="tracker tr-24"></div>
              <div className="tracker tr-25"></div>
              <div id="card">
                <p id="prompt">Share what you love!</p>
                <div className="title__card">
                  Make sure to tell others who you really are.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
