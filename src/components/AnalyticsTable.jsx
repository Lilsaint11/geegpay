import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import user1 from './MainImages/user1.png';
import user2 from './MainImages/user2.png';
import user3 from './MainImages/user3.png';
import user4 from './MainImages/user4.png';
import user5 from './MainImages/user5.png';
import documentLogo from './MainImages/document.png';
import { IoCloseCircle } from 'react-icons/io5';
import { HiDownload, HiPrinter } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeContext } from '../../ThemeContext';
const tableData = [
  {
    name: 'Marcus Bergson',
    date: 'Nov 15, 2023',
    status: 'Paid',
    invoice: { buttonText: 'View' },
    image: user1,
    items: [
      { description: 'Gold Watch', qty: 4, unitPrice: 40399.00 },
      { description: 'Neck Chain', qty: 2, unitPrice: 30499.00 },
    ],
  },
  {
    name: 'Jaydon Vaccaro',
    date: 'Nov 15, 2023',
    status: 'Refund',
    invoice: { buttonText: 'View' },
    image: user2,
    items: [
      { description: 'Diamond Ring', qty: 1, unitPrice: 120000.00 },
      { description: 'Bracelet', qty: 3, unitPrice: 35000.00 },
    ],
  },
  {
    name: 'Phillip Lubin',
    date: 'Nov 15, 2023',
    status: 'Paid',
    invoice: { buttonText: 'View' },
    image: user5,
    items: [
      { description: 'Smartphone', qty: 2, unitPrice: 33000.00 },
      { description: 'Laptop', qty: 1, unitPrice: 90000.00 },
    ],
  },
  {
    name: 'Corey Schleifer',
    date: 'Nov 14, 2023',
    status: 'Paid',
    invoice: { buttonText: 'View' },
    image: user3,
    items: [
      { description: 'Headphones', qty: 2, unitPrice: 8000.00 },
      { description: 'Mouse', qty: 1, unitPrice: 2500.00 },
    ],
  },
  {
    name: 'Cooper Press',
    date: 'Nov 14, 2023',
    status: 'Refund',
    invoice: { buttonText: 'View' },
    image: user4,
    items: [
      { description: 'Camera', qty: 1, unitPrice: 50000.00 },
      { description: 'Tripod', qty: 1, unitPrice: 2000.00 },
    ],
  },
  {
    name: 'Phillip Lubin',
    date: 'Nov 13, 2023',
    status: 'Paid',
    invoice: { buttonText: 'View' },
    image: user5,
    items: [
      { description: 'Smartwatch', qty: 1, unitPrice: 15000.00 },
      { description: 'Backpack', qty: 2, unitPrice: 3000.00 },
    ],
  },
];

