import "bootstrap/dist/css/bootstrap.min.css";
import hljs from 'highlight.js';
import React, { useEffect } from 'react';

function Coding() {

    useEffect(() => {
        hljs.highlightAll();
    }, [])


    return (
        <>
            <div className="container-fluid my-4 " style={{ fontFamily: "Prompt" }}>
                <div class="bd-example">
                    <div class="row border" >
                        <div class="col-3">
                            <nav id="navbar-example3" class="navbar navbar-light bg-light flex-column align-items-stretch p-3" style={{ position: "sticky", zIndex: "1020", top: "0" }}>
                                <a class="navbar-brand" href="#">Navbar</a>
                                <nav class="nav nav-pills flex-column">
                                    <a class="nav-link fw-bold " href="#item-1">การสร้าง Attribute และ Method</a>
                                    <nav class="nav nav-pills flex-column">
                                        <a class="nav-link ms-3 my-1" href="#item-1-1">Improtent 1</a>
                                        <a class="nav-link ms-3 my-1" href="#item-1-2">Improtent 2</a>
                                    </nav>
                                    <a class="nav-link fw-bold " href="#item-2">Static</a>
                                    <nav class="nav nav-pills flex-column">
                                        <a class="nav-link ms-3 my-1" href="#item-2-1">Item 2-1</a>
                                        <a class="nav-link ms-3 my-1" href="#item-2-2">Item 2-2</a>
                                    </nav>
                                    <a class="nav-link fw-bold " href="#item-3">Inheritance</a>
                                    <nav class="nav nav-pills flex-column">
                                        <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                                        <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
                                    </nav>
                                    <a class="nav-link fw-bold " href="#item-4">super [static keyword]</a>
                                    <a class="nav-link fw-bold " href="#item-5">Modifier: final</a>
                                    <a class="nav-link fw-bold " href="#item-6">Overloading Method</a>
                                    <a class="nav-link fw-bold " href="#item-7">Overriding Method</a>
                                    <nav class="nav nav-pills flex-column">
                                        <a class="nav-link ms-3 my-1" href="#item-7-1">Item 7-1</a>
                                    </nav>

                                </nav>
                            </nav>
                        </div>



                        <div class="col-9 mt-4" >
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" class="scrollspy-example-2" tabindex="0" style={{ overflow: "auto" }}>
                                <h4 className=" fw-bold py-3 " id="item-1">การสร้าง Attribute และ Method </h4>
                                <p>
                                    เราจะมีการใช้ คีย์เวิร์ด <strong>This</strong> เมื่อต้องการเรียกใช้งานคอนสตรัคเตอร์อื่นๆที่อย่ภายในคลาสเดียวกัน
                                    <div className="row my-4">
                                        <div className="col-auto">
                                            <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                                <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/494f68584f" allowfullscreen="true"></iframe>
                                            </div>

                                        </div>
                                    </div>
                                </p>
                                <h5 id="item-1-1">Improtent 1</h5>
                                <p>เมื่อมีการตั้ง Constuctor แล้วถ้ามีการเรียกใช้ Constuctor ที่แตกต่างจากที่ตั้งจะทำให้เกิด Error เพราะฉนั้น ควรมีการตั้ง default Constructor เอาไว้ด้วย
                                    หรือ Constructor อื่นๆที่คาดว่าจะได้มีการถูกนำมาใช้
                                    <div className="row my-4">
                                        <div className="col-auto">
                                            <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                                <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/55f070e8d0" allowfullscreen="true"></iframe>
                                            </div>

                                        </div>
                                    </div>
                                </p>
                                <h5 id="item-1-2">Improtent 2</h5>
                                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="bg-dark border rounded p-2 overflow-hidden ">
                                                <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/d4d32bb932" allowfullscreen="true"></iframe>
                                            </div>

                                        </div>
                                    </div>
                                </p>

                                <hr />

                                <h4 className="fw-bold" id="item-2">Static</h4>
                                <p>
                                    <div className="row my-4">
                                        <div className="col-auto">
                                            <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                                <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/ab3f16871a" allowfullscreen="true"></iframe>
                                            </div>

                                        </div>
                                    </div>
                                </p>


                                <h5 id="item-2-1">Improtent 1</h5>
                                <p>
                                    <div className="row my-4">
                                        <div className="col-auto">
                                            <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                                <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/cad144d035" allowfullscreen="true"></iframe>
                                            </div>

                                        </div>
                                    </div>
                                </p>
                                <h5 id="item-2-2">Improtent 2</h5>
                                <p>
                                    <div className="row my-4">
                                        <div className="col-auto">
                                            <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                                <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/a2bb4b065e" allowfullscreen="true"></iframe>
                                            </div>

                                        </div>
                                    </div>
                                </p>


                                <h4 className="fw-bold" id="item-3">Inheritance</h4>
                                <p>
                                    <div className="row my-4">
                                        <div className="col-auto">
                                            <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                                <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/b8dd67b5f5" allowfullscreen="true"></iframe>
                                            </div>

                                        </div>
                                    </div>
                                </p>

                                <hr />

                                <h5 id="item-3-1">Item 3-1</h5>
                                <p>
                                    <div className="row my-4">
                                        <div className="col-auto">
                                            <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                                <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/c01d9b17f9" allowfullscreen="true"></iframe>
                                            </div>

                                        </div>
                                    </div>
                                </p>
                                <h5 id="item-3-2">Item 3-2</h5>
                                <p>
                                    <div className="row my-4">
                                        <div className="col-auto">
                                            <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                                <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/c54c7021be" allowfullscreen="true"></iframe>
                                            </div>

                                        </div>
                                    </div>
                                </p>
                            </div>

                            <hr />

                            <h4 className="fw-bold" id="item-4">super [static keyword]</h4>
                            <p>
                                คีย์เวิร์ด Super เมื่อต้องการเรียกคอนสตรัคเตอร์ของคลาสแม่ให้ทำงานคีย์เวิร์ด super ในการเรียก
                                ใช้งานคอนสตรัคเตอร์ของคลาสแม่จะต้องทำการเรียกที่บรรทัดแรกสุดของคอนสตรัคเตอร์
                                นั้นๆเท่านั้น

                                <div className="row my-4">
                                    <div className="col-auto">
                                        <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                            <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/279710a8cb" allowfullscreen="true"></iframe>
                                        </div>

                                    </div>
                                </div>
                            </p>


                            <h4 className="fw-bold" id="item-5">Modifier: final</h4>
                            <p>
                                Final เป็นคีย์เวิร์ดหนึ่งในภาษาจาวา สามารถที่จะกำหนดให้เป็นสิ่งที่คงที่หรือค่าคงที่ไม่สามารถปรับเปลี่ยนหรือเปลี่ยนแปลง
                                ได้  ซึ่งสามารถใช้ได้กับทั้ง class , method , attribute
                                
                                <div className="row my-4">
                                    <div className="col-auto">
                                        <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                            <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/279710a8cb" allowfullscreen="true"></iframe>
                                        </div>

                                    </div>
                                </div>
                            </p>

                            <h4 className="fw-bold" id="item-6">Overloading Method </h4>
                            <p>
                                <div className="row my-4">
                                    <div className="col-auto">
                                        <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                            <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/72f66167b1" allowfullscreen="true"></iframe>
                                        </div>

                                    </div>
                                </div>
                            </p>


                            <h4 className="fw-bold" id="item-7">Overriding Method </h4>
                            <p>
                                <div className="row my-4">
                                    <div className="col-auto">
                                        <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                            <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/62b12e4da1" allowfullscreen="true"></iframe>
                                        </div>

                                    </div>
                                </div>
                            </p>

                            <h5 id="item-7-1">item 7-1</h5>
                                <p>
                                    <div className="row my-4">
                                    <div className="col-auto">
                                        <div className="bg-dark border rounded p-2 overflow-hidden d-flex justify-content-center align-items-center ">
                                            <iframe className="rounded" title="Java Code Editor"  width="1000" height="500" scrolling="no" frameborder="1" id="player" src="https://trinket.io/java/47dd49178c" allowfullscreen="true"></iframe>
                                        </div>

                                    </div>
                                </div>
                                </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} export default Coding;