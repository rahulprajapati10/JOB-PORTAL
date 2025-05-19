import React from "react";
import Navbar from "../components_lite/Navbar";
import img1 from "../Creator/img1.jpg";
import img2 from "../Creator/img2.jpg";
import img3 from "../Creator/img3.jpg";
import img4 from "../Creator/img4.jpg";
import img5 from "../Creator/img5.jpg";
import Footer from "../components_lite/Footer";

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        {/* Use responsive min-height and padding to prevent full screen height on small devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={img1}
              alt="Dr Pankaj Tripathi"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Dr Pankaj Tripathi
            </h2>
            <p className="text-gray-600 mb-2">
              Dr Pankaj Tripathi completed his{" "}
              <strong>B.Tech in Electronics and Communication Engineering (ECE)</strong>{" "}
              from <strong>IIT Delhi</strong>, in <strong>2002</strong>.
            </p>
            <p className="text-gray-600 mb-2">
              After graduation, he joined{" "}
              <strong>Koderma Mines Institution</strong> as a{" "}
              <strong>part-time lecturer</strong>. He then pursued his{" "}
              <strong>M.Tech in Electrical Engineering</strong> from{" "}
              <strong>IIT Roorkie</strong>.
            </p>
            <p className="text-gray-600 mb-2">
              He was later selected as an <strong>Assistant Professor</strong> in
              the <strong>Electronics and Communication Engineering (ECE) Department</strong>{" "}
              at <strong>NIT Delhi</strong>. During his tenure there, he also
              completed his <strong>Ph.D. in Electrical Engineering</strong> from{" "}
              <strong>Gorakhpur University, Uttar Pradesh, in 2016</strong>.
            </p>
            <p className="text-gray-600">
              He was transferred to{" "}
              <strong>Rashtrakavi Ramdhari Singh Dinkar College of Engineering (RRSDCE)</strong>{" "}
              as an <strong>Assistant Professor in the Electrical and Electronics Engineering (EEE) Department</strong>, where he continues to serve till date.
            </p>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 my-12" />

      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Developers and Designers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Developer 1 */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center"
          >
            <img
              src={img3}
              alt="Rahul Prajapati"
              className="mx-auto rounded-lg shadow-md w-48 h-48 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Rahul Prajapati
            </h3>
            <p className="text-gray-600 text-sm">Registration No: 21110125038</p>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </a>
          {/* Developer 2 */}
          <a href="#" className="block text-center">
            <img
              src={img3}
              alt="Ritik Shrivastava"
              className="mx-auto rounded-lg shadow-md w-48 h-48 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Ritik Shrivastava
            </h3>
            <p className="text-gray-600 text-sm">Registration No: 21110125043</p>
            <p className="text-gray-600 text-sm">UI/UX Designer</p>
          </a>
          {/* Developer 3 */}
          <a href="#" className="block text-center">
            <img
              src={img4}
              alt="Gaurav Kumar"
              className="mx-auto rounded-lg shadow-md w-48 h-48 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Gaurav Kumar
            </h3>
            <p className="text-gray-600 text-sm">Registration No: 21110125023</p>
            <p className="text-gray-600 text-sm">Research</p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Creator;
