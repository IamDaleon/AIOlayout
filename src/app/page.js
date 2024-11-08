'use client';
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for cards with region and URL
  const cardsData = [
    {
      title: "A2 Hosting",
      region: "Northern Europe",
      modalContent: (
        <>
          <p><span className="font-extrabold">IP Address:</span> 94.254.0.215</p>
          <p><span className="font-extrabold">Region:</span> Northern Europe</p>
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
                <td className="border border-gray-300 p-2">A1 Wholesale</td>
                <td className="border border-gray-300 p-2">94.254.0.215</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/cornerstonedistro</td>
                <td className="border border-gray-300 p-2">ZimaBoard</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: "Banhof",
      region: "Northern Europe",
      modalContent: (
        <>
          <p><span className="font-extrabold">IP Address:</span> 94.254.0.215</p>
          <p><span className="font-extrabold">Region:</span> Northern Europe</p>
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
                <td className="border border-gray-300 p-2">CornerStone Distro</td>
                <td className="border border-gray-300 p-2">94.254.0.215</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/cornerstonedistro</td>
                <td className="border border-gray-300 p-2">ZimaBoard</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Flowtech One</td>
                <td className="border border-gray-300 p-2">94.254.0.215</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/flowtechone</td>
                <td className="border border-gray-300 p-2">ZimaBoard</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Kratom Kaps</td>
                <td className="border border-gray-300 p-2">94.254.0.215</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/kratomkaps</td>
                <td className="border border-gray-300 p-2">ZimaBoard</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Liquid K</td>
                <td className="border border-gray-300 p-2">94.254.0.215</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/liquidk</td>
                <td className="border border-gray-300 p-2">ZimaBoard</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Mediakanna</td>
                <td className="border border-gray-300 p-2">94.254.0.215</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/mediakanna</td>
                <td className="border border-gray-300 p-2">ZimaBoard</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">XXX Kratom</td>
                <td className="border border-gray-300 p-2">94.254.0.215</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/xxxkratom</td>
                <td className="border border-gray-300 p-2">ZimaBoard</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: "Cloudflare",
      region: "Northern Region",
      modalContent: (
        <>
          <p>This is the content for the Swedish server.</p>
          <p>Location: Northern Region</p>
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
                <td className="border border-gray-300 p-2">Green Leaf</td>
                <td className="border border-gray-300 p-2">92.68.54.20</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/pnuts</td>
                <td className="border border-gray-300 p-2">ZimaBoard</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Hemps Company</td>
                <td className="border border-gray-300 p-2">92.68.54.20</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/pnuts</td>
                <td className="border border-gray-300 p-2">ZimaBoard</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Hush Kratom</td>
                <td className="border border-gray-300 p-2">92.68.54.20</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/pnuts</td>
                <td className="border border-gray-300 p-2">ZimaBoard</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Konolabs</td>
                <td className="border border-gray-300 p-2">92.68.54.20</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/pnuts</td>
                <td className="border border-gray-300 p-2">ZimaBoard</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Partynuts</td>
                <td className="border border-gray-300 p-2">92.68.54.20</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/pnuts</td>
                <td className="border border-gray-300 p-2">ZimaBoard</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: "Google LLC",
      region: "Central Region",
      modalContent: (
        <>
          <p>This is the content for the Denver server.</p>
          <p>Location: Central Region</p>
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
                <td className="border border-gray-300 p-2">Flowtech</td>
                <td className="border border-gray-300 p-2">192.168.0.30</td>
                <td className="border border-gray-300 p-2">NO</td>
                <td className="border border-gray-300 p-2">var/www/sites/denver</td>
                <td className="border border-gray-300 p-2">Destination B</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Gogona</td>
                <td className="border border-gray-300 p-2">192.168.0.30</td>
                <td className="border border-gray-300 p-2">NO</td>
                <td className="border border-gray-300 p-2">var/www/sites/denver</td>
                <td className="border border-gray-300 p-2">Destination B</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: "Host Gator",
      region: "Central Region",
      modalContent: (
        <>
          <p>This is the content for the Denver server.</p>
          <p>Location: Central Region</p>
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
                <td className="border border-gray-300 p-2">Server 2</td>
                <td className="border border-gray-300 p-2">192.168.0.30</td>
                <td className="border border-gray-300 p-2">NO</td>
                <td className="border border-gray-300 p-2">var/www/sites/denver</td>
                <td className="border border-gray-300 p-2">Destination B</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: "Hostinger",
      region: "Central Region",
      modalContent: (
        <>
          <p>This is the content for the Denver server.</p>
          <p>Location: Central Region</p>
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
                <td className="border border-gray-300 p-2">192.168.0.30</td>
                <td className="border border-gray-300 p-2">NO</td>
                <td className="border border-gray-300 p-2">var/www/sites/denver</td>
                <td className="border border-gray-300 p-2">Destination B</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: "iPage",
      region: "Central Region",
      modalContent: (
        <>
          <p>This is the content for the Denver server.</p>
          <p>Location: Central Region</p>
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
                <td className="border border-gray-300 p-2">A1 Wholesale Distribution</td>
                <td className="border border-gray-300 p-2">192.168.0.30</td>
                <td className="border border-gray-300 p-2">NO</td>
                <td className="border border-gray-300 p-2">var/www/sites/denver</td>
                <td className="border border-gray-300 p-2">Destination B</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: "Miss Hosting",
      region: "Central Region",
      modalContent: (
        <>
          <p>This is the content for the Denver server.</p>
          <p>Location: Central Region</p>
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
                <td className="border border-gray-300 p-2">Chief Kratom</td>
                <td className="border border-gray-300 p-2">192.168.0.30</td>
                <td className="border border-gray-300 p-2">NO</td>
                <td className="border border-gray-300 p-2">var/www/sites/denver</td>
                <td className="border border-gray-300 p-2">Destination B</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Remarkable Herbs</td>
                <td className="border border-gray-300 p-2">192.168.0.30</td>
                <td className="border border-gray-300 p-2">NO</td>
                <td className="border border-gray-300 p-2">var/www/sites/denver</td>
                <td className="border border-gray-300 p-2">Destination B</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: "Network Solutions",
      region: "Central Region",
      modalContent: (
        <>
          <p>This is the content for the Denver server.</p>
          <p>Location: Central Region</p>
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
                <td className="border border-gray-300 p-2">Functional GlassArt</td>
                <td className="border border-gray-300 p-2">192.168.0.30</td>
                <td className="border border-gray-300 p-2">NO</td>
                <td className="border border-gray-300 p-2">var/www/sites/denver</td>
                <td className="border border-gray-300 p-2">Destination B</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: "Nexcess",
      region: "Central Region",
      modalContent: (
        <>
          <p>IP Address:192.168.0.1</p>
          <p>Location: Central Region</p>
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
                <td className="border border-gray-300 p-2">Server 2</td>
                <td className="border border-gray-300 p-2">192.168.0.30</td>
                <td className="border border-gray-300 p-2">NO</td>
                <td className="border border-gray-300 p-2">var/www/sites/denver</td>
                <td className="border border-gray-300 p-2">Destination B</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: "Site Ground",
      region: "Central Region",
      modalContent: (
        <>
          <p>IP Address:192.168.42.59</p>
          <p>Location: Central Region</p>
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
                <td className="border border-gray-300 p-2">Boss Botanicals</td>
                <td className="border border-gray-300 p-2">192.168.0.30</td>
                <td className="border border-gray-300 p-2">NO</td>
                <td className="border border-gray-300 p-2">var/www/sites/denver</td>
                <td className="border border-gray-300 p-2">Destination B</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Island Kava</td>
                <td className="border border-gray-300 p-2">192.168.0.30</td>
                <td className="border border-gray-300 p-2">NO</td>
                <td className="border border-gray-300 p-2">var/www/sites/denver</td>
                <td className="border border-gray-300 p-2">Destination B</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: "Spectrum",
      region: "Southern Region",
      modalContent: (
        <>
          <p>IP Address: 192.168.23.45</p>
          <p>Location: Southern Region</p>
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
                <td className="border border-gray-300 p-2">Nic-Pac</td>
                <td className="border border-gray-300 p-2">192.168.0.40</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/dallas</td>
                <td className="border border-gray-300 p-2">Destination C</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">PuffnStuff</td>
                <td className="border border-gray-300 p-2">192.168.0.40</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/dallas</td>
                <td className="border border-gray-300 p-2">Destination C</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      title: "WebsiteWelcome",
      region: "Southern Region",
      modalContent: (
        <>
          <p>This is the content for the Dallas server.</p>
          <p>Location: Southern Region</p>
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
                <td className="border border-gray-300 p-2">Colorado CBD</td>
                <td className="border border-gray-300 p-2">192.168.0.40</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/dallas</td>
                <td className="border border-gray-300 p-2">Destination C</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Homegrown Hemp</td>
                <td className="border border-gray-300 p-2">192.168.0.40</td>
                <td className="border border-gray-300 p-2">YES</td>
                <td className="border border-gray-300 p-2">var/www/sites/dallas</td>
                <td className="border border-gray-300 p-2">Destination C</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    // Add other card data here...
  ];

   // Filter cards based on search term (title, region, URL, or modal content URLs)
   const filteredCards = cardsData.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.modalContent.props.children.some(child => 
      typeof child === 'string' && child.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <div className="grid items-center justify-items-center pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="container text-center">
          <h1 className="text-4xl font-extrabold p-6">SERVER LIST</h1>
          {/* Search Field */}
          <input
            type="text"
            placeholder="Search servers..."
            className="border rounded-3xl p-2 w-72 h-14 mb-10 text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8">
            {filteredCards.map((card, index) => (
              <Card key={index} title={card.title} modalContent={card.modalContent} />
            ))}
          </div>
          {/* Other card sections can follow here... */}
        </div>
      </div>
    </>
  );
}

function Card({ title, modalContent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg shadow-lg p-6 h-42 m-4 flex flex-col">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <div className="flex justify-center">
        <button
          className="bg-blue-600 rounded p-2 hover:bg-blue-800 transition text-center w-32"
          onClick={() => setIsOpen(true)}
        >
          View More
        </button>
      </div>
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
