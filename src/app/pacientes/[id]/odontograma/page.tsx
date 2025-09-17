"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TablaHallazgos from "./components/tabla-hallazgos";
import TablaTratamientos from "./components/tabla-tratamientos";
import DiagramaDental from "./components/diagrama-dental";
import ListaHallazgos from "./components/lista-hallazgos";

export default function OdontogramaPage() {
  const [activeTab, setActiveTab] = useState<
    "Hallazgos" | "Tratamientos" | "Lista"
  >("Hallazgos");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex">
        <div className="flex flex-col flex-1">
          <h1 className="text-2xl font-semibold">Odontograma</h1>
          <p className="text-gray-500">
            Gestión de hallazgos dentales y tratamientos
          </p>
        </div>

        {/* BOTONES */}
        <div className="flex gap-2">
          {["Lista", "Hallazgos", "Tratamientos"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab as "Hallazgos" | "Tratamientos" | "Lista")
              }
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
                ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow"
                    : "border border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                }`}
            >
              {tab === "Lista" ? "Lista de Hallazgos" : tab}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {(activeTab === "Hallazgos" || activeTab === "Tratamientos") && (
          <motion.div
            key="diagrama"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <DiagramaDental />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {activeTab === "Hallazgos" && (
          <motion.div
            key="hallazgos"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <TablaHallazgos />
          </motion.div>
        )}

        {activeTab === "Tratamientos" && (
          <motion.div
            key="tratamientos"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <TablaTratamientos />
          </motion.div>
        )}

        {activeTab === "Lista" && (
          <motion.div
            key="lista"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ListaHallazgos />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
