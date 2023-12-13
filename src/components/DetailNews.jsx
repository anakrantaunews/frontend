import React from "react";
import DetailNewsPhoto from "../assets/detailnews.png";

export default function DetailNews() {
  return (
    <section className="container-center">
      <div className="md:py-[3.75rem] py-8 px-8">
        <img
          className="h-44 md:h-[16rem] lg:h-[28rem] w-full object-cover rounded-xl"
          src={DetailNewsPhoto}
          alt=""
        />

        <div className="flex flex-col gap-8 mt-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-black-1">Dibaca 10x</p>

            <div className="inline-block px-8 py-2 font-extrabold rounded-lg text-center text-xs bg-menu text-black-2">
              20 Dec
            </div>
          </div>

          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black-1">
            Merevolusi penyimpanan energi: Terobosan dalam baterai berbasis
            grafena diungkap
          </h1>

          <div className="max-w-2xl mx-auto md:pt-[3.75rem]">
            <p className="text-gray-1 text-base">
              Sebuah terobosan baru dalam dunia teknologi telah menggetarkan
              industri penyimpanan energi. Sebuah tim peneliti di laboratorium
              teknologi terkemuka di Silicon Valley mengumumkan penemuan terbaru
              mereka yang bisa mengubah wajah industri baterai. <br /> <br />
              Penelitian yang dipimpin oleh Dr. Amanda Rodriguez di Laboratorium
              Inovasi Teknologi, melibatkan penggunaan material revolusioner
              yang dikenal sebagai graphene. Dalam uji coba terbaru mereka, tim
              ini berhasil mengembangkan baterai berbasis graphene yang memiliki
              kapasitas penyimpanan energi dua kali lipat dari baterai
              lithium-ion saat ini. <br /> <br />
              Mengapa ini menjadi terobosan yang sangat penting? <br /> <br />
              Graphene, sebuah material superkonduktor yang hanya beberapa atom
              tebalnya, memiliki sifat-sifat unik yang memungkinkannya untuk
              menggantikan material dalam baterai konvensional. Ketebalannya
              yang hampir nol dan konduktivitas yang tinggi memungkinkan baterai
              untuk menyimpan energi lebih banyak dalam ruang yang lebih kecil.{" "}
              <br /> <br />
              “Ini adalah langkah besar dalam mengatasi tantangan penyimpanan
              energi untuk industri teknologi saat ini. Dengan penggunaan
              baterai berbasis graphene, kita bisa melihat masa depan yang lebih
              efisien, ringan, dan ramah lingkungan," ujar Dr. Rodriguez. <br />{" "}
              <br />
              Sejumlah besar aplikasi potensial telah diantisipasi dengan
              penemuan ini, mulai dari kendaraan listrik hingga penyimpanan
              energi rumah tangga. Sementara masih ada tantangan dalam
              pengembangan massal, para peneliti yakin bahwa dengan kerja keras
              dan penelitian lanjutan, baterai berbasis graphene akan menjadi
              pemandu revolusi dalam industri energi. <br /> <br />
              Penemuan ini menjanjikan peningkatan signifikan dalam kinerja
              baterai dan bisa menjadi landasan bagi teknologi yang lebih
              canggih di masa depan. Dengan adanya kerja keras dan kolaborasi
              yang terus menerus, kita semakin dekat untuk meraih era di mana
              energi tersimpan dalam bentuk yang lebih efisien, handal, dan
              ramah lingkungan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
