"use client";
import { BoxesIcon, EditIcon, FileUser } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const SideBar = () => {
  return (
    <div className="flex-1 max-w-3xs rounded-2xl m-5 shadow-lg bg-white p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Link href={"/pacientes"}>
          <motion.div
            className="font-bold hover:bg-gray-300 p-2 rounded flex gap-2"
            whileTap={{ scale: 0.9 }}
          >
            <div>Datos generales</div>
            <BoxesIcon className="w-5 h-5" />
          </motion.div>
        </Link>

        <Link href={"/pacientes/registro-clinico"}>
          <motion.div
            className="font-bold hover:bg-gray-300 p-2 rounded flex gap-2"
            whileTap={{ scale: 0.9 }}
          >
            <div>Registro clinico</div>
            <EditIcon className="w-5 h-5" />
          </motion.div>
        </Link>

        <Link href={"/pacientes/odontograma"}>
          <motion.div
            className="font-bold hover:bg-gray-300 p-2 rounded flex gap-2"
            whileTap={{ scale: 0.9 }}
          >
            <div>Odontograma</div>
            <FileUser className="w-5 h-5" />
          </motion.div>
        </Link>

        <Link href={"/pacientes/periodontograma"}>
          <motion.div
            className="font-bold hover:bg-gray-300 p-2 rounded flex gap-2"
            whileTap={{ scale: 0.9 }}
          >
            <div>Periodontograma</div>
            <FileUser className="w-5 h-5" />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
