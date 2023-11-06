import React from "react"
import "./Footer.css"
export default function Footer(){
    return (<>
     <footer class="footer-distributed">
          <div class="footer-right">
           
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sosenkkk/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sosenkkk">
              <i class="fa-brands fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/sosenkkk">
              <i class="fa-brands fa-dribbble"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/home">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>

          <div class="footer-left">
            <p class="footer-links">
              <a class="link-1" href="/">
                Home
              </a>
            </p>

            <p>Post it &copy; 2023</p>
          </div>
        </footer>
    </>)
}