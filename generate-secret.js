#!/usr/bin/env node

/**
 * Script para generar un NEXTAUTH_SECRET seguro
 * Ejecutar con: node generate-secret.js
 */

const crypto = require("crypto");

function generateSecret() {
  return crypto.randomBytes(32).toString("base64");
}

const secret = generateSecret();

console.log("🔐 NEXTAUTH_SECRET generado:");
console.log("");
console.log(`NEXTAUTH_SECRET=${secret}`);
console.log("");
console.log("📝 Copia esta línea a tu archivo .env");
console.log("⚠️  IMPORTANTE: Cambia este secret en producción");
