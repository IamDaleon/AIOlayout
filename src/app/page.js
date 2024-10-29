'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="container text-center pt-32">
          <h1 className="text-4xl font-extrabold p-6">SERVER LIST</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <Card 
            title="Banhof" 
            modalContent={
              <>
                <p><span className="font-extrabold">IP Address:</span> 95.64.12.34</p>
                <p><span className="font-extrabold">Location:</span> West Region</p>
                <table className="min-w-full mt-4 border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2">URL</th>
                      <th className="border border-gray-300 p-2">IP Address</th>
                      <th className="border border-gray-300 p-2">Backups</th>
                      <th className="border border-gray-300 p-2">Source</th>
                      <th className="border border-gray-300 p-2">Destination</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">OPMS</td>
                      <td className="border border-gray-300 p-2">192.168.0.18</td>
                      <td className="border border-gray-300 p-2">YES</td>
                      <td className="border border-gray-300 p-2">var/www/sites/opms</td>
                      <td className="border border-gray-300 p-2">Remarkable Herbs</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Fast Incense</td>
                      <td className="border border-gray-300 p-2">192.168.0.64</td>
                      <td className="border border-gray-300 p-2">YES</td>
                      <td className="border border-gray-300 p-2">var/www/sites/fast_incense</td>
                      <td className="border border-gray-300 p-2">Row 2, Col 3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Partynuts</td>
                      <td className="border border-gray-300 p-2">192.168.0.128</td>
                      <td className="border border-gray-300 p-2">NO</td>
                      <td className="border border-gray-300 p-2">var/www/sites/partynutz</td>
                      <td className="border border-gray-300 p-2">Row 2, Col 3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Remarkable Herbs</td>
                      <td className="border border-gray-300 p-2">192.168.0.51</td>
                      <td className="border border-gray-300 p-2">YES</td>
                      <td className="border border-gray-300 p-2">var/www/sites/remarkableherbs</td>
                      <td className="border border-gray-300 p-2">Row 2, Col 3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">King Kratom</td>
                      <td className="border border-gray-300 p-2">192.168.0.78</td>
                      <td className="border border-gray-300 p-2">YES</td>
                      <td className="border border-gray-300 p-2">var/www/sites/king_kratom</td>
                      <td className="border border-gray-300 p-2">Row 2, Col 3</td>
                    </tr>
                  </tbody>
                </table>
              </>
            } 
           />
          <Card 
            title="Swedish" 
            modalContent={
              <>
                <p>This is the content for Card 2.</p>
                <p>Here is some different information.</p>
                <p>Feel free to customize this as needed.</p>
                <table className="min-w-full mt-4 border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2">Header 1</th>
                      <th className="border border-gray-300 p-2">Header 2</th>
                      <th className="border border-gray-300 p-2">Header 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">Row 1, Col 1</td>
                      <td className="border border-gray-300 p-2">Row 1, Col 2</td>
                      <td className="border border-gray-300 p-2">Row 1, Col 3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Row 2, Col 1</td>
                      <td className="border border-gray-300 p-2">Row 2, Col 2</td>
                      <td className="border border-gray-300 p-2">Row 2, Col 3</td>
                    </tr>
                  </tbody>
                </table>
              </>
            } 
          />
          <Card 
            title="Denver" 
            modalContent={
              <>
                <p>This is the content for Card 3.</p>
                <p>You can customize this as well.</p>
                <p>Enjoy using the modal!</p>
                <table className="min-w-full mt-4 border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2">Header 1</th>
                      <th className="border border-gray-300 p-2">Header 2</th>
                      <th className="border border-gray-300 p-2">Header 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">Row 1, Col 1</td>
                      <td className="border border-gray-300 p-2">Row 1, Col 2</td>
                      <td className="border border-gray-300 p-2">Row 1, Col 3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Row 2, Col 1</td>
                      <td className="border border-gray-300 p-2">Row 2, Col 2</td>
                      <td className="border border-gray-300 p-2">Row 2, Col 3</td>
                    </tr>
                  </tbody>
                </table>
              </>
            } 
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, modalContent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg shadow-lg p-4 h-48 flex flex-col">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <button
        className="flex-1 text-left bg-gray-600 rounded p-2 hover:bg-gray-400 transition text-center"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      {isOpen && (
        <Modal title={title} content={modalContent} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}

function Modal({ title, content, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-12 w-90 h-auto relative text-black">
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-200 text-4xl bg-red-600 px-3 rounded-md"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="font-bold text-lg mb-4">{title}</h2>
        <div>{content}</div>
      </div>
    </div>
  );
}
