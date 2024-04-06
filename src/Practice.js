import "bootstrap/dist/css/bootstrap.min.css";
import hljs from 'highlight.js';
import React, { useEffect } from 'react';


function Practice() {

    useEffect(() => {
        hljs.highlightAll();
    }, [])


    return (
        <>
            {/* Error 1 */}
            <div className="container bg-body-secondary my-3" style={{ fontFamily: "Prompt" }}>
                <div className="row ps-5 ms-3">
                    <div className="col-11">

                        <h2 className="my-4">Point of Error : 1</h2>
                        <p>
                            การเรียกใช้ Class เพื่อสร้าง Object นั้น เมื่อเราต้องการใส่ชื่อวัตถุ 2 วัตถุ เราไม่ควรใช้ Object เดียวกัน
                            เพราะว่าถ้าเกิดเราต้องการที่จะให้แสดงผล Object เก่าเผื่อกรณีที่อาจจะต้องการที่จะนำกลับมาใช้ใหม่ 
                            เราจะไม่สามารถเรียกกลับมาได้แล้ว เช่น
                        </p>
                    </div>
                </div>
                <div className="row my-4 d-flex justify-content-center align-items-center" >
                    <div className="col-auto border rounded bg-secondary p-4   ">
                        <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/b14b2b4d06" allowfullscreen="true"></iframe>
                    </div>
                </div>
                <p 
                className="ps-5 ms-3">ดังนั้นแล้ว เมื่อเราต้องการที่จะสร้าง Object มากกว่า 1 ตัวขึ้นไปก็ควรสร้าง Object 
                แยกต่างหากไปเลยแบบตัวอย่างด้านล่างนี้
                </p>
                <div className="row my-4 d-flex justify-content-center align-items-center" >
                    <div className="col-auto border rounded bg-secondary p-4   ">
                        <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/a1463d9e61" allowfullscreen="true"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
} export default Practice;