const TableRow = ({ rowData, onRowClick ,theme}) => (
  <tr
    className={` hover:bg-neutral-100 duration-75 ease-in-out ${theme ==  "dark" ? "hover:bg-neutral-800" : "hover:bg-neutral-100"}`}
  >
    <td className={`flex  border-t py-[16px] items-center gap-[10px] tablename px-[16px] min-w-max max-sm:text-sm ${theme==='dark'?"border-neutral-800":'border-[#EDF2F6]'}`}>
      <img src={rowData.image} alt='' />
      {rowData.name}
    </td>
    <td className={`tabledate  border-t  py-[16px] min-w-max max-sm:text-sm ${theme==='dark'?"border-neutral-800":'border-[#EDF2F6]'}`}>
      {rowData.date}
    </td>
    <td className={`tableamount border-t  py-[16px]  min-w-max max-sm:text-sm ${theme==='dark'?"border-neutral-800":'border-[#EDF2F6]'}`}>
      ${rowData.items.reduce((total, item) => total + item.qty * item.unitPrice, 0).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
    </td>
    <td
      className={`tablestatus border-t ] py-[16px] min-w-max max-sm:text-sm ${theme==='dark'?"border-neutral-800":'border-[#EDF2F6]'}  ${rowData.status === 'Refund' ? 'text-[#ED544E]' : rowData.status === 'Paid' ? 'text-[#34CAA5]' : ''
        }`}
    >
      {rowData.status}
    </td>
    <td className={`tableinvoice border-t  py-[16px]  min-w-max max-sm:text-sm ${theme==='dark'?"border-neutral-800":'border-[#EDF2F6]'}`}>
      <button className='flex items-center gap-[4px]' onClick={() => onRowClick(rowData)}>
        <img src={documentLogo} alt='' className={`${theme==='dark'?"invert":''}`} />
        {rowData.invoice.buttonText}
      </button>
    </td>
  </tr>
);

const AnalyticsTable = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const openModal = (rowData) => {
    setSelectedRowData(rowData);
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('custom-overlay-class')) {
      closeModal();
    }
  };
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`analyticstable h-fit flex gap-[4px] box flex-col border overflow-x-hidden ${theme ==  "dark" ? "bg-neutral-900 text-white border-neutral-800" : "bg-white border-[#EDF2F7]"}  `}>
      <div className='flex items-center justify-between gap-[4px] tabletitle'>
        <h3 className={`${theme ==  "dark" ? "bg-neutral-900 text-white border-neutral-800" : "bg-white border-[#EDF2F7]"}`}>Last Orders</h3>
        <button>See All</button>
      </div>
      <div className={`overflow-x-auto ${theme==='dark'?"scrollbar":"scrollbar-light"}`}>
        <table className='min-w-max w-full text-left maintable'>
          <thead>
            <tr className='tablehead '>
              <th className='py-[20px] max-sm:text-sm px-[16px]'>Name</th>
              <th className='py-[20px] max-sm:text-sm'>Date</th>
              <th className='py-[20px] max-sm:text-sm'>Amount</th>
              <th className='py-[20px] max-sm:text-sm'>Status</th>
              <th className='py-[20px] max-sm:text-sm'>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <TableRow key={index} rowData={rowData} onRowClick={openModal} theme={theme} />
            ))}
          </tbody>
        </table>
      </div>
      <AnimatePresence>
        {modalIsOpen && (
          <motion.div className={'custom-overlay-class '} onClick={handleOverlayClick} initial={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.87)" }} exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <motion.div initial={{ scale: 0.2, y: '100px', opacity: 0.3 }} animate={{ scale: 1, y: "0px", opacity: 1 }} transition={{ duration: "0.2" }} exit={{ scale: 0, y: '100px', opacity: 0 }} className={` w-[500px] p-[20px] border-2 rounded-[20px] max-sm:rounded-none flex flex-col gap-[16px] PlusJakartaSans text-sm ${theme === 'dark'?'bg-neutral-900 text-white border-neutral-800':'text-[#2c2c2c] bg-neutral-200'}`}>
              <button
                onClick={closeModal}
                className='absolute top-4 right-4 text-2xl p-0 text-[#b9b9b9] rounded-full active:border-2 w-7 h-7 flex justify-center items-center border-[#34CAA5]'
              >
                <IoCloseCircle />
              </button>
              <div>
                <p className='text-[#34CAA5] text-2xl font-bold Inter'>Invoice</p>
              </div>
              <div className='flex flex-col gap-[10px]'>
                <div className='flex flex-col gap-[8px]'>
                  <p className='font-semibold '>Customer</p>
                  <p className='text-[#737373] flex items-center gap-1'>
                    <img src={selectedRowData.image} alt='' className='h-6 w-6' />
                    {selectedRowData.name}
                  </p>
                </div>
                <div className='flex flex-col gap-[2px]'>
                  <p className='font-semibold '>Invoice Date</p>
                  <p className='text-[#737373]'>{selectedRowData.date}</p>
                </div>
                <div className='flex flex-col gap-[2px]'>
                  <p className='font-semibold '>Transaction Amount</p>
                  <p className='text-[#737373]'>
                    ${selectedRowData.items.reduce((total, item) => total + item.qty * item.unitPrice, 0).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                  </p>
                </div>
                <div className='flex flex-col gap-[2px]'>
                  <p className='font-semibold '>Payment Status</p>
                  <p className='text-[#737373]'>{selectedRowData.status}</p>
                </div>
                <div className='flex flex-col gap-[2px] mt-6'>
                  <p className='font-semibold'>Order Details</p>
                  <table className={`modaltable text-sm text-left ${theme === 'dark'?'bg-neutral-900 text-white ':'text-[#3b3b3b]'}`}>
                    <tr className='text-[#737373]'>
                      <th>Item Description</th>
                      <th>Qty</th>
                      <th>Unit Price</th>
                      <th>Total</th>
                    </tr>
                    <tbody>
                      {selectedRowData.items.map((item, index) => (
                        <tr key={index} className={` border-t ${theme==='dark'?'border-neutral-800':'border-neutral-300'}`}>
                          <td>{item.description}</td>
                          <td>{item.qty}</td>
                          <td>$ {item.unitPrice.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</td>
                          <td>$ {(item.qty * item.unitPrice).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className='text-right mt-2 text-base  font-semibold'>Total: <span className='font-normal'>$ {selectedRowData.items.reduce((total, item) => total + item.qty * item.unitPrice, 0).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</span></p>
                </div>
                <div className={` flex gap-[10px] justify-end mt-1 ${theme === 'dark'?'bg-neutral-900 text-white ':'text-[#3b3b3b]'}`}>
                  <button className={`px-[16px] py-[10px] border rounded-[10px] duration-150 text-xl ${theme === 'dark'?'bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 border-neutral-700 text-white ':'text-[#3b3b3b] bg-neutral-200 border-neutral-400 active:bg-neutral-400 hover:bg-neutral-300'}`}>
                    <HiDownload />
                  </button>
                  <button className={`px-[16px] py-[10px] border rounded-[10px] duration-150 text-xl ${theme === 'dark'?'bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 border-neutral-700 text-white ':'text-[#3b3b3b] bg-neutral-200 border-neutral-400 active:bg-neutral-400 hover:bg-neutral-300 '}`}>
                    <HiPrinter />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnalyticsTable;
