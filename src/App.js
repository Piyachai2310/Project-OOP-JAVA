// import image from './image/002.jpg'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import hljs from 'highlight.js';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
  useEffect(() => {
    // เรียกใช้ Highlight.js เมื่อคอมโพเนนต์ถูกโหลด
    hljs.highlightAll();
  }, []);

  return (
    <>

      <div className='container-fluid py-4 header-oop text-white d-flex justify-content-center align-items-center mb-4 '>
        <h1 className='fw-bolder display-1'>Object Oriented Programming</h1>
      </div>
      <div className='container'>
        <nav className='"nav nav-underline d-flex justify-content-start' style={{ fontFamily: "Prompt" }}>
          {/* <Link to={"/practice"} className='nav-item nav-link '>PRACTICE</Link> */}
          <Link rel="prefetch noopener noreferrer" to={"/practice"} className='nav-item nav-link fw-bold text-primary ' target="_blank" >PRACTICE</Link>
          <Link rel="prefetch noopener noreferrer" to={"/coding"} className='nav-item nav-link fw-bold text-primary' target="_blank" >CODING</Link>
          <Link rel="prefetch noopener noreferrer" to={"/book"} className='nav-item nav-link fw-bold text-primary' target="_blank" >BOOK</Link>
          <Link rel="prefetch noopener noreferrer" to={"/basic"} className='nav-item nav-link fw-bold text-primary' target="_blank" >BasicJAVA</Link>
        </nav>
      </div>
      <div className='container py-4 ' style={{ fontFamily: "Prompt" }}>
        {/* แนวคิด */}
        <div className='row '>
          <h2 className="fw-bolder pb-3 border-bottom" >แนวคิดเชิงวัตถุ</h2>
          <p><div className='tab' />Object Oriented Programming หรือ OOP แปลว่า การเขียนโปรแกรมเชิงวัตถุ ซึ่งเป็นแนวคิดในการพัฒนาซอฟแวร์
            ที่และเป็นที่ยอมรับ เนื่องจากซอฟแวร์ที่ถูกพัฒนาและใช้กันอยู่นั้น นับวันมีแต่จะซับซ้อนมากยิ่งขึ้น ถ้าหากไม่จัดการกับ
            โค้ดให้ดีพอก็อาจจะทำให้การพัฒนาล่าช้าหรือไม่สำเร็จได้  OOP จึงออกแบบมาให้โค้ดที่เราเขียนมีแบบแผนที่เหมาะสม
            พร้อมใช้ในการพัฒนาที่ซับซ้อนได้
          </p>
          <strong>Concept</strong>
          <p>
            <div className='tab' />หลักการสำคัญคือ การมองทุกสิ่งที่สนใจให้เป็น Object เหมือนในชีวิตประจำวันของมนุษย์ ที่มองทุกสิ่งที่อยู่รอบตัวเป็น Object
            เสมอ เช่น เมื่อนั่งทำงานเราจะมองหนังสือ แฟ้ม ปากกา กระดาษ ดินสอ ว่าเป็น Object หรือเป็นวัตถูแต่ละชนิด เป็นต้น ในโลกของความเป็นจริงแล้ว Object
            ที่เราสนใจจะแบ่งออกเป็น 2 กลุ่มใหญ่ คือ  <br />
            <div className='tab' />1. สิ่งที่จับต้องได้ เช่น แฟ้ม ปากกา กระดาษ สัตว์ คน รถ เป็นต้น <br />
            <div className='tab' />2. สิ่งที่จับต้องไม่ได้ เช่น รายการขายสินค้า เที่ยวบิน วิชาเรียน ภาควิชา เป็นต้น
          </p>
        </div>
        <div className='row mt-3'>
          <h2 className="fw-bolder pb-3 border-bottom" >Object VS Class</h2>
          <div className='col'>

            <p><strong>Class (คลาส) &gt;&gt; </strong> ต้นแบบของวัตถุ / โครงสร้างต้นแบบ</p>
            <div>
              <p>
                <strong>Object (วัตถุ) &gt;&gt; </strong> เป็นสิ่งที่สร้างขึ้นมาจากแบบแปลที่วางไว้ก็คือการทำให้แบบแปลนสามารถใช้งานได้จริงๆ ประกอบด้วยคุณสมบัติ 2 ประการ
              </p>
              <p>
                <div className='tab'></div>
                1. <strong>Fields (คุณลักษณะ) &gt;&gt; </strong> สิ่งที่บ่งบอกลักษณะ
              </p>
              <p>
                <div className='tab'></div>
                2. <strong>Methods (พฤติกรรม) &gt;&gt; </strong> พฤติกรรมที่วัตถุทำได้
              </p>
            </div>
            <p> Object ที่มีลักษณะเหมือนกันจะอยู่ใน class เดียวกัน กล่าวคือ Class 1 Class ประกอบไปด้วยหลาย Object
              หมายความว่า Class เป็นแหล่งกำเนิดของ Object หรือใช้สร้าง Object นั้นเอง Class จึงเปรียบได้กับแม่แบบ
              (Template)ที่ใช้สร้าง Object และแต่ละ Object ที่สร้างจาก Class เดียวกัน สามารถมีคุณสมบัติเฉพาะเพิ่มเติม
              ได้
            </p>
          </div>

          <div className='col-auto'>
            <div className='bg-dark border rounded p-3 d-flex justify-content-center align-items-center'>
              <img src='image\b002.jpg' alt='' style={{ width: "400px" }}></img>
            </div>

          </div>
        </div>
        {/* Acess modifier */}
        <div className='row my-4'>
          <h2 className="fw-bolder py-3 border-bottom">สิทธิการเข้าถึง (Acess Modifier)</h2>
          <p>คือ การเข้าถึง Class , Attribute , Method เป็นการกำหนดการใช้งาน สิทธิเข้าถึง</p>
          <div>
            <p>
              <div className='tab'></div>
              1. <strong>Public &gt;&gt; </strong> การเข้าถึงที่เข้มงวดน้อยที่สุด (สาธารณะ)
            </p>
            <p>
              <div className='tab'></div>
              2. <strong>Protected &gt;&gt; </strong> การเข้าถึงที่เกี่ยวข้องกับเรื่องการสืบทอด (Inheritance) คลาสที่ถูกกำหนด modifier เป็น Protected จะเรียกใช้ได้
            </p>
            <p>
              <div className='tab'></div>
              3. <strong>Private &gt;&gt; </strong> เฉพาะตัวเราเองเท่านั้น
            </p>
          </div>
        </div>


        {/* Constuctor */}
        <div className='row'>
          <h2 className="fw-bolder py-3">Constuctor</h2>
          <hr />
          <div className='col-7'>
            <p>
              เป็น method พิเศษที่จะถูกสั่งให้ทำงานโดยอัตโนมัติ เมื่อมีการสร้างวัตถุขึ้น เพื่อกำหนด
              ค่าเริ่มต้นให้กับตัวแปรคลาสของวัตถุ
            </p>
            <div>
              <p>
                <div className='tab'></div>
                - มีชื่อเหมือนกับชื่อคลาส
              </p>
              <p>
                <div className='tab'></div>
                - Method มีการคืนค่ากลับแต่ Constructor ไม่มีการคืนค่ากลับ
              </p>
              <p>
                <div className='tab'></div>
                - ประกาศการเข้าถึงเป็นแบบ public
              </p>
            </div>
          </div>
          <div className='col-auto bg-dark p-2 d-flex border rounded'>
            <img src='image/clip1.jpg' alt='' style={{ width: "500px" }} />
          </div>


        </div>

        {/* Encap */}
        <div className='row'>
          <h2 className="fw-bolder py-3">Encapsulation การห่อหุ้มข้อมูล / การซ่อนข้อมูล</h2>
          <p>ซ้อนข้อมูลภายในไม่ให้ภายนอกมองเห็นได้เพื่อสร้างความปลอดภัย ซึ่งจะเข้าถึงได้จากผู้ที่มีสิทธ์เท่านั้น</p>
        </div>

        {/* Inheritance */}
        <div className='row'>
          <h2 className="fw-bolder py-3">Inheritance การสืบทอดคุณสมบัติ</h2>
          <p>
            คือการสร้างคลาสใหม่จากรูปแบบของคลาสที่มีอยู่แล้ว โดยคลายใหม่จะนำ attribute และ
            method ของคลาสเดิมมาใช้ได้ โดยจะใช้คำสั่งที่เรียกว่า <strong> "extends" </strong>
          </p>
          <ul>
            <li className='ms-5 mb-2'>สามารถนำโปรแกรมเดิมนาพัฒนาเพิ่มเติมใหม่ได้ง่ายขึ้น (re-use)</li>
            <li className='ms-5 mb-2'>ทำให้โปรแกรมแต่ละโปรแกรมมีขนาดเล็ก ซึ่งทำให้ง่ายต่อการเข้าใจและปรับปรุงแก้ไข</li>
            <li className='ms-5 mb-2'>ส่งผลให้เกิด Overriding method คือ เมธอดของคลาสลูก (subclass) ที่มีชื่อ
              เหมือนกับเมธอดของคลาสแม่ (superclass)
            </li>
          </ul>
        </div>



        <div className='row'>

        </div>

      </div>

    </>
  );
}

export default App;
