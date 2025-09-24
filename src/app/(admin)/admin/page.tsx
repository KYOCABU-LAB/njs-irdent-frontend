"use client";

import { Boxes, Stethoscope } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminPage(){
    const options = [
        {
            title: "Doctores",
            icon: <Stethoscope className="h-10 w-10 text-blue-600" />,
            href: "/admin/doctors",
        },
        {
            title: "Inventario",
            icon: <Boxes className="h-10 w-10 text-green-600" />,
            href: "/admin/inventario",
        },
    ];
    return(
        <main className="flex min-h-screen items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full ">
                {options.map((opt,idx)=>(
                    <motion.div
                        key={opt.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="bg-background rounded-2xl border border-border hover:shadow-lg hover:shadow-dental-blue/10 transition-all duration-300 backdrop-blur-sm"
                    >
                    <Link key={idx} href={opt.href}>
                        <div className="cursor-pointer">
                            <div className="flex flex-col items-center justify-center p-10 space-y-4"> 
                                {opt.icon}
                                <span className="text-xl font-semibold">{opt.title}</span>
                            </div>
                        </div>
                    </Link>
                    </motion.div>
                ))}
            </div>
        </main>
    )
}