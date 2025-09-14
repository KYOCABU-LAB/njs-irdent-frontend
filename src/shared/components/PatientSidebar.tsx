"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import type { Patient } from "../../shared/types/patient";

/* 
  Sidebar del paciente
  - Muestra avatar + datos del paciente
  - Lista de secciones de la historia clínica
  - Resalta la ruta activa con usePathname()
  - En móviles se muestra como “drawer” (botón arriba para abrir/cerrar)
*/

type SidebarProps = {
  patient: Patient;
  // Si necesitas ocultar/mostrar algunos ítems según permisos, pásalos por props
  basePath?: string; // prefijo (por si las rutas cuelgan de /pacientes/[id]/*, etc.)
};

export default function PatientSidebar({ patient, basePath = "/pacientes" }: SidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Si un día cuelga de /pacientes/[id], dejas basePath=`/pacientes/${patient.id}`
  const items = useMemo(
    () => [
      { label: "Datos generales", href: `${basePath}/datos` },
      { label: "Registros clínicos", href: `${basePath}/registros` },
      { label: "Odontograma hallazgos", href: `${basePath}` }, // página principal de pacientes
      { label: "Periodontograma", href: `${basePath}/periodontograma` },
      { label: "Índice de placa", href: `${basePath}/indice-placa` },
      { label: "Índice de sangrado", href: `${basePath}/indice-sangrado` },
      { label: "Índice de retención", href: `${basePath}/indice-retencion` },
    ],
    [basePath]
  );

  const { years, months } = ageYM(patient.birthdate);

  const Nav = (
    <nav className="mt-4 space-y-1 px-2">
      {items.map((it) => {
        const active = pathname === it.href || (it.href !== basePath && pathname?.startsWith(it.href));
        return (
          <Link
            key={it.href}
            href={it.href}
            className={[
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
              active
                ? "bg-sky-600 text-white shadow"
                : "text-slate-200/90 hover:bg-white/10 hover:text-white",
            ].join(" ")}
            onClick={() => setOpen(false)}
          >
            {/* puntito a modo de ícono sin meter librerías */}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
            {it.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Barra móvil con botón para abrir el sidebar */}
      <div className="sticky top-0 z-40 flex items-center gap-2 border-b border-slate-200 bg-white px-3 py-2 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="rounded-md border border-slate-300 px-3 py-1 text-sm"
          aria-label="Abrir menú"
        >
          Menú
        </button>
        <div className="ml-1 text-sm font-medium text-slate-700 truncate">
          {patient.fullName}
        </div>
      </div>

      {/* Drawer móvil */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex md:hidden"
          aria-hidden={!open}
          onClick={() => setOpen(false)}
        >
          <div className="w-72 shrink-0 bg-sky-800 text-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            <Header patient={patient} years={years} months={months} />
            {Nav}
          </div>
          <div className="flex-1 bg-black/40" />
        </div>
      )}

      {/* Sidebar desktop */}
      <aside className="hidden w-72 shrink-0 bg-sky-800 text-white md:flex md:flex-col md:sticky md:top-0 md:h-[100dvh]">
        <Header patient={patient} years={years} months={months} />
        {Nav}
      </aside>
    </>
  );
}

function Header({
  patient,
  years,
  months,
}: {
  patient: Patient;
  years?: number | null;
  months?: number | null;
}) {
  return (
    <div className="border-b border-white/10 px-4 py-5">
      <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-white/90">
        {patient.avatarUrl ? (
          <Image src={patient.avatarUrl} alt="avatar" width={96} height={96} className="object-cover" />
        ) : (
          <div className="grid h-full w-full place-items-center text-3xl text-sky-700">👤</div>
        )}
      </div>
      <div className="text-center">
        <div className="text-sm font-semibold leading-tight">{patient.fullName}</div>
        <div className="mt-1 text-xs text-sky-100/80">
          {years != null && months != null ? (
            <>
              {years} años, {months} meses
            </>
          ) : (
            <>Edad no registrada</>
          )}
        </div>
        {patient.dni && <div className="mt-1 text-xs text-sky-100/80">DNI: {patient.dni}</div>}
      </div>
    </div>
  );
}

/* Util: edad aproximada en años y meses */
function ageYM(birthdate?: string) {
  if (!birthdate) return { years: null, months: null };
  const b = new Date(birthdate);
  if (isNaN(+b)) return { years: null, months: null };
  const now = new Date();
  let y = now.getFullYear() - b.getFullYear();
  let m = now.getMonth() - b.getMonth();
  if (m < 0) {
    y -= 1;
    m += 12;
  }
  return { years: y, months: m };
}
