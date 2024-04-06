import "bootstrap/dist/css/bootstrap.min.css";
import './stylehigh.css';
import hljs from 'highlight.js';
import React, { useEffect } from 'react';

function Book() {
    useEffect(() => {
        // เรียกใช้ Highlight.js เมื่อคอมโพเนนต์ถูกโหลด
        hljs.highlightAll();
    }, []);

    return (
        <>
            <div className="container">
                {/* เนื้อหา */}
                <div className='row'>
                    <h2 className="fw-bolder py-3">องค์ประกอบของ Object</h2>
                    <p>
                        ในโลกความเป็นจริง ทุกๆ Object สามารถดําเนินกิจกรรมตามหน้าที่เฉพาะอย่างของตนเองได้ และสามารถดำเนิน
                        กิจกรรมร่วมกับ Object อื่น เพื่อให้บรรลุวัตถุประสงค์บางอย่างได้ ตามแนวคิดเชิงวัตถุ การที่ Object (ทั้งที่จับต้อง
                        ได้ และจับต้องไม่ได้) สามารถดําเนินกิจกรรมตามหน้าที่ของตนเองได้นั้น โดยพื้นฐานแล้ว Object จะต้องมีองค์ประ
                        กอบ 2 วง ได้แก่ คุณลักษณะ (Attribute) และการดําเนินการ (Operation / Method)
                    </p>
                    <h3>Attribute</h3>
                    <p>
                        Attribute หรือเรียกได้อีกอย่างหนึ่งว่า “Object Data” เป็นสิ่งที่ใช้บรรยายคุณลักษณะของ Object ซึ่งหาก
                        เป็น Object ที่อยู่ใน Class เดียวกันจะมีคุณลักษณะเหมือนกัน
                    </p>
                    <div className='ps-4'>
                        <ul>
                            <li className='mb-2'>Object “คน” มี Attribute คือ หมายเลขบัตรประชาชน (identityCard) ชื่อ-สกุล (name) วันเกิด (birthDate) เพศ (sex) ที่อยู่ (address) ฯลฯ</li>
                            <li className='mb-2'>Object “สุนัข” มี Attribute คือ ชื่อ (name) สี (color) พันธุ์ (species) อาหาร (food) ฯลฯ</li>
                            <li className='mb-2'>Object “จักรยาน” มี Attribute คือ ยี่ห้อ (brand) รุ่น (model) สี (Color) ล้อ (wheel) ฯลฯ</li>
                        </ul>
                    </div>
                    <h3>Operation / Method</h3>
                    <p>
                        ในโลกความเป็นจริง ทุก Object นอกจากจะมีคุณลักษณะแล้ว ยังต้องมี “พฤติกรรม (Behavior)” ที่จะแสดง
                        ออกมาเพื่อทําหน้าที่ของตนเองร่วมกับ Object อื่นที่มีหน้าที่แตกต่างกันไป ดังนั้น Behavior ของ Object ก็คือ
                        สิ่งที่ Object นั้นๆ สามารถทําได้ สําหรับการเขียนโปรแกรมตามแนวทางแบบเดิมแล้ว จะถือว่า Behavior คือ
                        Procedure, Function หรือ Subroutine นั่นเอง แต่สําหรับการเขียนโปรแกรมตามแนวทางเชิงวัตถุแล้ว จะเรียก
                        สิ่งที่ทําให้เกิด Behavior ขึ้นได้ ว่า “Method” ซึ่งหมายถึง ลําดับคําสั่งในการทํางานของ Object
                    </p>
                </div>

                <div className='row'>
                    <div className='col-6 border rounded ' style={{ height: "400px" }}>
                        <pre className="overflow-scroll" style={{ height: "100%" }}>
                            <code id="code-example" className="java">
                                {`
public class simpleClass{
  public static void main(String[] args){
      Employee emp = new Employee();
      emp.setEmpId("A1001");
      emp.setEmpName("Piyachai Narongsab");
      emp.setEmpSalary(12000.00);
      System.out.println("Employee Id = " + emp.getEmpId());
      System.out.println("Employee name = " + emp.getEmpName());
      System.out.println("Employee salary = " + emp.getEmpSalary());
  }
}
                `}
                            </code>
                        </pre>
                    </div>
                    <div className='col-6 ' style={{ height: "400px" }} >
                        <pre className="overflow-scroll" style={{ height: "100%" }}>
                            <code id="code-example" className="java">
                                {`
public class Employee {
  // Attribute
  public  String id; //เรียกใช้จากภายนอกได้
  private  String name;
  private  double salary;

  //Method
  public void setEmpId(String id){
      this.id = id;
  }

  public void setEmpName(String name){
      this.name = name;
  }

  public void setEmpSalary(double salary){
      this.salary = salary;
  }

  public String getEmpId(){
      return this.id;
  }

  public String getEmpName(){
      return this.name;
  }

  public double getEmpSalary(){
      return this.salary;
  }
}
                `}
                            </code>
                        </pre>
                    </div>
                    <div className='col-4'>
                        <h4>ผลลัพธ์</h4>
                        <div className='col-auto'>
                            <div className='bg-white border rounded p-3 d-flex justify-content-center align-items-center '>
                                <img src='image\RunJava1.jpg' style={{ width: "400px" }}></img>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    );
}

export default Book;
