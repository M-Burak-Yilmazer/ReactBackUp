import React, { useState } from "react";

const UseStateObject = () => {
//   const [adi, setadi] = useState("Ahmet");
//   const [meslek, setmeslek] = useState("Developer");
//   const [yas, setyas] = useState(22);

  const [kisi, setKisi] = useState({
    ad: "Burak",
    meslek: "yazılım",
    yas: 22,
  });
  const {ad,meslek,yas}=kisi
  return (
    <div>
      <h1>personel</h1>
      <h2>Adı:{ad}</h2>
      <h3>mesleği:{meslek}</h3>
      <h4>yaşi:{yas}</h4>
      <button onClick={()=>setKisi({...kisi,ad:"Mehmet"})}>isim güncelle</button>
      <button onClick={()=>setKisi({...kisi,meslek:"tester"})}>meslek değiştir</button>
      <button onClick={()=>setKisi({...kisi,yas:yas+1})}>yas </button>
    </div>
  );
};

export default UseStateObject;
