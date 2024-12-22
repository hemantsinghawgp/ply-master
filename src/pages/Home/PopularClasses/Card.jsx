import React from 'react';
import { motion } from 'framer-motion';
import useAxiosFetch from '../../../hooks/useAxiosFetch';
import { toast } from 'react-toastify';
import { useUser } from '../../../hooks/useUser';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Card = ({ name, image, availableSeats, price, totalEnrolled, id: itmId }) => {
  const axiosFetch = useAxiosFetch();
  const axiosSecure = useAxiosSecure();
  const { currentUser } = useUser();
  const role = currentUser?.role;

  const handleSelect = (id) => {
    if (!currentUser) {
      return toast.error('Please Login First');
    }
    axiosSecure.get(`/cart-item/${id}`).then((res) => {
      if (res.data.classId === id) {
        return toast.error('Already Selected');
      } else {
        const data = {
          classId: id,
          userMail: currentUser.email,
          date: new Date(),
        };

        toast.promise(
          axiosSecure.post('/add-to-cart', data),
          {
            pending: 'Selecting...',
            success: {
              render({ data }) {
                return `Selected Successfully`;
              },
            },
            error: {
              render({ data }) {
                return `Error: ${data.message}`;
              },
            },
          }
        );
      }
    });
  };

  return (
    <motion.div
      className="relative p-4 m-4"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        height: '100%',
        width: '100%',
        borderRadius: '20px',
        boxShadow: `rgba(0, 0, 0, 0.05) 0px 0.796192px 2.38858px -0.625px,
                     rgba(0, 0, 0, 0.05) 0px 2.41451px 7.24352px -1.25px,
                     rgba(0, 0, 0, 0.05) 0px 6.38265px 19.148px -1.875px,
                     rgba(0, 0, 0, 0.05) 0px 20px 60px -2.5px`,
        opacity: 1,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.img
        loading="lazy"
        className="h-48 w-full object-cover rounded-t-lg"
        src={image}
        alt={name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <div className="p-4">
        <motion.h2
          className="text-xl font-semibold mb-2 dark:text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {name}
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Available Seats: {availableSeats}
        </motion.p>
        <motion.p
          className="text-gray-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Price: {price}
        </motion.p>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Total Students: {totalEnrolled}
        </motion.p>
        <div className="text-center mt-2">
          <motion.button
            onClick={() => handleSelect(itmId)}
            className="px-3 w-full py-1 bg-secondary rounded-xl text-white font-bold mt-2"
          >
            Select
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
