import React from "react";
import "./Comp3.css";
const Comp3 = () => {
  return (
    <div className="card-container">
      <div className="navbar">
        <h3>Hootsuite</h3>
        <ul>
          <li>Platform</li>
          <li>Plans</li>
          <li>Enterprise</li>
          <li>Resources</li>
          <li>Education</li>
        </ul>
        <div className="rightnav">
          <ul>
            <li>Contact us</li>
            <li>Log in</li>
          </ul>
          &nbsp;&nbsp;<button>Sign up</button>
        </div>
      </div>
      <div className="middle">
        <h1>See value from social sooner</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestiae obcaecati illo voluptatum accusamus fuga ad vero suscipit sit nobis.</p>
        <button>Request Demo</button>
      </div>
      <div className="footer">
        <div className="item1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQ5OJ2NZO61U2ZbqNyzOr979WM0DtxtsO4Q&usqp=CAU" alt="img" style={{ width: "200px", height: "200px" }} />
          <p>2,500</p>
          <p>Lorem ipsum dolor sit amet.</p>
       </div>
        <div className="item1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQ5OJ2NZO61U2ZbqNyzOr979WM0DtxtsO4Q&usqp=CAU" alt="img" style={{ width: "200px", height: "200px" }} />
          <p>45,000</p>
          <p>Lorem ipsum dolor sit amet.</p>
       </div>
        <div className="item1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQ5OJ2NZO61U2ZbqNyzOr979WM0DtxtsO4Q&usqp=CAU" alt="img" style={{ width: "200px", height: "200px" }} />
          <p>200,000+</p>
          <p>Lorem ipsum dolor sit amet.</p>
       </div>
      </div>
    </div>
  );
};

export default Comp3;
